import { onBeforeUnmount } from 'vue'
export function useBodyScrollLock() {
  let locked = false, previousBodyStyle = '', previousBehavior = '', position = 0
  function lock() {
    if (locked) return
    position = window.scrollY
    previousBodyStyle = document.body.style.cssText
    previousBehavior = document.documentElement.style.scrollBehavior
    locked = true
    Object.assign(document.body.style,{position:'fixed',top:`-${position}px`,width:'100%',overflow:'hidden'})
  }
  function unlock() {
    if (!locked) return
    document.body.style.cssText = previousBodyStyle
    document.documentElement.style.scrollBehavior = 'auto'
    window.scrollTo(0,position)
    document.documentElement.style.scrollBehavior = previousBehavior
    locked = false
  }
  onBeforeUnmount(unlock)
  return { lock, unlock, isLocked: () => locked }
}

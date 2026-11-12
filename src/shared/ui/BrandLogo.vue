<script setup lang="ts">
const markUrl = `${import.meta.env.BASE_URL}favicon.svg`
</script>

<template>
  <span class="brand-lockup">
    <img class="brand-monogram" :src="markUrl" width="48" height="48" alt="" />
    <span class="brand-wordmark">
      <strong>Alma <span>de</span> Barista</strong>
      <small>Almasur Providencia <span aria-hidden="true">/</span> Surista</small>
    </span>
  </span>
</template>

<style scoped>
.brand-lockup { display:flex; align-items:center; gap:13px; color:var(--color-forest) }
.brand-monogram { flex:none; width:48px; height:48px }
.brand-wordmark strong { display:block; font:600 21px/1.2 var(--font-ui); letter-spacing:-.055em }
.brand-wordmark strong span { font-weight:400 }
.brand-wordmark small { display:block; margin-top:7px; font-size:8px; font-weight:600; line-height:1.4; letter-spacing:.17em; text-transform:uppercase }
.brand-wordmark small span { padding:0 4px; color:var(--color-caramel) }
@media(max-width:767px),(pointer:coarse) and (max-width:1023px) {
  .brand-lockup { gap:10px }
  .brand-monogram { width:40px; height:40px }
  .brand-wordmark strong { font-size:20px }
  .brand-wordmark small { font-size:7px; margin-top:5px; letter-spacing:.13em }
}
</style>

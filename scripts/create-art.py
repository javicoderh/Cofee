from pathlib import Path
root=Path(__file__).resolve().parents[1]
art=root/'src/assets/art'
art.mkdir(parents=True,exist_ok=True)
head='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 200" fill="none"><g stroke="#2C211D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">'
steam='<path d="M96 46c-12-13 12-17 0-30m25 25c-10-10 10-15 2-26" stroke="#9A582F" stroke-width="2"/>'
cup='<ellipse cx="117" cy="163" rx="83" ry="12" fill="#D7C9B9"/><path d="M173 82h12c31 0 28 42-4 43h-13" fill="#F6F0E6"/><path d="M57 78h116l-8 51c-4 30-90 30-97 0Z" fill="#F6F0E6"/><path d="M68 117c24 13 63 15 99 0l-2 12c-4 30-90 30-97 0Z" fill="#D1A06A" stroke="none"/><ellipse cx="115" cy="78" rx="58" ry="16" fill="#9A582F"/><ellipse cx="115" cy="78" rx="46" ry="10" fill="#57392A" stroke="none"/>'
latte_art='<path d="M116 89c-7-9-30-16-27-27 3-10 21-5 27 3 6-8 24-13 27-3 3 11-20 18-27 27Z" fill="#FFFBF5" stroke="none"/><path d="m116 91 0-35" stroke="#FFFBF5" stroke-width="2"/>'
glass='<path d="M72 55h99l-12 111c-1 13-75 13-77 0Z" fill="#DCE5DD"/><path d="m79 85 8 76c14 8 52 8 66 0l8-76Z" fill="#D1A06A" stroke="none"/><path d="m82 120 5 41c14 8 52 8 66 0l4-41Z" fill="#F6F0E6" stroke="none"/><ellipse cx="121" cy="57" rx="49" ry="11" fill="#9A582F"/><path d="m92 79 7 70" stroke="#FFFBF5" stroke-width="5" opacity=".75"/>'
bodies={
'espresso-cup':steam+cup,
'cappuccino-cup':steam+cup+'<ellipse cx="115" cy="78" rx="49" ry="12" fill="#D1A06A" stroke="none"/>'+latte_art,
'short-glass':glass,
'latte-glass':glass+'<path d="M173 79h8c22 0 19 53-13 53"/><ellipse cx="121" cy="57" rx="44" ry="8" fill="#FFFBF5" stroke="none"/>'+steam,
'iced-glass':glass+'<path d="m144 20-19 121" stroke="#24483D" stroke-width="7"/><path d="m93 72 20-7 10 20-21 8Zm32 28 22-4 4 22-22 4Z" fill="#FFFBF5" fill-opacity=".7" stroke="#FFFBF5" stroke-width="2"/><path d="m158 34 8 8m3-11-8 13" stroke="#9A582F" stroke-width="2"/>',
'affogato-cup':'<path d="M117 133v35m-28 8h56"/><path d="M60 78h114c-6 74-104 74-114 0Z" fill="#D1A06A"/><ellipse cx="117" cy="79" rx="57" ry="12" fill="#57392A"/><path d="M83 77c-8-42 66-51 69 0" fill="#F6F0E6"/><path d="M101 58c10-6 20-7 31 0" stroke="#D1A06A"/><path d="m163 38-28 51" stroke="#6B5A50" stroke-width="6"/>',
'filter-method':'<path d="m83 95-20 64c-4 15 101 15 97 0l-19-64Z" fill="#DCE5DD"/><path d="m77 122-9 33c12 10 70 10 87 0l-10-33" fill="#9A582F" stroke="none"/><path d="M58 39h114l-31 56H87Z" fill="#F6F0E6"/><path d="m75 44 20 42m12-42 5 42m26-42-9 42m28-42-20 42" stroke="#D7C9B9" stroke-width="2"/><path d="M174 46c32-10 36 34-15 33M80 96h67"/>'+steam,
'milk-pitcher':'<path d="M69 64 53 48l34 8h64l11 101c0 23-89 23-92 0Z" fill="#DCE5DD"/><path d="M153 70h27c26 1 21 68-20 65"/><path d="m84 79 2 67" stroke="#FFFBF5" stroke-width="6"/><ellipse cx="115" cy="58" rx="31" ry="8" fill="#FFFBF5"/>'+steam
}
for key,body in bodies.items():
    (art/f'{key}.svg').write_text(head+body+'</g></svg>',encoding='utf-8')
botanical='''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 900" fill="none" stroke="#24483D" stroke-width="2"><path d="M1020 620c60-240 100-300 260-420M1128 350c-170-110-140-177-140-177 153 7 153 130 140 177Zm34-44c164-16 190-93 190-93-150-30-185 50-190 93ZM1050 510c-132-95-168-37-168-37 50 109 135 84 168 37Zm30-81c122 35 170-30 170-30-106-83-150-9-170 30Z"/><ellipse cx="1128" cy="369" rx="18" ry="22"/><ellipse cx="1166" cy="378" rx="18" ry="22"/><path d="M200 250c-8-70 45-81 54-44-29-57 28-80 40-38 11-51 60-29 39 8 46-15 58 37 16 47 45 27 13 69-23 43-5 48-57 44-53 1-32 35-69 7-43-22Z"/><circle cx="282" cy="223" r="16"/><ellipse cx="150" cy="640" rx="25" ry="40" transform="rotate(32 150 640)"/><path d="M158 608c-27 26 7 45-25 64M0 850l150-80 90 36 150-130 140 105 80-36 180 115 100-50 170 42 150-120 90 55"/></svg>'''
(art/'botanical.svg').write_text(botanical,encoding='utf-8')
(root/'public').mkdir(exist_ok=True)
(root/'public/favicon.svg').write_text('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="18" fill="#24483D"/><path d="M16 24h28v14c0 15-28 15-28 0Zm28 2c17-3 17 17 0 14M24 10v6m12-6v6" fill="none" stroke="#F6F0E6" stroke-width="3" stroke-linecap="round"/></svg>',encoding='utf-8')
print('8 ilustraciones, fondo y favicon creados')

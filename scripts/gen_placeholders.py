import os

images = {
  "couple-hero.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
  <defs>
    <linearGradient id="bgG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FAF8F3" />
      <stop offset="50%" stop-color="#E7EDF2" />
      <stop offset="100%" stop-color="#D8E7EE" />
    </linearGradient>
    <linearGradient id="goldG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E5D5B3" />
      <stop offset="50%" stop-color="#D8C49A" />
      <stop offset="100%" stop-color="#B89F6B" />
    </linearGradient>
    <radialGradient id="halo" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#C6DCEC" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="1000" fill="url(#bgG)" />
  <circle cx="400" cy="400" r="300" fill="url(#halo)" />
  
  <!-- Outer Arch Border -->
  <path d="M 120 950 L 120 400 A 280 280 0 0 1 680 400 L 680 950" fill="none" stroke="url(#goldG)" stroke-width="3" />
  <path d="M 140 950 L 140 400 A 260 260 0 0 1 660 400 L 660 950" fill="none" stroke="url(#goldG)" stroke-width="1" stroke-dasharray="4 4" />
  
  <!-- Subtle Cross at Arch Apex -->
  <path d="M 400 90 L 400 135 M 385 105 L 415 105" stroke="url(#goldG)" stroke-width="2.5" stroke-linecap="round" />
  
  <!-- Silhouette / Artistic Couple Representation -->
  <g opacity="0.85" transform="translate(400, 480)">
    <!-- Groom silhouette -->
    <path d="M -110 320 L -100 100 C -100 80 -80 60 -50 55 C -30 52 -20 50 -10 50 C -15 35 -15 15 -5 -5 C 5 -20 25 -25 35 -10 C 45 5 45 30 35 45 C 50 55 60 75 60 100 L 70 320 Z" fill="#4A5868" opacity="0.25"/>
    <!-- Bride silhouette with veil -->
    <path d="M -50 320 C -40 180 -10 130 10 90 C 20 70 35 60 50 70 C 65 80 85 120 100 180 C 120 240 130 320 140 320 Z" fill="#C6DCEC" opacity="0.6"/>
    <!-- Flowing veil line -->
    <path d="M 35 60 C 80 100 150 200 160 320" fill="none" stroke="url(#goldG)" stroke-width="1.5" stroke-dasharray="3 3"/>
  </g>
  
  <!-- Floral Bottom Corners -->
  <g fill="#B8D3E5" opacity="0.7">
    <circle cx="200" cy="850" r="40" />
    <circle cx="240" cy="880" r="30" />
    <circle cx="170" cy="890" r="25" />
    <circle cx="600" cy="850" r="40" />
    <circle cx="560" cy="880" r="30" />
    <circle cx="630" cy="890" r="25" />
  </g>
  <g fill="#FAF8F3" opacity="0.9">
    <circle cx="200" cy="850" r="28" />
    <circle cx="600" cy="850" r="28" />
  </g>

  <!-- Elegant Placeholder Banner / Frame -->
  <rect x="180" y="700" width="440" height="74" rx="37" fill="#FFFFFF" stroke="url(#goldG)" stroke-width="1.5" />
  <text x="400" y="732" font-family="'Cinzel', 'Cormorant Garamond', serif" font-size="16" font-weight="600" fill="#24303E" text-anchor="middle" letter-spacing="2">TEMPORARY HERO PLACEHOLDER</text>
  <text x="400" y="756" font-family="'Inter', sans-serif" font-size="12" fill="#758A99" text-anchor="middle">Official Couple Photograph To Be Inserted</text>

  <!-- Typography at Top -->
  <text x="400" y="210" font-family="'Cinzel', serif" font-size="28" fill="#24303E" text-anchor="middle" letter-spacing="4">JITHU &amp; RINNU</text>
  <text x="400" y="245" font-family="'Inter', sans-serif" font-size="13" font-weight="500" fill="#758A99" text-anchor="middle" letter-spacing="3">GRAND WEDDING RECEPTION</text>
</svg>''',

  "venue.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="vBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FAF8F3" />
      <stop offset="100%" stop-color="#D8E7EE" />
    </linearGradient>
    <linearGradient id="vGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E5D5B3" />
      <stop offset="100%" stop-color="#D8C49A" />
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#vBg)" />
  <rect x="20" y="20" width="760" height="460" rx="8" fill="none" stroke="url(#vGold)" stroke-width="1.5" stroke-dasharray="4 4" />
  
  <!-- Church / Elegant Manor Architectural Line Art -->
  <g stroke="#758A99" stroke-width="1.5" fill="none" stroke-linejoin="round" opacity="0.65" transform="translate(400, 220)">
    <path d="M -160 120 L -160 0 L 0 -110 L 160 0 L 160 120 Z" />
    <path d="M -30 -110 L -30 -170 L 0 -210 L 30 -170 L 30 -110" />
    <path d="M 0 -210 L 0 -235 M -10 -225 L 10 -225" stroke="url(#vGold)" stroke-width="2" stroke-linecap="round" />
    <path d="M -40 120 L -40 40 A 40 40 0 0 1 40 40 L 40 120 Z" fill="#E7EDF2" />
    <path d="M -25 -20 L -25 -65 A 25 25 0 0 1 25 -65 L 25 -20 Z" stroke="url(#vGold)" />
    <line x1="0" y1="-90" x2="0" y2="-20" stroke="url(#vGold)" />
    <line x1="-25" y1="-55" x2="25" y2="-55" stroke="url(#vGold)" />
    <path d="M -240 120 L -240 30 L -160 0" />
    <path d="M 240 120 L 240 30 L 160 0" />
    <path d="M -220 120 L -220 60 A 15 15 0 0 1 -190 60 L -190 120" />
    <path d="M 190 120 L 190 60 A 15 15 0 0 1 220 60 L 220 120" />
  </g>

  <!-- Placeholder Badge -->
  <rect x="220" y="380" width="360" height="58" rx="29" fill="#FFFFFF" stroke="url(#vGold)" stroke-width="1.5" />
  <text x="400" y="405" font-family="'Cinzel', serif" font-size="14" font-weight="600" fill="#24303E" text-anchor="middle" letter-spacing="1.5">VENUE PHOTOGRAPH PLACEHOLDER</text>
  <text x="400" y="424" font-family="'Inter', sans-serif" font-size="11" fill="#758A99" text-anchor="middle">Confirmed Venue Image To Be Added (Kottayam, Kerala)</text>
</svg>''',

  "gallery-01.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700" width="600" height="700">
  <defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FAF8F3"/><stop offset="100%" stop-color="#C6DCEC"/></linearGradient></defs>
  <rect width="600" height="700" fill="url(#g1)"/>
  <rect x="25" y="25" width="550" height="650" fill="none" stroke="#D8C49A" stroke-width="1.5"/>
  <circle cx="300" cy="300" r="140" fill="#FFFFFF" opacity="0.6"/>
  <circle cx="275" cy="295" r="50" fill="none" stroke="#D8C49A" stroke-width="4"/>
  <circle cx="325" cy="295" r="50" fill="none" stroke="#B89F6B" stroke-width="4"/>
  <polygon points="325,238 332,248 318,248" fill="#D8C49A"/>
  <text x="300" y="490" font-family="'Cinzel', serif" font-size="18" fill="#24303E" text-anchor="middle" letter-spacing="2">MOMENTS OF PROMISE</text>
  <text x="300" y="520" font-family="'Inter', sans-serif" font-size="12" fill="#758A99" text-anchor="middle">Gallery Placeholder 01</text>
</svg>''',

  "gallery-02.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700" width="600" height="700">
  <defs><linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#E7EDF2"/><stop offset="100%" stop-color="#D8E7EE"/></linearGradient></defs>
  <rect width="600" height="700" fill="url(#g2)"/>
  <rect x="25" y="25" width="550" height="650" fill="none" stroke="#D8C49A" stroke-width="1.5"/>
  <circle cx="300" cy="300" r="110" fill="none" stroke="#D8C49A" stroke-width="1" stroke-dasharray="6 4"/>
  <g fill="#B8D3E5" opacity="0.8">
    <circle cx="300" cy="190" r="24"/><circle cx="410" cy="300" r="24"/><circle cx="300" cy="410" r="24"/><circle cx="190" cy="300" r="24"/>
    <circle cx="230" cy="230" r="18"/><circle cx="370" cy="230" r="18"/><circle cx="370" cy="370" r="18"/><circle cx="230" cy="370" r="18"/>
  </g>
  <text x="300" y="305" font-family="'Cormorant Garamond', serif" font-size="28" font-style="italic" fill="#24303E" text-anchor="middle">Joy &amp; Grace</text>
  <text x="300" y="490" font-family="'Cinzel', serif" font-size="18" fill="#24303E" text-anchor="middle" letter-spacing="2">ENGAGEMENT PORTRAIT</text>
  <text x="300" y="520" font-family="'Inter', sans-serif" font-size="12" fill="#758A99" text-anchor="middle">Gallery Placeholder 02</text>
</svg>''',

  "gallery-03.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700" width="600" height="700">
  <defs><linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FAF8F3"/><stop offset="100%" stop-color="#B8D3E5"/></linearGradient></defs>
  <rect width="600" height="700" fill="url(#g3)"/>
  <rect x="25" y="25" width="550" height="650" fill="none" stroke="#D8C49A" stroke-width="1.5"/>
  <path d="M 230 400 L 230 250 A 70 70 0 0 1 370 250 L 370 400 Z" fill="#FFFFFF" opacity="0.7" stroke="#D8C49A" stroke-width="2"/>
  <path d="M 300 170 L 300 210 M 285 185 L 315 185" stroke="#D8C49A" stroke-width="2" stroke-linecap="round"/>
  <text x="300" y="490" font-family="'Cinzel', serif" font-size="18" fill="#24303E" text-anchor="middle" letter-spacing="2">FAITH &amp; DEVOTION</text>
  <text x="300" y="520" font-family="'Inter', sans-serif" font-size="12" fill="#758A99" text-anchor="middle">Gallery Placeholder 03</text>
</svg>''',

  "gallery-04.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700" width="600" height="700">
  <defs><linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#D8E7EE"/><stop offset="100%" stop-color="#FAF8F3"/></linearGradient></defs>
  <rect width="600" height="700" fill="url(#g4)"/>
  <rect x="25" y="25" width="550" height="650" fill="none" stroke="#D8C49A" stroke-width="1.5"/>
  <path d="M 270 240 L 285 320 L 285 360 L 265 360 L 305 360 L 285 360" fill="none" stroke="#D8C49A" stroke-width="2.5"/>
  <path d="M 330 240 L 315 320 L 315 360 L 295 360 L 335 360 L 315 360" fill="none" stroke="#D8C49A" stroke-width="2.5"/>
  <circle cx="300" cy="220" r="5" fill="#D8C49A" opacity="0.6"/>
  <circle cx="290" cy="205" r="3" fill="#D8C49A" opacity="0.5"/>
  <circle cx="310" cy="195" r="4" fill="#D8C49A" opacity="0.7"/>
  <text x="300" y="490" font-family="'Cinzel', serif" font-size="18" fill="#24303E" text-anchor="middle" letter-spacing="2">A TOAST TO FOREVER</text>
  <text x="300" y="520" font-family="'Inter', sans-serif" font-size="12" fill="#758A99" text-anchor="middle">Gallery Placeholder 04</text>
</svg>''',

  "gallery-05.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700" width="600" height="700">
  <defs><linearGradient id="g5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FAF8F3"/><stop offset="100%" stop-color="#E7EDF2"/></linearGradient></defs>
  <rect width="600" height="700" fill="url(#g5)"/>
  <rect x="25" y="25" width="550" height="650" fill="none" stroke="#D8C49A" stroke-width="1.5"/>
  <path d="M 260 300 C 270 270 310 260 340 280 C 320 280 300 295 300 315 C 320 310 350 315 360 330 C 330 330 300 325 285 340 C 285 325 275 315 260 300 Z" fill="#FFFFFF" stroke="#D8C49A" stroke-width="1.5"/>
  <text x="300" y="490" font-family="'Cinzel', serif" font-size="18" fill="#24303E" text-anchor="middle" letter-spacing="2">PEACE &amp; BLESSINGS</text>
  <text x="300" y="520" font-family="'Inter', sans-serif" font-size="12" fill="#758A99" text-anchor="middle">Gallery Placeholder 05</text>
</svg>''',

  "gallery-06.svg": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700" width="600" height="700">
  <defs><linearGradient id="g6" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#C6DCEC"/><stop offset="100%" stop-color="#FAF8F3"/></linearGradient></defs>
  <rect width="600" height="700" fill="url(#g6)"/>
  <rect x="25" y="25" width="550" height="650" fill="none" stroke="#D8C49A" stroke-width="1.5"/>
  <path d="M 270 270 A 25 25 0 0 1 310 290 A 25 25 0 0 1 350 270 A 25 25 0 0 1 370 305 Q 330 345 310 365 Q 290 345 250 305 A 25 25 0 0 1 270 270 Z" fill="#FFFFFF" opacity="0.7" stroke="#D8C49A" stroke-width="2"/>
  <text x="300" y="490" font-family="'Cinzel', serif" font-size="18" fill="#24303E" text-anchor="middle" letter-spacing="2">CHERISHED FOREVER</text>
  <text x="300" y="520" font-family="'Inter', sans-serif" font-size="12" fill="#758A99" text-anchor="middle">Gallery Placeholder 06</text>
</svg>'''
}

out_dir = "/home/allen/Projects/wedding-stuff/public/images"
os.makedirs(out_dir, exist_ok=True)
for name, content in images.items():
  with open(os.path.join(out_dir, name), "w", encoding="utf-8") as f:
    f.write(content.strip())
print("Successfully generated placeholder SVGs")

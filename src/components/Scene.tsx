"use client";

import React, { useId } from "react";

/**
 * MountainSilhouette
 * Layered Himalayan mountain range with mathematically aligned snow caps,
 * glacial shading facets, midground alpine crags, and foreground Kalga pine treeline.
 */
export function MountainSilhouette({
  className = "pointer-events-none absolute inset-x-0 bottom-0 z-[1]",
}: {
  className?: string;
}) {
  const maskId = useId();

  return (
    <div className={`overflow-hidden select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        className="block h-[150px] w-full sm:h-[210px] md:h-[250px]"
      >
        <defs>
          {/* Subtle gradient for distant alpine atmosphere */}
          <linearGradient id={`${maskId}-sky-mist`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#15362c" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#0d241d" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#081814" stopOpacity="1" />
          </linearGradient>

          {/* Glacial ice shadow tone */}
          <linearGradient id={`${maskId}-snow-shadow`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c5e0ed" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#8cb7cc" stopOpacity="0.92" />
          </linearGradient>

          {/* Crisp sunlit snow highlight */}
          <linearGradient id={`${maskId}-snow-sun`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="100%" stopColor="#edf5f8" stopOpacity="0.95" />
          </linearGradient>

          {/* Midground ridge tone */}
          <linearGradient id={`${maskId}-mid-ridge`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0e2a22" stopOpacity="0.97" />
            <stop offset="100%" stopColor="#081b15" stopOpacity="1" />
          </linearGradient>

          {/* Foreground pine forest tone */}
          <linearGradient id={`${maskId}-fore-ridge`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#071813" stopOpacity="1" />
            <stop offset="100%" stopColor="#040f0c" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* LAYER 1: High Alpine Himalayan Summits (Background) */}
        <path
          d="M0 260 V130
             L45 105 L130 56 L195 86 L250 112
             L320 68 L390 22 L455 64 L505 104
             L565 72 L610 48 L670 78 L725 110
             L800 60 L880 14 L945 52 L1005 96
             L1070 66 L1120 38 L1185 74 L1235 102
             L1295 70 L1340 44 L1400 80 L1440 108
             V260 Z"
          fill={`url(#${maskId}-sky-mist)`}
        />

        {/* --- PERFECTLY ALIGNED SNOW CAPS ON HIGH SUMMITS --- */}
        {/* Peak 1 (Apex: 130, 56) */}
        {/* Shaded eastern flank */}
        <path
          d="M130 56 L195 86 L184 94 L168 84 L154 96 L142 82 L132 88 Z"
          fill={`url(#${maskId}-snow-shadow)`}
        />
        {/* Sunlit western flank */}
        <path
          d="M65 96 L130 56 L132 88 L118 78 L104 94 L88 82 Z"
          fill={`url(#${maskId}-snow-sun)`}
        />

        {/* Peak 2 - Major Glacial Summit (Apex: 390, 22) */}
        {/* Shaded eastern flank */}
        <path
          d="M390 22 L455 64 L480 86 L465 94 L448 80 L430 102 L412 84 L396 108 L390 106 Z"
          fill={`url(#${maskId}-snow-shadow)`}
        />
        {/* Sunlit western flank */}
        <path
          d="M320 68 L355 42 L390 22 L390 106 L376 86 L358 104 L340 84 L326 92 Z"
          fill={`url(#${maskId}-snow-sun)`}
        />
        {/* Summit couloir highlight */}
        <path
          d="M390 22 L392 78 L386 98"
          stroke="#ffffff"
          strokeWidth="1.2"
          opacity="0.8"
          fill="none"
        />

        {/* Peak 3 - Pyramid Crag (Apex: 610, 48) */}
        <path
          d="M610 48 L670 78 L656 86 L642 74 L628 92 L614 78 Z"
          fill={`url(#${maskId}-snow-shadow)`}
        />
        <path
          d="M570 70 L610 48 L614 78 L602 88 L586 80 Z"
          fill={`url(#${maskId}-snow-sun)`}
        />

        {/* Peak 4 - Grand Kalga Summit (Apex: 880, 14) */}
        {/* Shaded flank */}
        <path
          d="M880 14 L945 52 L980 80 L965 92 L946 76 L928 98 L910 82 L892 110 L882 108 Z"
          fill={`url(#${maskId}-snow-shadow)`}
        />
        {/* Sunlit flank */}
        <path
          d="M805 58 L845 32 L880 14 L882 108 L868 86 L850 106 L832 84 L815 96 Z"
          fill={`url(#${maskId}-snow-sun)`}
        />
        <path
          d="M880 14 L883 82 L878 105"
          stroke="#ffffff"
          strokeWidth="1.5"
          opacity="0.85"
          fill="none"
        />

        {/* Peak 5 - Eastern Horn (Apex: 1120, 38) */}
        <path
          d="M1120 38 L1185 74 L1172 84 L1156 72 L1140 92 L1125 78 Z"
          fill={`url(#${maskId}-snow-shadow)`}
        />
        <path
          d="M1075 64 L1120 38 L1125 78 L1110 88 L1092 78 Z"
          fill={`url(#${maskId}-snow-sun)`}
        />

        {/* Peak 6 - Far East Ridge (Apex: 1340, 44) */}
        <path
          d="M1340 44 L1400 80 L1386 90 L1370 76 L1352 94 L1342 82 Z"
          fill={`url(#${maskId}-snow-shadow)`}
        />
        <path
          d="M1300 68 L1340 44 L1342 82 L1328 90 L1312 82 Z"
          fill={`url(#${maskId}-snow-sun)`}
        />

        {/* LAYER 2: Midground Alpine Crags & Ridges */}
        <path
          d="M0 260 V155
             L50 135 L120 148 L210 118 L280 138 L350 108 L440 142
             L520 115 L600 136 L680 102 L760 134 L850 98 L940 130
             L1020 104 L1100 135 L1190 108 L1270 138 L1360 115 L1440 140
             V260 Z"
          fill={`url(#${maskId}-mid-ridge)`}
        />

        {/* Delicate snow dusting along midground cols */}
        <path
          d="M335 116 L350 108 L375 122 L368 126 L354 118 L342 124 Z
             M665 110 L680 102 L705 116 L698 120 L684 112 L672 118 Z
             M835 106 L850 98 L878 114 L870 118 L854 108 L842 116 Z
             M1005 112 L1020 104 L1046 118 L1038 122 L1024 114 L1012 120 Z
             M1175 116 L1190 108 L1215 120 L1208 124 L1194 116 L1182 122 Z"
          fill="#d8e8f0"
          opacity="0.65"
        />

        {/* LAYER 3: Foreground Kalga Deodar Pine Treeline & Foothills */}
        <path
          d="M0 260 V185
             L25 180 L35 170 L45 182 L70 178 L80 166 L90 179 L125 174 L145 162 L155 175
             L190 168 L200 156 L210 170 L250 165 L265 152 L275 166 L315 160 L330 148 L340 162
             L385 158 L400 144 L410 160 L450 156 L470 142 L480 158 L520 154 L540 140 L550 156
             L590 152 L610 138 L620 154 L665 150 L685 135 L695 152 L735 148 L755 134 L765 150
             L810 146 L830 130 L840 148 L885 144 L905 128 L915 146 L960 142 L980 130 L990 146
             L1035 144 L1055 132 L1065 148 L1110 146 L1130 134 L1140 150 L1185 148 L1205 136 L1215 152
             L1260 150 L1280 138 L1290 154 L1335 152 L1355 140 L1365 156 L1410 154 L1430 144 L1440 158
             V260 Z"
          fill={`url(#${maskId}-fore-ridge)`}
        />
      </svg>
    </div>
  );
}

/**
 * Snowman
 * Stock-quality, photorealistic sculpted 3D Snowman asset.
 * Features:
 * - Spherical 3D shading with radial highlights and ambient snow shadows
 * - Sculpted carrot nose with ridges and shadow
 * - Glossy natural coal pebble eyes and cheerful pebble smile
 * - Rosy blushed cheeks
 * - Polished coal buttons with specular glints
 * - Natural organic wood branch arms with twigs (friendly greeting wave)
 * - Cozy knitted winter beanie with ribbed cuff and fluffy pom-pom
 * - Knitted wool scarf with fluttering fringe
 * - Ground snow drift and contact shadow
 * - Subtle idle breathing animation and hover delight
 */
export function Snowman({
  className = "pointer-events-none absolute right-4 sm:right-10 md:right-16 bottom-[140px] lg:bottom-[76px] z-[3]",
}: {
  className?: string;
}) {
  const sid = useId();

  return (
    <div
      className={`group select-none drop-shadow-2xl transition-transform duration-300 hover:scale-105 ${className}`}
      aria-label="Apple Cottage Snowman"
    >
      <svg
        viewBox="0 0 160 210"
        className="h-32 w-28 sm:h-40 sm:w-36 md:h-44 md:w-40 animate-snowman-idle"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* 3D Snow Spherical Gradient - Base Body */}
          <radialGradient id={`${sid}-snow-base`} cx="38%" cy="32%" r="66%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#f5fafd" />
            <stop offset="80%" stopColor="#d5e8f2" />
            <stop offset="100%" stopColor="#a9cadc" />
          </radialGradient>

          {/* 3D Snow Spherical Gradient - Torso */}
          <radialGradient id={`${sid}-snow-torso`} cx="36%" cy="30%" r="66%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="52%" stopColor="#f7fbfe" />
            <stop offset="82%" stopColor="#d8ebf5" />
            <stop offset="100%" stopColor="#adcfe0" />
          </radialGradient>

          {/* 3D Snow Spherical Gradient - Head */}
          <radialGradient id={`${sid}-snow-head`} cx="34%" cy="28%" r="66%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="55%" stopColor="#f9fcfe" />
            <stop offset="85%" stopColor="#dbeef7" />
            <stop offset="100%" stopColor="#b4d5e5" />
          </radialGradient>

          {/* Ground Soft Ambient Shadow */}
          <radialGradient id={`${sid}-ground-shadow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#04120e" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#04120e" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#04120e" stopOpacity="0" />
          </radialGradient>

          {/* Ground Snow Mound */}
          <linearGradient id={`${sid}-snow-drift`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#e3eff5" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#b9d6e4" stopOpacity="0.85" />
          </linearGradient>

          {/* Realistic Carrot Nose Shading */}
          <linearGradient id={`${sid}-carrot`} x1="0" y1="0" x2="1" y2="0.6">
            <stop offset="0%" stopColor="#ffa036" />
            <stop offset="50%" stopColor="#eb6100" />
            <stop offset="100%" stopColor="#9e3a00" />
          </linearGradient>

          {/* Natural Wood Branch Arms */}
          <linearGradient id={`${sid}-wood`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7a4e2f" />
            <stop offset="60%" stopColor="#54351d" />
            <stop offset="100%" stopColor="#352010" />
          </linearGradient>

          {/* Cozy Knitted Wool Beanie */}
          <linearGradient id={`${sid}-beanie-body`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c53a2a" />
            <stop offset="70%" stopColor="#a8281a" />
            <stop offset="100%" stopColor="#871b0f" />
          </linearGradient>

          {/* Scarf Red Knit */}
          <linearGradient id={`${sid}-scarf-red`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#cf402f" />
            <stop offset="60%" stopColor="#b42d1e" />
            <stop offset="100%" stopColor="#8d1c10" />
          </linearGradient>

          {/* Coal Pebble Gradient */}
          <radialGradient id={`${sid}-coal`} cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#3d4944" />
            <stop offset="40%" stopColor="#222b27" />
            <stop offset="100%" stopColor="#0e1411" />
          </radialGradient>
        </defs>

        {/* 1. Ground Contact Shadow & Snow Drift */}
        <ellipse cx="80" cy="198" rx="58" ry="10" fill={`url(#${sid}-ground-shadow)`} />
        <path
          d="M22 198 Q50 186 80 189 Q115 185 142 198 Q110 206 80 205 Q45 206 22 198 Z"
          fill={`url(#${sid}-snow-drift)`}
        />

        {/* 2. Left Branch Arm (Reaching naturally out) */}
        <g stroke={`url(#${sid}-wood)`} strokeLinecap="round" strokeLinejoin="round">
          {/* Main branch */}
          <path d="M54 116 Q34 112 18 104" strokeWidth="4.2" fill="none" />
          {/* Small twig 1 */}
          <path d="M30 110 Q24 98 16 95" strokeWidth="2.8" fill="none" />
          {/* Small twig 2 */}
          <path d="M22 106 Q12 110 6 108" strokeWidth="2.4" fill="none" />
        </g>

        {/* 3. Base Snowball (Bottom) */}
        <circle cx="80" cy="154" r="38" fill={`url(#${sid}-snow-base)`} />
        {/* Soft shadow between base and ground */}
        <ellipse cx="80" cy="188" rx="28" ry="5" fill="#9dbecf" opacity="0.35" />

        {/* 4. Torso Snowball (Middle) */}
        {/* Contact shadow cast on base */}
        <ellipse cx="80" cy="126" rx="22" ry="5" fill="#9bbdce" opacity="0.45" />
        <circle cx="80" cy="108" r="28" fill={`url(#${sid}-snow-torso)`} />

        {/* 5. Right Branch Arm (Waving friendly greeting) */}
        <g stroke={`url(#${sid}-wood)`} strokeLinecap="round" strokeLinejoin="round">
          {/* Main branch waving upward */}
          <path d="M106 116 Q126 110 144 94" strokeWidth="4.2" fill="none" />
          {/* Hand twig fingers */}
          <path d="M136 100 Q146 86 152 82" strokeWidth="2.8" fill="none" />
          {/* Thumb twig */}
          <path d="M128 107 Q134 118 142 122" strokeWidth="2.6" fill="none" />
          {/* Top finger tip */}
          <path d="M142 95 Q152 94 157 98" strokeWidth="2.2" fill="none" />
        </g>

        {/* 6. Polished Coal Buttons down Torso */}
        {[
          { cx: 80, cy: 102, r: 3.2 },
          { cx: 80, cy: 116, r: 3.4 },
          { cx: 80, cy: 130, r: 3.2 },
        ].map((btn, i) => (
          <g key={i}>
            {/* Button cast shadow */}
            <ellipse cx={btn.cx} cy={btn.cy + 1.2} rx={btn.r + 0.6} ry={btn.r} fill="#94b7c9" opacity="0.5" />
            {/* Coal pebble */}
            <circle cx={btn.cx} cy={btn.cy} r={btn.r} fill={`url(#${sid}-coal)`} />
            {/* Specular glint */}
            <circle cx={btn.cx - 1} cy={btn.cy - 1} r={0.8} fill="#ffffff" opacity="0.85" />
          </g>
        ))}

        {/* 7. Head Snowball */}
        {/* Contact shadow on torso */}
        <ellipse cx="80" cy="80" rx="17" ry="4" fill="#9cbccf" opacity="0.45" />
        <circle cx="80" cy="62" r="22" fill={`url(#${sid}-snow-head)`} />

        {/* 8. Rosy Blushed Cheeks */}
        <ellipse cx="68" cy="68" rx="4.5" ry="2.8" fill="#f87171" opacity="0.32" />
        <ellipse cx="92" cy="68" rx="4.5" ry="2.8" fill="#f87171" opacity="0.32" />

        {/* 9. Glossy Coal Pebble Eyes */}
        {/* Left eye */}
        <ellipse cx="73" cy="56" rx="2.8" ry="3.2" fill={`url(#${sid}-coal)`} />
        <circle cx="72.2" cy="54.8" r="0.9" fill="#ffffff" />
        <circle cx="74" cy="57" r="0.45" fill="#ffffff" opacity="0.7" />

        {/* Right eye */}
        <ellipse cx="87" cy="56" rx="2.8" ry="3.2" fill={`url(#${sid}-coal)`} />
        <circle cx="86.2" cy="54.8" r="0.9" fill="#ffffff" />
        <circle cx="88" cy="57" r="0.45" fill="#ffffff" opacity="0.7" />

        {/* 10. Sculpted 3D Carrot Nose */}
        {/* Nose shadow on face */}
        <path d="M80 65 Q92 70 102 70 Q92 72 80 67 Z" fill="#9bbdce" opacity="0.4" />
        {/* Carrot body */}
        <path
          d="M80 62 Q92 63 105 66 Q92 70 80 67 Q78 64.5 80 62 Z"
          fill={`url(#${sid}-carrot)`}
        />
        {/* Carrot texture ridges */}
        <path d="M86 63.2 Q87 65.5 86 67.8" stroke="#d45200" strokeWidth="1" strokeLinecap="round" fill="none" />
        <path d="M92 64 Q93 65.8 92 67.5" stroke="#d45200" strokeWidth="0.9" strokeLinecap="round" fill="none" />
        <path d="M98 65 Q98.8 66.2 98 67" stroke="#d45200" strokeWidth="0.8" strokeLinecap="round" fill="none" />
        {/* Carrot highlight along upper edge */}
        <path d="M81 63 Q92 63.8 102 66" stroke="#ffc078" strokeWidth="0.8" fill="none" opacity="0.85" />

        {/* 11. Warm Coal Pebble Smile */}
        {[
          { cx: 71, cy: 72, r: 1.4 },
          { cx: 75, cy: 75, r: 1.5 },
          { cx: 80, cy: 76.5, r: 1.6 },
          { cx: 85, cy: 75, r: 1.5 },
          { cx: 89, cy: 72, r: 1.4 },
        ].map((pebble, idx) => (
          <circle key={idx} cx={pebble.cx} cy={pebble.cy} r={pebble.r} fill={`url(#${sid}-coal)`} />
        ))}

        {/* 12. Cozy Knitted Wool Scarf */}
        {/* Scarf main wrap around neck */}
        <path
          d="M58 76 Q80 84 102 76 Q106 82 102 88 Q80 94 58 87 Q54 81 58 76 Z"
          fill={`url(#${sid}-scarf-red)`}
        />
        {/* Scarf alpine decorative stripe */}
        <path
          d="M62 80 Q80 86 98 80"
          stroke="#d49a3d"
          strokeWidth="2.4"
          strokeDasharray="4 2.5"
          fill="none"
        />

        {/* Draping Scarf Tail (with gentle flutter animation) */}
        <g className="animate-scarf-flutter">
          <path
            d="M86 84 Q98 94 96 122 Q88 123 84 121 Q86 96 82 86 Z"
            fill={`url(#${sid}-scarf-red)`}
          />
          {/* Tail stripe */}
          <path
            d="M85 112 Q90 113 95 113"
            stroke="#d49a3d"
            strokeWidth="2.2"
            fill="none"
          />
          {/* Scarf Fringe Tassels */}
          {[0, 2.5, 5, 7.5, 10].map((offset) => (
            <line
              key={offset}
              x1={84 + offset}
              y1={121}
              x2={84 + offset + 0.8}
              y2={127}
              stroke="#ffd382"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* 13. Knitted Alpine Beanie Hat */}
        {/* Hat Dome */}
        <path
          d="M60 46 Q64 18 80 18 Q96 18 100 46 Z"
          fill={`url(#${sid}-beanie-body)`}
        />
        {/* Hat Alpine Pattern Band */}
        <path
          d="M63 36 Q80 34 97 36"
          stroke="#d49a3d"
          strokeWidth="3.2"
          strokeDasharray="5 3"
          fill="none"
        />
        {/* Ribbed Brim */}
        <rect
          x="57"
          y="42"
          width="46"
          height="9"
          rx="3"
          fill="#8e2015"
          stroke="#d49a3d"
          strokeWidth="1.2"
        />
        {/* Knit vertical rib lines */}
        {[62, 67, 72, 77, 82, 87, 93, 98].map((x) => (
          <line
            key={x}
            x1={x}
            y1={43}
            x2={x}
            y2={50}
            stroke="#b83223"
            strokeWidth="1.2"
          />
        ))}

        {/* Fluffy Yarn Pom-Pom on Top */}
        <circle cx="80" cy="17" r="7.5" fill="#f4ede1" />
        <circle cx="80" cy="17" r="6" fill="#ffffff" />
        {/* Pom-pom fluffy yarn strands */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1={80}
            y1={17}
            x2={80 + Math.cos((deg * Math.PI) / 180) * 8}
            y2={17 + Math.sin((deg * Math.PI) / 180) * 8}
            stroke="#f5eee3"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        ))}

        {/* Delicate snow sparkle on shoulder */}
        <path
          d="M64 148 L65 145 L66 148 L69 149 L66 150 L65 153 L64 150 L61 149 Z"
          fill="#ffffff"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}

/**
 * Crystalline Snowflake SVG path
 * Miniature 6-pointed ice dendrite crystal
 */
function CrystalIcon({ size }: { size: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.7)]"
    >
      {/* 3 main intersecting crystal axes */}
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="3.34" y1="7" x2="20.66" y2="17" />
      <line x1="3.34" y1="17" x2="20.66" y2="7" />
      {/* Delicate dendrite barbs */}
      <path d="M10 5 L12 3 L14 5" />
      <path d="M10 19 L12 21 L14 19" />
      <path d="M5.5 8.5 L4.2 6.5 L6.8 6.5" />
      <path d="M18.5 15.5 L19.8 17.5 L17.2 17.5" />
      <path d="M5.5 15.5 L4.2 17.5 L6.8 17.5" />
      <path d="M18.5 8.5 L19.8 6.5 L17.2 6.5" />
    </svg>
  );
}

/**
 * Snowfall
 * Top-to-bottom delicate snowfall with subtle crystal particles.
 * Small, ambient, un-intrusive ("not much noticeable") with realistic swaying and shimmer.
 */
export function Snowfall({
  count = 28,
  className = "pointer-events-none fixed inset-0 z-40 overflow-hidden",
}: {
  count?: number;
  className?: string;
}) {
  // Deterministic seed generation so server and client match without hydration warnings
  const particles = React.useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // 3 types: 'crystal' (6-pt star), 'particle' (round micro-grain), 'bokeh' (soft blur dust)
      const type = i % 3 === 0 ? "crystal" : i % 3 === 1 ? "particle" : "bokeh";
      const left = ((i * 31 + 17) % 98) + 1; // 1% to 99%
      const duration = 9 + ((i * 7) % 9); // 9s to 17s (gentle, unhurried fall)
      const delay = -((i * 4.3) % 15); // Negative delay so flakes are already drifting across screen
      const swayVariant = (i % 3) + 1; // 1, 2, 3
      const opacity = type === "crystal" ? 0.42 + ((i % 4) * 0.08) : 0.28 + ((i % 5) * 0.09);
      const size = type === "crystal" ? 6 + (i % 3) : type === "bokeh" ? 3.5 + (i % 2) : 2 + (i % 3);

      return {
        id: i,
        type,
        left,
        size,
        duration,
        delay,
        swayVariant,
        opacity,
      };
    });
  }, [count]);

  return (
    <div className={className} aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="snow-particle"
          style={
            {
              left: `${p.left}%`,
              animationName: `snowfall-fall-${p.swayVariant}`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              ["--snow-opacity" as string]: p.opacity,
            } as React.CSSProperties
          }
        >
          {p.type === "crystal" ? (
            <span
              className="block"
              style={{
                animation: `crystal-twinkle ${4 + (p.id % 4)}s ease-in-out infinite`,
                animationDelay: `${(p.id % 5) * 0.7}s`,
                opacity: p.opacity,
              }}
            >
              <CrystalIcon size={p.size} />
            </span>
          ) : (
            <span
              className="block rounded-full bg-white"
              style={{
                width: p.size,
                height: p.size,
                opacity: p.opacity,
                filter: p.type === "bokeh" ? "blur(0.8px)" : "none",
                boxShadow: "0 0 3px rgba(255, 255, 255, 0.6)",
              }}
            />
          )}
        </span>
      ))}
    </div>
  );
}

/**
 * MistBand
 * Atmospheric drifting fog layers that hover over Parvati Valley.
 */
export function MistBand() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-24 z-[1] h-40 overflow-hidden sm:bottom-28"
      aria-hidden="true"
    >
      <div className="mist-a absolute inset-x-[-10%] top-6 h-16 rounded-[100%] bg-mist/20" />
      <div className="mist-b absolute inset-x-[-14%] top-16 h-20 rounded-[100%] bg-glacier/25" />
      <div className="mist-a absolute inset-x-[-8%] top-28 h-12 rounded-[100%] bg-mist/15" />
    </div>
  );
}

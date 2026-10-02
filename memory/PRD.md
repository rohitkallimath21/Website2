# PRD — Rohit Kallimath Portfolio

## Problem Statement
Build a single-page portfolio website from the user's CV (Rohit F. Kallimath) with a mouse-based parallax effect. Elevated to Awwwards-level: kinetic hero, on-load masked reveals, framer-motion scroll reveals, lenis smooth scrolling, editorial marquee, numbered manifesto chapters.

## Architecture
- Frontend-only React SPA (no backend/DB needed — static personal portfolio).
- Libraries: framer-motion (reveals + mouse parallax + scroll transforms), lenis (smooth momentum scroll).
- CV content stored in `src/data/cv.js`; sections in `src/components/portfolio/`.
- Art direction: near-black (#0a0a0a) + chartreuse lime (#ccff33) accent; Bricolage Grotesque (display), JetBrains Mono (labels), Instrument Sans (body); grain overlay.

## Implemented (2026-06)
- Hero: on-load line-by-line masked name reveal, outline "Kallimath", mouse parallax layers + scroll parallax on server-room image, dual CTA.
- Marquee: slow infinite skills marquee.
- About: numbered chapter (01), parallax image, stats grid, industry tags, 3 manifesto chapters.
- Experience: interactive timeline (02) with hover active bar, 4 roles.
- Skills: 4-category capability grid (03).
- Education + Languages (04); Contact (05) with mailto, phone, résumé PDF link, footer.
- Fixed nav with smooth-scroll anchors + résumé link.

## Backlog
- P1: Optional working contact form (email integration via Resend).
- P2: Light-mode toggle; project case studies if added later.

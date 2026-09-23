# Ooze Syndicate — Alpha 9 browser preview

Godot 4.6.1, single-thread WebGL 2 export. Work in progress; four existing arenas. New maps are deferred to Alpha 10.

Enable GitHub Pages: Settings → Pages → Deploy from a branch → main → / (root).
Expected URL: https://talos91.github.io/ooze-syndicate/

Use landscape orientation. Play against 1–4 AI opponents. Browser multiplayer is not available; the separate Alpha 8 Windows release supports LAN/direct-IP multiplayer.

Owned villages start with 1 unit, neutrals with 30. Production caps: 30/40/80/160, incoming troops may exceed them. Vat upgrades cost 10/20/30; cannon tiers cost 15/25/35. Construction takes 5 seconds. Cannons blast for 2 seconds including friendly fire.

This repository contains the public web player only. Editable project and original art remain in the local project archive. All artwork and game content: all rights reserved.

Mobile: use Play fullscreen, then New Game. On iPhone use Add to Home Screen if fullscreen is unavailable. Touch controls and fullscreen activation were verified in browser emulation; actual device performance still needs testing. First load is about 126 MB before server compression. A previous data pack is retained for cached HTML compatibility and is not downloaded by the current page.

AI is autonomous: independent clocks, defense first, coordinated capture planning, and coverage-based cannon placement. Balance, combat, AI and four-arena UI tests pass 165 checks.

Forge hotfix: convert a vat for 20 units; upgrade for 40/60. Forges stop producing but the strongest completed owned forge grants +0.5/+1/+1.5 attack faction-wide, without stacking. Damage bonuses apply at impact and change with forge ownership. Neutral vats now regenerate to their tier cap.

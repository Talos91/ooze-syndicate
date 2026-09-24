# Ooze Syndicate — Alpha 11

[Play in your browser](https://talos91.github.io/ooze-syndicate/alpha11/). The root Pages link also opens Alpha 11. Historical Alpha 9 and Alpha 10 remain at their versioned paths.

Current game release: **pending full-skills publication**, pack **alpha11-e0afe774615c.pck** (96,857,404 bytes), protocol **alpha11-skills-5**. Later documentation commits do not change the game build.

## Play with friends
Choose Online, create a room and share its four-character code. Join supports phone keyboard/paste; sharing supports Copy. Modes are 2–5-player free-for-all and 2v2. After results, everyone taps Rematch to keep the same room. Room chat works in lobby, match and results and stays between rounds.

The host must keep the tab open and active. A guest leaving returns others to the same lobby; host departure closes the room. PeerJS 1.5.5 uses public signalling and direct WebRTC. No TURN or host migration is configured, so some networks may fail. Windows ENet LAN rooms are separate.

## Current playtest
- Five AI difficulties with delayed/noisy estimates and coarse dispatch.
- Neutral start/regeneration caps 15/20/40/80; owned production caps 30/40/80/160. Reinforcements can exceed caps.
- Five-second construction; cannon recharge 4/2.4/1.6 seconds after two-second bursts.
- All four skills per faction are functional; persistent traits remain Coming soon.
- Action-based tutorial with saved progress and chapter replay.
- 32 maps using shared arena assets; larger animated units, skill effects and incremental lighting/material cleanup.
- Larger touch menus, swipeable maps and reduced phone rendering/network overhead.

On iPhone use Safari → Share → Add to Home Screen, enable Open as Web App if offered, then launch the icon in landscape. Physical phone performance and separate-network playtesting remain necessary. The mobile 30 FPS target is not a guarantee.

The Windows package remains the earlier b1d6330-era build and does not contain subsequent browser mobile/rematch/chat updates. The dedicated WebSocket server draft is on hold, not deployed.

Built with Godot 4.6.1 single-thread WebGL2. This repository contains the public player; editable source and approved art are maintained in the project archive. Artwork/game content: all rights reserved. PeerJS license is included. See [changelog](CHANGELOG.md).

## 2026-09-24 — Expanded rooms and centre conversions

Free-for-all supports 2, 3, 4 or 5 players; 2v2 remains available. The main map centre can convert to cannon or forge using normal costs and construction time, for players and AI. Reload all browsers before creating a room. Windows package is unchanged.

## Full kits and usability — 2026-09-24

All 20 skills now have shared effect and targeting instructions. See [the full skill guide](SKILLS.md). Abilities OFF in match setup hides the bar and blocks player/AI casting; the room setting survives rematches. Phone chat is compact with explicit Write and CLOSE actions; tutorial text scrolls inside its panel. Mobile model ray selection now accounts for half-resolution rendering and supports larger edge-vat touch targets. Windows was not rebuilt.

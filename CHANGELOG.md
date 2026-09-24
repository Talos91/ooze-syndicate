# Browser release changelog

## 2026-09-24 — 2–5-player free-for-all and centre conversions

Added 3- and 5-player FFA alongside 2/4-player FFA and 2v2, in desktop/mobile room selection. Raised native source connection capacity to five total players. Removed centre-only cannon/forge restrictions from radial controls, simulation and AI. Protocol alpha11-ffa-4; reload all browsers. Passed 104 room lifecycle checks across five modes, 33 existing protocol checks, centre construction checks and desktop/mobile menu rendering. Windows package not rebuilt.


## 2026-09-24 â€” Documentation reconciliation
Clarified current Alpha 11 features, multiplayer/rematch/chat, phone guidance, limitations and the older Windows package. Documentation-only update; game assets are unchanged.

## 2026-09-24 â€” 092c4ce
Room rematch without recreating the code; native browser room chat in lobby, match and results; round isolation; guest departure returns remaining players to the lobby. Protocol alpha11-social-3. Pack alpha11-028e65873dcb.pck (96,842,320 bytes). Pages run 35954995745 succeeded.

## 2026-09-24 â€” 1610d02
Four-character room codes, native keyboard/paste/copy, larger phone layouts and swipeable maps. Lighter mobile rendering and compressed/coalesced network snapshots. Pack alpha11-267a4ad3023b.pck. Superseded by 092c4ce.

## 2026-09-24 â€” b1d6330
PeerJS browser multiplayer; five AI levels; neutral half caps; reduced cannon recharge; first faction skills; action-based tutorial; incremental visuals/material cleanup. Pack alpha11-2cea19783b93.pck. Windows package was built at this stage and remains at this release level.

Earlier commits remain in Git history. Physical iPhone and separate-network testing remain outstanding; no cinematic art parity or guaranteed phone FPS is claimed.

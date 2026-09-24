# Room rematch and chat

Everyone taps Rematch on the results screen to play again in the same room. Room-wide chat works in the lobby, match and results, using native browser text entry on phones. Chat remains between rounds. A guest leaving returns others to the same lobby; host departure still closes the room. Reload all players for this update.

# Mobile browser update

Four-character rooms; native phone keyboard/paste and Copy; larger touch layouts and swipeable maps; lighter phone renderer; reduced snapshot overhead and delay. Reload every device and create a new room. Physical phone frame-rate and separate-network testing still required.

# Ooze Syndicate — Alpha 11

Play: https://talos91.github.io/ooze-syndicate/alpha11/

The root link also opens Alpha 11. Earlier versions remain at /alpha9/ and /alpha10/.

## This update

- Online browser rooms with PeerJS: 1v1, four-player free-for-all and 2v2. Create a room and share its code. Keep the host tab open and active. Public signalling, direct WebRTC; no TURN relay or host migration. Some networks may fail to connect. Windows ENet rooms are separate.
- Five AI difficulties with delayed/noisy estimates and coarse troop dispatch.
- Neutral half caps: 15/20/40/80. Owned production caps: 30/40/80/160. Reinforcements may exceed caps. Cannon recharge: 4/2.4/1.6 seconds after two-second firing.
- One live skill for every faction; remaining abilities and traits Coming soon.
- Action-based tutorial, replayable chapters and saved progress.
- Shared arena lighting, larger animated troops, skill effects, and T1–T4 vat surface cleanup.

On iPhone open in Safari, Share → Add to Home Screen, enable Open as Web App if offered, then launch the icon in landscape. Fullscreen support varies by browser. Real phone and separate-network playtesting remain necessary.

Built with Godot 4.6.1 single-thread WebGL2. Public player only; editable source and approved art are maintained in the project archive. Artwork/game content: all rights reserved. PeerJS license is included.

Release pack: alpha11-028e65873dcb.pck

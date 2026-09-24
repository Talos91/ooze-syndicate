# Alpha 11 — skills and how to use them

Updated 2026-09-24. All five factions have three regular skills and one ultimate. Values are provisional playtest balance; persistent traits remain future work.

In a match, tap a skill to read its effect and instructions, choose **SELECT TARGET**, then tap the requested army or structure. For Ghost Send and Route Hack, make both selections. Tap the selected skill again or press Escape to cancel. Invalid targets and cancellation spend no cooldown. Hover tooltips and faction-selection help provide the same reference.

Each regular skill recharges independently. The ultimate starts empty and charges in 120 seconds; enemy combat kills add at most 30 seconds of charge per cycle, so it cannot be ready before 90 seconds. Neutral kills, allied/friendly kills, decoys, sacrifices and ultimate kills add no charge. Casting resets the ultimate cycle. HUD buttons show active duration, remaining cooldown or ultimate charge.

**Abilities OFF:** choose this in solo setup or online room creation. The host's setting applies to every player and AI, stays through rematches, hides the skill bar and rejects all casting commands. Tutorial practice keeps abilities enabled so lessons remain playable.

## VEX

### Overclock

One army moves 50% faster for 8s.

**Use:** Tap this skill, then tap one of your moving armies.

**Cooldown:** 28 seconds.

### Rapid Deployment

New orders from one vat depart twice as quickly for 10s. Does not create troops.

**Use:** Tap this skill, tap your vat, then send troops from it.

**Cooldown:** 30 seconds.

### Route Hack

Redirect one army without losing units or health. It follows its current route to the old destination, then continues without attacking there.

**Use:** Tap your moving army, then a different destination. Existing bridges and paths still apply.

**Cooldown:** 35 seconds.

### Network Surge — Ultimate

All your armies move 50% faster and new departures are twice as fast for 10s. Does not stack with Overclock or Rapid Deployment.

**Use:** Tap this ultimate, then any owned structure to confirm the faction-wide boost.

**Charge:** 120 seconds naturally, at least 90 with combat bonus.

## NULL

### Ghost Send

Sends 10 ghostly NULL decoys for free. They distract rival players and AI but NEVER damage, defend or capture. They do not consume real troops or grant kill charge.

**Use:** Tap your source structure, then another structure as the destination. Send a real army separately if you want to capture it.

**Cooldown:** 32 seconds.

### Blackout

Hides one owned structure's population badge from enemies for 12s. You and teammates still see it. AI receives no fresh count there.

**Use:** Tap this skill, then your structure. Concealment is a playtest UI effect, not protection against modified clients.

**Cooldown:** 30 seconds.

### System Jam

Disables an enemy cannon (including its current beam) or forge bonus for 8s. Does not change ownership or stop troop orders.

**Use:** Tap this skill, then an enemy cannon or forge.

**Cooldown:** 35 seconds.

### Hostile Takeover — Ultimate

Suppresses an enemy structure's production, cannon and forge function for 12s. Its owner, garrison and troop orders remain intact.

**Use:** Tap this ultimate, then an enemy structure. Follow up with a real attack; it does not capture automatically.

**Charge:** 120 seconds naturally, at least 90 with combat bonus.

## VIRIDIAN BLOOM

### Spore Burst

One vat produces at 1.8x speed for 10s. Normal population cap still applies.

**Use:** Tap this skill, then an owned vat below its production cap.

**Cooldown:** 35 seconds.

### Reseed

Adds up to 8 healthy troops immediately to one owned vat, stopping at its production cap.

**Use:** Tap this skill, then an owned vat with room for troops. A full vat is an invalid target.

**Cooldown:** 35 seconds.

### Overgrowth

Creates a visible area around a structure that slows enemy armies by 40% for 8s. Allies are unaffected.

**Use:** Tap this skill, then a structure near the route you want to slow. The green ring shows the area.

**Cooldown:** 32 seconds.

### Superbloom — Ultimate

All owned vats produce at 1.8x speed for 12s, within normal caps. Does not stack with Spore Burst.

**Use:** Tap this ultimate, then any owned vat to confirm the faction-wide boost.

**Charge:** 120 seconds naturally, at least 90 with combat bonus.

## EMBER

### Heat Surge

One army deals 35% more arrival damage for 10s.

**Use:** Tap this skill, then one of your moving armies. Reach the target before it expires.

**Cooldown:** 32 seconds.

### Scorch

Burns a visible area around a structure for 5s: 25 HP per second to enemy moving units, up to 1000 total damage. Does not burn garrisons or allies.

**Use:** Tap this skill, then a structure next to an enemy route. The orange ring shows the damaging area.

**Cooldown:** 32 seconds.

### Melt Through

Reduces one enemy garrison's protection by 30% for 10s. No direct damage; combine it with an arriving army.

**Use:** Tap this skill, then an enemy structure.

**Cooldown:** 35 seconds.

### Core Meltdown — Ultimate

Sacrifices 25% of an attacking army (at least 1, at most 10) for 300 damage per sacrificed troop, capped at 3000, against its current target. Does not capture and grants no ultimate charge.

**Use:** Tap this ultimate, then your army attacking an enemy structure. Sacrificed troops are permanently lost.

**Charge:** 120 seconds naturally, at least 90 with combat bonus.

## SOLAR

### Node Shield

One structure receives 1.65x garrison protection for 10s. Cannons normally bypass garrison protection.

**Use:** Tap this skill, then your threatened structure.

**Cooldown:** 35 seconds.

### Armored March

Each troop in one army can block one cannon hit for 10s. Blocked hits consume the cannon's burst budget; a later hit can kill the troop.

**Use:** Tap this skill, then your army before it enters cannon range.

**Cooldown:** 32 seconds.

### Relay Guard

Your selected structure and directly connected owned neighbors receive 1.3x garrison protection for 10s. Stronger shields take priority; no multiplying shields.

**Use:** Tap this skill, then your structure with at least one directly connected owned neighbor.

**Cooldown:** 35 seconds.

### Solar Aegis — Ultimate

Your selected structure and directly connected owned neighbors receive 1.8x garrison protection for 12s. Does not stack with other shields.

**Use:** Tap this ultimate, then your structure at the centre of the group you want to protect.

**Charge:** 120 seconds naturally, at least 90 with combat bonus.

## Multiplayer and visual scope

Effects and cooldowns are host-authoritative. Blackout hides counts in normal game UI and limits fresh AI observations; snapshots still contain authoritative state, so this is not anti-cheat protection against modified clients. Area rings show Overgrowth/Scorch and domes show Solar protection. Other new effects use existing pulses and state indicators; final skill artwork is not claimed complete.

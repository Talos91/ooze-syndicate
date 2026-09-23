const CACHE='ooze-alpha9-2f0199814f01';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k.startsWith('ooze-')&&k!==CACHE)await caches.delete(k);await self.clients.claim();})()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;e.respondWith((async()=>{const c=await caches.open(CACHE);if(e.request.mode==='navigate'){try{const r=await fetch(e.request);if(r.ok)await c.put('./',r.clone());return r}catch(err){return (await c.match('./'))||Response.error()}}const hit=await c.match(e.request);if(hit)return hit;const r=await fetch(e.request);if(r.ok){try{await c.put(e.request,r.clone())}catch(err){}}return r;})());});

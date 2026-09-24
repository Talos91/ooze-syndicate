// The main share link now points to Alpha 11. Retire only this game's old Alpha 9 cache.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('ooze-alpha9-'))await caches.delete(key);await self.clients.claim();})()));
self.addEventListener('fetch',event=>{const url=new URL(event.request.url),root=new URL(self.registration.scope);if(event.request.mode==='navigate'&&url.origin===root.origin&&(url.pathname===root.pathname||url.pathname===root.pathname+'index.html'))event.respondWith(Promise.resolve(Response.redirect(new URL('alpha11/?release=alpha11-028e65873dcb',root).href,302)));});

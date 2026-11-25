/* Offline-Unterstützung: speichert die App beim ersten Besuch.
   Nach einem Update auf GitHub die Versionsnummer erhöhen, damit Geräte die neue Fassung laden. */
const VERSION='schach-v1';
const FILES=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png','./icons/apple-touch-icon.png','./icons/favicon.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
/* Erst aus dem Speicher antworten (schnell, offline), im Hintergrund aktualisieren */
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin) return;
  e.respondWith(caches.open(VERSION).then(async cache=>{
    const hit=await cache.match(e.request,{ignoreSearch:true});
    const net=fetch(e.request).then(r=>{ if(r&&r.ok) cache.put(e.request,r.clone()); return r; }).catch(()=>null);
    if(hit){ e.waitUntil(net); return hit; }
    const r=await net;
    return r||cache.match('./index.html');
  }));
});

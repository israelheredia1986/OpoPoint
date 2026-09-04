const CACHE = 'opopoint-v5-20260904';
const CORE = ['./','./index.html','./datos.js','./manifest.webmanifest'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith('opopoint-') && key !== CACHE)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

async function actualizarHtml(request) {
  try {
    const response = await fetch(request, { cache: 'no-store' });
    if (!response.ok) return response;
    let html = await response.text();

    const fix = `
<style id="opopoint-ui-fix-v5">
.mainTabs{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:10px!important;align-items:stretch!important}
.mainTabs .mainTab{width:100%!important;min-width:0!important;height:58px!important;margin:0!important;position:relative!important;display:flex!important;align-items:center!important;justify-content:center!important;border-radius:16px!important;font-size:12px!important;font-weight:950!important;box-sizing:border-box!important}
.mainTabs .mainTab span{font-size:18px!important}
.mainTabs .mainTab.fav{margin:0!important;width:100%!important;color:#516075!important;background:#f8fafc!important;border:1px solid #dde4ec!important}
.mainTabs .mainTab.fav.active{color:#fff!important;background:linear-gradient(135deg,#ffae4b,#f68b27)!important;border-color:transparent!important}
.card{padding:21px!important;border-radius:22px!important}
.city{font-size:24px!important}
.role{font-size:10px!important;padding:7px 10px!important}
.status{font-size:10px!important;padding:8px 10px!important}
.badge{font-size:10px!important;padding:7px 9px!important}
.metaBox{padding:11px 12px!important}
.metaBox b{font-size:12px!important}
.footerRow a{height:42px!important;font-size:11px!important}
@media(max-width:960px){.mainTabs{grid-template-columns:repeat(2,minmax(0,1fr))!important}.mainTabs .mainTab{height:54px!important}.grid{grid-template-columns:1fr!important}}
@media(max-width:640px){.mainTabs{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:8px!important}.mainTabs .mainTab{height:52px!important;font-size:11px!important}.card{padding:18px!important}.city{font-size:22px!important}.meta{grid-template-columns:repeat(2,1fr)!important}}
</style>
<script id="opopoint-ui-fix-script-v5">
(function(){
  function fixTabs(){
    const tabs=document.querySelector('.mainTabs');
    if(!tabs)return;
    const all=[...document.querySelectorAll('button,a')];
    let fav=[...tabs.children].find(el=>/favorit/i.test((el.textContent||'')));
    if(!fav){
      const candidate=all.find(el=>/favorit/i.test((el.textContent||'')) && !tabs.contains(el));
      if(candidate){
        const clone=candidate.cloneNode(true);
        clone.classList.add('mainTab','fav');
        clone.removeAttribute('style');
        tabs.appendChild(clone);
        candidate.style.display='none';
      }
    }
    [...tabs.children].forEach((el,i)=>el.classList.add('mainTab')); 
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fixTabs);else fixTabs();
  setTimeout(fixTabs,250);
  setTimeout(fixTabs,1000);
})();
</script>`;

    if (!html.includes('opopoint-ui-fix-v5')) {
      html = html.replace('</head>', fix + '</head>');
    }

    const copy = new Response(html, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    });
    const cache = await caches.open(CACHE);
    await cache.put(request, copy.clone());
    return copy;
  } catch (e) {
    const cached = await caches.match(request);
    return cached || caches.match('./index.html');
  }
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const same = url.origin === self.location.origin;
  const documentRequest = event.request.mode === 'navigate' || url.pathname.endsWith('/index.html');

  if (same && documentRequest) {
    event.respondWith(actualizarHtml(event.request));
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});

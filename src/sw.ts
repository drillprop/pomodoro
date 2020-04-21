const cacheName = 'v1';
const cacheAssets = ['index.html', 'main.js', 'sw.js'];

const initialize = (service: ServiceWorkerGlobalScope): void => {
  service.addEventListener('activate', (e) => {
    // clear previous cache
    e.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cache) => {
            if (cache !== cacheName) {
              return caches.delete(cache);
            }
            return;
          })
        );
      })
    );
  });

  service.addEventListener('fetch', (e) => {
    if (e.request.method !== 'GET') {
      Promise.reject('no-match');
    } else {
      const response = fetch(e.request)
        .then((res) => {
          const resClone = res.clone();
          caches.open(cacheName).then((cache) => {
            if (e.request.method !== 'GET') {
              Promise.reject('no-match');
            }
            cache.put(e.request, resClone);
          });
          return res;
        })
        .catch(() => caches.match(e.request).then((res) => res));
      e.respondWith(response as Response | Promise<Response>);
    }
  });
};

initialize(self as any);

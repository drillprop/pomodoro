const cacheName = 'v1';
const cacheAssets = ['index.html', 'main.js', 'sw.js'];

const initialize = (service: ServiceWorkerGlobalScope): void => {
  service.addEventListener('install', (e) => {
    e.waitUntil(
      caches
        .open(cacheName)
        .then((cache) => cache.addAll(cacheAssets))
        .catch((err) => console.error(err))
    );
  });

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
    e.respondWith(
      fetch(e.request).catch(
        () => caches.match(e.request) as Response | Promise<Response>
      )
    );
  });
};

initialize(self as any);

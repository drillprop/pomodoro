const cacheName = 'v1';
const cacheAssets = ['index.html'];

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
};

initialize(self as any);

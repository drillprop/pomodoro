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
};

initialize(self as any);

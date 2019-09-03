const CACHE_NAME = 'v1';
const filesToCache = [
  './index.html',

  // assets.
  './assets/bootstrap/css/bootstrap.min.css',
  './assets/css/style.css',
  './assets/jquery/jquery-3.3.1.min.js',
];

self.addEventListener('install', (e) => {
  console.log('[ServiceWorker]: installed');
  
  return e.waitUntil(

    self.caches.open(CACHE_NAME)
    .then((cache) => { cache.addAll(filesToCache); })

  );
});


self.addEventListener('activate', (e) => {
  console.log('[ServiceWorker]: activated');
  return e.waitUntil(

    self.caches.keys()
    .then((cacheNames) => {

      // removing stale cache.
      cacheNames.map((oldCacheName) => {
        if (oldCacheName !== CACHE_NAME) {
          console.log(`removing ${oldCacheName}`);
          self.caches.delete(oldCacheName);
        }
      });

    })

  );
});


self.addEventListener('fetch', (e) => {
  console.log('[ServiceWorker]: fetch');

  return e.respondWith(
    caches.match(e.request)
    .then((response) => {

      if (response) {
        console.log(`[ServiceWorker]: fetched from cache (${e.request.url})`);
        return response;
      }

      const clone = e.request.clone();


      return fetch(clone).then((response) => {
        console.log(response);
      });
      
    })
  );
});
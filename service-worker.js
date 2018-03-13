var CACHE_NAME = 'lucasmaues-cache';
var urlsToCache = [
  'index.html',
  'styles/main.css',
  'scripts/main.js',
  '404.html',
  'thanks.html',
  'legal.html',
  'images/lucas-maues-profile.jpg'
];

self.addEventListener('install', function(event) {
  // perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

//

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
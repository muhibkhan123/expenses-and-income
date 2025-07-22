const CACHE_NAME = 'income-expense-manager-cache-v1';
// Corrected list of URLs to cache. Only include files that actually exist locally.
const urlsToCache = [
    './indext.html', // The main HTML file
    '/' // The root path
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                // This will now succeed as it's only caching existing files.
                return cache.addAll(urlsToCache);
            })
    );
});
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // If the file is in the cache, return it.
                if (response) {
                    return response;
                }

                // Otherwise, fetch it from the network.
                return fetch(event.request).then(
                    (networkResponse) => {
                        // This check is the key fix. It now allows caching of CDN files.
                        // We only check that the response is valid.
                        if (!networkResponse || networkResponse.status !== 200) {
                            return networkResponse;
                        }

                        // Clone the response because it's a stream that can only be consumed once.
                        const responseToCache = networkResponse.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return networkResponse;
                    }
                ).catch(error => {
                    // This is an optional but good practice part to handle fetch errors,
                    // for example, when the network is truly down.
                    console.log('Fetch failed; returning offline page instead.', error);
                    // You could return a fallback offline page here if you had one.
                    // return caches.match('/offline.html');
                });
            })
    );
});
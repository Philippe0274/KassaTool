const APP_VERSION = "1.0.3";
const CACHE_NAME = `kassa-tool-${APP_VERSION}`;
const CACHE_PREFIX = 'kassa-tool-';
const FALLBACK_DOCUMENTS = [
    './index_kassa%20tool.html',
    './'
];

self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        await cache.addAll(['./index_kassa%20tool.html']);
        await self.skipWaiting();
    })());
});

self.addEventListener('activate', event => {
    event.waitUntil((async () => {
        const cacheNames = await caches.keys();
        await Promise.all(
            cacheNames
                .filter(cacheName => cacheName.startsWith(CACHE_PREFIX) && cacheName !== CACHE_NAME)
                .map(cacheName => caches.delete(cacheName))
        );
        await self.clients.claim();
    })());
});

self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

self.addEventListener('fetch', event => {
    const request = event.request;
    const isGetRequest = request.method === 'GET';
    const isDocumentRequest = request.mode === 'navigate' || request.destination === 'document';

    if (isGetRequest && isDocumentRequest) {
        event.respondWith(networkFirstDocument(request));
    }
});

async function networkFirstDocument(request) {
    if (request.method !== 'GET') {
        return fetch(request);
    }

    const cache = await caches.open(CACHE_NAME);
    const cacheKey = new Request(request.url, { method: 'GET' });

    try {
        const networkResponse = await fetch(request);
        if (networkResponse && networkResponse.ok) {
            await cache.put(cacheKey, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        const cachedResponse = await cache.match(cacheKey);
        if (cachedResponse) return cachedResponse;

        for (const fallbackUrl of FALLBACK_DOCUMENTS) {
            const fallbackResponse = await cache.match(fallbackUrl);
            if (fallbackResponse) return fallbackResponse;
        }

        throw error;
    }
}
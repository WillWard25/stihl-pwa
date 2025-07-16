self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('pdf-cache').then(cache => {
      return cache.addAll([
        'index.html',
        '2025 PIG 3.pdf',
        'manifest.json',
        'pdfjs/pdf.mjs',
        'pdfjs/pdf.worker.mjs'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

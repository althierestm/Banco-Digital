self.addEventListener('install', (event) => {
    console.log('Service Worker: Instalado');
});

self.addEventListener('fetch', (event) => {
    // Futuramente, colocaremos a lógica de cache para funcionar offline aqui
});

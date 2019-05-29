/* eslint-disable no-restricted-globals */
/* global importScripts */
if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js'
  );

  // Catch possible "SKIP_WAITING" events
  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  // Clean old caches created with `sw-precache`
  self.addEventListener('activate', event => {
    event.waitUntil(
      caches.keys()
        .then(cacheNames => {
          return Promise.all(
            cacheNames
              .filter(cacheName => /^(sw-precache-v3|\$\$\$toolbox-cache\$\$\$)+/.test(cacheName))
              .map(cacheName => { 
                console.log(`SW - Deleting old cache "${cacheName}"`);
                return caches.delete(cacheName);
              })
          );
        })
    );
  });

  /* global workbox */
  if (workbox) {

    // Set debug mode based on search params when registering, like: `sw.js?debug`
    // From: https://stackoverflow.com/questions/50795315/workbox-set-debug-mode-dynamically
    const url = new URL(location.href);
    const debug = url.searchParams.has('debug');
    workbox.setConfig({ debug });

    // Set a specific prefix for this SW, used in cache names
    workbox.core.setCacheNameDetails({
      prefix: 'mapa',
    });

    // use Google Analytics also when off-line
    // DISABLED because of errors when loading "analytics.js"
    // workbox.googleAnalytics.initialize();

    // Take control immediatly (not needed)
    // workbox.core.clientsClaim();

    // injection point for manifest files
    workbox.precaching.precacheAndRoute([
  {
    "url": "asset-manifest.json",
    "revision": "f25490e6bc9d3e878358aa5c9081ba7e"
  },
  {
    "url": "index.html",
    "revision": "1c4bddfa8f98bfbf47be4651ed8f87d5"
  },
  {
    "url": "leaflet.css",
    "revision": "6b7939304e1bc55fac601aabffcc528d"
  },
  {
    "url": "manifest.json",
    "revision": "e9f4c0d913f39c1909f83b9a48a0b22c"
  },
  {
    "url": "static/css/2.bf46f2d3.chunk.css",
    "revision": "3fabac68082bbc118a10c18e0d537309"
  },
  {
    "url": "static/css/main.7aabf786.chunk.css",
    "revision": "568f9cb1eee12ea2112970288cdff33d"
  },
  {
    "url": "static/js/2.0a8e5a5f.chunk.js",
    "revision": "2bc3906aa2894ef74421eb8d285eaba8"
  },
  {
    "url": "static/js/main.fe07a40f.chunk.js",
    "revision": "ffd854270394505c3f5d0af86a47e370"
  },
  {
    "url": "static/js/runtime~main.d653cc00.js",
    "revision": "97ff0aa4b292b0f3bb5103d9ad513530"
  },
  {
    "url": "data/centres.json",
    "revision": "cfdbd56547ed88c93439f29ad5665888"
  },
  {
    "url": "data/estudis.json",
    "revision": "9bf62bcb32e90b3c601c5203b5a88069"
  },
  {
    "url": "data/instancies.json",
    "revision": "868a370949cabec5e99d342c781dfac0"
  },
  {
    "url": "data/poligons.json",
    "revision": "e59ae96f9ba5676057a32ce3d556b472"
  },
  {
    "url": "data/programes.json",
    "revision": "d841aefbaf50bdb82c487761da95b750"
  },
  {
    "url": "ico/favicon.ico",
    "revision": "873b75a8e5dcc1b7944a5b92c2eaa739"
  },
  {
    "url": "ico/icon144.png",
    "revision": "30d8240d18333d395f158353dd5f751d"
  },
  {
    "url": "images/layers-2x.png",
    "revision": "4f0283c6ce28e888000e978e537a6a56"
  },
  {
    "url": "images/layers.png",
    "revision": "a6137456ed160d7606981aa57c559898"
  },
  {
    "url": "images/marker-icon-2x.png",
    "revision": "401d815dc206b8dc1b17cd0e37695975"
  },
  {
    "url": "images/marker-icon.png",
    "revision": "2273e3d8ad9264b7daa5bdbf8e6b47f8"
  },
  {
    "url": "images/marker-shadow.png",
    "revision": "44a526eed258222515aa21eaffd14a96"
  },
  {
    "url": "logos/mini/apadrinem.png",
    "revision": "93f501ccb9b879fd7857b3b12248f74a"
  },
  {
    "url": "logos/mini/assessorament_fp.png",
    "revision": "f572aa3821276928b8f0310fedc40699"
  },
  {
    "url": "logos/mini/avancem.png",
    "revision": "81ba4234b79c1b210637338d1e648a45"
  },
  {
    "url": "logos/mini/emprenedoria.png",
    "revision": "60ce9e3d7e067659ed0f3b91ec371493"
  },
  {
    "url": "logos/mini/etwinning.png",
    "revision": "f8aa2d4e722008bfe5a379313a97254f"
  },
  {
    "url": "logos/mini/fpdual.png",
    "revision": "9ee7575fc15f26a06ae7e32ccfe37453"
  },
  {
    "url": "logos/mini/generic.png",
    "revision": "debe2b585b75a24b8cb9c5041c40116e"
  },
  {
    "url": "logos/mini/gep.png",
    "revision": "a5f942a694a9d3af7eecd61015b0bf0d"
  },
  {
    "url": "logos/mini/impuls_lectura.png",
    "revision": "444ff7c20fe8b721adbaa058b4bc304d"
  },
  {
    "url": "logos/mini/innova_fp.png",
    "revision": "7e992cd6eff3bc9f61ba172f97b8fd9b"
  },
  {
    "url": "logos/mini/logo_cole.png",
    "revision": "30089271e7657bd23b75437f5ddf641b"
  },
  {
    "url": "logos/mini/logo_insti.png",
    "revision": "39d903ed3c4cc0cfa103d753c3c27cc6"
  },
  {
    "url": "logos/mini/programa_magnet.png",
    "revision": "dabf7aad48544ada21456d78bf773da7"
  },
  {
    "url": "logos/mini/projectes.png",
    "revision": "af478cb525847fef49a4f5ddda3dfaec"
  },
  {
    "url": "logos/mini/qualitat_millora.png",
    "revision": "53801e71644ed9f87ce650c95561e8fb"
  },
  {
    "url": "logos/mini/salut_integral.png",
    "revision": "95c9829842e39c13eb8215d14e6eeac2"
  },
  {
    "url": "logos/mini/scap.png",
    "revision": "837bbffa4dff4c1f153692d539229632"
  },
  {
    "url": "logos/mini/servei_comunitari.png",
    "revision": "f7c2445a04b2167ff09267f1d1c1f754"
  },
  {
    "url": "logos/mini/steam_cat.png",
    "revision": "4a37cb3224c289763f1b5bd19682bfd5"
  },
  {
    "url": "logos/mini/talent_creatiu.png",
    "revision": "f8a97989fce5b012b2cf5f2b226f02f3"
  },
  {
    "url": "logos/mini/tda.png",
    "revision": "bf4c74abcb4b569f85c82dc9ec2272ef"
  },
  {
    "url": "logos/mini/xarxa_ca.png",
    "revision": "ce6597da0a1cc22bdf461484929ad90a"
  },
  {
    "url": "logos/portada.png",
    "revision": "13745f92cc0c55f71b9e9746c8be1a55"
  }
], {});

    // custom cache rules
    workbox.routing.registerNavigationRoute(
      // was '/index.html',
      workbox.precaching.getCacheKeyForURL('./index.html'),
      {
        blacklist: [/^\/_/, /\/[^/]+\.[^/]+$/],
      }
    );

    // Cache for images
    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg|svg)$/,
      new workbox.strategies.CacheFirst({
        cacheName: 'image-cache',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 200,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      })
    );

    // Cache for school logos
    workbox.routing.registerRoute(
      /^https:\/\/clic\.xtec\.cat\/pub\/logos\//,
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'school-logos',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 200,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      }),
    );

    // Cache for map tiles
    workbox.routing.registerRoute(
      /^https:\/\/maps\.wikimedia\.org\/osm-intl\/.*\.png/,
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'maps',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 600,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      }),
    );

  } else
    console.log('Workbox could not be loaded. No Offline support!');

}
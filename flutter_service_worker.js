'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"main.dart.js": "75b6607d1367e10bf729acb68ef0e22f",
"version.json": "e2f4476cfb44394ecc01828821d3d3f3",
"assets/images/tmp/supplementarys2.png": "e31836831b57a58215c6ae5269028e09",
"assets/images/tmp/supplementarys3.png": "51483ccbe00d76cdbdd2c4ebe72457f8",
"assets/images/tmp/supplementarys4.png": "a4ad84f5b9414d931836c1fae138d6a5",
"assets/images/tmp/supplementarys5.png": "b4666bd6fd7bee985584033e12ebfdde",
"assets/images/tmp/supplementarys6.png": "0bcff0f116cada787b88f27f7cd463cc",
"assets/images/tmp/supplementarys7.png": "d8d88d1b9f4aeeec8bd03bb44c19db23",
"assets/images/tmp/supplementarys8.png": "0a5cbefb5bc76438e00026243383465e",
"assets/images/tmp/supplementarys9.png": "e8b459b8a4ec95a2cf3b4b723cd1999a",
"assets/images/tmp/supplementarys10.png": "a4ea3057e4fc8b4a98696ef771c0eec4",
"assets/images/Partners.png": "5d652536a0605a1e3d0f25fd3599c4f7",
"assets/images/crm.png": "a977ff131560dad9250c8f97db23199f",
"assets/images/discuss.png": "a78f195db6ded5f25cf688839f8baf8e",
"assets/images/mail.png": "565d81ee6a861de799baeef02be1f3bd",
"assets/images/market_auto.png": "c7c6e57179cf3841801804f2b6439d84",
"assets/images/marpp_logo.png": "d6ff4f3ec5ff4b8b60f3e8c8f95a131e",
"assets/images/marpp_logo.svg": "155c609784462dd83cd89ef58cb2ad9f",
"assets/images/sms.png": "24a1f7bf037b8374808279377a5b3ef8",
"assets/images/speaker.png": "177f4090b371b66252b3b9903dd1d847",
"assets/images/urban_woman.png": "d7084f669ef2403289aee5d9f8e942cd",
"assets/images/phys_icon.ico": "5a79f7bc9f78aa5ef50e86adea672c50",
"assets/images/correlation_map.png": "8ebec4aa04e059644c8d5f1b6cb401c3",
"assets/images/physiotix.png": "8ca66fa5e19847e720f2214d43a38d6c",
"assets/images/supplementarys2.png": "e31836831b57a58215c6ae5269028e09",
"assets/images/supplementarys3.png": "51483ccbe00d76cdbdd2c4ebe72457f8",
"assets/images/supplementarys4.png": "a4ad84f5b9414d931836c1fae138d6a5",
"assets/images/supplementarys5.png": "b4666bd6fd7bee985584033e12ebfdde",
"assets/images/supplementarys6.png": "0bcff0f116cada787b88f27f7cd463cc",
"assets/images/supplementarys7.png": "d8d88d1b9f4aeeec8bd03bb44c19db23",
"assets/images/supplementarys8.png": "0a5cbefb5bc76438e00026243383465e",
"assets/images/supplementarys9.png": "e8b459b8a4ec95a2cf3b4b723cd1999a",
"assets/images/supplementarys10.png": "a4ea3057e4fc8b4a98696ef771c0eec4",
"assets/images/tristen.jpg": "f63286194c0cdf900415a8e88175679d",
"assets/images/merve.jpg": "00679a23225c545036b800b082f37d1f",
"assets/images/vikram.jpg": "478368233671b77516ecca342cb2caa4",
"assets/images/cindy.jpg": "84b05d6f3e8a78f5b6860ccb2f207c1b",
"assets/images/alexandra.jpg": "7a1c1ee4f218ef9a8f484f174d812ce7",
"assets/images/duncan.jpg": "6e277d2b5c0052e8e3e5d042d24d5562",
"assets/images/universityillinois.png": "8dac356057daf939f9236f55f3a4a5c0",
"assets/images/utdentistry.png": "879e4b3dd2ac0f64717c4daa8fbb8e03",
"assets/images/mdanderson.png": "658b735684edabdf0f82d62d6fd0e80c",
"assets/images/matrisomeproject.png": "646468a56ae455ca91cb2b47c4ec3232",
"assets/images/fantom.png": "48128a1ae1c9ddde37fbfca3bd708c58",
"assets/images/hynes.png": "090df8203b9332b14540cb3bb0fce9e9",
"assets/assets/indexed.json": "3e306c15d1117a319c84ec1a3e63c875",
"assets/assets/columned.json": "045158ae7c4246303c299cb9366847ad",
"assets/fonts/Rubik-Regular.ttf": "4b3f06816033d040ef0ed60865adb2d1",
"assets/fonts/Rubik-Bold.ttf": "11598c28bd4c62d359b58d8a810f385f",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/AssetManifest.json": "28c58b8c11eaa55fdfd42a2f3d4ba39a",
"assets/FontManifest.json": "b8aa17b6ad57ae5de639f11ac5add1cb",
"assets/NOTICES": "d75c183a20291426b35181992a111d83",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "42da9b3c696f25267db2fac0e6f27eb5",
"/": "42da9b3c696f25267db2fac0e6f27eb5",
"manifest.json": "5c3f2eab8456151626483d2bf37cc92f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c455e40e7ef59e7c750afbb1fa5bf26a",
"index.html": "ed743a202fe5345fdd78d9dafd973199",
"/": "ed743a202fe5345fdd78d9dafd973199",
"main.dart.js": "67fe7dab7f97eb6cddc7478162af83cb",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "3fad56e51b2d2bc6753f7aac27b7b3b8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "464b88352d1a10ac79034d0ee569a40d",
"assets/AssetManifest.json": "07cc055300192bfce119b62cb9a2dd25",
"assets/NOTICES": "9aa9c25d94704f39db4d5560a2d9e485",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "272f5e71f26864ef29138b0d8d705546",
"assets/fonts/MaterialIcons-Regular.otf": "2ba31c3b70eb6b9912fb2dc3558e813e",
"assets/assets/photo_page/img22.jpg": "4919c3ad5f7fbfe0c4c9a874ee00e54b",
"assets/assets/photo_page/img21.jpg": "c36c27f466518771e03a5346c10c240b",
"assets/assets/photo_page/img20.jpg": "276dcd0ded84ec5e397299552a287228",
"assets/assets/photo_page/img18.jpg": "b0e409516ec2434c410cca7cd73538a8",
"assets/assets/photo_page/img19.jpg": "8448666bab5e784e9f2d3bbd28fac2a1",
"assets/assets/photo_page/img9.jpg": "b04f9a2ef69e0dc629baae13f9613f7b",
"assets/assets/photo_page/img8.jpg": "e446487e53cbebabcc9f9939a1bb779c",
"assets/assets/photo_page/img5.jpg": "e65ea38cdc6d7a00861a39a8ade2e48a",
"assets/assets/photo_page/img4.jpg": "4615450ebe4fe91f92a47e34037a9d54",
"assets/assets/photo_page/img6.jpg": "060a0d88de6bc44f0fd5a607bfd47a75",
"assets/assets/photo_page/img7.jpg": "0a5342b3a9bee38784efc647948cbba7",
"assets/assets/photo_page/img3.jpg": "74d506034014f8bfc833a2728324c0c0",
"assets/assets/photo_page/img2.jpg": "f4865141ecba4eeaef9d2112e54d95c2",
"assets/assets/photo_page/img1.jpg": "4a305c784ae5c3eb03ccd3cf321979f0",
"assets/assets/photo_page/img17.jpg": "4cdb7b8aba304b411a52a70825b3bbe1",
"assets/assets/photo_page/img16.jpg": "10aa6b306170e1ebbdeabccb0c971814",
"assets/assets/photo_page/img14.jpg": "a053901e2d32936a1930ad5857a3fb80",
"assets/assets/photo_page/img15.jpg": "73e04ff6fe669a27b629bea5fce6e143",
"assets/assets/photo_page/img11.jpg": "696a1e2b85ce476876e4bca12b3e4bdd",
"assets/assets/photo_page/img10.jpg": "25b3b124486f1b89f47f07d3e9a85545",
"assets/assets/photo_page/img12.jpg": "e43223860b8f5453e6ec1c9fed76397d",
"assets/assets/photo_page/img13.jpg": "68ab4073389654f550cd1d97a33921da",
"assets/assets/mobile_img/kilombo_group2.jpg": "916703de36cc0d2b394b8c87bfbfbc71",
"assets/assets/mobile_img/kilombo_group1tablet.jpg": "cc9008cdb8e88fb6c6ebc5b3d4b20734",
"assets/assets/mobile_img/logo_mobile_tablet.png": "2ffaad1bba0cd4ce8d327481a7a70733",
"assets/assets/mobile_img/kilombo_group1.jpg": "b37d2605ccc9830f0b50090a8770793c",
"assets/assets/mobile_img/kilombo4.jpg": "6c9e32124f290da0782167f8d0537e47",
"assets/assets/mobile_img/kilombo5.jpg": "936da218c93f254a0a77c48fee544a38",
"assets/assets/mobile_img/gmail_icon.png": "a33af5bad190c31520ba5328ba4b4ff7",
"assets/assets/mobile_img/kilombo7.jpg": "8ad0adca5c86cd59b86cc39fbd6041c6",
"assets/assets/mobile_img/logo_mobile.png": "dd7091d527f9752eb6848d9998658520",
"assets/assets/mobile_img/kilombo5tablet.jpg": "f550d61e67eeb14a3b8ba428f2d6795f",
"assets/assets/mobile_img/kilombo6.jpg": "db335a71c3a8eba40a8ebfdefc6a1e39",
"assets/assets/mobile_img/kilombo2.jpg": "be1619adb69553c808c907effe331871",
"assets/assets/mobile_img/kilombo3.jpg": "24eea90352a5e9f927f5c65094b801ab",
"assets/assets/mobile_img/kilombo3tablet.jpg": "781e5632a898d8951658d935c5b83431",
"assets/assets/mobile_img/kilombo1.jpg": "73f62389e0794ba64cc965dc9fb65739",
"assets/assets/mobile_img/kilombo1deskt.jpg": "e1acf14e56c8122cb480adf7b0ca581b",
"assets/assets/mobile_img/kilombo_logo_black_transparent.png": "fc15183b2ea3c5e4f84f6de156df2b12",
"assets/assets/mobile_img/insta_icon.png": "9d5714d56d30a49ee998557069a2857f",
"assets/assets/mobile_img/kilombo7tablet.jpg": "062333c85fcaec85cefbb9b455e73e78",
"assets/assets/mobile_img/kilombo_group.jpg": "62b139e25bc331d0d8da78237c4cf280",
"assets/assets/mobile_img/kilombo6deskt.jpg": "5c55ad9f19d22bc9a3c73733a5efc298",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

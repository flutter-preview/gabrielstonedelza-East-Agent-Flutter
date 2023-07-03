'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/NOTICES": "154b6eee20b2d6d1a9fb550dbef2b067",
"assets/assets/sounds/alertsound.mp3": "322e69eb3ae18cab699dd51047e6f39f",
"assets/assets/sounds/alert.wav": "62acf35b6e12d7b07c40bc7d5a80022e",
"assets/assets/images/conversation.png": "31934c15374d4ef93c2242521f4afe76",
"assets/assets/images/hiwink.json": "4bd9daa204fa5b4fb2d64a15ec4a2f2c",
"assets/assets/images/xpresspoint.png": "86360f4ddedf4c6ab0b7e90f242936c0",
"assets/assets/images/telephone-call.png": "287a68849dcdf6155a57b3954fd8cff9",
"assets/assets/images/cash-payment.png": "d7a5e2ef202261cdcf454f684271773d",
"assets/assets/images/wallet-add.png": "c2fb93c5e6aa6e01ad405fa422cdc7a2",
"assets/assets/images/gtbank.jpg": "58ba1446ecaa290ae1943c72456b1063",
"assets/assets/images/balance.png": "18a169f237d3fa12a42c26d9240da68d",
"assets/assets/images/customer-support.png": "88382c329ca2b7733293b0ac57a4437f",
"assets/assets/images/AIrtelTigo-Logo.png": "e96675956c5dd05b2de61bf984638af0",
"assets/assets/images/budget.png": "03ac2b1d79c88a254cc8b5d8f75a51f5",
"assets/assets/images/money-withdrawal.png": "33949470356d162ce0a17ba66f1ef61c",
"assets/assets/images/fraud.png": "e14aef7f9b7c190e96ace9a74faf4230",
"assets/assets/images/authorization.png": "e19bd1a0c146191cafa01c96b90134d7",
"assets/assets/images/commissions.png": "141cdceed3cd8a8ab0970219e663d639",
"assets/assets/images/manager.png": "fa372138d9417a6706a832669b6c2ff4",
"assets/assets/images/fidelity-card.png": "3db1ac47a144a05c2961b65f0ae22fde",
"assets/assets/images/report.png": "87174f98ae24ba8d9dbcccbd55e4d385",
"assets/assets/images/logo.png": "20723a08889fb849d49f516f072ebe8d",
"assets/assets/images/commission.png": "c2a27f74957c766493196d52a181a7d7",
"assets/assets/images/digital-wallet.png": "faf78a5c233812377d2c3821c28b8f6a",
"assets/assets/images/calbank.png": "794f484c129ede23b732f51c75e076c0",
"assets/assets/images/98432-loading.json": "fb54677f8458b0f168a60ec2f18bd3d4",
"assets/assets/images/update.png": "6af7b5fa3800a79df03d66e211a6c33a",
"assets/assets/images/74569-two-factor-authentication.json": "e0fc1049f0ebdea3c65bc2c46fd00afe",
"assets/assets/images/hold.png": "c83bd452cf31cac9fb30cce1e8b718e6",
"assets/assets/images/accessbank.png": "93b45b58b461a859909ab0594e41f013",
"assets/assets/images/bank.png": "24d64f87cde53cb7878001132b8ed178",
"assets/assets/images/forapp.png": "a4b0c6abefef552802ba8cc8d80b40e6",
"assets/assets/images/mon.png": "a0e55fcb44888168d0193a8eeffa62ee",
"assets/assets/images/wallet.png": "8de6827e57075cfec6ab2f3cff6535a8",
"assets/assets/images/abaglogo.png": "8de6a30f625ae943893c7bc5e41af565",
"assets/assets/images/136912-update-app.json": "f5b2aee2e2c8be76997f2f23835d1f8a",
"assets/assets/images/Vodafone-logo.png": "4fd4d5b37b66c26a7c67187321643540",
"assets/assets/images/group.png": "5a729850f49b945fb3b8040aa8aab43f",
"assets/assets/images/96238-auth-failed.json": "cf759e2f33e7bb66c70a40e4bc8e8f61",
"assets/assets/images/ecomobile-card.png": "71a18e7f1824f0352b33bee84db062c5",
"assets/assets/images/png.png": "cf07b961b19ae61ab455171dcd6bae37",
"assets/assets/images/pay.png": "d6e555b20415b270041d6cc4a5ee015b",
"assets/assets/images/sad.png": "86f2d140ff2c1b521e67cb9badbb6fcb",
"assets/assets/images/full-branch.jpg": "14bb84fe77be883669892d4eb0d50a0d",
"assets/assets/images/clerk.png": "c1f4a352f773aef3965dca6e2a44eb17",
"assets/assets/images/momo.png": "6224775c263e1cc979a95db66a3f52cf",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "55f6329eca243562da4252b107aae6e0",
"assets/AssetManifest.json": "97a05603cf8a5595f388b27fe74659b4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/fonts/MaterialIcons-Regular.otf": "d6db2248e7d63aa35295d07f0c8a7ee3",
"index.html": "d89448af8f48af1c6e637f23a8183942",
"/": "d89448af8f48af1c6e637f23a8183942",
"main.dart.js": "652ecc25b309cb41c6222a0e9ac79235",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"version.json": "97009724a8ae49cf9efdc4b3a12a0dfa",
"manifest.json": "4e6d766eecb03356c1b92f02ccc6c478",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"};
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

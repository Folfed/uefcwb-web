'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ace0f859dfb3c6d56b35de3d8c49fe5a",
".git/config": "5b62984f6edf39119cb25c8d5397fb33",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4cc13fd47856e31c618b47671e3012bb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "23b173f147d32dfcf83496593ced51f0",
".git/logs/refs/heads/gh-pages": "23b173f147d32dfcf83496593ced51f0",
".git/logs/refs/remotes/origin/gh-pages": "afe1b4ecfc5be669e204c61ca2aaa409",
".git/objects/07/21ffd05323d12563c8f01d18376e83648279b4": "5410ed28b2a6b24f5c97560d4823067b",
".git/objects/07/803cde656435602fb547411389827f69a84d38": "9894f6799b645445bd5381defb7af788",
".git/objects/0b/3da1a176b196e660d24eb98ec41c4e0cc7726e": "d1d8ddfc33b32bc2d61926b9b11378a1",
".git/objects/0d/ca9a30e30df943f9791ec8a67290535f2a1a4b": "13f6cb7b85b696a7dea93966db931361",
".git/objects/17/549fdebc46e713fdb41166fd287cd890f3e35a": "17b51db7c9f47521efb84c5f0aeefda6",
".git/objects/19/1581d7215a9c5abcad50b8eeec03df75e7a375": "f14c5ec71cd6ec2d21e5a66dbc4aa1c2",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1a/f38a195ecb29b1ed44c5f8a567ac16d41cf3bd": "6d9d12b92719d962534b1670534efbc6",
".git/objects/1b/0df82276c3037de281f3f0d89415a99a7e86d3": "8436575a786f1dca9becc75cb43aee10",
".git/objects/32/47e5e911b4664cb3b870a01908fd4ccf1288f4": "1fcaab075ebf723ee1b40124f5ba3ffe",
".git/objects/39/737c93706cef04fea3659756a86c5236d4e0d2": "89544f4c860a83eb223b191ccead4b2d",
".git/objects/41/f6b40175908ad7fbfb27bde1fce0f949848506": "8e195c68f630da47bca26e31f0bd25e9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/5953ac6e3a25a3ffad952dc042c40f57d7d099": "19bb56e0c991b11bd38a8f3e00dc2be2",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/a488596f38baed867861673d653779a28926e7": "497c3387498d625ca1752e57edd3ddb0",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/56/a1d0c36494b99777fc80e1318cf812ff083362": "d226992c5919b54b88ebb5c66718a862",
".git/objects/56/b0c78378a486564de047bc6e8d6e0dde5871e6": "24831991e77676943345e269afec9e30",
".git/objects/5f/65051d09a36ddbf395e044ba629d89a17f178c": "47c5e170f701a5ea89ea534de8c7fec5",
".git/objects/61/9ea58f2bdafb2df1ac2cf6b6acbc160a3450eb": "5ec1d0a6df8566832d9669af71ff5e3f",
".git/objects/64/eb6a7b62586dd0d42f7769de5dd3d4e21b16c1": "61d9ce78924fa376fe0e251ab9789856",
".git/objects/65/919fcc14e8da8175348652746e53b95b92fd5f": "70da4fd5d47674d2ed2ef303c23f5168",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/00ec246316907aa7de414d33178a6e003c4135": "d776f32bf7c0a28eb66ee32f0da3fab3",
".git/objects/6e/b8bad294ff07ac0755ef204acd8aac57740d9d": "838f4708a812c172de78745f295638ed",
".git/objects/70/9174c96089cd72614dbd8b1395513b1eedbe48": "04d17f57565e8391d6abab0af3009cbb",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/b7b67b3479a1fa20121982665906c23baaa6f1": "a3a9e6e864b55d72071e78013f2555f6",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/5af65df694c0b959255fccd8a430a940298079": "5253ae3ce11fda6d8d15c5fd5f7eb6ce",
".git/objects/81/a45b08d455a2e9911730ebc7c20b5e8cb829f7": "f88938b0c2ba1b9b0dff051fa2d0f22b",
".git/objects/83/f9cb0ab4c62f7da324628355a592be263f74c7": "74d2b5d2c1fbe9bb648612f442d84c6c",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/b44464b179f3e4782ee3a3f5729506b16c9695": "0e59b41838691b76d4a084f225166227",
".git/objects/97/accc88d01f13b7d7cea8a0150e30bc0e682852": "da5e40f1ee3503093c6121018087a760",
".git/objects/98/904e493a440de916ee4a45493a1c8884d6aaf2": "11cace8619d6c88b4e9dbb35c1df26fd",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/1cb08c57254c44c12f5c04d34468378671685e": "899da8df49f3d54d11b30b3be36acd60",
".git/objects/ae/65167233816218d7e9ba96583109e9291db9ec": "c6b130500ab6aa848bc5156e4d6f7e31",
".git/objects/b5/452f74a28fd64bffac779977dc44b9f8cb09a2": "f4eb58983aa6a5c1f2852766edafbe9b",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/be/250a2373467df1f85396b9c7df0d11c289e69a": "e7b3c38cf838696a64e0640e895d091d",
".git/objects/c2/71cae91982be99faa63861d08ebb68178c1d14": "5908ac718c931be68b12a4b1017e5f0e",
".git/objects/c6/e3a2882410d3f5d05e130bd25d28ad07e3de19": "99cd774175c64cdfef2914018db7bce2",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ce/45682795322ffd10f65640c1d2f5a26f4bc887": "3545f0fdf3e81f70288e370ca5ba273b",
".git/objects/d1/b5bc1be1d1113bfc693011d06f4455700a4932": "634055daaea08b6213354edf16069cfa",
".git/objects/d2/5efb4c14a115d48489a0c63958295016b772e0": "d4e075ef47194ed0d40375ef78c92db0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/58abc5570b97e031c4ca8a582a065c0479a6e7": "6db033489a92f8766de4664698c864a4",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/6eeb49e07c59df93a4cd6a906fe5cf5062a799": "14ae53f1b3119b1a26fa975c3ce0e226",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e5/2f7458d5c5351d7457632b320ff5389e197d82": "a2e34ee6979063f708ac3403b2aa8f2f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ed/5e0774fdb03e07c092e2d0c800421eeac12fbb": "8f7348497cc894c93f8297ea1a8705fe",
".git/objects/f1/819068123f923af5889df27a2513d72ac66962": "6ec4932d701df9dc29b3f16d2e6f6c4d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/1bd3ba3eb93d97617d107496c1c6870b9f4693": "e23e124402ca35de6c87ae45e25a728c",
".git/objects/f4/7dcf08d89c8200ea26cd8711f8534058c1a44f": "c053ac00ce44e8cce1e74f009ba6211c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/26f8171d0f3777ca60debe23692ef7ab4f8227": "f2f81b8fac6af5e16a2630201648a1a2",
".git/objects/fb/10644347d95e230087587944a184981f439336": "223ae297ac07ea19de2ba0d39045606c",
".git/objects/fd/5c31905de6037c199f90e2e71e8edb7de9dc9c": "be13399e20b7fbcd1368b8bb82b951d1",
".git/refs/heads/gh-pages": "059aafa746d4850d8ccaa6dbf0c1c0d2",
".git/refs/remotes/origin/gh-pages": "059aafa746d4850d8ccaa6dbf0c1c0d2",
"assets/AssetManifest.bin": "8616235e3ca247c104cb4bd630832c42",
"assets/AssetManifest.bin.json": "9db93d4ebdac4a68993383221620ed83",
"assets/AssetManifest.json": "7c9cec8108c2753d999d875a53fab488",
"assets/assets/json/uefc.json": "371a55cd2b4d61aaa3d262cb7a425b6b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1282e65162035a2ced4929cf1498baaa",
"assets/NOTICES": "21765c8e6401b8db3d7114190941e782",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "542a35d67a890e8b4725a337b57ca7e2",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "070425fe65c5673e3905cdf5205d8aa6",
"icons/Icon-192.png": "aa5bd2c4b7172656c1789d203edc4d85",
"icons/Icon-512.png": "4b9ba14767288a06c74de2a32b62faf2",
"icons/Icon-maskable-192.png": "aa5bd2c4b7172656c1789d203edc4d85",
"icons/Icon-maskable-512.png": "4b9ba14767288a06c74de2a32b62faf2",
"index.html": "ad0159f948e7fa7b3ffffadf614419b3",
"/": "ad0159f948e7fa7b3ffffadf614419b3",
"main.dart.js": "9ff744036b13f9b5788f7ecfe5655e35",
"manifest.json": "35b2b9c33dedd9fc3265a2f9bd643a52",
"version.json": "13467e55fe3775c04b6388d3dea322ee"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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

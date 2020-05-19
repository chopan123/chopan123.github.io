'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/assets/images/icon-ionic-ios-phone-portrait.png": "e2e15351d697e75412f08892ff143e78",
"assets/assets/images/text-path.png": "c1e0e9d0b2629510ffa36d88cecc07f7",
"assets/assets/images/icon-ionic-ios-arrow-back.png": "f0ca11df6afe528ed050bc40065693a8",
"assets/assets/images/imagen-2.png": "5e38fdaa96714f0fa338ca6d711053b8",
"assets/assets/images/hurdlestep-.png": "14d3395782314008b082de436626136e",
"assets/assets/images/boton-01.png": "fbfbbff4bd181bc8bcad2b067410a1fd",
"assets/assets/images/background-dots-23.png": "29e52233760b190a443cc4ae5dd7cb05",
"assets/assets/images/icon-ionic-ios-close.png": "1f7e53dd4a7c51a61c75d22dd487081d",
"assets/assets/images/boton-05.png": "5645ff03881b0adb873344769ce94285",
"assets/assets/images/icon-material-fiber-manual-record.png": "dfd466d8946c0ea3655aab8c93dd504c",
"assets/assets/images/trazado-5.png": "bdaf30dc341355cf2c338b2827e539a4",
"assets/assets/images/background-dots-8.png": "541972c48474f5f28d2f5903dc21a363",
"assets/assets/images/icon-ionic-ios-pause.png": "100b8a27298f4bed18e08b6d29e693ac",
"assets/assets/images/trazado-1-2.png": "30edc32fe4e3021e51f4713f748a2ba4",
"assets/assets/images/meghan-holmes-wy-l8w0zcpi-unsplash.png": "cdcd1127e0c4c780124377ef49fbd2d7",
"assets/assets/images/icon-awesome-play.png": "71a18043d1ff9c5aee7460d0b5af4ccc",
"assets/assets/images/imagen-2-3.png": "5e38fdaa96714f0fa338ca6d711053b8",
"assets/assets/images/trazado-6.png": "bd6ddaa8d7adf409c562ac97183dc959",
"assets/assets/images/icon-ionic-ios-arrow-back-2.png": "f0ca11df6afe528ed050bc40065693a8",
"assets/assets/images/background-dots-22.png": "e769cb49b9c489c2efce5ebc0d060b69",
"assets/assets/images/grupo-1.png": "40b76f1b9093b006306e855e224467de",
"assets/assets/images/trazado-4.png": "bdaf30dc341355cf2c338b2827e539a4",
"assets/assets/images/trazado-7.png": "1c25e966fbc95982b763f4255be2c853",
"assets/assets/images/background-dots-7.png": "e769cb49b9c489c2efce5ebc0d060b69",
"assets/assets/images/background-dots-17.png": "29e52233760b190a443cc4ae5dd7cb05",
"assets/assets/images/icon-ionic-ios-arrow-back-3.png": "84323adbd4433626ce273965e1bc1ea6",
"assets/assets/images/imagen-1.png": "162bee5c45501af5baf7dcc594a2ccb8",
"assets/assets/images/boton-04.png": "f75dff1058ce02413e0a88a068955759",
"assets/assets/images/imagen-1-3.png": "162bee5c45501af5baf7dcc594a2ccb8",
"assets/assets/images/boton-03.png": "f4b43f5fae6bfad2bb9cfffd8628e5d5",
"assets/assets/images/2.0x/icon-ionic-ios-phone-portrait.png": "5732b34dae98ff26c55aae13fade2708",
"assets/assets/images/2.0x/text-path.png": "46c7985445bdf70a2bd98170d7a84c9e",
"assets/assets/images/2.0x/icon-ionic-ios-arrow-back.png": "8d7f5d5e5a513dac6dadcd7b2bd26525",
"assets/assets/images/2.0x/imagen-2.png": "6aac9cf253c2c8a2860a95080fbb8e61",
"assets/assets/images/2.0x/hurdlestep-.png": "08c4b948acf3442bd7cf68dac96592cb",
"assets/assets/images/2.0x/boton-01.png": "f952a2641309b61da4c21aca178ce3bf",
"assets/assets/images/2.0x/background-dots-23.png": "c2fa37ec62cbf31894b83dfebd062110",
"assets/assets/images/2.0x/icon-ionic-ios-close.png": "b8494b150a0de321415150013e36a889",
"assets/assets/images/2.0x/boton-05.png": "c45f7f48bace55ca680d0f19e3967842",
"assets/assets/images/2.0x/icon-material-fiber-manual-record.png": "5a23172f1ef7faef9340504b8bb69e55",
"assets/assets/images/2.0x/trazado-5.png": "1c9e569025bc8b18bb70bb1318f3f4e9",
"assets/assets/images/2.0x/background-dots-8.png": "2c6f8e1b92111245e85db03a96673f34",
"assets/assets/images/2.0x/icon-ionic-ios-pause.png": "299460e1d94d5554b0486a9c5aec3b47",
"assets/assets/images/2.0x/trazado-1-2.png": "9e6460aeb8bcbf5bbd050e714e6cf800",
"assets/assets/images/2.0x/meghan-holmes-wy-l8w0zcpi-unsplash.png": "5dc420c15a83ccb919121f4860956293",
"assets/assets/images/2.0x/icon-awesome-play.png": "ee0ea2107312ae54313307fb168fb8b0",
"assets/assets/images/2.0x/imagen-2-3.png": "6aac9cf253c2c8a2860a95080fbb8e61",
"assets/assets/images/2.0x/trazado-6.png": "ceafd9d768c940b5a2873bbc2d5f0780",
"assets/assets/images/2.0x/icon-ionic-ios-arrow-back-2.png": "8d7f5d5e5a513dac6dadcd7b2bd26525",
"assets/assets/images/2.0x/background-dots-22.png": "9950d583b4869092d8c396de740e782e",
"assets/assets/images/2.0x/grupo-1.png": "0129f81f8ed42dfd6a45710a0bde5613",
"assets/assets/images/2.0x/trazado-4.png": "1c9e569025bc8b18bb70bb1318f3f4e9",
"assets/assets/images/2.0x/trazado-7.png": "8cf4e60448f00318674ca8aa626776c3",
"assets/assets/images/2.0x/background-dots-7.png": "9950d583b4869092d8c396de740e782e",
"assets/assets/images/2.0x/background-dots-17.png": "c2fa37ec62cbf31894b83dfebd062110",
"assets/assets/images/2.0x/icon-ionic-ios-arrow-back-3.png": "b46581546d14ba1337ac4f09e261b8ff",
"assets/assets/images/2.0x/imagen-1.png": "85109e78b8e609a2aec7eb52f6d83497",
"assets/assets/images/2.0x/boton-04.png": "6b126908a4b6da85aed65d24bbe391e3",
"assets/assets/images/2.0x/imagen-1-3.png": "85109e78b8e609a2aec7eb52f6d83497",
"assets/assets/images/2.0x/boton-03.png": "57169f22f0153f153da5b1ae3952e134",
"assets/assets/images/2.0x/elipse-3-3.png": "61fa7239798e26c2efac013b53d6a141",
"assets/assets/images/2.0x/componente-3--1.png": "b14af11b055e3fe5f069536f8171bc13",
"assets/assets/images/2.0x/background-dots-9.png": "2c6f8e1b92111245e85db03a96673f34",
"assets/assets/images/2.0x/trazado-3.png": "4184abae53ef50737dc1759fa157e8a6",
"assets/assets/images/2.0x/boton-02.png": "3531adb07a81c7f9ddcc6220c9221ec4",
"assets/assets/images/2.0x/meghan-holmes-wy-l8w0zcpi-unsplash-4.png": "f0c7d252169cfed24cd8afb9906fd6b5",
"assets/assets/images/2.0x/background-dots-20.png": "c2fa37ec62cbf31894b83dfebd062110",
"assets/assets/images/2.0x/icon-awesome-play-2.png": "b5ba9ca4a1613081ec8e0815cbd1dedf",
"assets/assets/images/2.0x/icon-ionic-ios-settings.png": "64340998f6a4a82464dc57f26d4efac5",
"assets/assets/images/2.0x/chile-flag-icon-64-3.png": "cca098b1d9133c87e01980e58f269951",
"assets/assets/images/2.0x/background-dots-4.png": "9950d583b4869092d8c396de740e782e",
"assets/assets/images/2.0x/icon-ionic-ios-close-2.png": "63ec879976bdbd4c063f20c15766c9c9",
"assets/assets/images/2.0x/background-dots-10.png": "2c6f8e1b92111245e85db03a96673f34",
"assets/assets/images/2.0x/trazado-4-2.png": "54164569d795eddad0fa0b8b0375e3d2",
"assets/assets/images/2.0x/icon-awesome-crop-alt.png": "8d76e2e86d4b33f135efac88d23dae50",
"assets/assets/images/2.0x/background-dots-6.png": "2c6f8e1b92111245e85db03a96673f34",
"assets/assets/images/2.0x/background-dots-3.png": "c2fa37ec62cbf31894b83dfebd062110",
"assets/assets/images/2.0x/background-dots-16.png": "9950d583b4869092d8c396de740e782e",
"assets/assets/images/2.0x/background-dots-19.png": "9950d583b4869092d8c396de740e782e",
"assets/assets/images/2.0x/elipse-3-6.png": "40221789b6547071e954053853f73d5a",
"assets/assets/images/2.0x/icon-ionic-ios-body.png": "5dc60ef89333e9a426d41be47c8d8f91",
"assets/assets/images/elipse-3-3.png": "e932ff71890f83f3616ad092697c6fb3",
"assets/assets/images/componente-3--1.png": "6a732632af1ffbe5799f20f60b0f2d59",
"assets/assets/images/background-dots-9.png": "541972c48474f5f28d2f5903dc21a363",
"assets/assets/images/trazado-3.png": "d98d02de782c407cef646a497dce8cb1",
"assets/assets/images/boton-02.png": "78b918112ccd3355ea62ce2c44951bcf",
"assets/assets/images/meghan-holmes-wy-l8w0zcpi-unsplash-4.png": "7fdf54bfba9baac34b168da27c9c8e8e",
"assets/assets/images/background-dots-20.png": "29e52233760b190a443cc4ae5dd7cb05",
"assets/assets/images/icon-awesome-play-2.png": "d4832f6fd16e1a4d01629b5019bf6d97",
"assets/assets/images/icon-ionic-ios-settings.png": "434c553a996cbb53770459623298be6a",
"assets/assets/images/chile-flag-icon-64-3.png": "d7afb3f5676d46921e009bab5c8ff36d",
"assets/assets/images/background-dots-4.png": "e769cb49b9c489c2efce5ebc0d060b69",
"assets/assets/images/icon-ionic-ios-close-2.png": "87ad20e4dcc751ca52ff5d7ac5ae5377",
"assets/assets/images/background-dots-10.png": "541972c48474f5f28d2f5903dc21a363",
"assets/assets/images/trazado-4-2.png": "f780cca4c0fc8154f78aed6443dc7276",
"assets/assets/images/3.0x/icon-ionic-ios-phone-portrait.png": "77dd553acac660e60c5c1cad01c7704c",
"assets/assets/images/3.0x/text-path.png": "2dcf4653ce931b42d9a3395699ad0278",
"assets/assets/images/3.0x/icon-ionic-ios-arrow-back.png": "061202ac69d44d67745779f609a1c668",
"assets/assets/images/3.0x/imagen-2.png": "5470bdb79a061f17bf8d68e883aec60f",
"assets/assets/images/3.0x/hurdlestep-.png": "858326af1035bebea9733323a5b7f7f8",
"assets/assets/images/3.0x/boton-01.png": "eaf6c91e3c1366580e0543a9e6a211f6",
"assets/assets/images/3.0x/background-dots-23.png": "afaa2b430b9bc27f65851bbc1473645c",
"assets/assets/images/3.0x/icon-ionic-ios-close.png": "52ec1086387c1201dc5db7174733b361",
"assets/assets/images/3.0x/boton-05.png": "3f2f769ad448cb4eb70358f87e24d033",
"assets/assets/images/3.0x/icon-material-fiber-manual-record.png": "f58d9a932e22693aa2cfd09f2e67c090",
"assets/assets/images/3.0x/trazado-5.png": "69845721f72a314a070777f6e8970872",
"assets/assets/images/3.0x/background-dots-8.png": "862acb2704ffe15ae24a51706c8078f6",
"assets/assets/images/3.0x/icon-ionic-ios-pause.png": "a0d74c1ea70cedcb42bb9981803612db",
"assets/assets/images/3.0x/trazado-1-2.png": "946499a5d7bc916907e2d3b63a6e4a1b",
"assets/assets/images/3.0x/meghan-holmes-wy-l8w0zcpi-unsplash.png": "e79d67f5d5f47b22a4452b6715327da1",
"assets/assets/images/3.0x/icon-awesome-play.png": "914c21a689b72f50ff7b9452e98f2736",
"assets/assets/images/3.0x/imagen-2-3.png": "5470bdb79a061f17bf8d68e883aec60f",
"assets/assets/images/3.0x/trazado-6.png": "bccd23b91dc23ce7bfc950237ab8fde3",
"assets/assets/images/3.0x/icon-ionic-ios-arrow-back-2.png": "061202ac69d44d67745779f609a1c668",
"assets/assets/images/3.0x/background-dots-22.png": "8680cfb62d0df7bbe7014410575abc79",
"assets/assets/images/3.0x/grupo-1.png": "6a22596ddc24e167d2c2f3fcc42a8ac1",
"assets/assets/images/3.0x/trazado-4.png": "69845721f72a314a070777f6e8970872",
"assets/assets/images/3.0x/trazado-7.png": "80f7cf49f4f111297a79055d54261c35",
"assets/assets/images/3.0x/background-dots-7.png": "8680cfb62d0df7bbe7014410575abc79",
"assets/assets/images/3.0x/background-dots-17.png": "afaa2b430b9bc27f65851bbc1473645c",
"assets/assets/images/3.0x/icon-ionic-ios-arrow-back-3.png": "721c273ebec2ae2a0aa23e501a2bc098",
"assets/assets/images/3.0x/imagen-1.png": "11d685a66821b4c0808b2b21055422ca",
"assets/assets/images/3.0x/boton-04.png": "b4c441778c10321e9e72580c4bf618a2",
"assets/assets/images/3.0x/imagen-1-3.png": "11d685a66821b4c0808b2b21055422ca",
"assets/assets/images/3.0x/boton-03.png": "d590fc81d496e3f7fba94681bb893c65",
"assets/assets/images/3.0x/elipse-3-3.png": "86911d1693a42d7d5e9e63cd968d7e90",
"assets/assets/images/3.0x/componente-3--1.png": "204e13c5af51e0603118744f5d8e8a62",
"assets/assets/images/3.0x/background-dots-9.png": "862acb2704ffe15ae24a51706c8078f6",
"assets/assets/images/3.0x/trazado-3.png": "f9ceb23b35ac26185c404f152e77c584",
"assets/assets/images/3.0x/boton-02.png": "c2a9907e11bde55f756f869b888dc46a",
"assets/assets/images/3.0x/meghan-holmes-wy-l8w0zcpi-unsplash-4.png": "b6d41dcf66efd5ba27e43ee55c9190f5",
"assets/assets/images/3.0x/background-dots-20.png": "afaa2b430b9bc27f65851bbc1473645c",
"assets/assets/images/3.0x/icon-awesome-play-2.png": "bd3626e20e462087cb7a36c8dc02da2a",
"assets/assets/images/3.0x/icon-ionic-ios-settings.png": "927420023be8928620aac215c16a0b77",
"assets/assets/images/3.0x/chile-flag-icon-64-3.png": "4b6f69078472677912e0ad5e27f35676",
"assets/assets/images/3.0x/background-dots-4.png": "8680cfb62d0df7bbe7014410575abc79",
"assets/assets/images/3.0x/icon-ionic-ios-close-2.png": "cecfb002c49dabb2414184eccaca06e2",
"assets/assets/images/3.0x/background-dots-10.png": "862acb2704ffe15ae24a51706c8078f6",
"assets/assets/images/3.0x/trazado-4-2.png": "b36e6349475952e6b0e31fdfda210ed2",
"assets/assets/images/3.0x/icon-awesome-crop-alt.png": "87008e22fe53182653c29144031b54a1",
"assets/assets/images/3.0x/background-dots-6.png": "862acb2704ffe15ae24a51706c8078f6",
"assets/assets/images/3.0x/background-dots-3.png": "afaa2b430b9bc27f65851bbc1473645c",
"assets/assets/images/3.0x/background-dots-16.png": "8680cfb62d0df7bbe7014410575abc79",
"assets/assets/images/3.0x/background-dots-19.png": "8680cfb62d0df7bbe7014410575abc79",
"assets/assets/images/3.0x/elipse-3-6.png": "f3d963223c6a0b11536f66a1f4e77ebb",
"assets/assets/images/3.0x/icon-ionic-ios-body.png": "631eeb94a86a076f61d9c7683e4191d7",
"assets/assets/images/icon-awesome-crop-alt.png": "a9d737f9c6449dda72b0fb60ea28c010",
"assets/assets/images/background-dots-6.png": "541972c48474f5f28d2f5903dc21a363",
"assets/assets/images/background-dots-3.png": "29e52233760b190a443cc4ae5dd7cb05",
"assets/assets/images/background-dots-16.png": "e769cb49b9c489c2efce5ebc0d060b69",
"assets/assets/images/background-dots-19.png": "e769cb49b9c489c2efce5ebc0d060b69",
"assets/assets/images/elipse-3-6.png": "f6d0c575747e8d605306194548627747",
"assets/assets/images/icon-ionic-ios-body.png": "b55e0537c4d51e4061da33a6fb197209",
"assets/assets/fonts/Roboto-Regular.ttf": "18d44f79b3979ec168862093208c6d7d",
"assets/assets/fonts/Roboto-Bold.ttf": "7c18188784f21915f42a5b3bc9d91e20",
"assets/assets/fonts/Roboto-Light.ttf": "c6cdfded4630ba6d9a2dceb70aa4fe0f",
"assets/assets/fonts/Roboto-Medium.ttf": "d52f011be65b281ba8ca1c3f689cf133",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "48bfcdcb617746c7018b96f842c74d56",
"assets/AssetManifest.json": "48b065da2c62921e1ddc973b2cece4fa",
"assets/FontManifest.json": "db50da1317e378db916faf8455923b07",
"main.dart.js": "5b2b52aed02838c80698d69f9576632a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "96615d4d0aadbebb421b22d1ff176b92",
"/": "96615d4d0aadbebb421b22d1ff176b92",
"manifest.json": "1529ac57e7c9d669f3a4a18ae136c250"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "1b72f5c0db322b3377b03cf2a29322af"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.e789a666.css",
    "revision": "e02e557c87fcf97706c27f96f6e1924b"
  },
  {
    "url": "assets/img/Project_add.82e84977.png",
    "revision": "82e84977892feaccd3a7e5736d2459ff"
  },
  {
    "url": "assets/img/Project_delete.d3e34ad4.png",
    "revision": "d3e34ad47880ed9aa6f841d13f5a525b"
  },
  {
    "url": "assets/img/Project_get(all).292ac1a6.png",
    "revision": "292ac1a6c17a0f1465f06e76365965ca"
  },
  {
    "url": "assets/img/Project_get(id).fbb32db1.png",
    "revision": "fbb32db1a69da5a9f0e13b9b6116156a"
  },
  {
    "url": "assets/img/Project_put.f16bc65c.png",
    "revision": "f16bc65c24fa71f106db8f2c08bf531c"
  },
  {
    "url": "assets/img/relationalSchema.03c9cba4.png",
    "revision": "03c9cba456d7d301109ba0cfdbecafec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Task_add.268c446f.png",
    "revision": "268c446f26e92c36a69e96a90ed6f0de"
  },
  {
    "url": "assets/img/Task_delete.8010a64b.png",
    "revision": "8010a64ba423cbb28ea5dd263cad70a4"
  },
  {
    "url": "assets/img/Task_get(all).49a77644.png",
    "revision": "49a7764496c4ddb39b1e9fa264332634"
  },
  {
    "url": "assets/img/Task_get(id).638a77c8.png",
    "revision": "638a77c8690033b4e2b429efdcc0e035"
  },
  {
    "url": "assets/img/Task_put.20535624.png",
    "revision": "205356240a12c84a299fbe38559484ab"
  },
  {
    "url": "assets/img/User_add.1336d9e8.png",
    "revision": "1336d9e8308e244bf56beff0994d4455"
  },
  {
    "url": "assets/img/User_delete.16a7131d.png",
    "revision": "16a7131dde4c0cb1f3556d8cb26898de"
  },
  {
    "url": "assets/img/User_get(all).027bf627.png",
    "revision": "027bf6275eeff6f3a18423a82d2a2878"
  },
  {
    "url": "assets/img/User_get(id).05763179.png",
    "revision": "05763179606c4ed2266ae8dab4d9cafe"
  },
  {
    "url": "assets/img/User_put.dabbfd7a.png",
    "revision": "dabbfd7a0f41f2a46c42a90229351ac9"
  },
  {
    "url": "assets/js/1.e647d082.js",
    "revision": "bcc0b9f0c6a31403eb84cf05bf45eb0d"
  },
  {
    "url": "assets/js/10.b162298d.js",
    "revision": "329d888c1afb50a44d617ce6f317487b"
  },
  {
    "url": "assets/js/13.0cb61c15.js",
    "revision": "ac4f3fe749811b8e7322af0ac02b07a5"
  },
  {
    "url": "assets/js/14.8be68c44.js",
    "revision": "c492138fa5d840e57293e8416ee39326"
  },
  {
    "url": "assets/js/15.99633a4f.js",
    "revision": "86a28369a719249c9b78821ec49d13c9"
  },
  {
    "url": "assets/js/16.2bc577d7.js",
    "revision": "18e9a7b58be1e7e5f75822bfa14c22e0"
  },
  {
    "url": "assets/js/17.c5ae0f53.js",
    "revision": "d686763b7d6b28772fb0b79edadd8e6e"
  },
  {
    "url": "assets/js/18.bbb3bd3c.js",
    "revision": "0f8fcc5459702246f890a0e38ffafda6"
  },
  {
    "url": "assets/js/19.9b8f087f.js",
    "revision": "324990ca660d7ed766a310931c2b5664"
  },
  {
    "url": "assets/js/2.2add117b.js",
    "revision": "bf534233382884e8f18ce17b15e8e637"
  },
  {
    "url": "assets/js/20.d2a4f19e.js",
    "revision": "446b890087ba4f04d0aa67520e55a47e"
  },
  {
    "url": "assets/js/21.39425e04.js",
    "revision": "8b7c9b61e56f99d768ff23d21e9d935d"
  },
  {
    "url": "assets/js/22.d2077878.js",
    "revision": "9f6e9904ba0cfa4dc7bc50e47142a6e3"
  },
  {
    "url": "assets/js/23.3ec6ef11.js",
    "revision": "d0e91598f11e346698d9855ebb1cde0b"
  },
  {
    "url": "assets/js/24.7f7a25f8.js",
    "revision": "797bf5ce2509b182234664509ed0669e"
  },
  {
    "url": "assets/js/25.9b82b3b9.js",
    "revision": "2e9bc8583fc2d0dfe0e546a919f8359a"
  },
  {
    "url": "assets/js/26.590bbba7.js",
    "revision": "263fdeb3a6421d841b88e0d0908be681"
  },
  {
    "url": "assets/js/27.22affd03.js",
    "revision": "647bbc434c34fff10691a2151ed83c4e"
  },
  {
    "url": "assets/js/28.6ce8aadf.js",
    "revision": "7b8d1fa27fa9f1ca93091332345e9e95"
  },
  {
    "url": "assets/js/29.0f027b3a.js",
    "revision": "24591ff2410c79551419409f8f0edf9b"
  },
  {
    "url": "assets/js/3.3a389e6a.js",
    "revision": "54c2d66a75926ab0b7e2caed46600a3e"
  },
  {
    "url": "assets/js/30.f1201573.js",
    "revision": "7cd29259747577c6b32ec65c19bd912b"
  },
  {
    "url": "assets/js/31.ad4acc37.js",
    "revision": "cee0ba83ca3e3a249474b8c7bd588045"
  },
  {
    "url": "assets/js/32.b7aa9715.js",
    "revision": "784b9a9421cfdb1813b7e22a2859d1b4"
  },
  {
    "url": "assets/js/33.822a5ae7.js",
    "revision": "2bb585808a361fbb1d60337bad157db8"
  },
  {
    "url": "assets/js/34.03163510.js",
    "revision": "b1a0c461718cbb3442713f15a773521d"
  },
  {
    "url": "assets/js/35.04ef5ec2.js",
    "revision": "1ef5a02cf71499596c072db8751ead2c"
  },
  {
    "url": "assets/js/36.9f21da5a.js",
    "revision": "cb8cfc9313143b770a02c0756ae498ff"
  },
  {
    "url": "assets/js/37.8272ea7a.js",
    "revision": "05072ab6334d56624d30094a9b38a348"
  },
  {
    "url": "assets/js/38.79aae0fc.js",
    "revision": "ab85bcff31002f245e207fa715ccf2e0"
  },
  {
    "url": "assets/js/39.6362c382.js",
    "revision": "d0a0c3d1068a131d8317d426e5356a84"
  },
  {
    "url": "assets/js/4.41fc1292.js",
    "revision": "7d2a8439ea1ed9c3e9c928d21fedd635"
  },
  {
    "url": "assets/js/41.094b838d.js",
    "revision": "a33b99021c2219e74ac2d8846b0c7b29"
  },
  {
    "url": "assets/js/5.94fd9e4d.js",
    "revision": "e6bafe682f86747b99f9b9bfcbff597c"
  },
  {
    "url": "assets/js/6.e68195c5.js",
    "revision": "f5507bd58364612f09c4162dc3c8fef2"
  },
  {
    "url": "assets/js/7.45b56a4a.js",
    "revision": "50c12d99b6b02add04a0c64dbb83097a"
  },
  {
    "url": "assets/js/8.b2b6c7e5.js",
    "revision": "44869758fc9ada88c20767a6df6a770d"
  },
  {
    "url": "assets/js/9.eda063b1.js",
    "revision": "71aa523300e4be0a92139e76712fa1a8"
  },
  {
    "url": "assets/js/app.6f48ee28.js",
    "revision": "e4325950b9e663c07e3ddb81e1dcfaf4"
  },
  {
    "url": "assets/js/vendors~docsearch.2bdb225e.js",
    "revision": "20ef49312e65cf9f9a0634738d11c301"
  },
  {
    "url": "conclusion/index.html",
    "revision": "fc88f8a9ee96db5325bdc5b5e9b879d5"
  },
  {
    "url": "design/index.html",
    "revision": "a49d0dea44adeebbcf975e703a683d71"
  },
  {
    "url": "index.html",
    "revision": "8fb13315e966b86c571dd14ee07bd7e4"
  },
  {
    "url": "intro/index.html",
    "revision": "dd21f3f5bf7acaa189f81329541c50de"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "11cfcb7fdc2ab559d59f8aac1d7b21d2"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "1a7d086d36cc78e56252f9c9bd12d9f1"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "052108af868b0b5cd0b0b4fc46948706"
  },
  {
    "url": "software/index.html",
    "revision": "2073a1ff96315c9e52cfe3eb172eb043"
  },
  {
    "url": "test/index.html",
    "revision": "3968f1d5429c79ba91deb3ea63fe66be"
  },
  {
    "url": "use cases/index.html",
    "revision": "b6918d078e763fc48c01d98832c10ac6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

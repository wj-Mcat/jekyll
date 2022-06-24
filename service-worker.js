                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/2022/06/23/wechaty-gateway-use/","revision":"cb5893c1817588e1007cbeec0222fc9d"},{"url":"/2022/06/12/wechaty-walnut-aibot/","revision":"369a876f6645eec6b4ed2370812b2d73"},{"url":"/2022/06/05/summer-code-im-aggregation/","revision":"16aff26d0016c3580ecd41a1671e4e1b"},{"url":"/2022/05/20/wechaty-ai-antigenbot/","revision":"086643852c2a5365e6cd9d71ca25a9b1"},{"url":"/2022/05/05/wechaty-huggingface-proposal/","revision":"aeede8b4d429f669c00c16ed35172c45"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Wechaty',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);

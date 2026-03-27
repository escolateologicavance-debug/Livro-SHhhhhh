const CACHE_NAME = "shhhhhh-v1";

const FILES_TO_CACHE = [

"index.html",

"1.html",
"2.html",
"3.html",
"4.html",
"5.html",
"6.html",
"7.html",
"8.html",
"9.html",
"10.html",
"11.html",

"manifest.json",

"capa.png",
"espantalho.png",

"1-img.png",
"2-img.png",
"3-img.png",
"4-img.png",
"5-img.png",
"6-img.png",
"7-img.png",
"8-img.png",
"9-img.png",
"10-img.png",
"11-img.png",
"12-img.png",

"logo-192.png",
"logo-512.png"

];

self.addEventListener("install", event => {

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache => cache.addAll(FILES_TO_CACHE))

);

});

self.addEventListener("fetch", event => {

event.respondWith(

caches.match(event.request)
.then(response => response || fetch(event.request))

);

});
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"cKmy":[function(require,module,exports) {

},{}],"FnGc":[function(require,module,exports) {
"use strict";function e(){var e=document.getElementById("album-modal"),t=document.querySelector(".grid-item-container"),n=document.getElementById("port-close-btn");t.addEventListener("click",function(){e.style.display="block"}),n.addEventListener("click",function(){e.style.display="none"}),window.addEventListener("click",function(t){t.target==e&&(e.style.display="none")})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={modal:e};exports.default=t;
},{}],"C5AY":[function(require,module,exports) {
"use strict";function e(e,t,r){e.addEventListener(t,function(e){return r(e)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t={on:e};exports.default=t;
},{}],"9pZY":[function(require,module,exports) {
"use strict";function t(t,e){fetch(t).then(function(t){return t.json()}).then(function(t){return e(t)}).catch(function(t){return console.log(t)})}function e(t,e,n){fetch(t,{method:"POST",body:JSON.stringify(e)}).then(function(t){return t.json()}).then(function(t){return n(t)}).catch(function(t){return console.log(t)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={getRequest:t,postRequest:e};exports.default=n;
},{}],"JqfT":[function(require,module,exports) {
"use strict";function n(n){return n.map(function(n){return'\n                <li class="song">\n                    <h5 class="song__title">'.concat(n.songTitle,"</h5>\n                </li>\n            ")}).join("")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;
},{}],"Th3n":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;var n=l(require("./Songs"));function l(n){return n&&n.__esModule?n:{default:n}}function e(l){return'\n      <ul class="albums">\n        '.concat(l.map(function(l){return'\n                <li class="album">\n                <img class="album__cover" src="'.concat(l.albumCover,'" alt="Album Cover">\n                <h3 class="album__title">').concat(l.albumTitle,'</h3>\n                <ul class="books">\n                    ').concat((0,n.default)(l.songs),"\n                </ul>\n                </li>\n            ")}).join(""),"\n    </ul>\n  ")}
},{"./Songs":"JqfT"}],"AE3x":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var t=a(require("./Albums"));function a(t){return t&&t.__esModule?t:{default:t}}function n(a){return'\n      <ul id="artists" class="grid-list">\n        '.concat(a.map(function(a){return'\n                <li id="artist" class="grid-list--item">\n                  <div class="grid-item-container">\n                    <img class="grid-image" src="'.concat(a.artistImage,'" alt="Artist Image">\n                    <h3 class="item-name">').concat(a.artistName,'</h3>\n                    </div>\n                  <div id ="album-modal" class="hidden modal">\n                    <div class="modal-content">').concat((0,t.default)(a.albums),"\n                    </div>\n                  </div>\n                    </li>\n            ")}).join(""),'\n    </ul>\n    <section class="add-artist">\n    <input class= "add-artist__artistName" type = "text" placeholder= "Artist Name">\n    <input class= "add-artist__artistImage" type = "text" placeholder= "Artist Image">\n    <input class= "add-artist__artistRating" type = "text" placeholder= "Artist Rating">\n    <button class="add-artist__submit">Submit</button>\n    </section>\n\n   \n\n\n\n\n   \x3c!--unused sections <section class="add-albums">\n    <input class= "add-album__albumTitle" type = "text" placeholder= "Album Title">\n    <input class= "add-album__albumCover" type = "text" placeholder= "Album Image">\n    <input class= "add-album__albumRating" type = "text" placeholder= "Album Rating">\n    <input class= "add-album__artist" type = "text" placeholder= "Artist Name">\n    <button class="add-album__submit">Submit</button>\n    </section>\n\n    <section class="add-song">\n    <input class= "add-song__songTitle" type = "text" placeholder= "Song name">\n    <input class= "add-song__album" type = "text" placeholder= "Album Name">\n    <input class= "add-song__duration" type = "text" placeholder= "Song Duration">\n    <input class= "add-song__songRating" type = "text" placeholder= "Song Rating">\n    <button class="add-song__submit">Submit</button>\n    </section>  --\x3e\n  ')}
},{"./Albums":"Th3n"}],"GFX4":[function(require,module,exports) {
"use strict";require("../css/styling.css");var t=u(require("./utils/modal")),e=u(require("./utils/events/event-action")),a=u(require("./utils/api/api-action")),n=u(require("./components/Artists"));function u(t){return t&&t.__esModule?t:{default:t}}function r(){a.default.getRequest("/artists",function(t){console.log(t),i().innerHTML=(0,n.default)(t)}),e.default.on(i(),"click",function(){if(event.target.classList.contains("add-artist__submit")){var t=document.querySelector(".add-artist__artistName").value,e=document.querySelector(".add-artist__artistImage").value,u=document.querySelector(".add-artist__artistRating").value;a.default.postRequest("/artists/add",{artistName:t,artistImage:e,artistRating:u},function(t){return i().innerHTML=(0,n.default)(t)})}if(event.target.classList.contains("grid-image")){event.target.parentElement.parentElement.querySelector(".modal").classList.toggle("hidden")}if(event.target.classList.contains("modal")){!function(t){t.classList.toggle("hidden")}(event.target)}}),e.default.on(i(),"click",function(){if(event.target.classList.contains("add-album__submit")){var t=document.querySelector(".add-album__albumTitle").value,e=document.querySelector(".add-album__albumCover").value,u=document.querySelector(".add-album__albumRating").value,r=document.querySelector(".add-album__artist").value;a.default.postRequest("/albums/add",{albumTitle:t,albumCover:e,albumRating:u,artist:r},function(t){return i().innerHTML=(0,n.default)(t)})}}),e.default.on(i(),"click",function(){if(event.target.classList.contains("add-song__submit")){var t=document.querySelector(".add-song__songTitle").value,e=document.querySelector(".add-song__album").value,u=document.querySelector(".add-song__duration").value,r=document.querySelector(".add-song__songRating").value;a.default.postRequest("/songs/add",{songTitle:t,album:e,duration:u,songRating:r},function(t){return i().innerHTML=(0,n.default)(t)})}})}function i(){return document.querySelector("#app")}r();
},{"../css/styling.css":"cKmy","./utils/modal":"FnGc","./utils/events/event-action":"C5AY","./utils/api/api-action":"9pZY","./components/Artists":"AE3x"}]},{},["GFX4"], null)
//# sourceMappingURL=/app.3329de97.js.map
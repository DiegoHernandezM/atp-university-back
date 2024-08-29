/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/css/main.css":
/*!********************************!*\
  !*** ./resources/css/main.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/animate.css":
/*!***********************************!*\
  !*** ./resources/css/animate.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/tailwind.css":
/*!************************************!*\
  !*** ./resources/css/tailwind.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/tiny-slider.css":
/*!***************************************!*\
  !*** ./resources/css/tiny-slider.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/LineIcons.2.0.css":
/*!*****************************************!*\
  !*** ./resources/css/LineIcons.2.0.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
(function () {
  "use strict";

  //===== Preloader

  // window.onload = function () {
  //   window.setTimeout(fadeout, 500);
  // }

  // function fadeout() {
  //   document.querySelector('#preloader').style.opacity = '0';
  //   document.querySelector('#preloader').style.display = 'none';
  // }

  /*=====================================
  Sticky
  ======================================= */
  window.onscroll = function () {
    var header_navbar = document.querySelector(".navigation");
    var sticky = header_navbar.offsetTop;
    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
    } else {
      header_navbar.classList.remove("sticky");
    }

    // show or hide the back-top-top button
    var backToTop = document.querySelector(".back-to-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  // Get the navbar

  // for menu scroll 
  var pageLink = document.querySelectorAll('.page-scroll');
  pageLink.forEach(function (elem) {
    elem.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(elem.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        offsetTop: 1 - 60
      });
    });
  });

  // section menu active
  function onScroll(event) {
    var sections = document.querySelectorAll('.page-scroll');
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    for (var i = 0; i < sections.length; i++) {
      var currLink = sections[i];
      var val = currLink.getAttribute('href');
      var refElement = document.querySelector(val);
      var scrollTopMinus = scrollPos + 73;
      if (refElement.offsetTop <= scrollTopMinus && refElement.offsetTop + refElement.offsetHeight > scrollTopMinus) {
        document.querySelector('.page-scroll').classList.remove('active');
        currLink.classList.add('active');
      } else {
        currLink.classList.remove('active');
      }
    }
  }
  ;
  window.document.addEventListener('scroll', onScroll);

  //===== close navbar-collapse when a  clicked
  var navbarToggler = document.querySelector(".navbar-toggler");
  var navbarCollapse = document.querySelector(".navbar-collapse");
  document.querySelectorAll(".page-scroll").forEach(function (e) {
    return e.addEventListener("click", function () {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove('show');
    });
  });
  navbarToggler.addEventListener('click', function () {
    navbarToggler.classList.toggle("active");
    navbarCollapse.classList.toggle('show');
  });

  //======== tiny slider for testimonial
  tns({
    container: '.testimonials',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    mouseDrag: true,
    gutter: 0,
    nav: false,
    controls: false
  });

  //======== tiny slider for portfolio
  tns({
    container: '.portfolio-carousel',
    items: 3,
    slideBy: 'page',
    autoplay: false,
    mouseDrag: true,
    gutter: 30,
    nav: true,
    navPosition: 'bottom',
    controls: false,
    responsive: {
      0: {
        items: 1
      },
      765: {
        items: 2
      },
      1024: {
        items: 3
      }
    }
  });

  //WOW Scroll Spy
  var wow = new WOW({
    //disabled for mobile
    mobile: false
  });
  wow.init();
})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/tailwind": 0,
/******/ 			"css/LineIcons.2.0": 0,
/******/ 			"css/tiny-slider": 0,
/******/ 			"css/animate": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/tailwind","css/LineIcons.2.0","css/tiny-slider","css/animate","css/main"], () => (__webpack_require__("./resources/js/main.js")))
/******/ 	__webpack_require__.O(undefined, ["css/tailwind","css/LineIcons.2.0","css/tiny-slider","css/animate","css/main"], () => (__webpack_require__("./resources/css/main.css")))
/******/ 	__webpack_require__.O(undefined, ["css/tailwind","css/LineIcons.2.0","css/tiny-slider","css/animate","css/main"], () => (__webpack_require__("./resources/css/animate.css")))
/******/ 	__webpack_require__.O(undefined, ["css/tailwind","css/LineIcons.2.0","css/tiny-slider","css/animate","css/main"], () => (__webpack_require__("./resources/css/tailwind.css")))
/******/ 	__webpack_require__.O(undefined, ["css/tailwind","css/LineIcons.2.0","css/tiny-slider","css/animate","css/main"], () => (__webpack_require__("./resources/css/tiny-slider.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/tailwind","css/LineIcons.2.0","css/tiny-slider","css/animate","css/main"], () => (__webpack_require__("./resources/css/LineIcons.2.0.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
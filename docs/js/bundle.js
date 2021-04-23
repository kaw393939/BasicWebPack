/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/ConsoleLogIt.js":
/*!********************************!*\
  !*** ./src/js/ConsoleLogIt.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConsoleLogIt)
/* harmony export */ });
function ConsoleLogIt(message) {
  console.log(message);
}

/***/ }),

/***/ "./src/js/TestJs.js":
/*!**************************!*\
  !*** ./src/js/TestJs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestJS)
/* harmony export */ });
function TestJS() {
  console.log('Loaded');
}

/***/ }),

/***/ "./src/js/getJSON.js":
/*!***************************!*\
  !*** ./src/js/getJSON.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getJSON)
/* harmony export */ });
function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function () {
    var status = xhr.status;

    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };

  xhr.send();
}

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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TestJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestJs */ "./src/js/TestJs.js");
/* harmony import */ var _ConsoleLogIt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleLogIt */ "./src/js/ConsoleLogIt.js");
/* harmony import */ var _getJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getJSON */ "./src/js/getJSON.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




(0,_TestJs__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('', function (data) {
  console.log(data);
});
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('http://localhost:8000/api/v1/cities', function (err, records) {
  if (err !== null) {
    alert("Something went wrong: ".concat(err));
  } else {
    var table = document.querySelector('table');
    var data = Object.keys(records.data[0]);
    var dataRecords = records.data;
    generateTableHead(table, data);
    generateTable(table, dataRecords);
    /*
          let data = Object.keys(records.data[0]);
          generateTable(table, records.data); // generate the table first
          generateTableHead(table, data); // then the head
           */
  }
});
(0,_ConsoleLogIt__WEBPACK_IMPORTED_MODULE_1__.default)('this workedss  in the bundle');

function generateTableHead(table, data) {
  var thead = table.createTHead();
  var row = thead.insertRow();

  var _iterator = _createForOfIteratorHelper(data),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      var th = document.createElement('th');
      var text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function generateTable(table, data) {
  var _iterator2 = _createForOfIteratorHelper(data),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var element = _step2.value;
      var row = table.insertRow();
      console.log(element);
      var key = void 0;

      for (key in element) {
        var cell = row.insertCell();
        var text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
  var slides = document.querySelectorAll("#".concat(slideshow.id, " [role=\"list\"] .slide"));
  var index = 0,
      time = 5000;
  slides[index].classList.add('active');
  setInterval(function () {
    slides[index].classList.remove('active');
    index++;
    if (index === slides.length) index = 0;
    slides[index].classList.add('active');
  }, time);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL0NvbnNvbGVMb2dJdC5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL1Rlc3RKcy5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL2dldEpTT04uanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VudGl0bGVkMTMvLi9zcmMvanMvaW5kZXguanMiXSwibmFtZXMiOlsiQ29uc29sZUxvZ0l0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJUZXN0SlMiLCJnZXRKU09OIiwidXJsIiwiY2FsbGJhY2siLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJvbmxvYWQiLCJzdGF0dXMiLCJyZXNwb25zZSIsInNlbmQiLCJkYXRhIiwiZXJyIiwicmVjb3JkcyIsImFsZXJ0IiwidGFibGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiZGF0YVJlY29yZHMiLCJnZW5lcmF0ZVRhYmxlSGVhZCIsImdlbmVyYXRlVGFibGUiLCJ0aGVhZCIsImNyZWF0ZVRIZWFkIiwicm93IiwiaW5zZXJ0Um93Iiwia2V5IiwidGgiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiY2VsbCIsImluc2VydENlbGwiLCJzbGlkZXNob3dzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbml0U2xpZGVTaG93Iiwic2xpZGVzaG93Iiwic2xpZGVzIiwiaWQiLCJpbmRleCIsInRpbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRJbnRlcnZhbCIsInJlbW92ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxZQUFULENBQXNCQyxPQUF0QixFQUErQjtBQUM1Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDRCxDOzs7Ozs7Ozs7Ozs7OztBQ0ZjLFNBQVNHLE1BQVQsR0FBa0I7QUFDL0JGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDRCxDOzs7Ozs7Ozs7Ozs7OztBQ0ZjLFNBQVNFLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxRQUF0QixFQUFnQztBQUM3QyxNQUFNQyxHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFaO0FBQ0FELEtBQUcsQ0FBQ0UsSUFBSixDQUFTLEtBQVQsRUFBZ0JKLEdBQWhCLEVBQXFCLElBQXJCO0FBQ0FFLEtBQUcsQ0FBQ0csWUFBSixHQUFtQixNQUFuQjs7QUFDQUgsS0FBRyxDQUFDSSxNQUFKLEdBQWEsWUFBTTtBQUFBLFFBQ1RDLE1BRFMsR0FDRUwsR0FERixDQUNUSyxNQURTOztBQUVqQixRQUFJQSxNQUFNLEtBQUssR0FBZixFQUFvQjtBQUNsQk4sY0FBUSxDQUFDLElBQUQsRUFBT0MsR0FBRyxDQUFDTSxRQUFYLENBQVI7QUFDRCxLQUZELE1BRU87QUFDTFAsY0FBUSxDQUFDTSxNQUFELEVBQVNMLEdBQUcsQ0FBQ00sUUFBYixDQUFSO0FBQ0Q7QUFDRixHQVBEOztBQVFBTixLQUFHLENBQUNPLElBQUo7QUFDRCxDOzs7Ozs7VUNiRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7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SUFBdEI7QUFDQUgsUUFBTSxDQUFDRSxLQUFELENBQU4sQ0FBY0UsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsUUFBNUI7QUFFQUMsYUFBVyxDQUFFLFlBQU07QUFDakJOLFVBQU0sQ0FBQ0UsS0FBRCxDQUFOLENBQWNFLFNBQWQsQ0FBd0JHLE1BQXhCLENBQStCLFFBQS9CO0FBRUFMLFNBQUs7QUFDTCxRQUFJQSxLQUFLLEtBQUtGLE1BQU0sQ0FBQ1EsTUFBckIsRUFBNkJOLEtBQUssR0FBRyxDQUFSO0FBRTdCRixVQUFNLENBQUNFLEtBQUQsQ0FBTixDQUFjRSxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixRQUE1QjtBQUVELEdBUlUsRUFRUkYsSUFSUSxDQUFYO0FBU0QsQyIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25zb2xlTG9nSXQobWVzc2FnZSkge1xuICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RKUygpIHtcbiAgY29uc29sZS5sb2coJ0xvYWRlZCcpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SlNPTih1cmwsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHN0YXR1cyB9ID0geGhyO1xuICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xuICAgICAgY2FsbGJhY2sobnVsbCwgeGhyLnJlc3BvbnNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soc3RhdHVzLCB4aHIucmVzcG9uc2UpO1xuICAgIH1cbiAgfTtcbiAgeGhyLnNlbmQoKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRlc3RKUyBmcm9tICcuL1Rlc3RKcyc7XG5pbXBvcnQgQ29uc29sZUxvZ0l0IGZyb20gJy4vQ29uc29sZUxvZ0l0JztcbmltcG9ydCBnZXRKU09OIGZyb20gJy4vZ2V0SlNPTic7XG5cblRlc3RKUygpO1xuZ2V0SlNPTignJywgKGRhdGEpID0+IHtcbiAgY29uc29sZS5sb2coZGF0YSk7XG59KTtcblxuZ2V0SlNPTignaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS92MS9jaXRpZXMnLFxuICAoZXJyLCByZWNvcmRzKSA9PiB7XG4gICAgaWYgKGVyciAhPT0gbnVsbCkge1xuICAgICAgYWxlcnQoYFNvbWV0aGluZyB3ZW50IHdyb25nOiAke2Vycn1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xuICAgICAgY29uc3QgZGF0YSA9IE9iamVjdC5rZXlzKChyZWNvcmRzLmRhdGFbMF0pKTtcbiAgICAgIGNvbnN0IGRhdGFSZWNvcmRzID0gcmVjb3Jkcy5kYXRhO1xuXG4gICAgICBnZW5lcmF0ZVRhYmxlSGVhZCh0YWJsZSwgZGF0YSk7XG4gICAgICBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBkYXRhUmVjb3Jkcyk7XG4gICAgICAvKlxuICAgICAgICAgICAgbGV0IGRhdGEgPSBPYmplY3Qua2V5cyhyZWNvcmRzLmRhdGFbMF0pO1xuICAgICAgICAgICAgZ2VuZXJhdGVUYWJsZSh0YWJsZSwgcmVjb3Jkcy5kYXRhKTsgLy8gZ2VuZXJhdGUgdGhlIHRhYmxlIGZpcnN0XG4gICAgICAgICAgICBnZW5lcmF0ZVRhYmxlSGVhZCh0YWJsZSwgZGF0YSk7IC8vIHRoZW4gdGhlIGhlYWRcbiAgICAgICAgICAgICAqL1xuICAgIH1cbiAgfSk7XG5Db25zb2xlTG9nSXQoJ3RoaXMgd29ya2Vkc3MgIGluIHRoZSBidW5kbGUnKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpIHtcbiAgY29uc3QgdGhlYWQgPSB0YWJsZS5jcmVhdGVUSGVhZCgpO1xuICBjb25zdCByb3cgPSB0aGVhZC5pbnNlcnRSb3coKTtcbiAgZm9yIChjb25zdCBrZXkgb2YgZGF0YSkge1xuICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoa2V5KTtcbiAgICB0aC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICByb3cuYXBwZW5kQ2hpbGQodGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFibGUodGFibGUsIGRhdGEpIHtcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIGRhdGEpIHtcbiAgICBjb25zdCByb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICBsZXQga2V5O1xuICAgIGZvciAoa2V5IGluIGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVsZW1lbnRba2V5XSk7XG4gICAgICBjZWxsLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgc2xpZGVzaG93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNvbXBvbmVudD1cInNsaWRlc2hvd1wiXScpO1xuc2xpZGVzaG93cy5mb3JFYWNoKGluaXRTbGlkZVNob3cpO1xuXG5mdW5jdGlvbiBpbml0U2xpZGVTaG93KHNsaWRlc2hvdykge1xuXG4gIHZhciBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHtzbGlkZXNob3cuaWR9IFtyb2xlPVwibGlzdFwiXSAuc2xpZGVgKTtcblxuICB2YXIgaW5kZXggPSAwLCB0aW1lID0gNTAwMDtcbiAgc2xpZGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICBzZXRJbnRlcnZhbCggKCkgPT4ge1xuICAgIHNsaWRlc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgICBpbmRleCsrO1xuICAgIGlmIChpbmRleCA9PT0gc2xpZGVzLmxlbmd0aCkgaW5kZXggPSAwO1xuXG4gICAgc2xpZGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICB9LCB0aW1lKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
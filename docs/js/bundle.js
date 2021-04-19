/** *** */ (() => { // webpackBootstrap
/** *** */

  /** *** */ 	const __webpack_modules__ = ({

    /***/ './src/js/ConsoleLogIt.js':
    /*! ********************************!*\
  !*** ./src/js/ConsoleLogIt.js ***!
  \******************************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (/* binding */ ConsoleLogIt),
        /* harmony export */ });
      function ConsoleLogIt(message) {
        console.log(message);
      }
      /***/ }),

    /***/ './src/js/TestJs.js':
    /*! **************************!*\
  !*** ./src/js/TestJs.js ***!
  \************************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (/* binding */ TestJS),
        /* harmony export */ });
      function TestJS() {
        console.log('Loaded');
      }
      /***/ }),

    /***/ './src/js/getJSON.js':
    /*! ***************************!*\
  !*** ./src/js/getJSON.js ***!
  \************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => (/* binding */ getJSON),
        /* harmony export */ });
      function getJSON(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';

        xhr.onload = function () {
          const { status } = xhr;

          if (status === 200) {
            callback(null, xhr.response);
          } else {
            callback(status, xhr.response);
          }
        };

        xhr.send();
      }
      /***/ }),

    /** *** */ 	});
  /** ********************************************************************* */
  /** *** */ 	// The module cache
  /** *** */ 	const __webpack_module_cache__ = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */ 		// Check if module is in cache
    /** *** */ 		const cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ 		if (cachedModule !== undefined) {
      /** *** */ 			return cachedModule.exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = __webpack_module_cache__[moduleId] = {
      /** *** */ 			// no module.id needed
      /** *** */ 			// no module.loaded needed
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** ********************************************************************* */
  /** *** */ 	/* webpack/runtime/define property getters */
  /** *** */ 	(() => {
    /** *** */ 		// define getter functions for harmony exports
    /** *** */ 		__webpack_require__.d = (exports, definition) => {
      /** *** */ 			for (const key in definition) {
        /** *** */ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /** *** */ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /** *** */ 				}
        /** *** */ 			}
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/hasOwnProperty shorthand */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/make namespace object */
  /** *** */ 	(() => {
    /** *** */ 		// define __esModule on exports
    /** *** */ 		__webpack_require__.r = (exports) => {
      /** *** */ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /** *** */ 			}
      /** *** */ 			Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** ********************************************************************* */
  const __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*! *************************!*\
  !*** ./src/js/index.js ***!
  \************************ */
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ const _TestJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestJs */ './src/js/TestJs.js');
    /* harmony import */ const _ConsoleLogIt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleLogIt */ './src/js/ConsoleLogIt.js');
    /* harmony import */ const _getJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getJSON */ './src/js/getJSON.js');
    function _createForOfIteratorHelper(o, allowArrayLike) {
      let it; if (typeof Symbol === 'undefined' || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === 'number') {
          if (it) o = it; let i = 0; const F = function F() {}; return {
            s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F,
          };
        } throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      } let normalCompletion = true; let didErr = false; let
        err; return {
        s: function s() { it = o[Symbol.iterator](); }, n: function n() { const step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } },
      };
    }

    function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

    function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

    (0, _TestJs__WEBPACK_IMPORTED_MODULE_0__.default)();
    (0, _getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('', (data) => {
      console.log(data);
    });
    (0, _getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('http://localhost:8000/api/v1/cities', (err, records) => {
      if (err !== null) {
        alert('Something went wrong: '.concat(err));
      } else {
        const table = document.querySelector('table');
        const data = Object.keys(records.data[0]);
        const dataRecords = records.data;
        generateTableHead(table, data);
        generateTable(table, dataRecords);
        /*
          let data = Object.keys(records.data[0]);
          generateTable(table, records.data); // generate the table first
          generateTableHead(table, data); // then the head
           */
      }
    });
    (0, _ConsoleLogIt__WEBPACK_IMPORTED_MODULE_1__.default)('this workedss  in the bundle');

    function generateTableHead(table, data) {
      const thead = table.createTHead();
      const row = thead.insertRow();

      const _iterator = _createForOfIteratorHelper(data);
      let _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          const key = _step.value;
          const th = document.createElement('th');
          const text = document.createTextNode(key);
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
      const _iterator2 = _createForOfIteratorHelper(data);
      let _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          const element = _step2.value;
          const row = table.insertRow();
          console.log(element);
          let key = void 0;

          for (key in element) {
            const cell = row.insertCell();
            const text = document.createTextNode(element[key]);
            cell.appendChild(text);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  })();
/** *** */ })();

// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL0NvbnNvbGVMb2dJdC5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL1Rlc3RKcy5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL2dldEpTT04uanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VudGl0bGVkMTMvLi9zcmMvanMvaW5kZXguanMiXSwibmFtZXMiOlsiQ29uc29sZUxvZ0l0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJUZXN0SlMiLCJnZXRKU09OIiwidXJsIiwiY2FsbGJhY2siLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJvbmxvYWQiLCJzdGF0dXMiLCJyZXNwb25zZSIsInNlbmQiLCJkYXRhIiwiZXJyIiwicmVjb3JkcyIsImFsZXJ0IiwidGFibGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJPYmplY3QiLCJrZXlzIiwiZGF0YVJlY29yZHMiLCJnZW5lcmF0ZVRhYmxlSGVhZCIsImdlbmVyYXRlVGFibGUiLCJ0aGVhZCIsImNyZWF0ZVRIZWFkIiwicm93IiwiaW5zZXJ0Um93Iiwia2V5IiwidGgiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiY2VsbCIsImluc2VydENlbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0Es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QUcsQ0FBQ08sV0FBSixDQUFnQkosRUFBaEI7QUFDRDtBQVJxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU3ZDOztBQUVELFNBQVNOLGFBQVQsQ0FBdUJQLEtBQXZCLEVBQThCSixJQUE5QixFQUFvQztBQUFBLDhDQUNaQSxJQURZO0FBQUE7O0FBQUE7QUFDbEMsMkRBQTRCO0FBQUEsVUFBakJzQixPQUFpQjtBQUMxQixVQUFNUixHQUFHLEdBQUdWLEtBQUssQ0FBQ1csU0FBTixFQUFaO0FBQ0E3QixhQUFPLENBQUNDLEdBQVIsQ0FBWW1DLE9BQVo7QUFDQSxVQUFJTixHQUFHLFNBQVA7O0FBQ0EsV0FBS0EsR0FBTCxJQUFZTSxPQUFaLEVBQXFCO0FBQ25CLFlBQU1DLElBQUksR0FBR1QsR0FBRyxDQUFDVSxVQUFKLEVBQWI7QUFDQSxZQUFNTCxJQUFJLEdBQUdkLFFBQVEsQ0FBQ2UsY0FBVCxDQUF3QkUsT0FBTyxDQUFDTixHQUFELENBQS9CLENBQWI7QUFDQU8sWUFBSSxDQUFDRixXQUFMLENBQWlCRixJQUFqQjtBQUNEO0FBQ0Y7QUFWaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVduQyxDIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnNvbGVMb2dJdChtZXNzYWdlKSB7XG4gIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdEpTKCkge1xuICBjb25zb2xlLmxvZygnTG9hZGVkJyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRKU09OKHVybCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSB4aHI7XG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjYWxsYmFjayhudWxsLCB4aHIucmVzcG9uc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhzdGF0dXMsIHhoci5yZXNwb25zZSk7XG4gICAgfVxuICB9O1xuICB4aHIuc2VuZCgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVGVzdEpTIGZyb20gJy4vVGVzdEpzJztcbmltcG9ydCBDb25zb2xlTG9nSXQgZnJvbSAnLi9Db25zb2xlTG9nSXQnO1xuaW1wb3J0IGdldEpTT04gZnJvbSAnLi9nZXRKU09OJztcblxuVGVzdEpTKCk7XG5nZXRKU09OKCcnLCAoZGF0YSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbn0pO1xuXG5nZXRKU09OKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3YxL2NpdGllcycsXG4gIChlcnIsIHJlY29yZHMpID0+IHtcbiAgICBpZiAoZXJyICE9PSBudWxsKSB7XG4gICAgICBhbGVydChgU29tZXRoaW5nIHdlbnQgd3Jvbmc6ICR7ZXJyfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XG4gICAgICBjb25zdCBkYXRhID0gT2JqZWN0LmtleXMoKHJlY29yZHMuZGF0YVswXSkpO1xuICAgICAgY29uc3QgZGF0YVJlY29yZHMgPSByZWNvcmRzLmRhdGE7XG5cbiAgICAgIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKTtcbiAgICAgIGdlbmVyYXRlVGFibGUodGFibGUsIGRhdGFSZWNvcmRzKTtcbiAgICAgIC8qXG4gICAgICAgICAgICBsZXQgZGF0YSA9IE9iamVjdC5rZXlzKHJlY29yZHMuZGF0YVswXSk7XG4gICAgICAgICAgICBnZW5lcmF0ZVRhYmxlKHRhYmxlLCByZWNvcmRzLmRhdGEpOyAvLyBnZW5lcmF0ZSB0aGUgdGFibGUgZmlyc3RcbiAgICAgICAgICAgIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKTsgLy8gdGhlbiB0aGUgaGVhZFxuICAgICAgICAgICAgICovXG4gICAgfVxuICB9KTtcbkNvbnNvbGVMb2dJdCgndGhpcyB3b3JrZWRzcyAgaW4gdGhlIGJ1bmRsZScpO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVRhYmxlSGVhZCh0YWJsZSwgZGF0YSkge1xuICBjb25zdCB0aGVhZCA9IHRhYmxlLmNyZWF0ZVRIZWFkKCk7XG4gIGNvbnN0IHJvdyA9IHRoZWFkLmluc2VydFJvdygpO1xuICBmb3IgKGNvbnN0IGtleSBvZiBkYXRhKSB7XG4gICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrZXkpO1xuICAgIHRoLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIHJvdy5hcHBlbmRDaGlsZCh0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YSkge1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZGF0YSkge1xuICAgIGNvbnN0IHJvdyA9IHRhYmxlLmluc2VydFJvdygpO1xuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgIGxldCBrZXk7XG4gICAgZm9yIChrZXkgaW4gZWxlbWVudCkge1xuICAgICAgY29uc3QgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxlbWVudFtrZXldKTtcbiAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9

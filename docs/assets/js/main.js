/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/@js/main.ts":
/*!*************************!*\
  !*** ./src/@js/main.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import _Tab from './modules/tab';
// _Tab();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var Tab = /** @class */ (function () {
    function Tab(tabContainerName) {
        this.tabContainerName = tabContainerName;
        this.tabContainerElement = document.getElementById(this.tabContainerName);
        this.tabButtons = __spread(this.tabContainerElement.querySelectorAll('[role="tab"]'));
        this.tabContents = __spread(this.tabContainerElement.querySelectorAll('[role="tabpanel"]'));
        this.init();
    }
    Tab.prototype.init = function () {
        var _this = this;
        this.tabButtons.forEach(function (tabButton, index) {
            _this.setAriaControls(tabButton, index);
            _this.setAriaSelected(tabButton, _this.isFirstItem(index));
            tabButton.addEventListener('click', function () { return _this.click(tabButton, index); });
        });
        this.tabContents.forEach(function (tabContent, index) {
            _this.setID(tabContent, index);
            _this.setAriaHidden(tabContent, !_this.isFirstItem(index));
        });
    };
    Tab.prototype.click = function (element, index) {
        var isSelected = element.getAttribute('aria-selected') === 'true';
        if (isSelected)
            return;
        console.log(element);
        console.log(index);
    };
    Tab.prototype.isFirstItem = function (index) {
        return index === 0;
    };
    Tab.prototype.setAriaControls = function (element, value) {
        element.setAttribute('aria-controls', this.tabContainerName + "-tab" + value);
    };
    Tab.prototype.setID = function (element, value) {
        element.setAttribute('id', this.tabContainerName + "-tab" + value);
    };
    Tab.prototype.setAriaHidden = function (element, value) {
        element.setAttribute('aria-hidden', "" + value);
    };
    Tab.prototype.setAriaSelected = function (element, value) {
        element.setAttribute('aria-selected', "" + value);
    };
    return Tab;
}());
new Tab('test');


/***/ }),

/***/ "./src/@scss/common.scss":
/*!*******************************!*\
  !*** ./src/@scss/common.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************!*\
  !*** multi ./src/@js/main.ts ./src/@scss/common.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/hisho/github/tab/src/@js/main.ts */"./src/@js/main.ts");
module.exports = __webpack_require__(/*! /Users/hisho/github/tab/src/@scss/common.scss */"./src/@scss/common.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Bqcy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9Ac2Nzcy9jb21tb24uc2Nzcz80NTZhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxvQ0FBb0M7QUFDcEMsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVY7SUFLRSxhQUFZLGdCQUFnQjtRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFVBQVUsWUFBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQWMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsV0FBVyxZQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBYyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNELGtCQUFJLEdBQUo7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUyxFQUFFLEtBQUs7WUFDdkMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3hELFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsY0FBTSxZQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBQyxLQUFLLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFVLEVBQUUsS0FBSztZQUN6QyxLQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxtQkFBSyxHQUFMLFVBQU0sT0FBbUIsRUFBQyxLQUFZO1FBQ3BDLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEtBQUssTUFBTSxDQUFDO1FBQ3BFLElBQUksVUFBVTtZQUFFLE9BQU87UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDSCx5QkFBVyxHQUFYLFVBQVksS0FBWTtRQUN0QixPQUFPLEtBQUssS0FBSyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNELDZCQUFlLEdBQWYsVUFBZ0IsT0FBbUIsRUFBQyxLQUFxQjtRQUN2RCxPQUFPLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBSyxJQUFJLENBQUMsZ0JBQWdCLFlBQU8sS0FBTyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUNELG1CQUFLLEdBQUwsVUFBTSxPQUFtQixFQUFDLEtBQXFCO1FBQzdDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFLLElBQUksQ0FBQyxnQkFBZ0IsWUFBTyxLQUFPLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ0QsMkJBQWEsR0FBYixVQUFjLE9BQW1CLEVBQUMsS0FBYTtRQUM3QyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxLQUFHLEtBQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCw2QkFBZSxHQUFmLFVBQWdCLE9BQW1CLEVBQUMsS0FBYTtRQUMvQyxPQUFPLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxLQUFHLEtBQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDSCxVQUFDO0FBQUQsQ0FBQztBQUVELElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUNqRGhCLHlDIiwiZmlsZSI6Ii9kb2NzL2Fzc2V0cy9qcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIGltcG9ydCBfVGFiIGZyb20gJy4vbW9kdWxlcy90YWInO1xuLy8gX1RhYigpO1xuXG5jbGFzcyBUYWIge1xuICB0YWJDb250YWluZXJOYW1lOiBzdHJpbmc7XG4gIHRhYkNvbnRhaW5lckVsZW1lbnQ6SFRNTEVsZW1lbnQ7XG4gIHRhYkJ1dHRvbnM6SFRNTEVsZW1lbnRbXTtcbiAgdGFiQ29udGVudHM6SFRNTEVsZW1lbnRbXTtcbiAgY29uc3RydWN0b3IodGFiQ29udGFpbmVyTmFtZSkge1xuICAgIHRoaXMudGFiQ29udGFpbmVyTmFtZSA9IHRhYkNvbnRhaW5lck5hbWU7XG4gICAgdGhpcy50YWJDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy50YWJDb250YWluZXJOYW1lKTtcbiAgICB0aGlzLnRhYkJ1dHRvbnMgPSBbLi4udGhpcy50YWJDb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdbcm9sZT1cInRhYlwiXScpXTtcbiAgICB0aGlzLnRhYkNvbnRlbnRzID0gWy4uLnRoaXMudGFiQ29udGFpbmVyRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignW3JvbGU9XCJ0YWJwYW5lbFwiXScpXTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBpbml0KCkge1xuICAgIHRoaXMudGFiQnV0dG9ucy5mb3JFYWNoKCh0YWJCdXR0b24sIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLnNldEFyaWFDb250cm9scyh0YWJCdXR0b24saW5kZXgpO1xuICAgICAgdGhpcy5zZXRBcmlhU2VsZWN0ZWQodGFiQnV0dG9uLHRoaXMuaXNGaXJzdEl0ZW0oaW5kZXgpKTtcbiAgICAgIHRhYkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2xpY2sodGFiQnV0dG9uLGluZGV4KSk7XG4gICAgfSk7XG4gICAgdGhpcy50YWJDb250ZW50cy5mb3JFYWNoKCh0YWJDb250ZW50LCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5zZXRJRCh0YWJDb250ZW50LGluZGV4KTtcbiAgICAgIHRoaXMuc2V0QXJpYUhpZGRlbih0YWJDb250ZW50LCF0aGlzLmlzRmlyc3RJdGVtKGluZGV4KSk7XG4gICAgfSk7XG4gIH1cbiAgY2xpY2soZWxlbWVudDpIVE1MRWxlbWVudCxpbmRleDpudW1iZXIpIHtcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKSA9PT0gJ3RydWUnO1xuICAgIGlmIChpc1NlbGVjdGVkKSByZXR1cm47XG4gICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgIH1cbiAgaXNGaXJzdEl0ZW0oaW5kZXg6bnVtYmVyKTpib29sZWFuIHtcbiAgICByZXR1cm4gaW5kZXggPT09IDA7XG4gIH1cbiAgc2V0QXJpYUNvbnRyb2xzKGVsZW1lbnQ6SFRNTEVsZW1lbnQsdmFsdWU6KG51bWJlcnxzdHJpbmcpKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnLCBgJHt0aGlzLnRhYkNvbnRhaW5lck5hbWV9LXRhYiR7dmFsdWV9YCk7XG4gIH1cbiAgc2V0SUQoZWxlbWVudDpIVE1MRWxlbWVudCx2YWx1ZToobnVtYmVyfHN0cmluZykpIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLnRhYkNvbnRhaW5lck5hbWV9LXRhYiR7dmFsdWV9YCk7XG4gIH1cbiAgc2V0QXJpYUhpZGRlbihlbGVtZW50OkhUTUxFbGVtZW50LHZhbHVlOmJvb2xlYW4pIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBgJHt2YWx1ZX1gKTtcbiAgfVxuICBzZXRBcmlhU2VsZWN0ZWQoZWxlbWVudDpIVE1MRWxlbWVudCx2YWx1ZTpib29sZWFuKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBgJHt2YWx1ZX1gKTtcbiAgfVxufVxuXG5uZXcgVGFiKCd0ZXN0Jyk7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9
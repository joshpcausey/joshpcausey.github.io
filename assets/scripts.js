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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tailwind_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tailwind_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tailwind_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scripts__);




/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function() {
    registerBudgetSliderListeners();
    registerCustomCheckboxToggles();
});

/* Budget Slider - update value visible in DOM */
var registerBudgetSliderListeners = function() {
    var budgetSlider = document.querySelector('[data-budget-slider]');
    budgetSlider.addEventListener('input', function() {
        updateBudgetSliderValue(this.value);
    });
    // IE 10 don't support input event, need to read for change event too
    budgetSlider.addEventListener('change', function() {
        updateBudgetSliderValue(this.value);
    });

    var budgetValue = document.querySelector('[data-budget-value]');
    var updateBudgetSliderValue = function(value) {
        budgetValue.innerHTML = value;
    }
};

/* Custom checkboxes - Handle toggle (click) events */
var registerCustomCheckboxToggles = function() {
    document.querySelectorAll('[data-checkbox-toggle]').forEach(function(toggle) { 
        toggle.addEventListener('click', function() {
            var checkboxName = this.dataset.checkboxToggle;
            var checkbox = document.querySelector('[data-checkbox="'+checkboxName+'"]');
            var newState = ! JSON.parse(checkbox.dataset.checked);
            checkbox.classList.toggle('checkbox-on');
            checkbox.dataset.checked = newState;

            // Call checkbox listerner __name__ChangedEvent() if exists
            if (typeof window[checkboxName+"ChangedEvent"] === "function") { 
                window[checkboxName+"ChangedEvent"](newState);
            }
        });
    });
};

/* Inquiry checkbox */
window.inquiryChangedEvent = function(state) {
    var inquiryDetails = document.querySelector('[data-inquiry-details]');
    var inquiryDetailsWrapper = document.querySelector('.inquiry-details__wrapper');
    if (inquiryDetails.clientHeight) {
      inquiryDetails.style.height = 0;
      inquiryDetails.style.opacity = 0.3;
    } else {
      inquiryDetails.style.height = inquiryDetailsWrapper.clientHeight + "px";
      inquiryDetails.style.opacity = 1;
    }
}

/***/ })
/******/ ]);
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constant.js":
/*!*************************!*\
  !*** ./src/constant.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BG_COLOR: () => (/* binding */ BG_COLOR),
/* harmony export */   BG_COLOR_DEFAULT: () => (/* binding */ BG_COLOR_DEFAULT),
/* harmony export */   POSITION: () => (/* binding */ POSITION),
/* harmony export */   POSITION_DEFAULT: () => (/* binding */ POSITION_DEFAULT),
/* harmony export */   SHOW_BOTTOM: () => (/* binding */ SHOW_BOTTOM),
/* harmony export */   SHOW_BOTTOM_DEFAULT: () => (/* binding */ SHOW_BOTTOM_DEFAULT),
/* harmony export */   TEXT_COLOR: () => (/* binding */ TEXT_COLOR),
/* harmony export */   TEXT_COLOR_DEFAULT: () => (/* binding */ TEXT_COLOR_DEFAULT)
/* harmony export */ });
const BG_COLOR_DEFAULT = "rgba(255, 0, 129, 0.6)";
const TEXT_COLOR_DEFAULT = "#fff";
const BG_COLOR = "pBackgroundColor";
const TEXT_COLOR = "pTextColor";
const SHOW_BOTTOM = "pCheckShowBottom";
const SHOW_BOTTOM_DEFAULT = true;
const POSITION = "pPosition";
const POSITION_DEFAULT = "bottom-left";

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearStorage: () => (/* binding */ clearStorage),
/* harmony export */   getStorage: () => (/* binding */ getStorage),
/* harmony export */   removeStorage: () => (/* binding */ removeStorage),
/* harmony export */   run: () => (/* binding */ run),
/* harmony export */   setStorage: () => (/* binding */ setStorage)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./src/constant.js");


async function getStorage(key) {
  return new Promise((resolve) => {
    chrome.storage.local.get([key], (result) => resolve(result));
  });
}

async function setStorage(data) {
  return new Promise((resolve) => {
    chrome.storage.local.set(data, () => resolve(true));
  });
}

async function removeStorage(key) {
  return new Promise((resolve) => {
    chrome.storage.local.remove([key], () => resolve(true));
  });
}

async function clearStorage() {
  return new Promise((resolve) => {
    chrome.storage.local.clear(() => resolve(true));
  });
}

const pDisplayTime = async (eleAppend = null) => {
  const elementWrap = document.createElement("div");
  const elementStyle = document.createElement("style");
  const bgColorStorage = await getStorage(_constant__WEBPACK_IMPORTED_MODULE_0__.BG_COLOR);
  const textColorStorage = await getStorage(_constant__WEBPACK_IMPORTED_MODULE_0__.TEXT_COLOR);
  const positionStorage = await getStorage(_constant__WEBPACK_IMPORTED_MODULE_0__.POSITION);
  const bgColor = bgColorStorage[_constant__WEBPACK_IMPORTED_MODULE_0__.BG_COLOR] || _constant__WEBPACK_IMPORTED_MODULE_0__.BG_COLOR_DEFAULT;
  const textColor = textColorStorage[_constant__WEBPACK_IMPORTED_MODULE_0__.TEXT_COLOR] || _constant__WEBPACK_IMPORTED_MODULE_0__.TEXT_COLOR_DEFAULT;
  const position = positionStorage[_constant__WEBPACK_IMPORTED_MODULE_0__.POSITION] || _constant__WEBPACK_IMPORTED_MODULE_0__.POSITION_DEFAULT;
  let positionStyle = ""
  switch (position) {
    case "top-right":
      positionStyle = `top: 8px;right: 8px;`
      break;
    case "top-left":
      positionStyle = `top: 8px;left: 8px;`
      break;
    case "bottom-right":
      positionStyle = `bottom: 8px;right: 8px;`
      break;
    case "bottom-left":
      positionStyle = `bottom: 8px;left: 8px;`
      break;
    default:
      positionStyle = `bottom: 8px;left: 8px;`
      break;
  }
  elementWrap.id = "pDisplayTime";
  elementWrap.innerHTML = `
    <p id="vietnamTime"></p>
    <p id="malaysiaTime"></p>
  `;
  elementStyle.innerHTML = `
  #pDisplayTime{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: ${bgColor};
    position: fixed;
    padding: 4px 8px;
    border-radius: 4px;
    z-index: 99;
    ${positionStyle}
  }
  #pDisplayTime p{
    margin: 0;
    font-size: 14px;
    color: ${textColor}
  }
  `;

  console.log(3333, eleAppend);
  document.head.appendChild(elementStyle);
  eleAppend ? eleAppend.appendChild(elementWrap) : document.body.appendChild(elementWrap);
};

const handlePTime = () => {
  const localTime = new Date();
  const vietnamTimeElement = document.getElementById("vietnamTime");
  const malaysiaTimeElement = document.getElementById("malaysiaTime");

  const optionsMY = { timeZone: "Asia/Kuala_Lumpur", timeZoneName: "short" };
  const malaysiaTime = localTime.toLocaleTimeString("vi-VN", optionsMY);

  const optionsVN = { timeZone: "Asia/Ho_Chi_Minh", timeZoneName: "short" };
  const vietnamTime = localTime.toLocaleTimeString("vi-VN", optionsVN);

  vietnamTimeElement.textContent = `VN: ${vietnamTime}`;
  malaysiaTimeElement.textContent = `MY: ${malaysiaTime}`;
};

const run = async (eleAppend) => {
  await pDisplayTime(eleAppend);
  setInterval(function () {
    handlePTime();
  }, 1000);
};


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
/*!******************************!*\
  !*** ./src/contentScript.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./src/constant.js");




const handleDisplay = async () => {
  const checkShowStorage = await (0,_helper__WEBPACK_IMPORTED_MODULE_0__.getStorage)(_constant__WEBPACK_IMPORTED_MODULE_1__.SHOW_BOTTOM);
  const isShow = checkShowStorage[_constant__WEBPACK_IMPORTED_MODULE_1__.SHOW_BOTTOM] || _constant__WEBPACK_IMPORTED_MODULE_1__.SHOW_BOTTOM_DEFAULT;
  if (isShow) {
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.run)();
  }
}

handleDisplay()
})();

/******/ })()
;
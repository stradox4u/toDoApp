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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: allItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allItems\", function() { return allItems; });\n/* harmony import */ var _views_Views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/Views */ \"./src/js/views/Views.js\");\n/* harmony import */ var _models_Models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Models */ \"./src/js/models/Models.js\");\n// Global Controller\n\n\n\n\nconst allItems = [];\n\n// Show Correct Date\nObject(_views_Views__WEBPACK_IMPORTED_MODULE_0__[\"showDate\"])(_models_Models__WEBPACK_IMPORTED_MODULE_1__[\"date\"]);\n\n// Actions to carry out on press of add button/enter key\nconst addActions = () => {\n    const newItem = new _models_Models__WEBPACK_IMPORTED_MODULE_1__[\"default\"](Object(_views_Views__WEBPACK_IMPORTED_MODULE_0__[\"userInput\"])());\n    allItems.push(newItem);\n    Object(_views_Views__WEBPACK_IMPORTED_MODULE_0__[\"showItems\"])(newItem.item);\n    Object(_views_Views__WEBPACK_IMPORTED_MODULE_0__[\"clearField\"])();\n    Object(_views_Views__WEBPACK_IMPORTED_MODULE_0__[\"focusField\"])();\n    Object(_models_Models__WEBPACK_IMPORTED_MODULE_1__[\"data\"])();\n    \n};\n\n// Event listener for add button/Enter key\n_views_Views__WEBPACK_IMPORTED_MODULE_0__[\"DOMElements\"].addButton.addEventListener('click', () => {\n    if (Object(_views_Views__WEBPACK_IMPORTED_MODULE_0__[\"userInput\"])() !== '') {\n        addActions();\n    }\n});\n\ndocument.addEventListener('keypress', (e) => {\n    if (e.keyCode === 13 && Object(_views_Views__WEBPACK_IMPORTED_MODULE_0__[\"userInput\"])() !== '') {\n        addActions();\n    }\n});\n\n// Event listener for done button\n// Crosses out item once the button is clicked\n_views_Views__WEBPACK_IMPORTED_MODULE_0__[\"DOMElements\"].itemList.addEventListener('click', _views_Views__WEBPACK_IMPORTED_MODULE_0__[\"crossOut\"]);\n\n\n\n// Event listeners for delete button\n\n_views_Views__WEBPACK_IMPORTED_MODULE_0__[\"DOMElements\"].listItems.addEventListener('click', _views_Views__WEBPACK_IMPORTED_MODULE_0__[\"deleteUI\"]);\n\n_views_Views__WEBPACK_IMPORTED_MODULE_0__[\"DOMElements\"].itemList.addEventListener('click', _models_Models__WEBPACK_IMPORTED_MODULE_1__[\"deleteItem\"]);\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/models/Models.js":
/*!*********************************!*\
  !*** ./src/js/models/Models.js ***!
  \*********************************/
/*! exports provided: date, default, data, deleteItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"date\", function() { return date; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return todoItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteItem\", function() { return deleteItem; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n/* harmony import */ var _views_Views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Views */ \"./src/js/views/Views.js\");\n\n\n//Get Correct Date\nlet dateObj = new Date();\nlet month = dateObj.getMonth() + 1;\nlet day = dateObj.getDate();\nlet year = dateObj.getFullYear();\nconst date = `${day} - ${month} - ${year}`;\n\n// Import user input from views module\n\n\n// Create a data structure/class\nclass todoItem {\n    constructor(item) {\n        this.item = item;\n    }\n    \n};\n\n// Add the input to data structure\nlet data = () => {\n    let allData = _index__WEBPACK_IMPORTED_MODULE_0__[\"allItems\"].map(e => e.item);\n    return allData;\n}\n\n// Remove deleted items from the data structure\nconst deleteItem = (event) => {\n    let item = event.target.parentNode.parentNode.children[0].children[0].innerHTML;\n    if (event.target.id === `delete-${data().indexOf(item)}`)\n    {\n        let remData = data().splice((data().indexOf(item)), 1);\n        //console.log(data());\n    }\n    \n}\n\n//# sourceURL=webpack:///./src/js/models/Models.js?");

/***/ }),

/***/ "./src/js/views/Views.js":
/*!*******************************!*\
  !*** ./src/js/views/Views.js ***!
  \*******************************/
/*! exports provided: DOMElements, showDate, userInput, clearField, focusField, showItems, crossOut, deleteUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMElements\", function() { return DOMElements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showDate\", function() { return showDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userInput\", function() { return userInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearField\", function() { return clearField; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"focusField\", function() { return focusField; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showItems\", function() { return showItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"crossOut\", function() { return crossOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteUI\", function() { return deleteUI; });\n/* harmony import */ var _models_Models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Models */ \"./src/js/models/Models.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n\n\n\n\n\nconst DOMElements = {\n    addButton: document.querySelector('.add-button'),\n    input: document.querySelector('.item-input'),\n    itemList: document.querySelector('.items-list'),\n    date: document.querySelector('.date'),\n    listItems: document.querySelector('.todo-items')\n};\n\n// Show Date on UI\nconst showDate = (date) => DOMElements.date.innerHTML = date;\n\n// Read User Input & export to other modules\nconst userInput = () => DOMElements.input.value;\n\n// Clear input field after pressing add button\nconst clearField = () => DOMElements.input.value = '';\n\n// Focus on Text Field\nconst focusField = () => DOMElements.input.focus();\n\n// Function to show input on user interface\nconst showItems = (item) => {\n    Object(_models_Models__WEBPACK_IMPORTED_MODULE_0__[\"data\"])();\n    let markup = `<li id=\"item-${Object(_models_Models__WEBPACK_IMPORTED_MODULE_0__[\"data\"])().indexOf(item)}\" class=\"item list-group-item\">\n<div class=\"row container\">\n    <div class=\"col-10\">\n        <p>${item}</p>\n    </div>\n    <div class=\"col btns\">\n    <button type=\"button\" id=\"done-${Object(_models_Models__WEBPACK_IMPORTED_MODULE_0__[\"data\"])().indexOf(item)}\" class=\"done-item btn btn-primary\">Done</button>\n    <button type=\"button\" id=\"delete-${Object(_models_Models__WEBPACK_IMPORTED_MODULE_0__[\"data\"])().indexOf(item)}\" class=\"btn btn-danger delete-item\">Delete</button>\n    </div>\n</div>\n</li>`;\n    DOMElements.itemList.insertAdjacentHTML('beforeend', markup);\n    // console.log(markup);\n};\n\n// Cross out done items\n//const strikeThrough = `<style>text-decoration: line-through</style>`; (didn't work)\n\nconst crossOut = (event) => {\n    let eventTarget = event.target.parentNode.parentNode.children[0].children[0];\n    let item = eventTarget.innerHTML;\n    Object(_models_Models__WEBPACK_IMPORTED_MODULE_0__[\"data\"])();\n    if (event.target.id === `done-${Object(_models_Models__WEBPACK_IMPORTED_MODULE_0__[\"data\"])().indexOf(item)}`) {\n        event.target.parentNode.parentNode.children[0].children[0].style=\"text-decoration:line-through\";\n        //console.log(event.target.id);\n    }\n    \n    };\n\n// Remove deleted items from UI\nconst deleteUI = (event) => {\n    Object(_models_Models__WEBPACK_IMPORTED_MODULE_0__[\"data\"])();\n    let target = event.target.parentNode.parentNode.parentNode;\n    let item = event.target.parentNode.parentNode.children[0].children[0].innerHTML;\n    if (event.target.id === `delete-${Object(_models_Models__WEBPACK_IMPORTED_MODULE_0__[\"data\"])().indexOf(item)}`) {\n        target.parentNode.removeChild(target);\n    //console.log(item);\n    }\n};\n\n\n//# sourceURL=webpack:///./src/js/views/Views.js?");

/***/ })

/******/ });
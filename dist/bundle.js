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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script/portfolio.json":
/*!***********************************!*\
  !*** ./src/script/portfolio.json ***!
  \***********************************/
/*! exports provided: categories, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"categories\\\":[{\\\"name\\\":\\\"Psd\\\",\\\"items\\\":[{\\\"name\\\":\\\"Restaurant\\\",\\\"photo\\\":\\\"212 555-1234\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus, urna eu congue convallis, justo nulla ornare erat, eu pellentesque felis nulla id nisi. \\\"},{\\\"name\\\":\\\"Box\\\",\\\"photo\\\":\\\"212 555-1234\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus, urna eu congue convallis, justo nulla ornare erat, eu pellentesque felis nulla id nisi. \\\"},{\\\"name\\\":\\\"Article\\\",\\\"photo\\\":\\\"212 555-1234\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus, urna eu congue convallis, justo nulla ornare erat, eu pellentesque felis nulla id nisi. \\\"}]},{\\\"name\\\":\\\"Presenatation\\\",\\\"items\\\":[{\\\"name\\\":\\\"homePres\\\",\\\"photo\\\":\\\"212 555-1234\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus, urna eu congue convallis, justo nulla ornare erat, eu pellentesque felis nulla id nisi. \\\"},{\\\"name\\\":\\\"indexPres\\\",\\\"photo\\\":\\\"212 555-1234\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus, urna eu congue convallis, justo nulla ornare erat, eu pellentesque felis nulla id nisi. \\\"},{\\\"name\\\":\\\"articlePres\\\",\\\"photo\\\":\\\"212 555-1234\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus, urna eu congue convallis, justo nulla ornare erat, eu pellentesque felis nulla id nisi. \\\"}]},{\\\"name\\\":\\\"Work ideas\\\",\\\"items\\\":[{\\\"name\\\":\\\"homeWork\\\",\\\"photo\\\":\\\"212 555-1234\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus, urna eu congue convallis, justo nulla ornare erat, eu pellentesque felis nulla id nisi. \\\"},{\\\"name\\\":\\\"indexWork\\\",\\\"photo\\\":\\\"212 555-1234\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus, urna eu congue convallis, justo nulla ornare erat, eu pellentesque felis nulla id nisi. \\\"},{\\\"name\\\":\\\"articleWork\\\",\\\"photo\\\":\\\"212 555-1234\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus, urna eu congue convallis, justo nulla ornare erat, eu pellentesque felis nulla id nisi. \\\"}]},{\\\"name\\\":\\\"Logo\\\",\\\"items\\\":[{\\\"name\\\":\\\"homeLogo\\\",\\\"photo\\\":\\\"212 555-1234\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus, urna eu congue convallis, justo nulla ornare erat, eu pellentesque felis nulla id nisi. \\\"},{\\\"name\\\":\\\"indexLogo\\\",\\\"photo\\\":\\\"212 555-1234\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus, urna eu congue convallis, justo nulla ornare erat, eu pellentesque felis nulla id nisi. \\\"},{\\\"name\\\":\\\"articleLogo\\\",\\\"photo\\\":\\\"212 555-1234\\\",\\\"description\\\":\\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus, urna eu congue convallis, justo nulla ornare erat, eu pellentesque felis nulla id nisi. \\\"}]}]}\");\n\n//# sourceURL=webpack:///./src/script/portfolio.json?");

/***/ }),

/***/ "./src/script/script.js":
/*!******************************!*\
  !*** ./src/script/script.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _portfolio_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio.json */ \"./src/script/portfolio.json\");\nvar _portfolio_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./portfolio.json */ \"./src/script/portfolio.json\", 1);\n/* harmony import */ var _skills_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills.json */ \"./src/script/skills.json\");\nvar _skills_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./skills.json */ \"./src/script/skills.json\", 1);\n\r\n\r\nlet x = window.matchMedia(\"(max-width: 1230px)\")\r\nwindow.onload = function() {\r\n    if(x.matches == false) {\r\n        window.onscroll = navMenuScroll; \r\n    } else {\r\n        window.onscroll = closeMenu;\r\n    }\r\n    document.getElementById(\"buttonNav\").addEventListener(\"click\", showMenu)\r\n    portfolioMenu(); // Create menu of portfolio section\r\n    resize() // Call listener function at run time\r\n    x.addListener(resize) // Attach listener function on state changes \r\n    skills()\r\n}\r\nfunction addItem(wrapper, item, id, cla, portfolioFilter, bg){\r\n    let el = document.createElement(\"div\")\r\n    el.classList.add(cla,'animated', 'bounceIn', 'slow')\r\n    el.style.backgroundImage = \"url('./src/style/img/\"+ bg +\".webp')\";\r\n    el.id = id\r\n    el.innerHTML = item\r\n    el.addEventListener(\"click\", portfolioFilter);\r\n    wrapper.appendChild(el)\r\n}\r\nfunction navMenuHide(){\r\n    document.getElementById(\"navMenu\").classList.remove(\"animated\", \"slideInDown\")\r\n    document.getElementById(\"navMenu\").classList.add(\"animated\", \"slideOutUp\", \"delay-2s\")\r\n}\r\nfunction navMenuScroll(){\r\n    if (this.oldScroll > this.scrollY){\r\n        navMenuShow();\r\n        this.oldScroll = this.scrollY\r\n    } else {\r\n        navMenuHide();\r\n        this.oldScroll = this.scrollY\r\n    }\r\n}\r\nfunction navMenuShow(){\r\n    document.getElementById(\"navMenu\").classList.remove(\"animated\", \"slideOutUp\", \"delay-2s\")\r\n    document.getElementById(\"navMenu\").classList.add(\"animated\", \"slideInDown\")\r\n}\r\nfunction portfolioAddWrapper(wrapperPlace){\r\n    let wrapper = document.createElement(\"div\")\r\n    wrapper.classList.add(\"wrapper\")\r\n    wrapper.id='portfolioWrapper'\r\n    wrapperPlace.append(wrapper)\r\n}\r\nfunction portfolioFilter(){\r\n    portfolioResetColors();\r\n    let targetID=this.id\r\n    this.removeEventListener(\"click\", portfolioFilter)\r\n    this.addEventListener(\"click\", portfolioMenuButton)\r\n    portfolioSetWrapper(targetID);\r\n    this.style.color = \"#a91aef\"\r\n    document.getElementById('portfolioWrapper').innerHTML=\"\"\r\n    let category=this.id.replace(\"category_\", \"\")\r\n    let wrapper = document.getElementById('portfolioWrapper')\r\n    print(wrapper, category)\r\n    if (x.matches){\r\n\r\n    } else{\r\n        let i\r\n        for (i = 1; i<_portfolio_json__WEBPACK_IMPORTED_MODULE_0__.categories.length+1; i++){\r\n            let div = document.getElementById(\"portfolioMenu\").childNodes[i]\r\n            div.addEventListener(\"click\", portfolioFilter)\r\n        }\r\n    }\r\n}\r\nfunction portfolioMenu(){\r\n    let wrapperMenu = document.getElementById(\"portfolioMenu\")\r\n    wrapperMenu.innerHTML=(\"\")\r\n    addItem(wrapperMenu, 'All', 'category_all', \"category\", portfolioShowAll)\r\n    let i\r\n    for (i = 0; i<_portfolio_json__WEBPACK_IMPORTED_MODULE_0__.categories.length; i++){\r\n        let catName = _portfolio_json__WEBPACK_IMPORTED_MODULE_0__.categories[i].name\r\n        addItem(wrapperMenu, catName, \"category_\"+i, \"category\", portfolioFilter)\r\n    }\r\n}\r\nfunction portfolioMenuButton(){\r\n    if(x.matches){\r\n        let wrapper=document.getElementById(\"portfolioWrapper\")\r\n        if (wrapper){\r\n            wrapper.remove();\r\n        }\r\n        portfolioResetColors()\r\n    }\r\n    if(this.id == \"category_all\"){\r\n        if(x.matches){\r\n            this.addEventListener(\"click\", portfolioShowAll)\r\n        }\r\n    } else {\r\n        if(x.matches){\r\n            this.addEventListener(\"click\", portfolioFilter)\r\n        }\r\n    }\r\n}\r\nfunction portfolioSetWrapper(aim){\r\n    if (x.matches){\r\n        portfolioWrapperRemove()\r\n        let wrapper = document.createElement(\"div\")\r\n        wrapper.classList.add(\"wrapper\")\r\n        wrapper.id='portfolioWrapper'\r\n        let cele = document.getElementById(aim)\r\n        cele.parentNode.insertBefore(wrapper, cele.nextSibling);\r\n    } else {\r\n        let target = document.getElementById('portfolioWrapper')\r\n        if (target){\r\n        } else{\r\n            portfolioAddWrapper(document.getElementById('portfolio')) //Utwórz wrapper portfolio\r\n        }\r\n    }\r\n}\r\nfunction portfolioShowAll(){\r\n    portfolioResetColors()\r\n    document.getElementById('category_all').style.color = \"#a91aef\"\r\n    portfolioWrapperRemove()\r\n    if (x.matches){\r\n        this.removeEventListener(\"click\", portfolioShowAll)\r\n        this.addEventListener(\"click\", portfolioMenuButton)\r\n        let targetID = document.getElementById('portfolioMenu').childNodes[0]\r\n        let wrapper = document.createElement(\"div\")\r\n        wrapper.classList.add(\"wrapper\")\r\n        wrapper.id='portfolioWrapper'\r\n        targetID.parentNode.insertBefore(wrapper, targetID.nextSibling)\r\n        let b = document.getElementById('portfolioWrapper')\r\n        b.innerHTML=\"\"\r\n        let i\r\n        let max=(document.getElementById('portfolioMenu').childNodes.length-2)\r\n        for (i=0; i<max; i++){\r\n            print(b, i)\r\n        } \r\n        let j\r\n        for (j = 1; j<_portfolio_json__WEBPACK_IMPORTED_MODULE_0__.categories.length+1; j++){\r\n            let div = document.getElementById(\"portfolioMenu\").childNodes[j]\r\n            div.addEventListener(\"click\", portfolioFilter)\r\n        }\r\n    } else {\r\n        //document.getElementById('portfolioWrapper').innerHTML=\"\"\r\n        portfolioAddWrapper(document.getElementById('portfolio')) //Utwórz wrapper portfolio\r\n        let b = document.getElementById('portfolioWrapper')\r\n        let i\r\n        let max=(document.getElementById('portfolioMenu').childNodes.length-1)\r\n        for (i=0; i<max; i++){\r\n            print(b, i)\r\n        } \r\n\r\n    }\r\n}\r\nfunction portfolioResetColors(){\r\n    // Reset  color of portfolioMenu items\r\n    let menu = document.getElementById('portfolioMenu').childNodes\r\n    let i\r\n    for (i = 0; i < menu.length; i++) {\r\n        menu[i].style.color = \"black\"\r\n    }\r\n}\r\nfunction portfolioWrapperRemove(){\r\n    let target = document.getElementById('portfolioWrapper')\r\n    if(target){\r\n        target.remove();\r\n    }\r\n}\r\nfunction print(wrapper, category){\r\n    let i\r\n    for (i = 0; i<_portfolio_json__WEBPACK_IMPORTED_MODULE_0__.categories[category].items.length; i++){\r\n        let itemName = _portfolio_json__WEBPACK_IMPORTED_MODULE_0__.categories[category].items[i].name\r\n        let itemPhoto = _portfolio_json__WEBPACK_IMPORTED_MODULE_0__.categories[category].items[i].photo\r\n        let itemDesc = _portfolio_json__WEBPACK_IMPORTED_MODULE_0__.categories[category].items[i].description\r\n        let divHtml=\"<div class='name'><h3>\"+itemName+\"</h3></div><div class='desc'><p>\"+itemDesc+\"</p></div>\"\r\n        let bg = i+1\r\n        let id = ''\r\n        let cla = \"item\"\r\n        addItem(wrapper, divHtml, id, cla, null ,bg )\r\n    }\r\n}\r\nfunction resize() {\r\n    portfolioWrapperRemove()\r\n    portfolioResetColors()\r\n    if (x.matches){\r\n    } else {\r\n        portfolioShowAll();\r\n        closeMenu();\r\n        document.getElementById(\"navMenu\").style.width = \"100%\"\r\n    }\r\n}\r\nfunction showMenu(){\r\n    document.getElementById(\"navMenu\").classList.add(\"showMenu\")\r\n    document.getElementById(\"navMenu\").style.width = \"400px\"\r\n    document.getElementById(\"buttonNav\").removeEventListener(\"click\", showMenu)\r\n    document.getElementById(\"buttonNav\").addEventListener(\"click\", closeMenu)\r\n    document.getElementById(\"buttonNav\").classList.toggle(\"opened\")\r\n    \r\n}\r\nfunction closeMenu(){\r\n    document.getElementById(\"navMenu\").style.width = \"0\"\r\n    document.getElementById(\"navMenu\").classList.remove(\"showMenu\")\r\n    document.getElementById(\"buttonNav\").addEventListener(\"click\", showMenu)\r\n    document.getElementById(\"buttonNav\").removeEventListener(\"click\", closeMenu)\r\n    document.getElementById(\"buttonNav\").classList.toggle(\"opened\")\r\n}\r\nfunction skills() {\r\n    let i\r\n    for (i=0; i<_skills_json__WEBPACK_IMPORTED_MODULE_1__.skills.length; i++){\r\n        let wrapper = document.getElementById(\"skillsWrapper\")\r\n        let id = (_skills_json__WEBPACK_IMPORTED_MODULE_1__.skills[i].id)\r\n        let name = (_skills_json__WEBPACK_IMPORTED_MODULE_1__.skills[i].name)\r\n        let procent = (_skills_json__WEBPACK_IMPORTED_MODULE_1__.skills[i].progress)\r\n        let divHtml = \"<h4>\"+name+ \"</h4><div class='bar'><div class='procent' id='skill_\"+ id +\"'></div><div class='gradient'></div></div>\"\r\n        let div = document.createElement(\"div\")\r\n        div.innerHTML=divHtml\r\n        div.classList.add('item')\r\n        wrapper.appendChild(div)\r\n        document.getElementById('skill_'+id).style.width = procent+'%'\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/script/script.js?");

/***/ }),

/***/ "./src/script/skills.json":
/*!********************************!*\
  !*** ./src/script/skills.json ***!
  \********************************/
/*! exports provided: skills, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"skills\\\":[{\\\"id\\\":1,\\\"name\\\":\\\"html/css\\\",\\\"progress\\\":95},{\\\"id\\\":2,\\\"name\\\":\\\"javascript\\\",\\\"progress\\\":70},{\\\"id\\\":3,\\\"name\\\":\\\"php\\\",\\\"progress\\\":50},{\\\"id\\\":4,\\\"name\\\":\\\"python\\\",\\\"progress\\\":60},{\\\"id\\\":5,\\\"name\\\":\\\"ruby\\\",\\\"progress\\\":30},{\\\"id\\\":6,\\\"name\\\":\\\"java\\\",\\\"progress\\\":45}]}\");\n\n//# sourceURL=webpack:///./src/script/skills.json?");

/***/ })

/******/ });
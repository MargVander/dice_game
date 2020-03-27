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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_partie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var party = new _classes_partie__WEBPACK_IMPORTED_MODULE_0__["Party"](2, 3);
party.initialiser();
party.lancer();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gobelet", function() { return Gobelet; });
/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

var Gobelet = /** @class */ (function () {
    function Gobelet(nbDices) {
        var _this = this;
        this._value = 0;
        this._dices = [];
        this.lancer = function () {
            for (var index = 0; index < _this.dices.length; index++) {
                _this.dices[index].lancer();
                _this.value += _this.dices[index].value;
            }
        };
        this.afficherScore = function () {
            var score = 0;
            for (var index = 0; index < _this.dices.length; index++) {
                score += _this.dices[index].value;
            }
            return score;
        };
        for (var index = 0; index < nbDices; index++) {
            this._dices.push(new _de__WEBPACK_IMPORTED_MODULE_0__["Dice"]());
        }
    }
    Object.defineProperty(Gobelet.prototype, "dices", {
        get: function () {
            return this._dices;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Gobelet.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    return Gobelet;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dice", function() { return Dice; });
var Dice = /** @class */ (function () {
    function Dice() {
        var _this = this;
        this.lancer = function () {
            _this._value = Math.floor(Math.random() * 6 + 1);
        };
        this._value = 0;
    }
    Object.defineProperty(Dice.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return Dice;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Joueur", function() { return Joueur; });
var Joueur = /** @class */ (function () {
    function Joueur(name) {
        var _this = this;
        this._score = 0;
        this.jouer = function (gobelet) {
            gobelet.lancer();
            _this.score += gobelet.afficherScore();
        };
        this._name = name;
    }
    Object.defineProperty(Joueur.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Joueur.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (score) {
            this._score = score;
        },
        enumerable: true,
        configurable: true
    });
    return Joueur;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Party", function() { return Party; });
/* harmony import */ var _joueur__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _gobelet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var Party = /** @class */ (function () {
    function Party(nb_tours, nb_dice) {
        var _this = this;
        this._joueurs = [];
        this.initialiser = function () {
            _this._joueurs.push(new _joueur__WEBPACK_IMPORTED_MODULE_0__["Joueur"]("Paul"));
            _this._joueurs.push(new _joueur__WEBPACK_IMPORTED_MODULE_0__["Joueur"]("Claudine"));
            _this._joueurs.push(new _joueur__WEBPACK_IMPORTED_MODULE_0__["Joueur"]("Suzette"));
            _this._joueurs.push(new _joueur__WEBPACK_IMPORTED_MODULE_0__["Joueur"]("Maurice"));
        };
        this.lancer = function () {
            console.log("La partie commence ! Celle-ci comprendra " + _this.nbTours + " tours");
            console.log('Les joueurs présents sont :');
            for (var index = 0; index < _this.joueurs.length; index++) {
                console.log(_this.joueurs[index].name);
            }
            for (var index = 0; index < _this.nbTours; index++) {
                console.log('Tour ' + (index + 1));
                for (var index_1 = 0; index_1 < _this.joueurs.length; index_1++) {
                    console.log(_this.joueurs[index_1].name + " lance le gobelet");
                    _this.joueurs[index_1].jouer(_this.gobelet);
                    console.log(_this.joueurs[index_1].name + " fait " + _this.gobelet.afficherScore());
                    console.log(_this.joueurs[index_1].name + " a un total de " + _this.joueurs[index_1].score);
                }
                console.log('...');
            }
            console.log("Fin de la partie");
            _this.afficherGagnant();
        };
        this.afficherGagnant = function () {
            var winner = _this.joueurs.sort(function (a, b) { return b.score - a.score; })[0];
            console.log('Le gagnant est ' + winner.name);
        };
        this._nbTours = nb_tours;
        this._gobelet = new _gobelet__WEBPACK_IMPORTED_MODULE_1__["Gobelet"](nb_dice);
    }
    Object.defineProperty(Party.prototype, "joueurs", {
        get: function () {
            return this._joueurs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Party.prototype, "nbTours", {
        get: function () {
            return this._nbTours;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Party.prototype, "gobelet", {
        get: function () {
            return this._gobelet;
        },
        enumerable: true,
        configurable: true
    });
    return Party;
}());



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2dvYmVsZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvam91ZXVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL3BhcnRpZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2xGQTtBQUFBO0FBQXlDO0FBRXpDLElBQUksS0FBSyxHQUFHLElBQUkscURBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0FBQzFCLEtBQUssQ0FBQyxXQUFXLEVBQUU7QUFDbkIsS0FBSyxDQUFDLE1BQU0sRUFBRTs7Ozs7Ozs7QUNKZDtBQUFBO0FBQUE7QUFBMkI7QUFFM0I7SUFJ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QW9DTCxZQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBQYXJ0eSB9IGZyb20gXCIuL2NsYXNzZXMvcGFydGllXCI7XHJcblxyXG5sZXQgcGFydHkgPSBuZXcgUGFydHkoMiwzKVxyXG5wYXJ0eS5pbml0aWFsaXNlcigpXHJcbnBhcnR5LmxhbmNlcigpIiwiaW1wb3J0IHsgRGljZSB9IGZyb20gXCIuL2RlXCJcblxuZXhwb3J0IGNsYXNzIEdvYmVsZXR7XG4gICAgcHJpdmF0ZSBfdmFsdWUgOm51bWJlciA9IDBcbiAgICBwcml2YXRlIF9kaWNlcyA6IERpY2VbXSA9IFtdXG5cbiAgICBjb25zdHJ1Y3RvcihuYkRpY2VzOm51bWJlcikge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbmJEaWNlczsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5fZGljZXMucHVzaChuZXcgRGljZSgpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGRpY2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGljZXNcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZVxuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlXG4gICAgfVxuXG4gICAgbGFuY2VyID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5kaWNlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMuZGljZXNbaW5kZXhdLmxhbmNlcigpXG4gICAgICAgICAgICB0aGlzLnZhbHVlICs9IHRoaXMuZGljZXNbaW5kZXhdLnZhbHVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZmZpY2hlclNjb3JlID0gKCk6bnVtYmVyID0+IHtcbiAgICAgICAgbGV0IHNjb3JlID0gMFxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5kaWNlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHNjb3JlICs9IHRoaXMuZGljZXNbaW5kZXhdLnZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjb3JlXG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBEaWNle1xuICAgIHByaXZhdGUgX3ZhbHVlOiBudW1iZXJcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSAwXG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWVcbiAgICB9XG5cbiAgICBsYW5jZXIgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNiArIDEpXG4gICAgfVxuXG59IiwiaW1wb3J0IHsgR29iZWxldCB9IGZyb20gXCIuL2dvYmVsZXRcIlxuXG5leHBvcnQgY2xhc3MgSm91ZXVye1xuICAgIHByaXZhdGUgX25hbWU6c3RyaW5nXG4gICAgcHJpdmF0ZSBfc2NvcmU6bnVtYmVyID0gMFxuXG4gICAgY29uc3RydWN0b3IobmFtZTpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWVcbiAgICB9XG4gICAgIFxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZVxuICAgIH1cblxuICAgIGdldCBzY29yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3JlXG4gICAgfVxuXG4gICAgc2V0IHNjb3JlKHNjb3JlOm51bWJlcikge1xuICAgICAgICB0aGlzLl9zY29yZSA9IHNjb3JlXG4gICAgfVxuXG4gICAgam91ZXIgPSAoZ29iZWxldDpHb2JlbGV0KSA9PiB7XG4gICAgICAgIGdvYmVsZXQubGFuY2VyKClcbiAgICAgICAgdGhpcy5zY29yZSArPSBnb2JlbGV0LmFmZmljaGVyU2NvcmUoKVxuICAgIH1cbn0iLCJpbXBvcnQgeyBKb3VldXIgfSBmcm9tIFwiLi9qb3VldXJcIjtcbmltcG9ydCB7IEdvYmVsZXQgfSBmcm9tIFwiLi9nb2JlbGV0XCI7XG5cbmV4cG9ydCBjbGFzcyBQYXJ0eXtcbiAgICBwcml2YXRlIF9qb3VldXJzIDpKb3VldXJbXSA9IFtdXG4gICAgcHJpdmF0ZSBfbmJUb3VycyA6bnVtYmVyXG4gICAgcHJpdmF0ZSBfZ29iZWxldDpHb2JlbGV0XG5cbiAgICBjb25zdHJ1Y3RvcihuYl90b3VyczpudW1iZXIsIG5iX2RpY2U6bnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX25iVG91cnMgPSBuYl90b3Vyc1xuICAgICAgICB0aGlzLl9nb2JlbGV0ID0gbmV3IEdvYmVsZXQobmJfZGljZSlcbiAgICB9XG5cbiAgICBnZXQgam91ZXVycygpOkpvdWV1cltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2pvdWV1cnNcbiAgICB9XG5cbiAgICBnZXQgbmJUb3VycygpOm51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYlRvdXJzXG4gICAgfVxuXG4gICAgZ2V0IGdvYmVsZXQoKTpHb2JlbGV0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dvYmVsZXRcbiAgICB9XG4gICAgXG4gICAgaW5pdGlhbGlzZXIgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2pvdWV1cnMucHVzaChuZXcgSm91ZXVyKFwiUGF1bFwiKSlcbiAgICAgICAgdGhpcy5fam91ZXVycy5wdXNoKG5ldyBKb3VldXIoXCJDbGF1ZGluZVwiKSlcbiAgICAgICAgdGhpcy5fam91ZXVycy5wdXNoKG5ldyBKb3VldXIoXCJTdXpldHRlXCIpKVxuICAgICAgICB0aGlzLl9qb3VldXJzLnB1c2gobmV3IEpvdWV1cihcIk1hdXJpY2VcIikpXG4gICAgfVxuXG4gICAgbGFuY2VyID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgTGEgcGFydGllIGNvbW1lbmNlICEgQ2VsbGUtY2kgY29tcHJlbmRyYSAke3RoaXMubmJUb3Vyc30gdG91cnNgKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0xlcyBqb3VldXJzIHByw6lzZW50cyBzb250IDonKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuam91ZXVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuam91ZXVyc1tpbmRleF0ubmFtZSk7IFxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLm5iVG91cnM7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb3VyICcgKyAoaW5kZXggKyAxKSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5qb3VldXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuam91ZXVyc1tpbmRleF0ubmFtZSArIFwiIGxhbmNlIGxlIGdvYmVsZXRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5qb3VldXJzW2luZGV4XS5qb3Vlcih0aGlzLmdvYmVsZXQpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5qb3VldXJzW2luZGV4XS5uYW1lICsgXCIgZmFpdCBcIiArIHRoaXMuZ29iZWxldC5hZmZpY2hlclNjb3JlKCkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuam91ZXVyc1tpbmRleF0ubmFtZSArIFwiIGEgdW4gdG90YWwgZGUgXCIgKyB0aGlzLmpvdWV1cnNbaW5kZXhdLnNjb3JlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcuLi4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIkZpbiBkZSBsYSBwYXJ0aWVcIik7XG4gICAgICAgIHRoaXMuYWZmaWNoZXJHYWduYW50KClcbiAgICB9XG5cbiAgICBhZmZpY2hlckdhZ25hbnQgPSAoKSA9PiB7XG4gICAgICAgIGxldCB3aW5uZXI6Sm91ZXVyID0gdGhpcy5qb3VldXJzLnNvcnQoKGEsYik9PmIuc2NvcmUgLSBhLnNjb3JlKVswXVxuICAgICAgICBjb25zb2xlLmxvZygnTGUgZ2FnbmFudCBlc3QgJyArIHdpbm5lci5uYW1lKTtcbiAgICAgICAgXG4gICAgfVxuXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9
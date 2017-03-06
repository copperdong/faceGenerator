/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _head = __webpack_require__(3);

var _head2 = _interopRequireDefault(_head);

var _hair = __webpack_require__(2);

var _hair2 = _interopRequireDefault(_hair);

var _eyes = __webpack_require__(1);

var _eyes2 = _interopRequireDefault(_eyes);

var _nose = __webpack_require__(5);

var _nose2 = _interopRequireDefault(_nose);

var _mouth = __webpack_require__(4);

var _mouth2 = _interopRequireDefault(_mouth);

var _shirt = __webpack_require__(6);

var _shirt2 = _interopRequireDefault(_shirt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headGenerator = function headGenerator(ctx) {
    (0, _shirt2.default)(ctx);
    (0, _hair2.default)(ctx);
    (0, _head2.default)(ctx);
    (0, _eyes2.default)(ctx);
    (0, _nose2.default)(ctx);
    (0, _mouth2.default)(ctx);

    /*nose(ctx);*/
};

exports.default = headGenerator;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = eyes;
function eyes(ctx) {
    var diff = Math.floor(Math.random() * 20) + 10;
    var lEyeX = 100 - diff;

    var rEyex = 100 + diff;
    var eyeY = Math.floor(Math.random() * 30) + 50;
    var centerX = 100;
    var eyeSize = Math.random() * 5 + 4;
    var browWidth = 5 * Math.floor(Math.random() * 10);
    var browYStart = eyeY + Math.floor(Math.random() * 10) + 1;
    var browYEnd = browYStart + Math.floor(Math.random() * 6);
    var browUpOrDown = Math.floor(Math.random() * 10);
    var eyeWhite = Math.floor(Math.random() * 10) + 5;

    var pupilDiffY = Math.random() * eyeSize + eyeWhite - (Math.random() * eyeSize + eyeWhite);
    var pupilDiffX = Math.random() * eyeSize + eyeWhite - (Math.random() * eyeSize + eyeWhite);
    var Eyes = new Path2D();
    console.log('I am the eye function');
    //ctx (my) lefteye
    ctx.beginPath();
    ctx.moveTo(lEyeX, eyeY);
    ctx.arc(lEyeX, eyeY, eyeSize + eyeWhite, 0, 10);
    ctx.fillStyle = 'white';
    ctx.fill();

    //ctx (my) rightteye whites
    ctx.moveTo(rEyex, eyeY + pupilDiffY);
    ctx.arc(rEyex, eyeY, eyeSize + eyeWhite, 0, 10);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
    //ctx (my) lefteye pupiml
    ctx.beginPath();
    ctx.moveTo(lEyeX + pupilDiffX, eyeY + pupilDiffY);
    ctx.arc(lEyeX + pupilDiffX, eyeY + pupilDiffY, eyeSize, 0, 10);
    ctx.fillStyle = 'black';
    ctx.fill();

    //ctx (my) rightteye pupiml
    ctx.moveTo(rEyex + pupilDiffX, eyeY + pupilDiffY);
    ctx.arc(rEyex + pupilDiffX, eyeY + pupilDiffY, eyeSize, 0, 10);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();

    //l brow
    //ctx.clearRect(0, eyeY, 200, 50)
    /*    ctx.beginPath();
        ctx.moveTo(,browYStart);
        ctx.closePath();*/
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hair;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function hair(ctx) {
    var bounds = { t: 0, r: 200, b: 200, l: 0 };
    var height = 200;
    var width = 200;
    var yCenter = Math.floor(Math.random() * 100) + 20;
    var borderDiff = Math.floor(Math.random() * 30) + 10;

    var h = {
        l: [width - borderDiff, yCenter],
        r: [borderDiff, yCenter]
    };

    function topBeziers(def) {
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : bounds;
        var l = def.l,
            r = def.r;

        var xL = l[0];
        var yL = b.t;
        var yR = b.t;
        var xR = r[0];
        var lBeziers = [xL, yL];
        var rBeziers = [xR, yR];

        return [].concat(lBeziers, rBeziers);
    }

    function bottomBeziers(def) {
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : bounds;
        var l = def.l,
            r = def.r;

        var headMinw = 10;
        var headTopW = headMinw + Math.floor(Math.random()) * (r[0] - l[0]);
        var xL = l[0];
        var yL = b.b;
        var yR = b.b;
        var xR = r[0];
        var lBeziers = [xL, yL];
        var rBeziers = [xR, yR];

        return [].concat(rBeziers, lBeziers);
    }

    function generateHairColor() {
        var reds = Math.floor(Math.random() * 255);
        var greens = Math.floor(Math.random() * 255);
        var blues = Math.floor(Math.random() * 255);
        return reds + ',' + greens + ',' + blues;
    }

    console.log('I am the head function');
    var head = new Path2D();
    //head.beginPath();
    head.moveTo.apply(head, _toConsumableArray(h.l));

    head.bezierCurveTo.apply(head, _toConsumableArray(topBeziers(h)).concat(_toConsumableArray(h.r)));
    head.bezierCurveTo.apply(head, _toConsumableArray(bottomBeziers(h)).concat(_toConsumableArray(h.l)));
    //ctx.arc(50,50,40,0,10);
    //headtop
    ctx.fillStyle = 'rgb(' + generateHairColor() + ')';
    //ctx.stroke();
    ctx.fill(head);
    ctx.closePath();
    return head;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = head;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function head(ctx) {
    var bounds = { t: 10, r: 200, b: 200, l: 0 };
    var height = 200;
    var width = 200;
    var yCenter = Math.floor(Math.random() * 40) + 80;
    var borderDiff = Math.floor(Math.random() * 40) + 10;

    var h = {
        l: [width - borderDiff, yCenter],
        r: [borderDiff, yCenter]
    };

    function topBeziers(def) {
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : bounds;
        var l = def.l,
            r = def.r;

        var xL = l[0];
        var yL = b.t;
        var yR = b.t;
        var xR = r[0];
        var lBeziers = [xL, yL];
        var rBeziers = [xR, yR];

        return [].concat(lBeziers, rBeziers);
    }

    function bottomBeziers(def) {
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : bounds;
        var l = def.l,
            r = def.r;

        var headMinw = 10;
        var headTopW = headMinw + Math.floor(Math.random()) * (r[0] - l[0]);
        var xL = l[0];
        var yL = b.b;
        var yR = b.b;
        var xR = r[0];
        var lBeziers = [xL, yL];
        var rBeziers = [xR, yR];

        return [].concat(rBeziers, lBeziers);
    }

    function generateSkinTone() {
        var reds = 135 + Math.floor(Math.random() * 120);
        var greens = reds - Math.floor(Math.random() * 90);
        var blues = reds - Math.floor(Math.random() * 40);
        return reds + ',' + greens + ',' + blues;
    }

    console.log('I am the head function');
    var head = new Path2D();
    //head.beginPath();
    head.moveTo.apply(head, _toConsumableArray(h.l));

    console.log(generateSkinTone(), generateSkinTone());
    head.bezierCurveTo.apply(head, _toConsumableArray(topBeziers(h)).concat(_toConsumableArray(h.r)));
    head.bezierCurveTo.apply(head, _toConsumableArray(bottomBeziers(h)).concat(_toConsumableArray(h.l)));
    //ctx.arc(50,50,40,0,10);
    //headtop
    ctx.fillStyle = 'rgb(' + generateSkinTone() + ')';
    //ctx.stroke();
    ctx.fill(head);
    ctx.closePath();
    ctx.save();
    return head;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mouth;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function mouth(ctx) {
    var mouthY = 140 - Math.random() * 20;
    var mouthWidth = 20 + Math.floor(Math.random() * 30);
    var m = {
        l: [100 - mouthWidth, mouthY],
        r: [100 + mouthWidth, mouthY]
    };
    var smileOrFrown = mouthY + Math.floor(Math.random() * 40) - 20;
    var smileOrFrown2 = mouthY + Math.floor(Math.random() * 40) - 20;

    console.log('I am the head function');
    ctx.beginPath();
    ctx.moveTo.apply(ctx, _toConsumableArray(m.l));

    ctx.bezierCurveTo.apply(ctx, [m.l[0], smileOrFrown, m.r[0], smileOrFrown].concat(_toConsumableArray(m.r)));
    ctx.bezierCurveTo.apply(ctx, [m.r[0], smileOrFrown2, m.l[0], smileOrFrown2].concat(_toConsumableArray(m.l)));

    //ctx.lineTo(...m.r,mouthY);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.default = nose;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function nose(ctx) {
        function generateSkinTone() {
                var reds = 245 + Math.floor(Math.random() * 10);
                var greens = 170 + Math.floor(Math.random() * 30);
                var blues = 140 + Math.floor(Math.random() * 30);
                return reds + ',' + greens + ',' + blues;
        }

        var noseY = 100 - Math.random() * 10;
        var noseWidth = 4 + Math.floor(Math.random() * 10);
        var m = {
                l: [100 - noseWidth, noseY],
                r: [100 + noseWidth, noseY]
        };
        var noseUpOrDown = noseY + Math.floor(Math.random() * 60) - 30;
        console.log('I am the nose function');
        ctx.beginPath();
        ctx.moveTo.apply(ctx, _toConsumableArray(m.l));

        ctx.bezierCurveTo.apply(ctx, [m.l[0], noseUpOrDown, m.r[0], noseUpOrDown].concat(_toConsumableArray(m.r)));
        ctx.bezierCurveTo.apply(ctx, [m.r[0], noseUpOrDown + 6, m.l[0], noseUpOrDown + 7].concat(_toConsumableArray(m.l)));

        //ctx.lineTo(...m.r,noseY);
        ctx.fillStyle = 'rgb(' + generateSkinTone() + ');';
        ctx.fill();
        ctx.closePath();
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = shirt;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function shirt(ctx) {

    var bounds = { t: 0, r: 200, b: 200, l: 0 };
    var height = 200;
    var width = 200;
    var yCenter = Math.floor(Math.random() * 190) + 20;
    var borderDiff = Math.floor(Math.random() * 120) + -60;
    var h = {
        l: [width - borderDiff, height],
        r: [borderDiff, height]
    };

    console.log('I am the shirt function');
    var head = new Path2D();
    //head.beginPath();
    head.moveTo.apply(head, _toConsumableArray(h.l));

    head.bezierCurveTo.apply(head, _toConsumableArray(topBeziers(h)).concat(_toConsumableArray(h.r)));
    head.bezierCurveTo.apply(head, [200, 200, 0, 200].concat(_toConsumableArray(h.l)));
    //ctx.arc(50,50,40,0,10);
    //headtop
    ctx.fillStyle = 'rgb(' + generateShirtTone() + ')';
    //ctx.stroke();
    ctx.fill(head);
    ctx.closePath();
    return head;

    function generateShirtTone() {
        var reds = Math.floor(Math.random() * 255);
        var greens = Math.floor(Math.random() * 255);
        var blues = Math.floor(Math.random() * 255);
        return reds + ',' + greens + ',' + blues;
    }

    function topBeziers(def) {
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : bounds;
        var l = def.l,
            r = def.r;

        var y = b.t * Math.random() * 40;
        var headMinw = 20;
        var headTopW = headMinw + Math.floor(Math.random()) * (r[0] - l[0]);
        var xL = l[0];
        var yL = b.t;
        var yR = b.t;
        var xR = r[0];
        var lBeziers = [xL, yL];
        var rBeziers = [xR, yR];

        return [].concat(lBeziers, rBeziers);
    }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _headGenerator = __webpack_require__(0);

var _headGenerator2 = _interopRequireDefault(_headGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateColor() {
    var reds = Math.floor(Math.random() * 255);
    var greens = Math.floor(Math.random() * 255);
    var blues = Math.floor(Math.random() * 255);
    return reds + ',' + greens + ',' + blues;
}

var canvases = document.getElementsByTagName('canvas');
console.log(canvases);
for (var i = 0; i < canvases.length; i++) {
    var canvas = canvases[i];

    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(' + generateColor() + ')';
    ctx.fillRect(0, 0, 200, 200);
    ctx.save();
    (0, _headGenerator2.default)(ctx);
    canvas.addEventListener('click', function (canvas) {
        return function () {
            var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            window.location.href = image;
        };
    }(canvas));
};

/***/ })
/******/ ]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tesseract.js/package.json":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/package.json ***!
  \************************************************/
/*! exports provided: name, version, description, main, scripts, browser, author, license, devDependencies, dependencies, repository, bugs, homepage, default */
/***/ (function(module) {

module.exports = {"name":"tesseract.js","version":"1.0.14","description":"Pure Javascript Multilingual OCR","main":"src/index.js","scripts":{"start":"concurrently --kill-others \"watchify src/index.js  -t [ envify --NODE_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.dev.js --standalone Tesseract\" \"watchify src/browser/worker.js  -t [ envify --NODE_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/worker.dev.js\" \"http-server -p 7355\"","build":"browserify src/index.js -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.js --standalone Tesseract && browserify src/browser/worker.js -t [ babelify --presets [ es2015 ] ] -o dist/worker.js && uglifyjs dist/tesseract.js --source-map -o dist/tesseract.min.js && uglifyjs dist/worker.js --source-map -o dist/worker.min.js","release":"npm run build && git commit -am 'new release' && git push && git tag `jq -r '.version' package.json` && git push origin --tags && npm publish"},"browser":{"./src/node/index.js":"./src/browser/index.js"},"author":"","license":"Apache-2.0","devDependencies":{"babel-preset-es2015":"^6.16.0","babelify":"^7.3.0","browserify":"^13.1.0","concurrently":"^3.1.0","envify":"^3.4.1","http-server":"^0.9.0","pako":"^1.0.3","uglify-js":"^3.4.9","watchify":"^3.7.0"},"dependencies":{"file-type":"^3.8.0","isomorphic-fetch":"^2.2.1","is-url":"1.2.2","jpeg-js":"^0.2.0","level-js":"^2.2.4","node-fetch":"^1.6.3","object-assign":"^4.1.0","png.js":"^0.2.1","tesseract.js-core":"^1.0.2"},"repository":{"type":"git","url":"https://github.com/naptha/tesseract.js.git"},"bugs":{"url":"https://github.com/naptha/tesseract.js/issues"},"homepage":"https://github.com/naptha/tesseract.js"};

/***/ }),

/***/ "./node_modules/tesseract.js/src/browser/index.js":
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/browser/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defaultOptions = {
    // workerPath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js@0.2.0/dist/worker.js',
    corePath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js-core@0.1.0/index.js',    
    langPath: 'https://tessdata.projectnaptha.com/3.02/',
}

if (true) {
    console.debug('Using Development Configuration')
    defaultOptions.workerPath = location.protocol + '//' + location.host + '/dist/worker.dev.js?nocache=' + Math.random().toString(36).slice(3)
}else{ var version; }

exports.defaultOptions = defaultOptions;


exports.spawnWorker = function spawnWorker(instance, workerOptions){
    if(window.Blob && window.URL){
        var blob = new Blob(['importScripts("' + workerOptions.workerPath + '");'])
        var worker = new Worker(window.URL.createObjectURL(blob));
    }else{
        var worker = new Worker(workerOptions.workerPath)
    }

    worker.onmessage = function(e){
        var packet = e.data;
        instance._recv(packet)
    }
    return worker
}

exports.terminateWorker = function(instance){
    instance.worker.terminate()
}

exports.sendPacket = function sendPacket(instance, packet){
    loadImage(packet.payload.image, function(img){
        packet.payload.image = img
        instance.worker.postMessage(packet) 
    })
}


function loadImage(image, cb){
    if(typeof image === 'string'){
        if(/^\#/.test(image)){
            // element css selector
            return loadImage(document.querySelector(image), cb)
        }else if(/(blob|data)\:/.test(image)){
            // data url
            var im = new Image
            im.src = image;
            im.onload = e => loadImage(im, cb);
            return
        }else{
            var xhr = new XMLHttpRequest();
            xhr.open('GET', image, true)
            xhr.responseType = "blob";
            xhr.onload = e => loadImage(xhr.response, cb);
            xhr.onerror = function(e){
                if(/^https?:\/\//.test(image) && !/^https:\/\/crossorigin.me/.test(image)){
                    console.debug('Attempting to load image with CORS proxy')
                    loadImage('https://crossorigin.me/' + image, cb)
                }
            }
            xhr.send(null)
            return
        }
    }else if(image instanceof File){
        // files
        var fr = new FileReader()
        fr.onload = e => loadImage(fr.result, cb);
        fr.readAsDataURL(image)
        return
    }else if(image instanceof Blob){
        return loadImage(URL.createObjectURL(image), cb)
    }else if(image.getContext){
        // canvas element
        return loadImage(image.getContext('2d'), cb)
    }else if(image.tagName == "IMG" || image.tagName == "VIDEO"){
        // image element or video element
        var c = document.createElement('canvas');
        c.width  = image.naturalWidth  || image.videoWidth;
        c.height = image.naturalHeight || image.videoHeight;
        var ctx = c.getContext('2d');
        ctx.drawImage(image, 0, 0);
        return loadImage(ctx, cb)
    }else if(image.getImageData){
        // canvas context
        var data = image.getImageData(0, 0, image.canvas.width, image.canvas.height);
        return loadImage(data, cb)
    }else{
        return cb(image)
    }
    throw new Error('Missing return in loadImage cascade')

}


/***/ }),

/***/ "./node_modules/tesseract.js/src/common/circularize.js":
/*!*************************************************************!*\
  !*** ./node_modules/tesseract.js/src/common/circularize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// The result of dump.js is a big JSON tree
// which can be easily serialized (for instance
// to be sent from a webworker to the main app
// or through Node's IPC), but we want
// a (circular) DOM-like interface for walking
// through the data. 

module.exports = function circularize(page){
    page.paragraphs = []
    page.lines = []
    page.words = []
    page.symbols = []

    page.blocks.forEach(function(block){
        block.page = page;

        block.lines = []
        block.words = []
        block.symbols = []

        block.paragraphs.forEach(function(para){
            para.block = block;
            para.page = page;

            para.words = []
            para.symbols = []
            
            para.lines.forEach(function(line){
                line.paragraph = para;
                line.block = block;
                line.page = page;

                line.symbols = []

                line.words.forEach(function(word){
                    word.line = line;
                    word.paragraph = para;
                    word.block = block;
                    word.page = page;
                    word.symbols.forEach(function(sym){
                        sym.word = word;
                        sym.line = line;
                        sym.paragraph = para;
                        sym.block = block;
                        sym.page = page;
                        
                        sym.line.symbols.push(sym)
                        sym.paragraph.symbols.push(sym)
                        sym.block.symbols.push(sym)
                        sym.page.symbols.push(sym)
                    })
                    word.paragraph.words.push(word)
                    word.block.words.push(word)
                    word.page.words.push(word)
                })
                line.block.lines.push(line)
                line.page.lines.push(line)
            })
            para.page.paragraphs.push(para)
        })
    })
    return page
}

/***/ }),

/***/ "./node_modules/tesseract.js/src/common/job.js":
/*!*****************************************************!*\
  !*** ./node_modules/tesseract.js/src/common/job.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const adapter = __webpack_require__(/*! ../node/index.js */ "./node_modules/tesseract.js/src/browser/index.js")

let jobCounter = 0;

module.exports = class TesseractJob {
    constructor(instance){
        this.id = 'Job-' + (++jobCounter) + '-' + Math.random().toString(16).slice(3, 8)

        this._instance = instance;
        this._resolve = []
        this._reject = []
        this._progress = []
        this._finally = []
    }

    then(resolve, reject){
        if(this._resolve.push){
            this._resolve.push(resolve) 
        }else{
            resolve(this._resolve)
        }

        if(reject) this.catch(reject);
        return this;
    }
    catch(reject){
        if(this._reject.push){
            this._reject.push(reject) 
        }else{
            reject(this._reject)
        }
        return this;
    }
    progress(fn){
        this._progress.push(fn)
        return this;
    }
    finally(fn) {
        this._finally.push(fn)
        return this;  
    }
    _send(action, payload){
        adapter.sendPacket(this._instance, {
            jobId: this.id,
            action: action,
            payload: payload
        })
    }

    _handle(packet){
        var data = packet.data;
        let runFinallyCbs = false;

        if(packet.status === 'resolve'){
            if(this._resolve.length === 0) console.log(data);
            this._resolve.forEach(fn => {
                var ret = fn(data);
                if(ret && typeof ret.then == 'function'){
                    console.warn('TesseractJob instances do not chain like ES6 Promises. To convert it into a real promise, use Promise.resolve.')
                }
            })
            this._resolve = data;
            this._instance._dequeue()
            runFinallyCbs = true;
        }else if(packet.status === 'reject'){
            if(this._reject.length === 0) console.error(data);
            this._reject.forEach(fn => fn(data))
            this._reject = data;
            this._instance._dequeue()
            runFinallyCbs = true;
        }else if(packet.status === 'progress'){
            this._progress.forEach(fn => fn(data))
        }else{
            console.warn('Message type unknown', packet.status)
        }

        if (runFinallyCbs) {
            this._finally.forEach(fn => fn(data));
        }
    }
}


/***/ }),

/***/ "./node_modules/tesseract.js/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const adapter = __webpack_require__(/*! ./node/index.js */ "./node_modules/tesseract.js/src/browser/index.js")
const circularize = __webpack_require__(/*! ./common/circularize.js */ "./node_modules/tesseract.js/src/common/circularize.js")
const TesseractJob = __webpack_require__(/*! ./common/job */ "./node_modules/tesseract.js/src/common/job.js");
const version = __webpack_require__(/*! ../package.json */ "./node_modules/tesseract.js/package.json").version;

const create = function(workerOptions = {}){
	var worker = new TesseractWorker(Object.assign({}, adapter.defaultOptions, workerOptions));
	worker.create = create;
	worker.version = version;
	return worker;
}

class TesseractWorker {
	constructor(workerOptions){
		this.worker = null;
		this.workerOptions = workerOptions;
		this._currentJob = null;
		this._queue = [];
	}

	recognize(image, options = {}){
		return this._delay(job => {
			if (typeof options === 'string') options = {lang: options}
			options.lang = options.lang || 'eng';

			job._send('recognize', { image, options, workerOptions: this.workerOptions });
		})
	}
	detect(image, options = {}){
		return this._delay(job => {
			job._send('detect', { image, options, workerOptions: this.workerOptions });
		})
	}

	terminate(){
		if(this.worker) adapter.terminateWorker(this);
		this.worker = null;
		this._currentJob = null;
		this._queue = [];
	}

	_delay(fn){
		if(!this.worker) this.worker = adapter.spawnWorker(this, this.workerOptions);

		var job = new TesseractJob(this);
		this._queue.push(e => {
			this._queue.shift();
			this._currentJob = job;
			fn(job);
		});
		if(!this._currentJob) this._dequeue();
		return job;
	}

	_dequeue(){
		this._currentJob = null;
		if(this._queue.length){
			this._queue[0]();
		}
	}

	_recv(packet){
        if(packet.status === 'resolve' && packet.action === 'recognize'){
            packet.data = circularize(packet.data);
        }

		if(this._currentJob.id === packet.jobId){
			this._currentJob._handle(packet)
		} else {
			console.warn('Job ID ' + packet.jobId + ' not known.')
		}
	}
}

module.exports = create();


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tesseract_js_1 = __importDefault(__webpack_require__(/*! tesseract.js */ "./node_modules/tesseract.js/src/index.js"));
tesseract_js_1.default.workerOptions.workerPath = 'http://localhost:8080/worker.min.js';
const setImageSrc = (image, imageFile) => {
    return new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.onload = function () {
            if (typeof fr.result !== 'string') {
                return reject(null);
            }
            image.src = fr.result;
            return resolve();
        };
        fr.onerror = reject;
        fr.readAsDataURL(imageFile);
    });
};
const recognitionImageInputElement = document.querySelector('#recognition-image-input');
const recognitionConfidenceInputElement = document.querySelector('#recognition-confidence-input');
const recognitionProgressElement = document.querySelector('#recognition-progress');
const recognitionTextElement = document.querySelector('#recognition-text');
const originalImageElement = document.querySelector('#original-image');
const labeledImageElement = document.querySelector('#labeled-image');
if (!recognitionImageInputElement ||
    !recognitionTextElement ||
    !originalImageElement ||
    !labeledImageElement ||
    !recognitionProgressElement ||
    !recognitionConfidenceInputElement) {
    throw new Error('Missing elements');
}
recognitionImageInputElement.addEventListener('change', () => {
    if (!recognitionImageInputElement.files) {
        return null;
    }
    const file = recognitionImageInputElement.files[0];
    return tesseract_js_1.default
        .recognize(file, {
        lang: 'eng',
    })
        .progress(({ progress, status }) => {
        if (!progress || !status || status !== 'recognizing text') {
            return null;
        }
        const p = (progress * 100).toFixed(2);
        recognitionProgressElement.textContent = `${status}: ${p}%`;
        recognitionProgressElement.value = p;
    })
        .then(async (res) => {
        originalImageElement.innerHTML = '';
        labeledImageElement.innerHTML = '';
        recognitionTextElement.innerHTML = '';
        const paragraphsElements = res.paragraphs.map(({ text }) => {
            const p = document.createElement('p');
            p.textContent = text;
            return p;
        });
        recognitionTextElement.append(...paragraphsElements);
        const originalImage = document.createElement('img');
        await setImageSrc(originalImage, file);
        const labeledImage = originalImage.cloneNode(true);
        const wordsElements = res.words
            .filter(({ confidence }) => {
            return confidence > parseInt(recognitionConfidenceInputElement.value, 10);
        })
            .map((word) => {
            const div = document.createElement('div');
            const { x0, x1, y0, y1 } = word.bbox;
            div.classList.add('word-element');
            Object.assign(div.style, {
                top: `${y0}px`,
                left: `${x0}px`,
                width: `${x1 - x0}px`,
                height: `${y1 - y0}px`,
                border: '1px solid black',
                position: 'absolute',
            });
            return div;
        });
        originalImageElement.appendChild(originalImage);
        labeledImageElement.appendChild(labeledImage);
        labeledImageElement.append(...wordsElements);
    });
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy9jb21tb24vY2lyY3VsYXJpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvY29tbW9uL2pvYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLElBQXNDO0FBQzFDO0FB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ZixLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO2dCQUNyQixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO2dCQUN0QixNQUFNLEVBQUUsaUJBQWlCO2dCQUN6QixRQUFRLEVBQUUsVUFBVTthQUNyQixDQUFDLENBQUM7WUFFSCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO1FBRUwsb0JBQW9CLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hELG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwidmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIC8vIHdvcmtlclBhdGg6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvbmFwdGhhL3Rlc3NlcmFjdC5qc0AwLjIuMC9kaXN0L3dvcmtlci5qcycsXG4gICAgY29yZVBhdGg6ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvbmFwdGhhL3Rlc3NlcmFjdC5qcy1jb3JlQDAuMS4wL2luZGV4LmpzJywgICAgXG4gICAgbGFuZ1BhdGg6ICdodHRwczovL3Rlc3NkYXRhLnByb2plY3RuYXB0aGEuY29tLzMuMDIvJyxcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdVc2luZyBEZXZlbG9wbWVudCBDb25maWd1cmF0aW9uJylcbiAgICBkZWZhdWx0T3B0aW9ucy53b3JrZXJQYXRoID0gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCArICcvZGlzdC93b3JrZXIuZGV2LmpzP25vY2FjaGU9JyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDMpXG59ZWxzZXtcbiAgICB2YXIgdmVyc2lvbiA9IHJlcXVpcmUoJy4uLy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb247XG4gICAgZGVmYXVsdE9wdGlvbnMud29ya2VyUGF0aCA9ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvbmFwdGhhL3Rlc3NlcmFjdC5qc0AnICsgdmVyc2lvbiArICcvZGlzdC93b3JrZXIuanMnXG59XG5cbmV4cG9ydHMuZGVmYXVsdE9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcblxuXG5leHBvcnRzLnNwYXduV29ya2VyID0gZnVuY3Rpb24gc3Bhd25Xb3JrZXIoaW5zdGFuY2UsIHdvcmtlck9wdGlvbnMpe1xuICAgIGlmKHdpbmRvdy5CbG9iICYmIHdpbmRvdy5VUkwpe1xuICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFsnaW1wb3J0U2NyaXB0cyhcIicgKyB3b3JrZXJPcHRpb25zLndvcmtlclBhdGggKyAnXCIpOyddKVxuICAgICAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcih3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSk7XG4gICAgfWVsc2V7XG4gICAgICAgIHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKHdvcmtlck9wdGlvbnMud29ya2VyUGF0aClcbiAgICB9XG5cbiAgICB3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciBwYWNrZXQgPSBlLmRhdGE7XG4gICAgICAgIGluc3RhbmNlLl9yZWN2KHBhY2tldClcbiAgICB9XG4gICAgcmV0dXJuIHdvcmtlclxufVxuXG5leHBvcnRzLnRlcm1pbmF0ZVdvcmtlciA9IGZ1bmN0aW9uKGluc3RhbmNlKXtcbiAgICBpbnN0YW5jZS53b3JrZXIudGVybWluYXRlKClcbn1cblxuZXhwb3J0cy5zZW5kUGFja2V0ID0gZnVuY3Rpb24gc2VuZFBhY2tldChpbnN0YW5jZSwgcGFja2V0KXtcbiAgICBsb2FkSW1hZ2UocGFja2V0LnBheWxvYWQuaW1hZ2UsIGZ1bmN0aW9uKGltZyl7XG4gICAgICAgIHBhY2tldC5wYXlsb2FkLmltYWdlID0gaW1nXG4gICAgICAgIGluc3RhbmNlLndvcmtlci5wb3N0TWVzc2FnZShwYWNrZXQpIFxuICAgIH0pXG59XG5cblxuZnVuY3Rpb24gbG9hZEltYWdlKGltYWdlLCBjYil7XG4gICAgaWYodHlwZW9mIGltYWdlID09PSAnc3RyaW5nJyl7XG4gICAgICAgIGlmKC9eXFwjLy50ZXN0KGltYWdlKSl7XG4gICAgICAgICAgICAvLyBlbGVtZW50IGNzcyBzZWxlY3RvclxuICAgICAgICAgICAgcmV0dXJuIGxvYWRJbWFnZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGltYWdlKSwgY2IpXG4gICAgICAgIH1lbHNlIGlmKC8oYmxvYnxkYXRhKVxcOi8udGVzdChpbWFnZSkpe1xuICAgICAgICAgICAgLy8gZGF0YSB1cmxcbiAgICAgICAgICAgIHZhciBpbSA9IG5ldyBJbWFnZVxuICAgICAgICAgICAgaW0uc3JjID0gaW1hZ2U7XG4gICAgICAgICAgICBpbS5vbmxvYWQgPSBlID0+IGxvYWRJbWFnZShpbSwgY2IpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIGltYWdlLCB0cnVlKVxuICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9IFwiYmxvYlwiO1xuICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGUgPT4gbG9hZEltYWdlKHhoci5yZXNwb25zZSwgY2IpO1xuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBpZigvXmh0dHBzPzpcXC9cXC8vLnRlc3QoaW1hZ2UpICYmICEvXmh0dHBzOlxcL1xcL2Nyb3Nzb3JpZ2luLm1lLy50ZXN0KGltYWdlKSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ0F0dGVtcHRpbmcgdG8gbG9hZCBpbWFnZSB3aXRoIENPUlMgcHJveHknKVxuICAgICAgICAgICAgICAgICAgICBsb2FkSW1hZ2UoJ2h0dHBzOi8vY3Jvc3NvcmlnaW4ubWUvJyArIGltYWdlLCBjYilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4aHIuc2VuZChudWxsKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9ZWxzZSBpZihpbWFnZSBpbnN0YW5jZW9mIEZpbGUpe1xuICAgICAgICAvLyBmaWxlc1xuICAgICAgICB2YXIgZnIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgIGZyLm9ubG9hZCA9IGUgPT4gbG9hZEltYWdlKGZyLnJlc3VsdCwgY2IpO1xuICAgICAgICBmci5yZWFkQXNEYXRhVVJMKGltYWdlKVxuICAgICAgICByZXR1cm5cbiAgICB9ZWxzZSBpZihpbWFnZSBpbnN0YW5jZW9mIEJsb2Ipe1xuICAgICAgICByZXR1cm4gbG9hZEltYWdlKFVSTC5jcmVhdGVPYmplY3RVUkwoaW1hZ2UpLCBjYilcbiAgICB9ZWxzZSBpZihpbWFnZS5nZXRDb250ZXh0KXtcbiAgICAgICAgLy8gY2FudmFzIGVsZW1lbnRcbiAgICAgICAgcmV0dXJuIGxvYWRJbWFnZShpbWFnZS5nZXRDb250ZXh0KCcyZCcpLCBjYilcbiAgICB9ZWxzZSBpZihpbWFnZS50YWdOYW1lID09IFwiSU1HXCIgfHwgaW1hZ2UudGFnTmFtZSA9PSBcIlZJREVPXCIpe1xuICAgICAgICAvLyBpbWFnZSBlbGVtZW50IG9yIHZpZGVvIGVsZW1lbnRcbiAgICAgICAgdmFyIGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgYy53aWR0aCAgPSBpbWFnZS5uYXR1cmFsV2lkdGggIHx8IGltYWdlLnZpZGVvV2lkdGg7XG4gICAgICAgIGMuaGVpZ2h0ID0gaW1hZ2UubmF0dXJhbEhlaWdodCB8fCBpbWFnZS52aWRlb0hlaWdodDtcbiAgICAgICAgdmFyIGN0eCA9IGMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG4gICAgICAgIHJldHVybiBsb2FkSW1hZ2UoY3R4LCBjYilcbiAgICB9ZWxzZSBpZihpbWFnZS5nZXRJbWFnZURhdGEpe1xuICAgICAgICAvLyBjYW52YXMgY29udGV4dFxuICAgICAgICB2YXIgZGF0YSA9IGltYWdlLmdldEltYWdlRGF0YSgwLCAwLCBpbWFnZS5jYW52YXMud2lkdGgsIGltYWdlLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICByZXR1cm4gbG9hZEltYWdlKGRhdGEsIGNiKVxuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gY2IoaW1hZ2UpXG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXR1cm4gaW4gbG9hZEltYWdlIGNhc2NhZGUnKVxuXG59XG4iLCIvLyBUaGUgcmVzdWx0IG9mIGR1bXAuanMgaXMgYSBiaWcgSlNPTiB0cmVlXG4vLyB3aGljaCBjYW4gYmUgZWFzaWx5IHNlcmlhbGl6ZWQgKGZvciBpbnN0YW5jZVxuLy8gdG8gYmUgc2VudCBmcm9tIGEgd2Vid29ya2VyIHRvIHRoZSBtYWluIGFwcFxuLy8gb3IgdGhyb3VnaCBOb2RlJ3MgSVBDKSwgYnV0IHdlIHdhbnRcbi8vIGEgKGNpcmN1bGFyKSBET00tbGlrZSBpbnRlcmZhY2UgZm9yIHdhbGtpbmdcbi8vIHRocm91Z2ggdGhlIGRhdGEuIFxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNpcmN1bGFyaXplKHBhZ2Upe1xuICAgIHBhZ2UucGFyYWdyYXBocyA9IFtdXG4gICAgcGFnZS5saW5lcyA9IFtdXG4gICAgcGFnZS53b3JkcyA9IFtdXG4gICAgcGFnZS5zeW1ib2xzID0gW11cblxuICAgIHBhZ2UuYmxvY2tzLmZvckVhY2goZnVuY3Rpb24oYmxvY2spe1xuICAgICAgICBibG9jay5wYWdlID0gcGFnZTtcblxuICAgICAgICBibG9jay5saW5lcyA9IFtdXG4gICAgICAgIGJsb2NrLndvcmRzID0gW11cbiAgICAgICAgYmxvY2suc3ltYm9scyA9IFtdXG5cbiAgICAgICAgYmxvY2sucGFyYWdyYXBocy5mb3JFYWNoKGZ1bmN0aW9uKHBhcmEpe1xuICAgICAgICAgICAgcGFyYS5ibG9jayA9IGJsb2NrO1xuICAgICAgICAgICAgcGFyYS5wYWdlID0gcGFnZTtcblxuICAgICAgICAgICAgcGFyYS53b3JkcyA9IFtdXG4gICAgICAgICAgICBwYXJhLnN5bWJvbHMgPSBbXVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYXJhLmxpbmVzLmZvckVhY2goZnVuY3Rpb24obGluZSl7XG4gICAgICAgICAgICAgICAgbGluZS5wYXJhZ3JhcGggPSBwYXJhO1xuICAgICAgICAgICAgICAgIGxpbmUuYmxvY2sgPSBibG9jaztcbiAgICAgICAgICAgICAgICBsaW5lLnBhZ2UgPSBwYWdlO1xuXG4gICAgICAgICAgICAgICAgbGluZS5zeW1ib2xzID0gW11cblxuICAgICAgICAgICAgICAgIGxpbmUud29yZHMuZm9yRWFjaChmdW5jdGlvbih3b3JkKXtcbiAgICAgICAgICAgICAgICAgICAgd29yZC5saW5lID0gbGluZTtcbiAgICAgICAgICAgICAgICAgICAgd29yZC5wYXJhZ3JhcGggPSBwYXJhO1xuICAgICAgICAgICAgICAgICAgICB3b3JkLmJsb2NrID0gYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdvcmQucGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIHdvcmQuc3ltYm9scy5mb3JFYWNoKGZ1bmN0aW9uKHN5bSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0ud29yZCA9IHdvcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0ubGluZSA9IGxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0ucGFyYWdyYXBoID0gcGFyYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bS5ibG9jayA9IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLnBhZ2UgPSBwYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0ubGluZS5zeW1ib2xzLnB1c2goc3ltKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLnBhcmFncmFwaC5zeW1ib2xzLnB1c2goc3ltKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLmJsb2NrLnN5bWJvbHMucHVzaChzeW0pXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0ucGFnZS5zeW1ib2xzLnB1c2goc3ltKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB3b3JkLnBhcmFncmFwaC53b3Jkcy5wdXNoKHdvcmQpXG4gICAgICAgICAgICAgICAgICAgIHdvcmQuYmxvY2sud29yZHMucHVzaCh3b3JkKVxuICAgICAgICAgICAgICAgICAgICB3b3JkLnBhZ2Uud29yZHMucHVzaCh3b3JkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbGluZS5ibG9jay5saW5lcy5wdXNoKGxpbmUpXG4gICAgICAgICAgICAgICAgbGluZS5wYWdlLmxpbmVzLnB1c2gobGluZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBwYXJhLnBhZ2UucGFyYWdyYXBocy5wdXNoKHBhcmEpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gcGFnZVxufSIsImNvbnN0IGFkYXB0ZXIgPSByZXF1aXJlKCcuLi9ub2RlL2luZGV4LmpzJylcblxubGV0IGpvYkNvdW50ZXIgPSAwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFRlc3NlcmFjdEpvYiB7XG4gICAgY29uc3RydWN0b3IoaW5zdGFuY2Upe1xuICAgICAgICB0aGlzLmlkID0gJ0pvYi0nICsgKCsram9iQ291bnRlcikgKyAnLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgzLCA4KVxuXG4gICAgICAgIHRoaXMuX2luc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuX3Jlc29sdmUgPSBbXVxuICAgICAgICB0aGlzLl9yZWplY3QgPSBbXVxuICAgICAgICB0aGlzLl9wcm9ncmVzcyA9IFtdXG4gICAgICAgIHRoaXMuX2ZpbmFsbHkgPSBbXVxuICAgIH1cblxuICAgIHRoZW4ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgICAgaWYodGhpcy5fcmVzb2x2ZS5wdXNoKXtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUucHVzaChyZXNvbHZlKSBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuX3Jlc29sdmUpXG4gICAgICAgIH1cblxuICAgICAgICBpZihyZWplY3QpIHRoaXMuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNhdGNoKHJlamVjdCl7XG4gICAgICAgIGlmKHRoaXMuX3JlamVjdC5wdXNoKXtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdC5wdXNoKHJlamVjdCkgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVqZWN0KHRoaXMuX3JlamVjdClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcHJvZ3Jlc3MoZm4pe1xuICAgICAgICB0aGlzLl9wcm9ncmVzcy5wdXNoKGZuKVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZmluYWxseShmbikge1xuICAgICAgICB0aGlzLl9maW5hbGx5LnB1c2goZm4pXG4gICAgICAgIHJldHVybiB0aGlzOyAgXG4gICAgfVxuICAgIF9zZW5kKGFjdGlvbiwgcGF5bG9hZCl7XG4gICAgICAgIGFkYXB0ZXIuc2VuZFBhY2tldCh0aGlzLl9pbnN0YW5jZSwge1xuICAgICAgICAgICAgam9iSWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBfaGFuZGxlKHBhY2tldCl7XG4gICAgICAgIHZhciBkYXRhID0gcGFja2V0LmRhdGE7XG4gICAgICAgIGxldCBydW5GaW5hbGx5Q2JzID0gZmFsc2U7XG5cbiAgICAgICAgaWYocGFja2V0LnN0YXR1cyA9PT0gJ3Jlc29sdmUnKXtcbiAgICAgICAgICAgIGlmKHRoaXMuX3Jlc29sdmUubGVuZ3RoID09PSAwKSBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUuZm9yRWFjaChmbiA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IGZuKGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmKHJldCAmJiB0eXBlb2YgcmV0LnRoZW4gPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVGVzc2VyYWN0Sm9iIGluc3RhbmNlcyBkbyBub3QgY2hhaW4gbGlrZSBFUzYgUHJvbWlzZXMuIFRvIGNvbnZlcnQgaXQgaW50byBhIHJlYWwgcHJvbWlzZSwgdXNlIFByb21pc2UucmVzb2x2ZS4nKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLl9kZXF1ZXVlKClcbiAgICAgICAgICAgIHJ1bkZpbmFsbHlDYnMgPSB0cnVlO1xuICAgICAgICB9ZWxzZSBpZihwYWNrZXQuc3RhdHVzID09PSAncmVqZWN0Jyl7XG4gICAgICAgICAgICBpZih0aGlzLl9yZWplY3QubGVuZ3RoID09PSAwKSBjb25zb2xlLmVycm9yKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5fcmVqZWN0LmZvckVhY2goZm4gPT4gZm4oZGF0YSkpXG4gICAgICAgICAgICB0aGlzLl9yZWplY3QgPSBkYXRhO1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UuX2RlcXVldWUoKVxuICAgICAgICAgICAgcnVuRmluYWxseUNicyA9IHRydWU7XG4gICAgICAgIH1lbHNlIGlmKHBhY2tldC5zdGF0dXMgPT09ICdwcm9ncmVzcycpe1xuICAgICAgICAgICAgdGhpcy5fcHJvZ3Jlc3MuZm9yRWFjaChmbiA9PiBmbihkYXRhKSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ01lc3NhZ2UgdHlwZSB1bmtub3duJywgcGFja2V0LnN0YXR1cylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydW5GaW5hbGx5Q2JzKSB7XG4gICAgICAgICAgICB0aGlzLl9maW5hbGx5LmZvckVhY2goZm4gPT4gZm4oZGF0YSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiY29uc3QgYWRhcHRlciA9IHJlcXVpcmUoJy4vbm9kZS9pbmRleC5qcycpXG5jb25zdCBjaXJjdWxhcml6ZSA9IHJlcXVpcmUoJy4vY29tbW9uL2NpcmN1bGFyaXplLmpzJylcbmNvbnN0IFRlc3NlcmFjdEpvYiA9IHJlcXVpcmUoJy4vY29tbW9uL2pvYicpO1xuY29uc3QgdmVyc2lvbiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb247XG5cbmNvbnN0IGNyZWF0ZSA9IGZ1bmN0aW9uKHdvcmtlck9wdGlvbnMgPSB7fSl7XG5cdHZhciB3b3JrZXIgPSBuZXcgVGVzc2VyYWN0V29ya2VyKE9iamVjdC5hc3NpZ24oe30sIGFkYXB0ZXIuZGVmYXVsdE9wdGlvbnMsIHdvcmtlck9wdGlvbnMpKTtcblx0d29ya2VyLmNyZWF0ZSA9IGNyZWF0ZTtcblx0d29ya2VyLnZlcnNpb24gPSB2ZXJzaW9uO1xuXHRyZXR1cm4gd29ya2VyO1xufVxuXG5jbGFzcyBUZXNzZXJhY3RXb3JrZXIge1xuXHRjb25zdHJ1Y3Rvcih3b3JrZXJPcHRpb25zKXtcblx0XHR0aGlzLndvcmtlciA9IG51bGw7XG5cdFx0dGhpcy53b3JrZXJPcHRpb25zID0gd29ya2VyT3B0aW9ucztcblx0XHR0aGlzLl9jdXJyZW50Sm9iID0gbnVsbDtcblx0XHR0aGlzLl9xdWV1ZSA9IFtdO1xuXHR9XG5cblx0cmVjb2duaXplKGltYWdlLCBvcHRpb25zID0ge30pe1xuXHRcdHJldHVybiB0aGlzLl9kZWxheShqb2IgPT4ge1xuXHRcdFx0aWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykgb3B0aW9ucyA9IHtsYW5nOiBvcHRpb25zfVxuXHRcdFx0b3B0aW9ucy5sYW5nID0gb3B0aW9ucy5sYW5nIHx8ICdlbmcnO1xuXG5cdFx0XHRqb2IuX3NlbmQoJ3JlY29nbml6ZScsIHsgaW1hZ2UsIG9wdGlvbnMsIHdvcmtlck9wdGlvbnM6IHRoaXMud29ya2VyT3B0aW9ucyB9KTtcblx0XHR9KVxuXHR9XG5cdGRldGVjdChpbWFnZSwgb3B0aW9ucyA9IHt9KXtcblx0XHRyZXR1cm4gdGhpcy5fZGVsYXkoam9iID0+IHtcblx0XHRcdGpvYi5fc2VuZCgnZGV0ZWN0JywgeyBpbWFnZSwgb3B0aW9ucywgd29ya2VyT3B0aW9uczogdGhpcy53b3JrZXJPcHRpb25zIH0pO1xuXHRcdH0pXG5cdH1cblxuXHR0ZXJtaW5hdGUoKXtcblx0XHRpZih0aGlzLndvcmtlcikgYWRhcHRlci50ZXJtaW5hdGVXb3JrZXIodGhpcyk7XG5cdFx0dGhpcy53b3JrZXIgPSBudWxsO1xuXHRcdHRoaXMuX2N1cnJlbnRKb2IgPSBudWxsO1xuXHRcdHRoaXMuX3F1ZXVlID0gW107XG5cdH1cblxuXHRfZGVsYXkoZm4pe1xuXHRcdGlmKCF0aGlzLndvcmtlcikgdGhpcy53b3JrZXIgPSBhZGFwdGVyLnNwYXduV29ya2VyKHRoaXMsIHRoaXMud29ya2VyT3B0aW9ucyk7XG5cblx0XHR2YXIgam9iID0gbmV3IFRlc3NlcmFjdEpvYih0aGlzKTtcblx0XHR0aGlzLl9xdWV1ZS5wdXNoKGUgPT4ge1xuXHRcdFx0dGhpcy5fcXVldWUuc2hpZnQoKTtcblx0XHRcdHRoaXMuX2N1cnJlbnRKb2IgPSBqb2I7XG5cdFx0XHRmbihqb2IpO1xuXHRcdH0pO1xuXHRcdGlmKCF0aGlzLl9jdXJyZW50Sm9iKSB0aGlzLl9kZXF1ZXVlKCk7XG5cdFx0cmV0dXJuIGpvYjtcblx0fVxuXG5cdF9kZXF1ZXVlKCl7XG5cdFx0dGhpcy5fY3VycmVudEpvYiA9IG51bGw7XG5cdFx0aWYodGhpcy5fcXVldWUubGVuZ3RoKXtcblx0XHRcdHRoaXMuX3F1ZXVlWzBdKCk7XG5cdFx0fVxuXHR9XG5cblx0X3JlY3YocGFja2V0KXtcbiAgICAgICAgaWYocGFja2V0LnN0YXR1cyA9PT0gJ3Jlc29sdmUnICYmIHBhY2tldC5hY3Rpb24gPT09ICdyZWNvZ25pemUnKXtcbiAgICAgICAgICAgIHBhY2tldC5kYXRhID0gY2lyY3VsYXJpemUocGFja2V0LmRhdGEpO1xuICAgICAgICB9XG5cblx0XHRpZih0aGlzLl9jdXJyZW50Sm9iLmlkID09PSBwYWNrZXQuam9iSWQpe1xuXHRcdFx0dGhpcy5fY3VycmVudEpvYi5faGFuZGxlKHBhY2tldClcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKCdKb2IgSUQgJyArIHBhY2tldC5qb2JJZCArICcgbm90IGtub3duLicpXG5cdFx0fVxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlKCk7XG4iLCJpbXBvcnQgdGVzc2VyYWN0IGZyb20gJ3Rlc3NlcmFjdC5qcyc7XG5cbih0ZXNzZXJhY3QgYXMgYW55KS53b3JrZXJPcHRpb25zLndvcmtlclBhdGggPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3dvcmtlci5taW4uanMnO1xuXG5jb25zdCBzZXRJbWFnZVNyYyA9IChpbWFnZTogSFRNTEltYWdlRWxlbWVudCwgaW1hZ2VGaWxlOiBGaWxlKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgZnIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgZnIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodHlwZW9mIGZyLnJlc3VsdCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChudWxsKTtcbiAgICAgIH1cblxuICAgICAgaW1hZ2Uuc3JjID0gZnIucmVzdWx0O1xuXG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgIH07XG5cbiAgICBmci5vbmVycm9yID0gcmVqZWN0O1xuXG4gICAgZnIucmVhZEFzRGF0YVVSTChpbWFnZUZpbGUpO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlY29nbml0aW9uSW1hZ2VJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnI3JlY29nbml0aW9uLWltYWdlLWlucHV0JyxcbikgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IHJlY29nbml0aW9uQ29uZmlkZW5jZUlucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICcjcmVjb2duaXRpb24tY29uZmlkZW5jZS1pbnB1dCcsXG4pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCByZWNvZ25pdGlvblByb2dyZXNzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWNvZ25pdGlvbi1wcm9ncmVzcycpO1xuY29uc3QgcmVjb2duaXRpb25UZXh0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWNvZ25pdGlvbi10ZXh0Jyk7XG5cbmNvbnN0IG9yaWdpbmFsSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29yaWdpbmFsLWltYWdlJyk7XG5jb25zdCBsYWJlbGVkSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhYmVsZWQtaW1hZ2UnKTtcblxuaWYgKFxuICAhcmVjb2duaXRpb25JbWFnZUlucHV0RWxlbWVudCB8fFxuICAhcmVjb2duaXRpb25UZXh0RWxlbWVudCB8fFxuICAhb3JpZ2luYWxJbWFnZUVsZW1lbnQgfHxcbiAgIWxhYmVsZWRJbWFnZUVsZW1lbnQgfHxcbiAgIXJlY29nbml0aW9uUHJvZ3Jlc3NFbGVtZW50IHx8XG4gICFyZWNvZ25pdGlvbkNvbmZpZGVuY2VJbnB1dEVsZW1lbnRcbikge1xuICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZWxlbWVudHMnKTtcbn1cblxucmVjb2duaXRpb25JbWFnZUlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gIGlmICghcmVjb2duaXRpb25JbWFnZUlucHV0RWxlbWVudC5maWxlcykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgZmlsZSA9IHJlY29nbml0aW9uSW1hZ2VJbnB1dEVsZW1lbnQuZmlsZXNbMF07XG5cbiAgcmV0dXJuIHRlc3NlcmFjdFxuICAgIC5yZWNvZ25pemUoZmlsZSwge1xuICAgICAgbGFuZzogJ2VuZycsXG4gICAgfSlcbiAgICAucHJvZ3Jlc3MoKHsgcHJvZ3Jlc3MsIHN0YXR1cyB9KSA9PiB7XG4gICAgICBpZiAoIXByb2dyZXNzIHx8ICFzdGF0dXMgfHwgc3RhdHVzICE9PSAncmVjb2duaXppbmcgdGV4dCcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHAgPSAocHJvZ3Jlc3MgKiAxMDApLnRvRml4ZWQoMik7XG5cbiAgICAgIHJlY29nbml0aW9uUHJvZ3Jlc3NFbGVtZW50LnRleHRDb250ZW50ID0gYCR7c3RhdHVzfTogJHtwfSVgO1xuICAgICAgKHJlY29nbml0aW9uUHJvZ3Jlc3NFbGVtZW50IGFzIGFueSkudmFsdWUgPSBwO1xuICAgIH0pXG4gICAgLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgb3JpZ2luYWxJbWFnZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICBsYWJlbGVkSW1hZ2VFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgcmVjb2duaXRpb25UZXh0RWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgY29uc3QgcGFyYWdyYXBoc0VsZW1lbnRzID0gcmVzLnBhcmFncmFwaHMubWFwKCh7IHRleHQgfSkgPT4ge1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgICAgIHJldHVybiBwO1xuICAgICAgfSk7XG5cbiAgICAgIHJlY29nbml0aW9uVGV4dEVsZW1lbnQuYXBwZW5kKC4uLnBhcmFncmFwaHNFbGVtZW50cyk7XG5cbiAgICAgIGNvbnN0IG9yaWdpbmFsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgYXdhaXQgc2V0SW1hZ2VTcmMob3JpZ2luYWxJbWFnZSwgZmlsZSk7XG5cbiAgICAgIGNvbnN0IGxhYmVsZWRJbWFnZSA9IG9yaWdpbmFsSW1hZ2UuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICBjb25zdCB3b3Jkc0VsZW1lbnRzID0gcmVzLndvcmRzXG4gICAgICAgIC5maWx0ZXIoKHsgY29uZmlkZW5jZSB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbmZpZGVuY2UgPiBwYXJzZUludChyZWNvZ25pdGlvbkNvbmZpZGVuY2VJbnB1dEVsZW1lbnQudmFsdWUsIDEwKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm1hcCgod29yZCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIGNvbnN0IHsgeDAsIHgxLCB5MCwgeTEgfSA9IHdvcmQuYmJveDtcblxuICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd3b3JkLWVsZW1lbnQnKTtcblxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGl2LnN0eWxlLCB7XG4gICAgICAgICAgICB0b3A6IGAke3kwfXB4YCxcbiAgICAgICAgICAgIGxlZnQ6IGAke3gwfXB4YCxcbiAgICAgICAgICAgIHdpZHRoOiBgJHt4MSAtIHgwfXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogYCR7eTEgLSB5MH1weGAsXG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICB9KTtcblxuICAgICAgb3JpZ2luYWxJbWFnZUVsZW1lbnQuYXBwZW5kQ2hpbGQob3JpZ2luYWxJbWFnZSk7XG4gICAgICBsYWJlbGVkSW1hZ2VFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsZWRJbWFnZSk7XG4gICAgICBsYWJlbGVkSW1hZ2VFbGVtZW50LmFwcGVuZCguLi53b3Jkc0VsZW1lbnRzKTtcbiAgICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
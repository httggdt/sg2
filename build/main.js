require('source-map-support/register')
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var yz_conf = {};
//引入环境配置
if (false) {
	yz_conf = require('./pro.conf').default;
} else {
	yz_conf = __webpack_require__(13).default;
}

/* harmony default export */ __webpack_exports__["a"] = (yz_conf);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conf__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_cache__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_util_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_util_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__api_util_js__);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


//引入路由


var async = __webpack_require__(1);


var app = __WEBPACK_IMPORTED_MODULE_1_express___default()();
var host = process.env.HOST || __WEBPACK_IMPORTED_MODULE_3__conf__["a" /* default */].ip;
//设置端口号
var port = process.env.PORT || __WEBPACK_IMPORTED_MODULE_3__conf__["a" /* default */].port;
var path = __webpack_require__(14);

//版本号
var version = 1;
//配置模板渲染引擎
var ejs = __webpack_require__(17);
app.engine('html', ejs.renderFile);

ejs.open = '{{';
ejs.close = '}}';
//设置模板后缀
app.set("view engine", "html");
app.set("view cache", false);
app.set('views', __WEBPACK_IMPORTED_MODULE_3__conf__["a" /* default */].path + 'views');

app.set('port', port);

app.use('/api', __WEBPACK_IMPORTED_MODULE_2__api__["a" /* default */]);


var bodyParser = __webpack_require__(20);

var xhr = __WEBPACK_IMPORTED_MODULE_6__api_util_js___default.a.xhr;
var cacehData = false;
var formateDate = __WEBPACK_IMPORTED_MODULE_6__api_util_js___default.a.formateDate;

//托管静态资源
app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static('static'));

var SITE_PATH = '//sg2.youzu.com'; // 网站Url
var path = '//pic.youzu.com/sg2/download'; //资源路径
var TIPS_ID = '5151118'; // ios提示文章id
var VERSION = '201904152021'; // 版本号


// ----------下载页-pc ------------
app.get("/", function (req, res, next) {
  res.redirect('/download.html');
});

app.get("/download(\.html)?", function (req, res, next) {
  _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
    var allData, hotNews, IosTips, waitTips;
    return __WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/ad-list?position=ewm|iosDown_pc|slogan|swipe');

          case 2:
            allData = _context.sent;
            _context.next = 5;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/recommend-article?position=hot-4');

          case 5:
            hotNews = _context.sent;
            _context.next = 8;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-detail?id=' + TIPS_ID);

          case 8:
            IosTips = _context.sent;
            _context.next = 11;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/ad-list?position=wait_tips');

          case 11:
            waitTips = _context.sent;
            // 等待 弹窗

            res.render("download/pc/index.html", {
              allData: allData,
              hotNews: hotNews,
              IosTips: IosTips,
              waitTips: waitTips,
              path: path,
              SITE_PATH: SITE_PATH,
              VERSION: VERSION
            });

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }))();
});

//全部新闻
app.get("/allnews(\.html)?", function (req, res, next) {
  _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var allList, totalList;
    return __WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice');

          case 2:
            allList = _context2.sent;
            // 所有新闻
            totalList = allList.data.news.total + allList.data.active.total + allList.data.media.total + allList.data.notice.total; // 所有新闻数

            res.render("download/pc/allNews.html", {
              allList: allList,
              totalList: totalList,
              path: path,
              SITE_PATH: SITE_PATH,
              VERSION: VERSION
            });

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }))();
});
// 新闻-公告页
app.get("/notice(\.html)?", function (req, res, next) {
  _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3() {
    var baseData, allList, allNews;
    return __WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/base');

          case 2:
            baseData = _context3.sent;
            _context3.next = 5;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=notice');

          case 5:
            allList = _context3.sent;
            _context3.next = 8;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice');

          case 8:
            allNews = _context3.sent;


            res.render("download/pc/notice.html", {
              baseData: baseData,
              allList: allList,
              allNews: allNews,
              totalList: allList.data.notice.total,
              path: path,
              SITE_PATH: SITE_PATH,
              VERSION: VERSION
            });

          case 10:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }))();
});
// 新闻-新闻页
app.get("/news(\.html)?", function (req, res, next) {
  _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4() {
    var baseData, allList, allNews;
    return __WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/base');

          case 2:
            baseData = _context4.sent;
            _context4.next = 5;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=news');

          case 5:
            allList = _context4.sent;
            _context4.next = 8;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice');

          case 8:
            allNews = _context4.sent;


            res.render("download/pc/news.html", {
              baseData: baseData,
              allList: allList,
              allNews: allNews,
              totalList: allList.data.news.total,
              path: path,
              SITE_PATH: SITE_PATH,
              VERSION: VERSION
            });

          case 10:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }))();
});
// 新闻-媒体页
app.get("/media(\.html)?", function (req, res, next) {
  _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5() {
    var baseData, allList, allNews;
    return __WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/base');

          case 2:
            baseData = _context5.sent;
            _context5.next = 5;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=media');

          case 5:
            allList = _context5.sent;
            _context5.next = 8;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice');

          case 8:
            allNews = _context5.sent;


            res.render("download/pc/media.html", {
              baseData: baseData,
              allList: allList,
              allNews: allNews,
              totalList: allList.data.media.total,
              path: path,
              SITE_PATH: SITE_PATH,
              VERSION: VERSION
            });

          case 10:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }))();
});
// 新闻-活动页
app.get("/active(\.html)?", function (req, res, next) {
  _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6() {
    var baseData, allList, allNews;
    return __WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/base');

          case 2:
            baseData = _context6.sent;
            _context6.next = 5;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=active');

          case 5:
            allList = _context6.sent;
            _context6.next = 8;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice');

          case 8:
            allNews = _context6.sent;


            res.render("download/pc/active.html", {
              baseData: baseData,
              allList: allList,
              allNews: allNews,
              totalList: allList.data.active.total,
              path: path,
              SITE_PATH: SITE_PATH,
              VERSION: VERSION
            });

          case 10:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }))();
});

// ----------下载页--mob ------------
// 首页
app.get("/m", function (req, res, next) {
  res.redirect('/m/download.html');
});
app.get("/m/download(\.html)?", function (req, res, next) {
  _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.mark(function _callee7() {
    var allData, hotNews, IosTips, waitTips;
    return __WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/ad-list?position=ewm|qq|slogan|yd_swiper|downloadIos|wx');

          case 2:
            allData = _context7.sent;
            _context7.next = 5;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/recommend-article?position=hot-4');

          case 5:
            hotNews = _context7.sent;
            _context7.next = 8;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-detail?id=' + TIPS_ID);

          case 8:
            IosTips = _context7.sent;
            _context7.next = 11;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/ad-list?position=wait_tips');

          case 11:
            waitTips = _context7.sent;
            // 等待 弹窗

            // console.log(allData.data.downloadIos[0].url)
            res.render("download/mob/index.html", {
              allData: allData,
              hotNews: hotNews,
              IosTips: IosTips,
              waitTips: waitTips,
              path: path,
              SITE_PATH: SITE_PATH,
              VERSION: VERSION
            });

          case 13:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }))();
});

// 新闻--全部新闻
app.get("/m/allnews(\.html)?", function (req, res, next) {
  _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.mark(function _callee8() {
    var allData, allList, totalList;
    return __WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/ad-list?position=wx');

          case 2:
            allData = _context8.sent;
            _context8.next = 5;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice');

          case 5:
            allList = _context8.sent;
            totalList = allList.data.news.total + allList.data.active.total + allList.data.media.total + allList.data.notice.total;


            res.render("download/mob/allNews.html", {
              allData: allData,
              allList: allList,
              totalList: totalList,
              path: path,
              SITE_PATH: SITE_PATH,
              VERSION: VERSION
            });

          case 8:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }))();
});

// 新闻--新闻页
app.get("/m/news(\.html)?", function (req, res, next) {
  _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.mark(function _callee9() {
    var allData, baseData, allList, allNews;
    return __WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/ad-list?position=wx');

          case 2:
            allData = _context9.sent;
            _context9.next = 5;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/base');

          case 5:
            baseData = _context9.sent;
            _context9.next = 8;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=news');

          case 8:
            allList = _context9.sent;
            _context9.next = 11;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice');

          case 11:
            allNews = _context9.sent;


            res.render("download/mob/news.html", {
              allData: allData,
              allList: allList,
              allNews: allNews,
              baseData: baseData,
              totalList: allList.data.news.total,
              path: path,
              SITE_PATH: SITE_PATH,
              VERSION: VERSION
            });

          case 13:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }))();
});
// 新闻--公告
app.get("/m/notice(\.html)?", function (req, res, next) {
  _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.mark(function _callee10() {
    var allData, baseData, allList, allNews;
    return __WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/ad-list?position=wx');

          case 2:
            allData = _context10.sent;
            _context10.next = 5;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/base');

          case 5:
            baseData = _context10.sent;
            _context10.next = 8;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=notice');

          case 8:
            allList = _context10.sent;
            _context10.next = 11;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice');

          case 11:
            allNews = _context10.sent;


            res.render("download/mob/notice.html", {
              allData: allData,
              allList: allList,
              allNews: allNews,
              baseData: baseData,
              totalList: allList.data.notice.total,
              path: path,
              SITE_PATH: SITE_PATH,
              VERSION: VERSION
            });

          case 13:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }))();
});
// 新闻--媒体
app.get("/m/media(\.html)?", function (req, res, next) {
  _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.mark(function _callee11() {
    var allData, baseData, allList, allNews;
    return __WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/ad-list?position=wx');

          case 2:
            allData = _context11.sent;
            _context11.next = 5;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/base');

          case 5:
            baseData = _context11.sent;
            _context11.next = 8;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=media');

          case 8:
            allList = _context11.sent;
            _context11.next = 11;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice');

          case 11:
            allNews = _context11.sent;


            res.render("download/mob/news.html", {
              allData: allData,
              allList: allList,
              allNews: allNews,
              baseData: baseData,
              totalList: allList.data.media.total,
              path: path,
              SITE_PATH: SITE_PATH,
              VERSION: VERSION
            });

          case 13:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }))();
});
// 新闻--活动
app.get("/m/active(\.html)?", function (req, res, next) {
  _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.mark(function _callee12() {
    var allData, baseData, allList, allNews;
    return __WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/ad-list?position=wx');

          case 2:
            allData = _context12.sent;
            _context12.next = 5;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/base');

          case 5:
            baseData = _context12.sent;
            _context12.next = 8;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=active');

          case 8:
            allList = _context12.sent;
            _context12.next = 11;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice');

          case 11:
            allNews = _context12.sent;


            res.render("download/mob/active.html", {
              allData: allData,
              allList: allList,
              allNews: allNews,
              baseData: baseData,
              totalList: allList.data.active.total,
              path: path,
              SITE_PATH: SITE_PATH,
              VERSION: VERSION
            });

          case 13:
          case 'end':
            return _context12.stop();
        }
      }
    }, _callee12, this);
  }))();
});

//新闻详情页 --mob--
app.get('/m/:name/:id?(\.html)', function (req, res, next) {
  // app.get('/m/newsdetail(\.html)?', function (req, res, next) {
  _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.mark(function _callee13() {
    var _res$render;

    var id, tags, detailData, allData, allNews;
    return __WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            id = req.params.id;
            tags = req.params.name;
            // var newsData = await httpHelper.get('//webapi.youzu.com/shengbei/newNews');

            _context13.next = 4;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-detail?id=' + id);

          case 4:
            detailData = _context13.sent;
            _context13.next = 7;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/ad-list?position=wx');

          case 7:
            allData = _context13.sent;
            _context13.next = 10;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice');

          case 10:
            allNews = _context13.sent;


            res.render("download/mob/newsdetail.html", (_res$render = {
              id: id,
              tags: tags,
              detailData: detailData,
              allNews: allNews
            }, _defineProperty(_res$render, 'tags', tags), _defineProperty(_res$render, 'allData', allData), _defineProperty(_res$render, 'SITE_PATH', SITE_PATH), _defineProperty(_res$render, 'path', path), _defineProperty(_res$render, 'VERSION', VERSION), _res$render));

          case 12:
          case 'end':
            return _context13.stop();
        }
      }
    }, _callee13, this);
  }))();
});

app.get('/sitemap.xml', renderSitemapHd); // 搜索爬虫
app.get('/sitemap.html', renderSitemapHd); // 搜索爬虫
app.get('/sitemap.txt', renderSitemapHd); // 搜索爬虫


//搜索爬虫
function renderSitemapHd(req, res, next) {
  var page = req.query.page == undefined ? 1 : req.query.page;
  async.series({
    articleList: function articleList(callback) {
      xhr.get('download/pc/allNews.html', {}, function (res) {
        callback(null, res.data);
      });
    }
  }, function (error, result) {
    res.header('Content-Type', 'application/xml');
    res.header('Cache-Control', 'no-cache');
    res.header('Pragma', 'no-cache');
    res.header('Expires', '-1');
    res.render('download/pc/sitemap.html', {
      env: "development",
      articleList: result.articleList == null ? [] : result.articleList,
      nowDate: formateDate(new Date())
    });
  });
}

//新闻详情页 --pc--
app.get('/:name/:id?(\.html)', function (req, res, next) {
  _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.mark(function _callee14() {
    var _res$render2;

    var id, tags, detailData, allNews;
    return __WEBPACK_IMPORTED_MODULE_0_E_git_work_sg2_youzu_com_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            id = req.params.id;
            tags = req.params.name;
            // var newsData = await httpHelper.get('//webapi.youzu.com/shengbei/newNews');

            _context14.next = 4;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-detail?id=' + id);

          case 4:
            detailData = _context14.sent;
            _context14.next = 7;
            return __WEBPACK_IMPORTED_MODULE_4__helper_http__["a" /* default */].get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice');

          case 7:
            allNews = _context14.sent;


            res.render("download/pc/newsdetail.html", (_res$render2 = {
              id: id,
              tags: tags,
              detailData: detailData,
              allNews: allNews
            }, _defineProperty(_res$render2, 'tags', tags), _defineProperty(_res$render2, 'path', path), _defineProperty(_res$render2, 'SITE_PATH', SITE_PATH), _defineProperty(_res$render2, 'VERSION', VERSION), _res$render2));

          case 9:
          case 'end':
            return _context14.stop();
        }
      }
    }, _callee14, this);
  }))();
});

//定义错误处理方法
app.use(function (err, req, res, next) {
  // console.log(err + '测试')
  // console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.use(function (err, req, res, next) {
  // console.log("报错日志",err.stack);
  res.status(404).send('Something broke!');
});
;

app.use(function (req, res, next) {
  // 设置所有HTTP请求的超时时间
  req.setTimeout(10000);
  // 设置所有HTTP请求的服务器响应超时时间
  res.setTimeout(10000);
  next();
});

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log__ = __webpack_require__(9);





var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// Add USERS Routes
router.use(__WEBPACK_IMPORTED_MODULE_1__users__["a" /* default */]);
router.use(__WEBPACK_IMPORTED_MODULE_2__log__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);


var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

// Mock Users
var users = [{ name: 'Alexandre' }, { name: 'Pooya' }, { name: 'Sébastien' }];

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users);
});

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  var id = parseInt(req.params.id);
  if (id >= 0 && id < users.length) {
    res.json(users[id]);
  } else {
    res.sendStatus(404);
  }
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);



var ip = __webpack_require__(10);

var logger = __webpack_require__(12).createFluentSender('log.hd-.application', {
	host: '10.7.32.240',
	port: 24224,
	timeout: 3.0,
	reconnectInterval: 600000 // 10 minutes
});
logger.on('error', function (error) {
	console.log('fluent-logger error', error);
});
logger.on('connect', function () {
	console.log('fluent-logger', 'connected!');
});

var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

var json = {}
//	    "message": "这是日志消息", //日志消息
////	    "category": "yii\\db\\Command::query",   //日志分类
//	    "level": "info",	//日志等级
////	    "timeline": "", //客户端时间
//	    "server_ip": "10.6.55.3",   //服务器ip
//	    "clinet_ip": "58.246.221.75", //客户端ip

/* GET users listing. */
;router.get('/log', function (req, res, next) {
	console.log('/log');
	var message = {};
	message.level = req.query.level;
	message.host = req.host;
	message.app_id = req.query.app_id;
	message.message = req.query.message + "-----" + req.headers['user-agent'];
	//	message.message = '这是日志消息'
	//message.category = "log.hd.web"
	//message.timeline = req.query.timeline
	message.clinet_ip = ip.getClientIp(req);
	var message = formatMessage(message);

	logger.emit('web', message);
	res.json({ code: 100 });
});

//格式化消息
function formatMessage(message) {
	json.server_ip = ip.serviceIp();
	json.level = message.level;
	json.app_id = message.app_id;
	json.host = message.host;
	//	json.category = message.category
	//	json.timeline = message.timeline
	json.message = message.message;
	json.clinet_ip = message.clinet_ip;
	console.log(json);
	return json;
}

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var os = __webpack_require__(11);

var ip = {
	serviceIp: function serviceIp() {
		var network = os.networkInterfaces();
		for (var key in network) {
			if (key == "eth0" || key == "本地连接") {
				for (var i = 0; i < network[key].length; i++) {
					if (network[key][i].family === 'IPv4') {
						return network[key][i].address;
					}
				}
			}
		}
	},
	getClientIp: function getClientIp(req) {
		var ipAddress;
		var forwardedIpsStr = req.header('x-forwarded-for');
		if (forwardedIpsStr) {
			var forwardedIps = forwardedIpsStr.split(',');
			ipAddress = forwardedIps[0];
		}
		if (!ipAddress) {
			ipAddress = req.connection.remoteAddress;
		}
		return ipAddress;
	}
};

module.exports = ip;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("fluent-logger");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var conf = {
  ip: '0.0.0.0',
  port: 8080,
  // Redis ip
  cache: {
    ip: '10.18.97.121',
    port: 6379,
    password: 'LburBG0D90LBHot0'
  },
  path: ""
};

/* harmony default export */ __webpack_exports__["default"] = (conf);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__data__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_request__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_request___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_request__);



var httpHelper = {
		get: function get(url, data) {
				return new Promise(function (resolve, reject) {
						__WEBPACK_IMPORTED_MODULE_1_request___default.a.get({
								url: url,
								method: "get",
								json: true,
								headers: {
										"content-type": "application/json"
								},
								body: data
						}, function (err, response, body) {
								console.log('返回结果：', data, body);
								if (!err && response.statusCode == 200) {
										if (body !== 'null') {
												//解析json    JSON.stringify(data)  转换成json
												if (__WEBPACK_IMPORTED_MODULE_0__data___default.a.isString(body)) {
														body = JSON.parse(data);
												}
												resolve(body);
										}
								}
								resolve(false);
						});
				});
		},
		post: function post(url, data) {
				return new Promise(function (resolve, reject) {
						__WEBPACK_IMPORTED_MODULE_1_request___default.a.post({
								url: url,
								method: "post",
								json: true,
								headers: {
										"content-type": "application/json"
								},
								body: data
						}, function (err, response, body) {
								console.log('返回结果：', data, body);
								if (!err && response.statusCode == 200) {
										if (body !== 'null') {
												//解析json    JSON.stringify(data)  转换成json
												if (__WEBPACK_IMPORTED_MODULE_0__data___default.a.isString(body)) {
														body = JSON.parse(data);
												}
												resolve(body);
										}
								}
								resolve(false);
						});
				});
		}
};

/* harmony default export */ __webpack_exports__["a"] = (httpHelper);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//判断是否是json
exports.isJson = function (obj) {
	var isjson = (typeof obj === "undefined" ? "undefined" : _typeof(obj)) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
	return isjson;
};

//判断是否是对象
exports.isObject = function (obj) {
	return Object.prototype.toString.call(obj) === '[object Object]';
};

//判断是否是数组
exports.isArray = function (arr) {
	return Object.prototype.toString.call(arr) === '[object Array]';
};

//判断是否是字符串
exports.isString = function (arr) {
	return Object.prototype.toString.call(arr) === '[object Array]';
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("ejs");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conf__ = __webpack_require__(2);

var redis = __webpack_require__(19);

/**
 * 封装redis 缓存基本方法
 */

var client = redis.createClient(__WEBPACK_IMPORTED_MODULE_0__conf__["a" /* default */].cache.port, __WEBPACK_IMPORTED_MODULE_0__conf__["a" /* default */].cache.ip, { password: __WEBPACK_IMPORTED_MODULE_0__conf__["a" /* default */].cache.password });

var cache = {};

var version = 1;

client.on('error', function (err) {
	console.log('Redis Error ' + err);
});

/**
 * 获取缓存数据
 */
cache.get = function (key) {
	key = getKey(key);

	return new Promise(function (resolve, reject) {

		client.get(key, function (err, reply) {
			if (err) {
				resolve(false);
			} else {
				resolve(reply);
			}
		});
	});
};

/**
 * 设置缓存数据
 * @param key 缓存key
 * @param val 缓存数据   string
 * @param time 缓存时间 0 标示永久有效
 */
cache.set = function (key, val) {
	var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	key = getKey(key);

	client.set(key, val, 'EX', time);

	return true;
};

function getKey(key) {
	return "node:" + key;
}

/* unused harmony default export */ var _unused_webpack_default_export = (cache);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var request = __webpack_require__(3);
var async = __webpack_require__(1);
var baseUrl = "https://uapi.youzu.com/api/158"; // 后端接口Url

exports.xhr = {
	/**
  * @description ApiGet请求
  */
	get: function get(name, data, callback, next) {
		var options = {
			url: baseUrl + name,
			method: 'GET',
			qs: data,
			headers: {},
			timeout: 10000
		};
		request(options, function (err, res, body) {
			apicallback(err, res, body, callback, next);
		});
	},
	/**
  * @description ApiPost请求
  */
	post: function post(name, data, callback, next) {
		var options = {
			url: baseUrl + name,
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				"Content-Type": 'application/json'
			},
			timeout: 10000
		};
		request(options, function (err, res, body) {
			apicallback(err, res, body, callback, next);
		});
	},
	/**
  * @description 头部带TOKEN的ApiGet请求
  */
	tokenget: function tokenget(name, token, data, callback, next) {
		var options = {
			url: baseUrl + name,
			method: 'GET',
			qs: data,
			headers: {
				"X-token": token,
				"Content-Type": 'application/json'
			},
			timeout: 10000
		};
		request(options, function (err, res, body) {
			apicallback(err, res, body, callback, next);
		});
	},
	/**
  * @description 头部带TOKEN的ApiPost请求
  */
	tokenpost: function tokenpost(name, token, data, callback, next) {
		var options = {
			url: baseUrl + name,
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				"X-token": token,
				"Content-Type": 'application/json'
			},
			timeout: 10000
		};
		request(options, function (err, res, body) {
			apicallback(err, res, body, callback, next);
		});
	}

	/**
  * @description 接口返回统一处理
  */
};function apicallback(err, res, body, callback, next) {
	if (!err && res.statusCode == 200) {
		try {
			body = JSON.parse(body);
			if (body.status != 200) {
				if (body.message) {
					callback(body);
				} else {
					// exports.error.custom('Oops! 发生问题了', body.status, body.message, next);
					// body = [];
					body.data = [];
					callback(body);
				}
			} else {
				callback(body);
			}
		} catch (err) {
			// console.log(err)
			// exports.error.noapi(next);
			body.data = [];
			callback(body);
		};
	} else {
		console.log('没有api');
		// exports.error.noapi(next);
		var body = {};
		body.data = [];
		callback(body);
	}
}

/**
 * @description 错误&提示处理
 */
exports.error = {
	openapp: function openapp(next) {
		errorFun("Access error", 200, "此页面只允许在客户端中打开", next);
	},
	nosql: function nosql(next) {
		errorFun("Database connection failed", 500, "无法连接到数据库或连接超时", next);
	},
	noapi: function noapi(next) {
		errorFun("Interface failed", 500, "无法链接到接口或链接超时", next);
	},
	format: function format(next) {
		errorFun("Format error", 500, "接口不是一个有效的JSON格式", next);
	},
	default: function _default(next) {
		console.log(next);
		errorFun("Oops! 发生问题了 :(", 500, "无法打开这个页面", next);
	},
	custom: function custom(name, status, stack, next) {
		errorFun(name, status, stack, next);
	}
};

function errorFun(name, status, stack, next) {
	console.log('[' + new Date().toLocaleString() + ']', name, status);
	var err = new Error(name);
	err.status = status;
	err.stack = stack;
	console.log(next);
	next(err);
}

// 日期格式化
exports.formateDate = function (date) {
	var defaultDate = date ? new Date(date) : new Date();
	var year = defaultDate.getFullYear();
	var month = defaultDate.getMonth() + 1;
	var day = defaultDate.getDate();
	month = month < 10 ? '0' + month : month;
	day = day < 10 ? '0' + day : day;
	return year + '-' + month + '-' + day;
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map
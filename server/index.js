import express from 'express'
//引入路由
import api from './api'

var async = require('async');

import conf from './conf'
const app = express()
const host = process.env.HOST || conf.ip
//设置端口号
const port = process.env.PORT || conf.port
var path = require("path")
import httpHelper from './helper/http';
//版本号
var version = 1;
//配置模板渲染引擎
var ejs = require('ejs')
app.engine('html', ejs.renderFile);

ejs.open = '{{';
ejs.close = '}}';
//设置模板后缀
app.set("view engine", "html");
app.set("view cache", false);
app.set('views', conf.path + 'views');

app.set('port', port)

app.use('/api', api)

import cache from './helper/cache';
var bodyParser = require('body-parser');
import util from './api/util.js';
const xhr = util.xhr;
var cacehData = false;
const formateDate = util.formateDate;

//托管静态资源
app.use(express.static('static'));

const SITE_PATH = '//sg2.youzu.com'; // 网站Url
var path='//pic.youzu.com/sg2/download';   //资源路径
const TIPS_ID = '5151118'; // ios提示文章id
var VERSION = '201904152021'  // 版本号


// ----------下载页-pc ------------
app.get("/",function(req, res, next){
  res.redirect('/download.html');
})

app.get("/download(\.html)?",function(req, res, next){
  (async function() {
    var allData = await httpHelper.get('https://uapi.youzu.com/api/164/data/ad-list?position=ewm|iosDown_pc|slogan|swipe')  // 所有广告位
    var hotNews = await httpHelper.get('https://uapi.youzu.com/api/164/data/recommend-article?position=hot-4')   // 热点文章
    var IosTips = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-detail?id='+TIPS_ID)   // ios安装-文章
    var waitTips = await httpHelper.get('https://uapi.youzu.com/api/164/data/ad-list?position=wait_tips')   // 等待 弹窗

    res.render("download/pc/index.html",{
      allData: allData,
      hotNews: hotNews,
      IosTips: IosTips,
      waitTips: waitTips,
      path: path,
      SITE_PATH: SITE_PATH,
      VERSION: VERSION,
    });
  })()
})

//全部新闻
app.get("/allnews(\.html)?",function(req, res, next){
  (async function() {
    var allList = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice')  // 所有新闻
    var totalList = allList.data.news.total + allList.data.active.total + allList.data.media.total + allList.data.notice.total   // 所有新闻数

    res.render("download/pc/allNews.html",{
      allList: allList,
      totalList: totalList,
      path: path,
      SITE_PATH: SITE_PATH,
      VERSION: VERSION,
    });
  })()
})
// 新闻-公告页
app.get("/notice(\.html)?",function(req, res, next){
  (async function() {
    var baseData = await httpHelper.get('https://uapi.youzu.com/api/164/data/base')   // 站点信息-seo
    var allList = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=notice')
    var allNews = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice')

    res.render("download/pc/notice.html",{
      baseData: baseData,
      allList: allList,
      allNews: allNews,
      totalList: allList.data.notice.total,
      path: path,
      SITE_PATH: SITE_PATH,
      VERSION: VERSION,
    });
  })()
})
// 新闻-新闻页
app.get("/news(\.html)?",function(req, res, next){
  (async function() {
    var baseData = await httpHelper.get('https://uapi.youzu.com/api/164/data/base')   // 站点信息-seo
    var allList = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=news')
    var allNews = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice')
    
    res.render("download/pc/news.html",{
      baseData: baseData,
      allList: allList,
      allNews: allNews,
      totalList: allList.data.news.total,
      path: path,
      SITE_PATH: SITE_PATH,
      VERSION: VERSION,
    });
  })()
})
// 新闻-媒体页
app.get("/media(\.html)?",function(req, res, next){
  (async function() {
    var baseData = await httpHelper.get('https://uapi.youzu.com/api/164/data/base')   // 站点信息-seo
    var allList = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=media')
    var allNews = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice')

    res.render("download/pc/media.html",{
      baseData: baseData,
      allList: allList,
      allNews: allNews,
      totalList: allList.data.media.total,
      path: path,
      SITE_PATH: SITE_PATH,
      VERSION: VERSION,
    });
  })()
})
// 新闻-活动页
app.get("/active(\.html)?",function(req, res, next){
  (async function() {
    var baseData = await httpHelper.get('https://uapi.youzu.com/api/164/data/base')   // 站点信息-seo
    var allList = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=active')
    var allNews = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice')

    res.render("download/pc/active.html",{
      baseData: baseData,
      allList: allList,
      allNews: allNews,
      totalList: allList.data.active.total,
      path: path,
      SITE_PATH: SITE_PATH,
      VERSION: VERSION,
    });
  })()
})


// ----------下载页--mob ------------
// 首页
app.get("/m",function(req, res, next){
  res.redirect('/m/download.html');
})
app.get("/m/download(\.html)?",function(req, res, next){
  (async function() {
    var allData = await httpHelper.get('https://uapi.youzu.com/api/164/data/ad-list?position=ewm|qq|slogan|yd_swiper|downloadIos|wx')
    var hotNews = await httpHelper.get('https://uapi.youzu.com/api/164/data/recommend-article?position=hot-4')
    var IosTips = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-detail?id='+TIPS_ID)   // ios安装-文章
    var waitTips = await httpHelper.get('https://uapi.youzu.com/api/164/data/ad-list?position=wait_tips')   // 等待 弹窗

    // console.log(allData.data.downloadIos[0].url)
    res.render("download/mob/index.html",{
      allData: allData,
      hotNews: hotNews,
      IosTips: IosTips,
      waitTips: waitTips,
      path: path,
      SITE_PATH: SITE_PATH,
      VERSION: VERSION,
    });
  })()
})

// 新闻--全部新闻
app.get("/m/allnews(\.html)?",function(req, res, next){
  (async function() {
    var allData = await httpHelper.get('https://uapi.youzu.com/api/164/data/ad-list?position=wx')
    var allList = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice')
    var totalList = allList.data.news.total + allList.data.active.total + allList.data.media.total + allList.data.notice.total

    res.render("download/mob/allNews.html",{
      allData: allData,
      allList: allList,
      totalList: totalList,
      path: path,
      SITE_PATH: SITE_PATH,
      VERSION: VERSION,
    });
  })()
})

// 新闻--新闻页
app.get("/m/news(\.html)?",function(req, res, next){
  (async function() {
    var allData = await httpHelper.get('https://uapi.youzu.com/api/164/data/ad-list?position=wx')
    var baseData = await httpHelper.get('https://uapi.youzu.com/api/164/data/base')   // 站点信息-seo
    var allList = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=news')
    var allNews = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice')

    res.render("download/mob/news.html",{
      allData: allData,
      allList: allList,
      allNews: allNews,
      baseData: baseData,
      totalList: allList.data.news.total,
      path: path,
      SITE_PATH: SITE_PATH,
      VERSION: VERSION,
    });
  })()
})
// 新闻--公告
app.get("/m/notice(\.html)?",function(req, res, next){
  (async function() {
    var allData = await httpHelper.get('https://uapi.youzu.com/api/164/data/ad-list?position=wx')
    var baseData = await httpHelper.get('https://uapi.youzu.com/api/164/data/base')   // 站点信息-seo
    var allList = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=notice')
    var allNews = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice')

    res.render("download/mob/notice.html",{
      allData: allData,
      allList: allList,
      allNews: allNews,
      baseData: baseData,
      totalList: allList.data.notice.total,
      path: path,
      SITE_PATH: SITE_PATH,
      VERSION: VERSION,
    });
  })()
})
// 新闻--媒体
app.get("/m/media(\.html)?",function(req, res, next){
  (async function() {
    var allData = await httpHelper.get('https://uapi.youzu.com/api/164/data/ad-list?position=wx')
    var baseData = await httpHelper.get('https://uapi.youzu.com/api/164/data/base')   // 站点信息-seo
    var allList = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=media')
    var allNews = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice')

    res.render("download/mob/news.html",{
      allData: allData,
      allList: allList,
      allNews: allNews,
      baseData: baseData,
      totalList: allList.data.media.total,
      path: path,
      SITE_PATH: SITE_PATH,
      VERSION: VERSION,
    });
  })()
})
// 新闻--活动
app.get("/m/active(\.html)?",function(req, res, next){
  (async function() {
    var allData = await httpHelper.get('https://uapi.youzu.com/api/164/data/ad-list?position=wx')
    var baseData = await httpHelper.get('https://uapi.youzu.com/api/164/data/base')   // 站点信息-seo
    var allList = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=active')
    var allNews = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice')

    res.render("download/mob/active.html",{
      allData: allData,
      allList: allList,
      allNews: allNews,
      baseData: baseData,
      totalList: allList.data.active.total,
      path: path,
      SITE_PATH: SITE_PATH,
      VERSION: VERSION,
    });
  })()
})

//新闻详情页 --mob--
app.get('/m/:name/:id?(\.html)', function (req, res, next) {
  // app.get('/m/newsdetail(\.html)?', function (req, res, next) {
    (async function() {
      var id = req.params.id;
      var tags = req.params.name;
      // var newsData = await httpHelper.get('//webapi.youzu.com/shengbei/newNews');
      var detailData = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-detail?id='+ id);
      var allData = await httpHelper.get('https://uapi.youzu.com/api/164/data/ad-list?position=wx')
      var allNews = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice')
  
      res.render("download/mob/newsdetail.html", {
        id: id,
        tags: tags,
        detailData: detailData,
        allNews: allNews,
        tags: tags,
        allData: allData,
        SITE_PATH: SITE_PATH,
        path: path,
        VERSION: VERSION,
      });
    })()
  })
  

app.get('/sitemap.xml', renderSitemapHd); // 搜索爬虫
app.get('/sitemap.html', renderSitemapHd); // 搜索爬虫
app.get('/sitemap.txt', renderSitemapHd); // 搜索爬虫


//搜索爬虫
function renderSitemapHd(req, res, next) {
  var page = req.query.page == undefined ? 1 : req.query.page;
  async.series({
      articleList: function(callback) {
          xhr.get('download/pc/allNews.html', {}, function(res) {
              callback(null, res.data);
          });
      }
  }, function(error, result) {
      res.header('Content-Type', 'application/xml');
      res.header('Cache-Control', 'no-cache');
      res.header('Pragma', 'no-cache');
      res.header('Expires', '-1');
      res.render('download/pc/sitemap.html', {
          env: process.env.NODE_ENV,
          articleList: result.articleList == null ? [] : result.articleList,
          nowDate:formateDate(new Date())
      });

  });
}

//新闻详情页 --pc--
app.get('/:name/:id?(\.html)', function (req, res, next) {
  (async function() {
    var id = req.params.id;
    var tags = req.params.name;
    // var newsData = await httpHelper.get('//webapi.youzu.com/shengbei/newNews');
    var detailData = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-detail?id='+ id);
    var allNews = await httpHelper.get('https://uapi.youzu.com/api/164/data/article-list?cid=news|active|media|notice')

    
    res.render("download/pc/newsdetail.html", {
      id: id,
      tags: tags,
      detailData: detailData,
      allNews: allNews,
      tags: tags,
      path: path ,
      SITE_PATH: SITE_PATH,
      VERSION: VERSION,
    });
  })()
})


//定义错误处理方法
app.use(function(err, req, res, next) {
    // console.log(err + '测试')
	  // console.error(err.stack);
	  res.status(500).send('Something broke!');
});

app.use(function(err, req, res, next) {
  // console.log("报错日志",err.stack);
  res.status(404).send('Something broke!');
});
;

app.use(function(req, res, next) {
  // 设置所有HTTP请求的超时时间
  req.setTimeout(10000);
  // 设置所有HTTP请求的服务器响应超时时间
  res.setTimeout(10000);
  next();
});


// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console

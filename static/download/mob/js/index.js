let ua = navigator.userAgent.toLowerCase();
let isWeixin = ua.indexOf('micromessenger') != -1;
$(function(){
    // 关闭
    $(".js_pop_close, .btn_wait").click(function(){
        $(this).parent().fadeOut();
        $(".mask").fadeOut();
    })
    $(".mask").click(function(){
        $(".mask, .pop_wait, .pop_IOS").fadeOut();
    })

    // 没有数据时，敬请期待
    $(".qq_down.wait").click(function(){
        // console.log(1)
        $(".mask").fadeIn();
        $(".pop_wait").fadeIn();
    })

    // 新闻页列表标题
    var li_length = $(".biaoti li").length;
    var li_width = (99/(li_length)).toFixed(1);
    var last_li = (100-li_width*(li_length-1)).toFixed(1);
    // console.log(last_li,li_width*(li_length-1))
    // console.log(li_width)
    for(var i=0; i<li_length; i++){
        if(i != li_length-1){
            $(".biaoti li")[i].style.width = li_width+'%';
        } else {
            $(".biaoti li")[i].style.width = last_li+'%';
        }
    }

    
})
// 首页
function home(){
    // 新闻轮播图
    var swiper = new Swiper('.news-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay : 3000,
        speed: 400,
        autoplayDisableOnInteraction : false,
        loop: true,
    });

    //获取地址栏拼接参数
    var param_qd;
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    // ios/安卓  不同下载链接
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机
        // alert("安卓手机");
        $.ajax({
            url: "//uapi.youzu.com/api/164/data/ad-list?position=downloadAndroid",
            type: 'GET',
            dataType: "jsonp",
            success: function (res) {
                data = res.data.downloadAndroid[0];
                // console.log(data.url);
                param_qd = getQueryString('qd')
                if(res.data.downloadAndroid){
                    if(isWeixin){   //是微信--需要弹窗（浏览器打开）
                        switch (param_qd){  // 判断渠道
                            case 'ss':
                                Html = '<a href="javascript:;" class="and_down" onclick="AndPop();pushState(\'sg2\', 104910499010, \'and_down\')" rel="nofollow"></a>'
                                break;
                            case 'sx':
                                Html = '<a href="javascript:;" class="and_down" onclick="AndPop();pushState(\'sg2\', 104910499011, \'and_down\')" rel="nofollow"></a>'                               
                                break;
                            case 'ns':
                                Html = '<a href="javascript:;" class="and_down" onclick="AndPop();pushState(\'sg2\', 104910499012, \'and_down\')" rel="nofollow"></a>'
                                break;
                            default:
                                Html = '<a href="javascript:;" class="and_down" onclick="AndPop();pushState(\'sg2\', 104910499013, \'and_down\')" rel="nofollow"></a>'
                                break;
                        }

                    } else {   // 不是微信--直接下载
                        switch (param_qd){
                            case 'ss':
                                Html = '<a href="' + data.url + '" class="and_down" onclick="pushState(\'sg2\', 104910499010, \'and_down\')" rel="nofollow"></a>'
                                break;
                            case 'sx':
                                Html = '<a href="' + data.url + '" class="and_down" onclick="pushState(\'sg2\', 104910499011, \'and_down\')" rel="nofollow"></a>'                              
                                break;
                            case 'ns':
                                Html = '<a href="' + data.url + '" class="and_down" onclick="pushState(\'sg2\', 104910499012, \'and_down\')" rel="nofollow"></a>'
                                break;
                            default:
                                Html = '<a href="' + data.url + '" class="and_down" onclick="pushState(\'sg2\', 104910499013, \'and_down\')" rel="nofollow"></a>'
                                break;
                        }
                    }
                } else {   // 没有下载链接--弹窗（敬请期待）
                    switch (param_qd){
                        case 'ss':
                            Html = '<a href="javascript:;" class="and_down wait" onclick="Wait();pushState(\'sg2\', 104910499010, \'and_down\')" rel="nofollow"></a>'
                            break;
                        case 'sx':
                            Html = '<a href="javascript:;" class="and_down wait" onclick="Wait();pushState(\'sg2\', 104910499011, \'and_down\')" rel="nofollow"></a>'
                            break;
                        case 'ns':
                            Html = '<a href="javascript:;" class="and_down wait" onclick="Wait();pushState(\'sg2\', 104910499012, \'and_down\')" rel="nofollow"></a>'
                            break;
                        default:
                            Html = '<a href="javascript:;" class="and_down wait" onclick="Wait();pushState(\'sg2\', 104910499013, \'and_down\')" rel="nofollow"></a>'
                            break;
                    }
                }
                $(".down_group").append(Html);
            }
        })

    } else { //苹果手机
        // alert("苹果手机");
        $.ajax({
            url: "//uapi.youzu.com/api/164/data/ad-list?position=downloadIos",
            type: 'GET',
            dataType: "jsonp",
            success: function (res) {
                data = res.data.downloadIos[0];
                // console.log(data);
                param_qd = getQueryString('qd')
                // console.log(res.data.downloadIos)
                if(res.data.downloadIos){
                    // 判断渠道
                    switch (param_qd){ 
                        case 'ss':
                            Html = '<a href="javascript:;" class="ios_down" onclick="IosPop();pushState(\'sg2\', 104910499020, \'ios_down\')" rel="nofollow"></a>'
                            break;
                        case 'sx':
                            Html = '<a href="javascript:;" class="ios_down" onclick="IosPop();pushState(\'sg2\', 104910499021, \'ios_down\')" rel="nofollow"></a>'
                            break;
                        case 'ns':
                            Html = '<a href="javascript:;" class="ios_down" onclick="IosPop();pushState(\'sg2\', 104910499022, \'ios_down\')" rel="nofollow"></a>'
                            break;
                        default:
                            Html = '<a href="javascript:;" class="ios_down" onclick="IosPop();pushState(\'sg2\', 104910499023, \'ios_down\')" rel="nofollow"></a>'
                            break;
                    }
                } else {
                    switch (param_qd){ 
                        case 'ss':
                            Html = '<a href="javascript:;" class="ios_down wait"  onclick="Wait();pushState(\'sg2\', 104910499020, \'ios_down\')" rel="nofollow"></a>'
                            break;
                        case 'sx':
                            Html = '<a href="javascript:;" class="ios_down wait"  onclick="Wait();pushState(\'sg2\', 104910499021, \'ios_down\')" rel="nofollow"></a>'
                            break;
                        case 'ns':
                            Html = '<a href="javascript:;" class="ios_down wait"  onclick="Wait();pushState(\'sg2\', 104910499022, \'ios_down\')" rel="nofollow"></a>'
                            break;
                        default:
                            Html = '<a href="javascript:;" class="ios_down wait"  onclick="Wait();pushState(\'sg2\', 104910499023, \'ios_down\')" rel="nofollow"></a>'
                            break;
                    }
                }
                $(".down_group").append(Html);
            }
        })
    }
    //QQ跳转
    $.ajax({
        url: "//uapi.youzu.com/api/164/data/ad-list?position=qq",
        type: 'GET',
        dataType: "jsonp",
        success: function (res) {
            data = res.data.qq[0];
            param_qd = getQueryString('qd')
            if(res.data.qq){
                // 判断渠道
                switch (param_qd){ 
                    case 'ss':
                        Html = '<a href="'+ data.url +'" class="qq_down" onclick="pushState(\'sg2\', 104910499030, \'qq_down\')" rel="nofollow"></a>'
                        break;
                    case 'sx':
                        Html = '<a href="'+ data.url +'" class="qq_down" onclick="pushState(\'sg2\', 104910499031, \'qq_down\')" rel="nofollow"></a>'
                        break;
                    case 'ns':
                        Html = '<a href="'+ data.url +'" class="qq_down" onclick="pushState(\'sg2\', 104910499032, \'qq_down\')" rel="nofollow"></a>'
                        break;
                    default:
                        Html = '<a href="'+ data.url +'" class="qq_down" onclick="pushState(\'sg2\', 104910499033, \'qq_down\')" rel="nofollow"></a>'
                        break;
                }
            } else {
                switch (param_qd){
                    case 'ss':
                        Html = '<a href="javascript:;" class="qq_down wait"  onclick="Wait();pushState(\'sg2\', 104910499030, \'qq_down\')" rel="nofollow"></a>'
                        break;
                    case 'sx':
                        Html = '<a href="javascript:;" class="qq_down wait"  onclick="Wait();pushState(\'sg2\', 104910499031, \'qq_down\')" rel="nofollow"></a>'
                        break;
                    case 'ns':
                        Html = '<a href="javascript:;" class="qq_down wait"  onclick="Wait();pushState(\'sg2\', 104910499032, \'qq_down\')" rel="nofollow"></a>'
                        break;
                    default:
                        Html = '<a href="javascript:;" class="qq_down wait"  onclick="Wait();pushState(\'sg2\', 104910499033, \'qq_down\')" rel="nofollow"></a>'
                        break;
                }
            }
            $(".down_group").append(Html);
        }
    })
}

// ios教程弹窗-判断是否微信打开
function IosPop(){
    $(".mask").fadeIn();
    if (isWeixin) {
        $(".pop_wx").fadeIn();
        // console.log("是ios微信")
    }else{
        $(".pop_IOS").fadeIn();
        // console.log("不是ios微信")
    }
}
// 安卓微信-弹窗
function AndPop(){
    $(".mask").fadeIn();
    $(".pop_wx").fadeIn();
}
// 敬请期待弹窗
function Wait(){
    $(".mask").fadeIn();
    $(".pop_wait").fadeIn();
}

function switch_li(tags) {
    switch(tags){
        case 'news':
            $(".li_news").addClass("on").siblings().removeClass("on");
            break;
        case 'notice':
            $(".li_notice").addClass("on").siblings().removeClass("on");
            break;
        case 'active':
            $(".li_active").addClass("on").siblings().removeClass("on");
            break;
        case 'media':
            $(".li_media").addClass("on").siblings().removeClass("on");
            break;
        default:
            $(".li_all").addClass("on").siblings().removeClass("on");
            break;
    }
}
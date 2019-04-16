$(function(){
    // 关闭
    $(".js_pop_close").click(function(){
        $(this).parent().fadeOut();
        $(".mask").fadeOut();
    })

    $(".btn_ios_down, .btn_wait").click(function(){
        $(".pop_wait, .pop_IOS, .mask").fadeOut();
    })


    // 新闻页列表标题
    var li_length = $(".biaoti li").length;
    var li_width = (1000/(li_length)).toFixed(2);
    for(var i=0; i<li_length; i++){
        $(".biaoti li")[i].style.width = li_width+'px';
    }

})

// 有ios链接
function IOSPop(){
    $(".mask").fadeIn();
    $(".pop_IOS").fadeIn();
}
// 没有链接
function Wait(){
    $(".mask").fadeIn();
    $(".pop_wait").fadeIn();
}
// 首页调用
function home(){
    // 新闻轮播图
    var swiper = new Swiper('.news-container', {
        pagination: '.news-container .swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay : 3000,
        speed: 500,
        autoplayDisableOnInteraction: false,
    });

    //获取地址栏拼接参数
    var param_qd;
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    $.ajax({
        url: "//uapi.youzu.com/api/164/data/ad-list?position=andDown_pc|iosDown_pc|qq",
        type: 'GET',
        dataType: "jsonp",
        success: function (res) {
            and_data = res.data.andDown_pc[0];  // 安卓
            ios_data = res.data.iosDown_pc[0];  // ios
            qq_data = res.data.qq[0];           // qq
            param_qd = getQueryString('qd')
            // console.log(res.data);
            //  ios下载按钮
            if(res.data.iosDown_pc){   //有链接
                switch (param_qd){
                    case 'ss':
                        Html = '<a href="javascript:;" class="ios_down" onclick="IOSPop();pushState(\'sg2\', 104920198011, \'ios_down\')" rel="nofollow" target="_blank"></a>'
                        break;
                    case 'sx':
                        Html = '<a href="javascript:;" class="ios_down" onclick="IOSPop();pushState(\'sg2\', 104920198012, \'ios_down\')" rel="nofollow" target="_blank"></a>'                              
                        break;
                    case 'ns':
                        Html = '<a href="javascript:;" class="ios_down" onclick="IOSPop();pushState(\'sg2\', 104920198013, \'ios_down\')" rel="nofollow" target="_blank"></a>'
                        break;
                    default:
                        Html = '<a href="javascript:;" class="ios_down" onclick="IOSPop();pushState(\'sg2\', 104920198014, \'ios_down\')" rel="nofollow" target="_blank"></a>'
                        break;
                }
            } else{   //没有链接
                switch (param_qd){
                    case 'ss':
                        Html = '<a href="javascript:;" class="ios_down wait" onclick="Wait();pushState(\'sg2\', 104920198011, \'ios_down\')" rel="nofollow"></a>'
                        break;
                    case 'sx':
                        Html = '<a href="javascript:;" class="ios_down wait" onclick="Wait();pushState(\'sg2\', 104920198012, \'ios_down\')" rel="nofollow"></a>'                              
                        break;
                    case 'ns':
                        Html = '<a href="javascript:;" class="ios_down wait" onclick="Wait();pushState(\'sg2\', 104920198013, \'ios_down\')" rel="nofollow"></a>'
                        break;
                    default:
                        Html = '<a href="javascript:;" class="ios_down wait" onclick="Wait();pushState(\'sg2\', 104920198014, \'ios_down\')" rel="nofollow"></a>'
                        break;
                }
            }

            //  安卓下载按钮
            if(res.data.andDown_pc){  //有下载链接
                switch (param_qd){
                    case 'ss':
                        Html += '<a href="' + and_data.url + '" class="and_down" onclick="pushState(\'sg2\', 104920198001, \'and_down\')" rel="nofollow" target="_blank"></a>'
                        break;
                    case 'sx':
                        Html += '<a href="' + and_data.url + '" class="and_down" onclick="pushState(\'sg2\', 104920198002, \'and_down\')" rel="nofollow" target="_blank"></a>'                              
                        break;
                    case 'ns':
                        Html += '<a href="' + and_data.url + '" class="and_down" onclick="pushState(\'sg2\', 104920198003, \'and_down\')" rel="nofollow" target="_blank"></a>'
                        break;
                    default:
                        Html += '<a href="' + and_data.url + '" class="and_down" onclick="pushState(\'sg2\', 104920198004, \'and_down\')" rel="nofollow" target="_blank"></a>'
                        break;
                }
            } else {   // 没有下载链接--弹窗（敬请期待）
                switch (param_qd){
                    case 'ss':
                        Html += '<a href="javascript:;" class="and_down wait" onclick="Wait();pushState(\'sg2\', 104920198001, \'and_down\')" rel="nofollow"></a>'
                        break;
                    case 'sx':
                        Html += '<a href="javascript:;" class="and_down wait" onclick="Wait();pushState(\'sg2\', 104920198002, \'and_down\')" rel="nofollow"></a>'
                        break;
                    case 'ns':
                        Html += '<a href="javascript:;" class="and_down wait" onclick="Wait();pushState(\'sg2\', 104920198003, \'and_down\')" rel="nofollow"></a>'
                        break;
                    default:
                        Html += '<a href="javascript:;" class="and_down wait" onclick="Wait();pushState(\'sg2\', 104920198004, \'and_down\')" rel="nofollow"></a>'
                        break;
                }
            }

            //  QQ按钮
            if(res.data.qq){  //有链接
                switch (param_qd){
                    case 'ss':
                        Html += '<a href="' + qq_data.url + '" class="qq_down" onclick="pushState(\'sg2\', 104920198031, \'qq_down\')" rel="nofollow" target="_blank"></a>'
                        break;
                    case 'sx':
                        Html += '<a href="' + qq_data.url + '" class="qq_down" onclick="pushState(\'sg2\', 104920198032, \'qq_down\')" rel="nofollow" target="_blank"></a>'                              
                        break;
                    case 'ns':
                        Html += '<a href="' + qq_data.url + '" class="qq_down" onclick="pushState(\'sg2\', 104920198033, \'qq_down\')" rel="nofollow" target="_blank"></a>'
                        break;
                    default:
                        Html += '<a href="' + qq_data.url + '" class="qq_down" onclick="pushState(\'sg2\', 104920198034, \'qq_down\')" rel="nofollow" target="_blank"></a>'
                        break;
                }
            } else {   // 没有链接--弹窗（敬请期待）
                switch (param_qd){
                    case 'ss':
                        Html += '<a href="javascript:;" class="qq_down wait" onclick="Wait();pushState(\'sg2\', 104920198031, \'qq_down\')" rel="nofollow"></a>'
                        break;
                    case 'sx':
                        Html += '<a href="javascript:;" class="qq_down wait" onclick="Wait();pushState(\'sg2\', 104920198032, \'qq_down\')" rel="nofollow"></a>'
                        break;
                    case 'ns':
                        Html += '<a href="javascript:;" class="qq_down wait" onclick="Wait();pushState(\'sg2\', 104920198033, \'qq_down\')" rel="nofollow"></a>'
                        break;
                    default:
                        Html += '<a href="javascript:;" class="qq_down wait" onclick="Wait();pushState(\'sg2\', 104920198034, \'qq_down\')" rel="nofollow"></a>'
                        break;
                }
            }
            $(".download").append(Html);
        }
    })
}
    
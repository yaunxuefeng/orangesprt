<!DOCTYPE html>
<html lang="en">
<head>
    <title>只二网络科技有限公司</title>
    <meta name="description" content="">
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta id="viewport" name="viewport" content="width=1200">
    <meta name="keywords" content="">
    <meta name="renderer" content="webkit">
    <meta http-equiv="cache-control" content="no-siteapp">
    <link rel="stylesheet" href="All/css/style.css">
    <link rel="stylesheet" href="All/css/base.css">
    <link rel="stylesheet" href="All/css/stys.css">
    <link rel="shortcut icon" href="All/images/Icon/logo_1 copy.png">

    <script type="text/javascript" src="All/js/jquery.js"></script>
    <script type='text/javascript' src='All/js/scrolltext.js'></script>
    <script type="text/javascript" src="All/js/jquery.reveal.js"></script>
    <script type="text/javascript" src="All/js/jquery.bxslider_e88acd1b.js"></script>
    <script src="js/classie.js"></script>
    <script src="All/js/gform.js"></script>

</head>

<body>

<div class="count">

    <!--右侧贴边导航quick_links.js控制-->
    <div class="mui-mbar-tabs" >
        <div class="quick_link_mian">
            <div class="quick_links_panel">
                <div id="quick_links" class="quick_links">
                    <li>
                        <a href="list.html" class="history_list" style="height:70px; margin:0px;"><i class="setting"></i><div class="span" style="color:#FFF; text-align:center;">账号</div></a>
                        <div class="mp_tooltip">我的账户<i class="icon_arrow_right_black"></i></div>
                    </li>

                    <li id="shopCart">
                        <a href="Shopping_Cart.html" class="message_list" ><i class="message"></i><div class="span" style="color:#FFF;">购物车</div><span class="shuzi" style="margin-top:5px;"><b>2</b></span></a>
                    </li>
                    <li>
                        <a href="Help.html" class="history_list"><i class="view"></i></a>
                        <div class="mp_tooltip" style=" visibility:hidden;">帮助<i class="icon_arrow_right_black"></i></div>
                    </li>

                    <li>
                        <a href="Collection.html" class="mpbtn_wdsc"><i class="wdsc"></i></a>
                        <div class="mp_tooltip">我的收藏<i class="icon_arrow_right_black"></i></div>

                </div>
                <div class="quick_toggle">
                    <li>
                        <a href="#"><i class="kfzx"></i><div class="span" style="color:#FFF; margin-top:40px; ">账号</div></a>
                        <div class="mp_tooltip">客服中心<i class="icon_arrow_right_black"></i> </div>
                    </li>
                    <li>
                        <a href="#none"><i class="mpbtn_qrcode"></i></a>
                        <div class="mp_qrcode" style="display:none;"><img src="All/images/Icon/app二维码.png" width="150" height="128" /><p>手机扫码下载APP</p><i class="icon_arrow_white"></i></div>
                    </li>
                    <li><a href="#top" class="return_top"><i class="top"></i></a></li>
                </div>
            </div>
            <div id="quick_links_pop" class="quick_links_pop hide"></div>
        </div>
    </div>
    <!--右侧贴边导航quick_links.js控制-->

    <!--在线客服 beg-->
    <div class="fixed-bar" >
        <div class="wide-bar">
            <div class="consult-box">
                <ul class="consult-list">
                    <li class="clearfix">
                        <a target="_blank" href=""></a>
                    </li>

                </ul>
            </div>

        </div>
    </div>
    <!--在线客服 end-->

    <!--sign beg-->
    <div id="myModal" class="reveal-modal" style="background:#f0f0f0;">
        <div class="sign-lef flo-lef">
            <div class="sign">
                <div class="list-tab-sign wid-100 mag-top30px">
                    <ul>
                        <li id="two1" onclick="setTab('two',1,2)" class="hover">普通登录</li>
                        <li id="two2" onclick="setTab('two',2,2) ">手机动态密码登录</li>
                    </ul>
                </div>
                <div id="con_two_1" >

                    <p class="sign-p wid-100 flo-lef mag-top20">还没有账号？<a href="register.html" class="cor-d62 lin-hei45">现在注册</a></p>
                    <p class="fon-siz12 cor-d62 line-hei25 wid-100" style="text-align:left;">账号或密码错误</p>
                    <div class="inpu-bg"><input type="text" class="inpu-text-sign" placeholder="邮箱/手机号"/></div>
                    <div><input type="text" class="inpu-text-sign inpu-text-signs"/></div>
                    <div class="sign-p flo-lef wid-100"><div class="gform-checkbox" style="margin-top:10px;"><input type="checkbox"></div>自动登录<a class="flo-rig">忘记密码</a></div>
                    <div><input type="button" class="butt fon-siz18" value="登录" style="width:100%;"/></div>
                    <div class="sign-p mag-top50">其他登录方式&nbsp;&nbsp;<img src="All/images/Icon/weixinlog.png" class="ver-ali15">&nbsp;&nbsp;<img src="All/images/Icon/qqs.png" class="ver-ali15"/>&nbsp;&nbsp;<img src="All/images/Icon/weib.png" class="ver-ali15"/></div>
                </div>

                <div id="con_two_2" style="display:none">
                    <p class="sign-p wid-100 flo-lef mag-top20">还没有账号？<a href="register.html" class="cor-d62 lin-hei45">现在注册</a></p>
                    <p class="fon-siz12 cor-d62 line-hei25 wid-100" style="text-align:left;">账号或密码错误</p>
                    <div class="inpu-bg"><input type="text" class="inpu-text-sign" placeholder="已注册的手机号码"/></div>
                    <div class="ove-hid"><input type="text" class="inpu-text-sign inpu-text-signs inpu-text-yz flo-lef"  style="width:120px;" placeholder="验证码"/><a class="inpu-text-yzimg"></a><a class="cor-666 fon-siz14 lin-hei45">换一张</a></div>
                    <div class="ove-hid"><input type="text" class="inpu-text-sign inpu-text-signs flo-lef"  style="width:140px;" placeholder="动态密码"/><input type="button" class="btn-duanxin"  value="获取手机动态密码"></div>
                    <div class="sign-p flo-lef wid-100"><!--input beg-->
                        <div class="gform-checkbox" style="margin-top:10px;"><input type="checkbox"></div>自动登录<a class="flo-rig">忘记密码</a></div>
                    <div><input type="button" class="butt fon-siz18 " value="登录" style="width:100%;"/></div>
                    <div class="sign-p mag-top50">其他登录方式&nbsp;&nbsp;<img src="All/images/Icon/weixinlog.png" class="ver-ali15">&nbsp;&nbsp;<img src="All/images/Icon/qqs.png" class="ver-ali15"/>&nbsp;&nbsp;<img src="All/images/Icon/weib.png" class="ver-ali15"/></div>
                </div>
            </div>
        </div>
        <div class="sign-rig flo-rig ove-hid">
            <div class="sign-x close-reveal-modal"></div>
            <div class="sha-log flo-lef"></div></div>
    </div>
    <!--sign end-->

    <!--head beg-->
    <div class="head ">
        <div class="top ove-hid">


            <div class="notice " >
                <div class=" wid-120 mar-aut pr">
                    <div class="logoss flo-rig">
                        <ul class="Help">
                            <li><a href="#" data-reveal-id="myModal">登录</a>&nbsp;|&nbsp;<a href="register.html">注册</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>


                        </ul>
                    </div>
                    <ul id="jsfoot02" class="noticTipTxt">
                        <li><a href="#" target="_blank">全场满199元包邮！ </a></li>
                        <li><a href="#" target="_blank">使用折扣码SHARE2满100元减20元! </a></li>
                        <li><a href="#" target="_blank">使用折扣码HAPPY50全场满299元减40元！</a></li>
                        <li><a href="#" target="_blank">使用折扣码HAPPY50全场满299元减50元！</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="top-log wid-120 ove-hid mar-aut">
            <div class="logo"><a href="index.html"><img src="All/images/Icon/logo.png" width="100%;"></a></div>
            <div class="top-ang fon-siz24 tex-ali">高品质高逼格</div>
            <div class="flo-rig" >
                <ul class="Help " >
                    <form onSubmit="submitFn(this, event);">
                        <div class="search-wrapper">
                            <div class="input-holder">
                                <input type="text" class="search-input" placeholder="请输入关键词" />
                                <button class="search-icon" onClick="searchToggle(this, event);"><span></span></button>
                            </div>

                        </div>
                    </form>
                </ul>
            </div>
        </div>
    </div>
    <!--head end-->
    <!--menu beg-->
    <div class="wid-100 transparent" style="border-bottom:1px solid #f8f8f8;">
        <div class="menu  ove-hid fon-siz18 ">
            <ul class="wid-120 cor-666 mar-aut" >
                <li><a href="New.html" class="menu-a">产品</a></li>
                <li><a href="Ladies.html" class="menu-a">装潢</a></li>
                <li><a href="Children.html" class="menu-a">关于我们</a></li>
                <li><a href="Menswear.html" class="menu-a">联系我们</a></li>
                <li><a href="Grab1.html" class="menu-a">服务简介</a></li>
                <li><a href="Charity.html" class="menu-a">帮助</a></li>
                <li><a href="viewpoint.html" class="menu-a">观点</a></li>
                <li></li>
            </ul>
        </div>
    </div>
    <!--menu end-->

    <!--banner beg-->
    <div class="top_slide_wrap">
        <ul class="slide_box bxslider">
            <li><a href="#"><img src="All/images/Public/Artboard 2.jpg" alt=""></a></li>

            <li><a href="#"><img src="All/images/Public/2.jpg" alt=""></a></li>

            <li><a href="#"><img src="All/images/Public/3.jpg" alt=""></a></li>

            <li><a href="#"><img src="All/images/Public/4.jpg" alt=""></a></li>
        </ul>
    </div>
    <!--banner end-->

    <!--main3 beg-->
    <ul class="mian">
        <li><img src="All/images/Replace/homeimg1.jpg"></li>
        <li><img src="All/images/Replace/homeimg2.jpg"></li>
        <li style="margin-right:0px;"><img src="All/images/Replace/homeimg3.jpg"></li>
    </ul>
    <!--main3 end-->

    <!--end beg-->
    <div class="end" >
        <ul class="wid-120 mar-aut">
            <li>
                <p class="fon-siz12 mag-bot20 fwb">甩旧爱</p>
                <p><a href="#">卖衣需知</a></p>
                <p><a href="#">品牌估价</a></p>
                <p><a href="#">品牌限制</a></p>
                <p><a href="#">收款方式</a></p>
                <p><a href="#">如何邮寄</a></p>
            </li>
            <li><p class="fon-siz12 mag-bot20 fwb">找新欢</p>
                <p><a href="#">购衣需知</a></p>
                <p><a href="#">配送须知</a></p>
                <p><a href="#">运费查询</a></p>
                <p><a href="#">退货信息</a></p>
                <p><a href="#">退款信息</a></p>
            </li>
            <li><p class="fon-siz12 mag-bot20 fwb">慈善公益</p>
                <p><a href="#">ShareLove</a></p>
                <p><a href="#">他的故事</a></p>
                <p><a href="#">慈善众筹</a></p>
            </li>
            <li style=" border-right:1px solid #cbcbcb;"><p class="fon-siz12 mag-bot20 fwb">关于我们</p>
                <p><a href="#">总览&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></p>
                <p><a href="#">团队&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></p>
                <p><a href="#">工作机会</a></p>
                <p><a href="#">只二life&nbsp;&nbsp;</a></p>
            </li>
            <li>
                <div class="weixin"><img src="All/images/Icon/weixin-256.png" class="img"></div>
                <p class="fon-siz12">微信关注</p>
            </li>
            <li>
                <div class="weixin"><img src="All/images/Icon/zhierapp.png" width="70" style="margin-top:5px;"></div>
                <p class="fon-siz12">下载APP</p>
            </li>
        </ul>
    </div>
    <!--end end-->
    <!--ends beg-->
    <div class="ends wid-100 tex-ali cor-4d4 fon-siz12 mag-top20" > Copyright ©2015&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;雪峰工作室&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;沪ICP备15037511号-1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;客服电话：15221842983 </div>
    <!--ends end-->
</div>
<!--tab beg-->
<script>
    <!--
    function setTab(name,cursel,n){
        for(i=1;i<=n;i++){
            var menu=document.getElementById(name+i);
            var con=document.getElementById("con_"+name+"_"+i);
            menu.className=i==cursel?"hover":"";
            con.style.display=i==cursel?"block":"none";
        }
    }
    //-->
</script>
<!--bannerjs beg-->
<script type="text/javascript">
    (function(){
        $(".bxslider").bxSlider({
            auto:true,
            prevSelector:$(".top_slide_wrap .op_prev")[0],nextSelector:$(".top_slide_wrap .op_next")[0]
        });
    })();
</script>

<script type="text/javascript">
    // 演示二
    if(document.getElementById("jsfoot02")){
        var scrollup = new ScrollText("jsfoot02");
        scrollup.LineHeight = 35;        //单排文字滚动的高度
        scrollup.Amount = 1;            //注意:子模块(LineHeight)一定要能整除Amount.
        scrollup.Delay = 20;           //延时
        scrollup.Start();             //文字自动滚动
        scrollup.Direction = "up";   //默认设置为文字向上滚动
    }
</script>

<!--在线客服 beg-->
<script type="text/javascript">
    $(document).scroll(function(){
        var  scrollTop =  $(document).scrollTop(),bodyHeight = $(window).height();
        if(scrollTop > bodyHeight){
            $('.fixed-bar .gotop').css('display','block');
        }else{
            $('.fixed-bar .gotop').css('display','none');
        }
    })
</script>

<!--input beg-->
<script>
    $('.gform-select').gselect();

    //复选框
    $(".gform-checkbox").gcheckbox();

    //单选框
    $(".gform-radio").gradio();
</script>

<!--侧导航 beg-->
<script type="text/javascript">
    $(".quick_links_panel li").mouseenter(function(){
        $(this).children(".mp_tooltip").animate({left:-92,queue:true});
        $(this).children(".mp_tooltip").css("visibility","visible");
        $(this).children(".ibar_login_box").css("display","block");
    });
    $(".quick_links_panel li").mouseleave(function(){
        $(this).children(".mp_tooltip").css("visibility","hidden");
        $(this).children(".mp_tooltip").animate({left:-121,queue:true});
        $(this).children(".ibar_login_box").css("display","none");
    });
    $(".quick_toggle li").mouseover(function(){
        $(this).children(".mp_qrcode").show();
    });
    $(".quick_toggle li").mouseleave(function(){
        $(this).children(".mp_qrcode").hide();
    });

    // 元素以及其他一些变量
    var eleFlyElement = document.querySelector("#flyItem"), eleShopCart = document.querySelector("#shopCart");
    var numberItem = 0;
    // 抛物线运动
    var myParabola = funParabola(eleFlyElement, eleShopCart, {
        speed: 400, //抛物线速度
        curvature: 0.0008, //控制抛物线弧度
        complete: function() {
            eleFlyElement.style.visibility = "hidden";
            eleShopCart.querySelector("span").innerHTML = ++numberItem;
        }
    });
    // 绑定点击事件
    if (eleFlyElement && eleShopCart) {

        [].slice.call(document.getElementsByClassName("btnCart")).forEach(function(button) {
            button.addEventListener("click", function(event) {
                // 滚动大小
                var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft || 0,
                        scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
                eleFlyElement.style.left = event.clientX + scrollLeft + "px";
                eleFlyElement.style.top = event.clientY + scrollTop + "px";
                eleFlyElement.style.visibility = "visible";

                // 需要重定位
                myParabola.position().move();
            });
        });
    }
</script>

<!--侧导航 end-->

<!--搜索 beg-->
<script type="text/javascript">
    function searchToggle(obj, evt){
        var container = $(obj).closest('.search-wrapper');

        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
            // clear and hide result container when we press close
            container.find('.result-container').fadeOut(100, function(){$(this).empty();});
        }
    }

    function submitFn(obj, evt){
        value = $(obj).find('.search-input').val().trim();

        _html = "您搜索的关键词： ";
        if(!value.length){
            _html = "关键词不能为空。";
        }
        else{
            _html += "<b>" + value + "</b>";
        }

        $(obj).find('.result-container').html('<span>' + _html + '</span>');
        $(obj).find('.result-container').fadeIn(100);

        evt.preventDefault();
    }
</script>
<!--搜索 end-->
</body>
</html>

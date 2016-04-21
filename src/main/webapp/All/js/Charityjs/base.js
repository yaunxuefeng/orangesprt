


(function($){
    $.fn.FontScroll = function(options){
        var d = {time: 3000,s: 'fontColor',num: 1}
        var o = $.extend(d,options);
        

        this.children('ul').addClass('line');
        var _con = $('.line').eq(0);
        var _conH = _con.height(); //滚动总高度
        var _conChildH = _con.children().eq(0).height();//一次滚动高度
        var _temp = _conChildH;  //临时变量
        var _time = d.time;  //滚动间隔
        var _s = d.s;  //滚动间隔
    }
})(jQuery);

//TAB
$(document).ready(function() {




    //ajax-form
    $('form.ajax-form').on('beforeSubmit',function(e){
        var $this = $(this);
        var $error = $('.error-summary',$this);

        $.post($this.attr('action'),$this.serialize(),function(data){

            if(!data.error){
                $error.fadeOut();
                if(data.message){
                    alert(data.message);
                }
                location.reload();
            }else{
                $error.fadeIn();
                $error.text(data.error);
            }
        },'json');
        return false;
    }).on('submit',function(){
        return false;
    });

    //获取要定位元素距离浏览器顶部的距离
    $(".seller-title").each(function(){
        var $this = $(this);
        var navH = $this.offset().top;
        var $copy = $this.clone().addClass('copy').appendTo('body').hide();
        var $li = $('li',$this);
        var ids = [];
        $li.each(function(){
            var href = $('>a',this).attr('href').match(/(#[\w-]+)/);
            if(!href){
                return true;
            }
            ids.push(href.pop());
        });
        ids = ids.join(',');
        //console.log(ids);

        $copy.css({"position":"fixed","top":0,"left":0,padding:0});

        var chkAnchor = function(){
            $(ids).each(function(){
                var $obj = $(this);
                var diff = document.body.scrollTop - $obj.offset().top + 80;
                var name = $obj.attr('id');
                //console.log($('#overview').offset().top);
                //console.log(document.body.scrollTop ,$obj.offset().top);
                if(diff > 0){
                    var $a = $('.seller-title [href*="#'+name+'"]');
                    $a.parent().siblings().toggleClass('active',false);
                    $a.parent().toggleClass('active',true);
                }

            });
        };
        //滚动条事件
        $(window).scroll(function(){
            chkAnchor();
            //console.log(navH);
            //获取滚动条的滑动距离
            var scroH = $(this).scrollTop();
            //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
            if(scroH >= navH){
                $copy.show();
            }else if(scroH < navH){
                $copy.fadeOut();
                //$(".seller-title").css({"position":"static",paddingTop:"40px"});
            }
        })
    });

    $('a[href*=#]').click(function(event) {
        if($(this).attr('href') == '#'){
            return true;
        }
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[id=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top-40;
                $('html,body').animate({
                        scrollTop: targetOffset
                    },
                    200);
                event.preventDefault();
                //return false;
            }
        }
    });

    //Get all the LI from the .infoContTh UL
    $('.infoContTab').each(function(){
        var $this = $(this);
        var call = $this.data('callback')?(new Function('i',$this.data('callback'))):false;
        $('.infoContTh',$this).children().click(function(){
            //perform the actions when it's not active
            if (!$(this).hasClass('active')) {

                //remove the active class from all LI
                $('.infoContTh',$this).children().removeClass('active');

                //Reassign the LI
                $(this).addClass('active');

                //Hide all the DIV in .infoContTd
                //$('.infoContTd',$this).children().slideUp('1500');
                $('.infoContTd',$this).children().hide();

                //Look for the right DIV in infoContTd according to the Navigation UL index, therefore, the arrangement is very important.
                var i = $(this).index();
                //$('.infoContTd',$this).children().eq(i).slideDown('1500');
                $('.infoContTd',$this).children().eq(i).fadeIn();
                if(call){
                    call(i);
                }
            }
        }).mouseover(function() {
            //Add and remove class, Personally I dont think this is the right way to do it, anyone please suggest
            $(this).addClass('mouseover');
            $(this).removeClass('mouseout');
        }).mouseout(function() {
            //Add and remove class
            $(this).addClass('mouseout');
            $(this).removeClass('mouseover');
        });
    });

    $('.noBrand').click(function(){
        var $total = $(this).parentsUntil('.sellerTab').parent().prev();
        $total.hide();
    });
    $('.noBrand').siblings().click(function () {
        var $total = $(this).parentsUntil('.sellerTab').parent().prev();
        $total.show();
    });

    //$(".TitemResultsCont").slide({
    //    titCell:".hd ul",
    //    mainCell:".TitemThumbsCont",
    //    autoPage:true,
    //    effect:"left",
    //    autoPlay:false,
    //    scroll:3,
    //    vis:4
    //});

    $(".slideGoods").slide({ mainCell:"ul",vis:4,prevCell:".sPrev",nextCell:".sNext",effect:"leftLoop",scroll:4,autoPage:true});
    $(".aboutSlider").slide({ mainCell:"ul",vis:3,prevCell:".sPrev",nextCell:".sNext",effect:"leftLoop"});


    $('#FontScroll').FontScroll({time: 3000,num: 1});

    //$(".buyshopslider").slide({mainCell:".bd ul",autoPlay:true});

    $('#clock').countdown($('#clock').data('time')).on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime(''
        + '%H:'
        + '%M:'
        + '%S'));
    });


    $("#scroll").niceScroll("#wrapscroll",{
        cursoropacitymin:1,
        cursorcolor:"#d4253c",
        cursorborderradius:'7px',
        boxzoom:false,
        background:'#f0f0f0',
        bouncescroll:false,
        cursorwidth:15
    });
    $("#brand-scroll").niceScroll("#wrapscroll",{
        cursoropacitymin:1,
        cursorcolor:"#b3b3b3",
        cursorborderradius:'7px',
        boxzoom:true,
        background:'#e6e6e6',
        cursorwidth:15
    });

    $("ul.jobsTh>li").click(function(){
        var $jobsTh = $(this).parentsUntil('.jobs-title').parent();
        var $jobsTd = $jobsTh.next();
        $(this).siblings().removeClass('active').end().addClass('active');
        var i = $(this).index();
        $jobsTd.children().siblings().hide().end().eq(i).show();
    });
});



$(document).ready(function(){
    updateView();
    //产品列表分类下拉菜单
    $("#shopFilter").each(function(){
        var $selectorsCont=$(this).find(".selectorsCont");
        var $filterKey=$(this).find(".filterKey");
        $selectorsCont.hide();
        $filterKey.hover(function(){
            $(this).children(".selectorsCont").stop(true,true).slideDown();
        },function(){
            $(this).children(".selectorsCont").stop(true,true).slideUp();
        });
    });

    //dialog
    (function(){
        var $bg=$("#popupBg");
        var closeDialog=function(){
            $bg.hide();
            var $dialog = $('.dialog:visible');

            $dialog.hide();

            if(location.hash.match(/#sign-in/)){
                console.log(location.hash);
                location.hash = '';
            }

        };

        $(document).on('click','[data-dialog]',function(){
            $bg.show();
            $("#dialog-"+$(this).data('dialog')).show();
        });

        $(document).on('click','.dialog .close',function(){
            closeDialog();
        });

        $(".dialog .close").click(function(){
            closeDialog();
        });

        $bg.click(function(){
            closeDialog();
        });

    })();

   

    $('input[type=reset]').click(function () {
        var $form = $(this).parentsUntil('form').parent();
        var $inputs = $form.find(':password,:text');
        $inputs.attr('value','');
    });


    $('.fancybox').fancybox({

    });

   
    $(".iframe").each(function(){
        var $this = $(this);
        var url = $this.attr('href');
        var wh = url.match(/width=(\d+)&height=(\d+)/i);
//        console.log(wh);
        $this.fancybox({
            width:wh[1],
            height:wh[2],
            type:'iframe'
        });

    });

});

function updateView($context){
    applySpecialInputs($context);
}

function applySpecialInputs($context){
    if(!$context){
        $context = $(document);
    }

    $(".ui-select",$context).each(function(){
        var $this= $(this);
        $this.selectWidget({
            change : function (val) {
                //console.log(val);
                //$this.trigger('change');
            }
        });
    });

   



}


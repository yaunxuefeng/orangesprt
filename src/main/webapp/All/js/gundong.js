
$(document).ready(function() {
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

                var i = $(this).index();
                //$('.infoContTd',$this).children().eq(i).slideDown('1500');
                $('.infoContTd',$this).children().eq(i).fadeIn();
                if(call){
                    call(i);
                }
            }
        }).mouseout(function() {
            //Add and remove class
            $(this).addClass('mouseout');
            $(this).removeClass('mouseover');
        });
    });

    $(".slideGoods").slide({ mainCell:"ul",vis:4,prevCell:".sPrev",nextCell:".sNext",effect:"leftLoop",scroll:4,autoPage:true});
    $(".aboutSlider").slide({ mainCell:"ul",vis:3,prevCell:".sPrev",nextCell:".sNext",effect:"leftLoop"});

});




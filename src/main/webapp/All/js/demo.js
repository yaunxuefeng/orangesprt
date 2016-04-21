
$(document).ready(function(){
    var $category = $('.address li:gt(3)');
	$category.hide();
	var $toggleBtn = $('#showMore a');
	$toggleBtn.toggle(function(){
		$category.show();
		$(this).find('.xs').removeClass('hide').addClass('show').text('隐藏全部地址');	
	},function(){
		$category.hide();
		$(this).find('.xs').removeClass('show').addClass('hide').text('显示全部地址');
	});
});



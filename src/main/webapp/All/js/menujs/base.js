$(document).ready(function() {
	updateView();
	//产品列表分类下拉菜单
	$("#shopFilter").each(function() {
		var $selectorsCont = $(this).find(".selectorsCont");
		var $filterKey = $(this).find(".filterKey");
		$selectorsCont.hide();
		$filterKey.hover(function() {
			$(this).children(".selectorsCont").stop(true, true).slideDown();
		}, function() {
			$(this).children(".selectorsCont").stop(true, true).slideUp();
		});
	});

});

function updateView($context) {
	applySpecialInputs($context);
}

function applySpecialInputs($context) {
	if (!$context) {
		$context = $(document);
	}

	$(".ui-select", $context).each(function() {
		var $this = $(this);
		$this.selectWidget({
			change : function(val) {
				//                console.log(val);
				//$this.trigger('change');
			}
		});
	});

	$.fn.toggleChecked = function(val) {
		val = !!val;
		return this.each(function() {
			var $this = $(this);
			$this.toggleClass("selected", val);
			$this.attr('data-checked', val ? 1 : 0);
		});

	};

	$(document).on(
			'click',
			'.checkbox',
			function() {
				var $this = $(this);
				var $ele = $this.prev(':checkbox');
				if ($ele.size() < 1) {
					$ele = $('#' + $this.attr('for'));
				}
				var checked = !$this.hasClass('selected');
				$this.toggleChecked(checked);
				if ($ele.size() > 0) {
					if (checked) {
						$ele.prop('selected', true);
					} else {
						$ele.removeAttr('selected');
					}
				}

				var inGrid = $this.hasClass('check-all')
						|| $this.hasClass('check-sub');
				if (inGrid) {
					var $table = $this.closest('table');
					if ($this.hasClass('check-all')) {
						$('.check-sub', $table).toggleChecked(checked);
					} else if ($this.hasClass('check-sub')) {
						$('.check-all', $table).toggleChecked(
								!$('.check-sub[data-checked="0"]').size());
					}
				}
			});
}
function str2asc(strstr) {
	return ("0" + strstr.charCodeAt(0).toString(16)).slice(-2);
}
function asc2str(ascasc) {
	return String.fromCharCode(ascasc);
}
function UrlEncode(str) {
	var ret = "";
	var strSpecial = "!\"#$%&'()*+,/:;<=>?[]^`{|}~%";
	var tt = "";
	for (var i = 0; i < str.length; i++) {
		var chr = str.charAt(i);
		var c = str2asc(chr);
		tt += chr + ":" + c + "n";
		if (parseInt("0x" + c) > 0x7f) {
			ret += "%" + c.slice(0, 2) + "%" + c.slice(-2);
		} else {
			if (chr == " ")
				ret += "+";
			else if (strSpecial.indexOf(chr) != -1)
				ret += "%" + c.toString(16);
			else
				ret += chr;
		}
	}
	return ret;
}
function UrlDecode(str) {
	var ret = "";
	for (var i = 0; i < str.length; i++) {
		var chr = str.charAt(i);
		if (chr == "+") {
			ret += " ";
		} else if (chr == "%") {
			var asc = str.substring(i + 1, i + 3);
			if (parseInt("0x" + asc) > 0x7f) {
				ret += asc2str(parseInt("0x" + asc
						+ str.substring(i + 4, i + 6)));
				i += 5;
			} else {
				ret += asc2str(parseInt("0x" + asc));
				i += 2;
			}
		} else {
			ret += chr;
		}
	}
	return ret;
}

function searchByFilter(){
    var $filter = $('#shopFilter');
    var params = {};

    $('[data-input].selected',$filter).each(function(i){
        var name = $(this).data('name');
        var value = $(this).data('value');
        if(!params[name]){
            params[name] = [];
        }
        params[name].push(value);
    });
    var qs = [];
    for(var k in params){
        qs.push(k +'='+ UrlEncode(params[k].join(',')));
    }
    var url = base_url.replace(/\?.+/,'') + '?' + qs.join('&');
    location.replace(url);
}

$(document).on('click','#shopFilter .checkbox',function(e){
    var $this = $(this);
    $this.toggleClass("selected");
    if($this.hasClass('selected') && $this.parent().hasClass('radio')){
        $(this).siblings().toggleClass('selected',false);
    }
    searchByFilter();
});

$('.selectorsCont').each(function(){
    var $this = $(this);
    var $input = $('.filter>input',$this);
    var $cont = $input.parent().next().children('div');
    $input.data('cont',$cont);

});
$(function(){
	$('#filter_brand').keyup(function(){
		console.log('key press');
		search_val = $(this).val();
		if(search_val.length < 1){
			search_val = '';
	    }
		console.log(search_val.length);
		$('#brand-filter-list > div').each(function(){
	        var $this = $(this);
	        if($this.text().toUpperCase().indexOf(search_val.toUpperCase()) < 0){
	            $this.hide();
	        }else if($this.is(':hidden')){
	        	//$this.text().toUpperCase();
	            $this.show();
	        }
	    });
	});
});
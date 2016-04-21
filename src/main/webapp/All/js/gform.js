
//radio js
+function($){

	'use strict';
	var gRadio = function(element, options) {
		var _this=this;
		_this.options = $.extend({}, gRadio.DEFAULTS, options);
		_this.$element = $(element);
		_this.$input = this.$element.find('input')[_this.options.debug?'show':'hide']();
		_this.$inputName = _this.$input[0].name;
		_this.$label = this.$element.find('label').hide();
		_this.$radioItem = _this.$$('> .'+_this.options.radio_item) || $('<div class="'+_this.options.radio_item+'"><i></i>'+(this.$label.html()||"")+'</div>').appendTo(_this.$element);
		if($.isFunction(_this.options.init))_this.options.init(_this);
		if(_this.options.load)_this.refresh();
	}

	gRadio.VERSION  = '1.0';

	gRadio.DEFAULTS = {
		debug: false,
		load: true,
		init: null,
		radio_item: 'gform-radio-item',
		radio_item_over: 'gform-radio-item-over',
		radio_item_active: 'gform-radio-item-active',
		change: null
	}

	gRadio.prototype.refresh = function(){
		var _this=this;
		if(_this.$input.is(':checked'))_this.$radioItem.addClass(_this.options.radio_item_active);

		//events
		_this.$radioItem.on('click',function(){
			var $this=$(this);
			_this.$element.siblings().find('input[name="'+_this.$inputName+'"]').siblings('.'+_this.options.radio_item).removeClass(_this.options.radio_item_active);
			$this.addClass(_this.options.radio_item_active);
			_this.$input[0].checked=true;
			if($.isFunction(_this.options.change))_this.options.change($this, _this, _this.$input);
		}).on('mouseenter','li',function(){
			$(this).addClass(_this.options.radio_item_over);
		}).on('mouseleave','li',function(){
			$(this).removeClass(_this.options.radio_item_over);
		})
	}

	gRadio.prototype.$$ = function(name){
		return this.$element.find(name).length==0 ? false : this.$element.find(name);
	}

	function Plugin(option){
		return this.each(function(){
			var $this = $(this);
			var data = $this.data('gradio');
			var options = typeof option == 'object' && option

			if (!data) $this.data('gradio', (data = new gRadio(this, options)));
			if (typeof option == 'string') data[option].call($this);
		})
	}

	$.fn.gradio = Plugin;
	$.fn.gradio.Constructor = gRadio;


}(jQuery);


//checkbox js
+function($){

	'use strict';
	var gCheckbox = function(element, options) {
		var _this=this;
		_this.options = $.extend({}, gCheckbox.DEFAULTS, options);
		_this.$element = $(element);
		_this.$input = this.$element.find('input')[_this.options.debug?'show':'hide']();
		_this.$label = this.$element.find('label').hide();
		_this.$checkboxItem = _this.$$('> .'+_this.options.checkbox_item) || $('<div class="'+_this.options.checkbox_item+'"><i></i>'+(_this.$label.html()||"")+'</div>').appendTo(_this.$element);
		if($.isFunction(_this.options.init))_this.options.init(_this);
		if(_this.options.load)_this.refresh();
	}

	gCheckbox.VERSION  = '1.0';

	gCheckbox.DEFAULTS = {
		debug: false,
		load: true,
		init: null,
		checkbox_item: 'gform-checkbox-item',
		checkbox_item_over: 'gform-checkbox-item-over',
		checkbox_item_active: 'gform-checkbox-item-active',
		change: null
	}

	gCheckbox.prototype.refresh = function(){
		var _this=this;
		if(_this.$input.is(':checked'))_this.$checkboxItem.addClass(_this.options.checkbox_item_active);

		//events
		this.$checkboxItem.on('click',function(){
			var $this=$(this),
				checked=false;
			$this.toggleClass(_this.options.checkbox_item_active);
			_this.$input[0].checked?checked=false:checked=true;
			_this.$input[0].checked=checked;
			if($.isFunction(_this.options.change))_this.options.change($this, _this, _this.$input);
		}).on('mouseenter','li',function(){
			$(this).addClass(_this.options.checkbox_item_over);
		}).on('mouseleave','li',function(){
			$(this).removeClass(_this.options.checkbox_item_over);
		})
	}

	gCheckbox.prototype.$$ = function(name){
		return this.$element.find(name).length==0 ? false : this.$element.find(name);
	}

	function Plugin(option){
		return this.each(function(){
			var $this = $(this);
			var data = $this.data('gcheckbox');
			var options = typeof option == 'object' && option

			if (!data) $this.data('gcheckbox', (data = new gCheckbox(this, options)));
			if (typeof option == 'string') data[option].call($this);
		})
	}

	$.fn.gcheckbox = Plugin;
	$.fn.gcheckbox.Constructor = gCheckbox;


}(jQuery);


//select js
+function($){

	'use strict';
	var gSelect = function(element, options) {
		var _this=this;
		_this.show=false;
		_this.options = $.extend({}, gSelect.DEFAULTS, options);
		_this.$element = $(element);
		if(_this.$element.css('position')=='static')_this.$element.css('position','relative');
		_this.$select = _this.$$('> select')[_this.options.debug?'show':'hide']();
		_this.$selectHd = _this.$$('> .'+_this.options.select_hd) || $('<div class="'+_this.options.select_hd+'"></div>').appendTo(_this.$element);
		_this.$selectHdText = _this.$$('.'+_this.options.select_hd_text) || $('<div class="'+_this.options.select_hd_text+'"></div>').appendTo(_this.$selectHd);
		_this.$selectHdArrow = _this.$$('.'+_this.options.select_hd_arrow) || $('<div class="'+_this.options.select_hd_arrow+'">'+_this.options.arrow+'</div>').appendTo(_this.$selectHd);
		_this.$selectBd = _this.$$('.'+_this.options.select_bd) || $('<div class="'+_this.options.select_bd+'"></div>').appendTo(_this.$element);

		_this.$selectHd.on('click',function(e){
			e.stopPropagation();
			_this.$element.siblings().find('.'+_this.options.select_bd).hide();
			if(_this.show==false){
				_this.$selectBd.show();
				_this.show=true;
			}else{
				_this.$selectBd.hide();
				_this.show=false;
			}
		})

		//hide element
		$(document).on('click',function(){
			_this.$selectBd.hide();
			_this.show=false;
		})

		if($.isFunction(_this.options.init))_this.options.init(_this);
		if(_this.options.load)_this.refresh();

	}

	gSelect.VERSION  = '1.0';

	gSelect.DEFAULTS = {
		debug: false,
		load: true,
		select_hd: 'gform-select-hd',
		select_hd_text: 'gform-select-hd-text',
		select_hd_arrow: 'gform-select-hd-arrow',
		select_bd: 'gform-select-bd',
		select_bd_li_over: 'gform-select-li-over',
		select_bd_li_active: 'gform-select-li-active',
		arrow: '▼',
		init: null,
		change: null
	}

	gSelect.prototype.refresh = function(){

		//options append
		var _this=this,
			temp='<ul>';

		_this.$select.find('option').each(function(){
			var $this=$(this);
			temp+='<li class="';
			if(this.selected){
				_this.$selectHdText.html($this.text());
				temp+=_this.options.select_bd_li_active;
			}
			temp+='" data-val="'+$this.val()+'">'+$this.text()+'</li>';
		})
		temp+='</ul>';
		$(temp).appendTo(_this.$selectBd.empty());

		//options events
		_this.$selectBd.on('click','li',function(){
			var $this=$(this);
			_this.$selectHdText.html($this.text());
			_this.$selectBd.hide().find('li').removeClass(_this.options.select_bd_li_active);
			$this.addClass(_this.options.select_bd_li_active);
			_this.$select[0].selectedIndex=$this.index();
			if($.isFunction(_this.options.change))_this.options.change($this,_this, _this.$select);
		}).on('mouseenter','li',function(){
			$(this).addClass(_this.options.select_bd_li_over);
		}).on('mouseleave','li',function(){
			$(this).removeClass(_this.options.select_bd_li_over);
		})

	}

	gSelect.prototype.$$ = function(name){
		return this.$element.find(name).length==0 ? false : this.$element.find(name);
	}

	function Plugin(option){
		return this.each(function(){
			var $this = $(this);
			var data = $this.data('gselect');
			var options = typeof option == 'object' && option
			if (!data) $this.data('gselect', (data = new gSelect(this, options)));
			if (typeof option == 'string') data[option].call($this);
		})
	}

	$.fn.gselect = Plugin;
	$.fn.gselect.Constructor = gSelect;


}(jQuery);
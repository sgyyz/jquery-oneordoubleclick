(function($) {
	$.fn.oneordoubleclick = function(options) {
		return this.each(function() {
			var s = $.extend({}, $.fn.oneordoubleclick.Default, options || {});
			var self_obj = this;
			do_click = function(e) {
				clearTimeout(s.timer);
				s.timer = setTimeout(function() {
					s.oneclick.call(self_obj, e);
				}, s.interval);
			};

			do_dblclick = function(e) {
				clearTimeout(s.timer);
				s.dblclick.call(self_obj, e);
			};
			$(this).click(do_click).dblclick(do_dblclick);
		});
	};

	$.fn.oneordoubleclick.Default = {
		interval: 400,
		timer: null,
		oneclick: $.noop,
		dblclick: $.noop
	};
})(jQuery);
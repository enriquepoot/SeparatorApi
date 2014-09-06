(function (ns, $) {
	"use strict";
	ns.SeparatorController = function () {
		this.init.apply(this, arguments);
	};

	ns.SeparatorController.prototype = {
		parent: null
		,inData: null
		,sView: null
		,init: function (container) {
			var self = this;
			self.parent = $(container).css({ "width": "100%" });
			self.sView = new PS.SeparatorView(["getDiv","waitDiv","postDiv", self._PostData]);
			self._GetData();
		}
		,Render: function () {
			var self = this;
			self.parent.append(self.sView.getDiv);
			self.parent.append(self.sView.waitDiv);
			self.parent.append(self.sView.postDiv);
			self.sView.ToogleClass(["getDiv","waitDiv"], "hide");
		}
		,_GetData: function () {
			var self = this;
			$.get("http://separatorsizing.cloudapp.net/Api/Separator", 
				function (data) {
					self.inData = $.extend(new PS.SeparatorInput(), data);
					self.sView._BindGet(self.inData);
					self.sView.ToogleClass(["getDiv", "waitDiv"], "hide");
			});	
		}
		,_PostData: function (e, c) {
			e.preventDefault();
			var self = c;
			$("html, body").scrollTop(0);
			self.ToogleClass([ "waitDiv","getDiv"], "hide");
			$.post("http://separatorsizing.cloudapp.net/Api/Separator"
				, self._PrepareData()
				, function (resp) {
					self.reData = $.extend(new PS.SeparatorResponse(), resp);
					self._BindPost(self.reData);
					self.ToogleClass(["postDiv", "waitDiv"], "hide");
				});
		}
	};
})(window.PS = window.PS || {}, jQuery);
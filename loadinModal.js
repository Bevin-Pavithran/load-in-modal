(function ($) {

	$.fn.loadInModal = function () {

		createModal();

		this.on('click', function (e) {
			e.preventDefault();
			showpopup(e.target.href);
		});

		return this;

	};

	function showpopup(url) {
		var heightOfModal = Math.floor($(document).height() * 0.8);
		var iframe = '<iframe style="width:100%;height:'+heightOfModal+'px;border:none;" id="iframeinmodal"></iframe>';
		$('#iframeinmodal').remove();
		$('#modalIframe').append(iframe);
		$('#iframeinmodal').attr('src', url);
		$('#modalforiframe').modal('show');
	}

	function createModal() {
		var modal = '<div class="modal fade" id="modalforiframe" role="dialog"><div class="modal-dialog modal-lg modal-dialog-loadinModal"><div class="modal-content modal-content-loadinModal"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel">&nbsp;</h4></div><div id="modalIframe" style="background:url(siteloader.gif) center center no-repeat;" class="modal-body"></div></div></div></div></div>';
		$('body').append(modal);
	}

})(jQuery);




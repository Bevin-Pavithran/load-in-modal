(function ($) {

	$.fn.loadInModal =function (callback) {

		createModal();

		this.on('click', function (e) {
			e.preventDefault();
			showpopup(e.target.href, callback);
		});

		return this;
	};

	function showpopup(url, callback) {
		var heightOfModal = Math.floor($(document).height() * 0.8);
		var iframe = '<iframe style="width:100%;height:'+heightOfModal+'px;border:none;" id="iframeinmodal"></iframe>';
		$('#iframeinmodal').remove();
		$('#modalIframe').append(iframe);
		$('#iframeinmodal').attr('src', url);
		$('#modalforiframe').modal('show');
		$('#siteloader-content').show();
		callback();
	}

	function createModal() {
		var modal = '<div class="modal fade modal-container" id="modalforiframe" role="dialog"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h6 class="modal-title" id="myModalLabel">&nbsp;</h4></div><div id="modalIframe" class="modal-body"><div id="siteloader-content"><h3>Fetching Data From Device</h3><img id="loader" src="siteloader.gif"/></div></div></div></div></div></div>';		
		$('body').append(modal);
	}

})(jQuery);




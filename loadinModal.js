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
		$('#iframeinmodal').attr('src', url);
		$('#modalforiframe').modal('show');
	}

	function createModal() {
		var modal = '<div class="modal fade" id="modalforiframe" role="dialog"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-body"><iframe style="width:100%;height:500px;border:none;" id="iframeinmodal"></iframe></div></div></div></div></div>';

$('body').append(modal);
	}

})(jQuery);
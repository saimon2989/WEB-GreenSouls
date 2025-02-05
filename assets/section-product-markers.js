(function () {
	const productMarkers = () =>
		$(document).ready(function () {
			$(".js-product-markers__item").click(function () {
				$(".product-markers").css({
					borderTopLeftRadius: "0px",
					borderTopRightRadius: "0px",
				});

				$(".product-markers-for-mobile .product-markers__item-inner").each(
					function (index) {
						$(this).css({ display: "none" });
					}
				);

				$(
					`.product-markers-for-mobile .product-markers__item-inner[data-index='${$(
						this
					).data("index")}']`
				).css({ display: "block" });
			});
		});

	document.addEventListener("DOMContentLoaded", function () {
		productMarkers();
		document.addEventListener("shopify:section:load", function () {
			productMarkers();
		});
	});
})();

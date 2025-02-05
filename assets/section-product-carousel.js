(function () {
	const productSlider = () => {
		$(document).ready(function () {
			$(".js-get-section").each(function (index, parent) {
				let parentId = `#${$(parent).attr("id")}`;

				let carousel = document
					.querySelector(parentId)
					.querySelector(`.js-swiper-product-carousel`);

				let scrollBar = document
					.querySelector(parentId)
					.querySelector(`.js-product-carousel-swiper-scrollbar`);

				let prev = document
					.querySelector(parentId)
					.querySelector(`.js-product-carousel-arrow-prev`);

				let next = document
					.querySelector(parentId)
					.querySelector(`.js-product-carousel-arrow-next`);

				let swiperCarousel = new Swiper(carousel, {
					slidesPerView: 3,
					spaceBetween: 8,

					scrollbar: {
						el: scrollBar,
						draggable: true,
					},

					navigation: {
						prevEl: prev,
						nextEl: next,
					},

					breakpoints: {
						0: { slidesPerView: 1 },
						920: { slidesPerView: 2 },
						1100: { slidesPerView: 3 },
						1200: { slidesPerView: 2 },
						1300: { slidesPerView: 3 },
						1500: { slidesPerView: 3 },
						1800: { slidesPerView: 3 },
					},
				});

				if (
					$(".js-product-carousel-arrow-prev").hasClass("swiper-button-lock") ||
					$(".js-product-carousel-arrow-next").hasClass("swiper-button-lock")
				) {
					$(".product-carousel_nav-tools").css("display", "none");
				}
			});
		});
	};

	document.addEventListener("DOMContentLoaded", function () {
		productSlider();
		document.addEventListener("shopify:section:load", function () {
			productSlider();
		});
	});
})();

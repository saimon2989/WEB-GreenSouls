// postfix JE - jQuery Element
(function () {
	const productRecommendationsSlider = () => {
		$(document).ready(function () {
			$(".js-product-recommendations").each(function (index, parent) {
				let parentId = `#${$(parent).attr("id")}`;

				let carousel = document
					.querySelector(parentId)
					.querySelector(`.js-swiper-product-recommendations`);

				let scrollBar = document
					.querySelector(parentId)
					.querySelector(`.js-product-recommendations-swiper-scrollbar`);

				let prev = document
					.querySelector(parentId)
					.querySelector(`.js-product-recommendations-arrow-prev`);

				let next = document
					.querySelector(parentId)
					.querySelector(`.js-product-recommendations-arrow-next`);

				let swiperCarousel = new Swiper(carousel, {
					slidesPerView: 3,
					spaceBetween: 8,

					scrollbar: {
						el: scrollBar,
						draggable: true,
					},

					// prettier-ignore
					navigation: {
						prevEl: prev,
						nextEl: next,
					},

					// prettier-ignore
					breakpoints: {
						0: { slidesPerView: 1 },
						920: { slidesPerView: 2 },
						1100: { slidesPerView: 3 },
						1300: { slidesPerView: 3 },
						1500: { slidesPerView: 3 },
						1800: { slidesPerView: 3 },
					},
				});
			});
		});
	};

	//.js-swiper-product-carousel
	document.addEventListener("DOMContentLoaded", function () {
		productRecommendationsSlider();
		document.addEventListener("shopify:section:load", function () {
			productRecommendationsSlider();
		});
	});
	setTimeout(function () {
		productRecommendationsSlider();
	}, 1000);
})();

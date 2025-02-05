// postfix JE - jQuery Element
(function () {
	const testimonials = () => {
		$(document).ready(function () {
			$(".js-get-testimonials").each(function (index, parent) {
				let parentId = `#${$(parent).attr("id")}`;
				// prettier-ignore
				let testimonialsCarousel = document.querySelector(parentId).querySelector(`.js-ts-slider`);
				// prettier-ignore
				let testimonialsCarouselNext = document.querySelector(parentId).querySelector(".js-ts-slider__arrow--next");
				// prettier-ignore
				let testimonialsCarouselPrev = document.querySelector(parentId).querySelector(".js-ts-slider__arrow--prev");

				// prettier-ignore
				let testimonialsSlider = document.querySelector(parentId).querySelector(`.js-swiper-testimonials`);
				// prettier-ignore
				let testimonialsSliderNext = document.querySelector(parentId).querySelector(".js-testimonials-carousel-arrow-prev");
				// prettier-ignore
				let testimonialsSliderPrev = document.querySelector(parentId).querySelector(".js-testimonials-carousel-arrow-next");
				// prettier-ignore
				let testimonialsSliderScrollBar = document.querySelector(parentId).querySelector(".js-testimonials-swiper-scrollbar");
				// prettier-ignore
				//let testimonialsSliderPagination = document.querySelector(parentId).querySelector(".js-testimonials-swiper-scrollbar");

				const Carousel = new Swiper(testimonialsCarousel, {
					parallax: true,
					slidesPerView: 1,
					centeredSlides: true,
					speed: 1000,
					navigation: {
						prevEl: testimonialsCarouselPrev,
						nextEl: testimonialsCarouselNext,
					},
				});

				//
				const Slider = new Swiper(testimonialsSlider, {
					slidesPerView: 3,
					slidesPerGroup: 3,
					centeredSlides: false,
					speed: 1000,

					navigation: {
						prevEl: testimonialsSliderPrev,
						nextEl: testimonialsSliderNext,
					},

					scrollbar: {
						el: testimonialsSliderScrollBar,
						draggable: true,
					},

					breakpoints: {
						0: {
							slidesPerView: 1,
							slidesPerGroup: 1,
						},

						920: {
							slidesPerView: 2,
							slidesPerGroup: 2,
						},

						1100: {
							slidesPerView: 2,
							slidesPerGroup: 2,
						},
						1300: {
							slidesPerView: 2,
							slidesPerGroup: 2,
						},
						1500: {
							slidesPerView: 3,
							// slidesPerGroup: 3,
						},
						1800: {
							slidesPerView: 3,
							// slidesPerGroup: 3,
						},
					},
				});
				if (document.querySelector(".testimonials_nav-tools")) {
					if (
						testimonialsSliderNext &&
						testimonialsSliderNext.hasAttribute("disabled") &&
						testimonialsSliderPrev.hasAttribute("disabled")
					) {
						document.querySelector(".testimonials_nav-tools").style.display =
							"none";
					} else {
						document.querySelector(".testimonials_nav-tools").style.display =
							"flex";
					}
				}
			});
		});
	};

	//.js-swiper-product-carousel
	document.addEventListener("DOMContentLoaded", function () {
		testimonials();
		document.addEventListener("shopify:section:load", function () {
			testimonials();
		});
	});

	window.addEventListener("resize", function () {
		testimonials();
	});
})();

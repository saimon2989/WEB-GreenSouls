(function () {
	const instagramSlider = () => {
		$(document).ready(function () {
			$(".js-get-instagram-slider").each(function (index, parent) {
				let parentId = `#${$(parent).attr("id")}`;

				const swiper1 = new Swiper(`${parentId} .mySwiper1`, {
					direction: "vertical",
					slidesPerView: "auto",
					autoHeight: true,
					allowTouchMove: false,
					calculateHeight: true,
					waitForTransition: true,
					watchSlidesProgress: false,
					updateOnWindowResize: true,
					updateOnImagesReady: false,
					preloadImages: false,
					autoplay: true,
					loop: true,
					autoplay: {
						delay: 0,
						disableOnInteraction: false,
					},
					speed: 15000,
				});

				const swiper2 = new Swiper(`${parentId} .mySwiper2`, {
					direction: "vertical",
					slidesPerView: "auto",
					mousewheelControl: false,
					autoHeight: true,
					allowTouchMove: false,
					calculateHeight: true,
					waitForTransition: true,
					watchSlidesProgress: false,
					updateOnWindowResize: true,
					updateOnImagesReady: false,
					preloadImages: false,
					autoplay: true,
					loop: true,
					autoplay: {
						delay: 0,
						disableOnInteraction: false,
					},
					speed: 15000,
				});

				const swiper3 = new Swiper(`${parentId} .mySwiper3`, {
					direction: "vertical",
					slidesPerView: "auto",
					mousewheelControl: false,
					autoHeight: true,
					allowTouchMove: false,
					calculateHeight: true,
					waitForTransition: true,
					watchSlidesProgress: false,
					updateOnWindowResize: true,
					updateOnImagesReady: false,
					preloadImages: false,
					autoplay: true,
					loop: true,
					autoplay: {
						delay: 0,
						disableOnInteraction: false,
					},
					speed: 15000,
				});
			});
		});
	};

	document.addEventListener("shopify:section:load", () => {
		setTimeout(() => {
			instagramSlider();
		}, 100);
	});

	document.addEventListener("visibilitychange", function () {
		if (!document.hidden) {
			$(".mySwiper1").each(function () {
				this.swiper.destroy();
			});
			$(".mySwiper2").each(function () {
				this.swiper.destroy();
			});
			$(".mySwiper3").each(function () {
				this.swiper.destroy();
			});
			instagramSlider();
		}
	});

	setTimeout(() => {
		instagramSlider();
	}, 100);
})();

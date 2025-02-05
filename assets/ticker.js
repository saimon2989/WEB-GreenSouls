(function () {
	const tickSlider = () => {
		$(".ticker").each(function () {
			const $this = $(this);
			const id = $this.attr("id");
			const tickerId = $this.data("ticker-id");
			const tickerSpeed = $this.data("ticker-speed") * 1000;
			const tickerSwiper = new Swiper(`#${id} .ticker-js-${tickerId}`, {
				slidesPerView: "auto",
				speed: tickerSpeed,
				initialSlide: 0,
				loop: true,
				allowTouchMove: false,
				waitForTransition: false,
				watchSlidesProgress: false,
				autoplay: {
					delay: 0,
					disableOnInteraction: false,
				},
			});
		});
	};

	document.addEventListener("shopify:section:load", function () {
		setTimeout(() => {
			tickSlider();
		}, 100);
	});

	setTimeout(() => {
		tickSlider();
	}, 100);
})();

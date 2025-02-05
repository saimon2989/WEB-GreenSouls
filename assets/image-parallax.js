(function () {
	const parallaxImage = () => {
		$(".jarallax").jarallax();
	};
	const parallaxVideo = () => {
		$(".jarallax-video").jarallax();
	};

	document.addEventListener("shopify:section:load", parallaxImage);
	document.addEventListener("shopify:section:load", parallaxVideo);

	window.addEventListener("load", parallaxImage);
	window.addEventListener("load", parallaxVideo);
})();

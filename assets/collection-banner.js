(function () {
	const imageCollageSection = document.querySelector('.collection-hero__image-wrapper');
	const images = imageCollageSection.querySelectorAll('.js-parallax');
	const arr = [150, -150, 150, 150];

	images.forEach((image, i) => {
		image.setAttribute('data-parallax-property-value', arr[i]);
	});
})();

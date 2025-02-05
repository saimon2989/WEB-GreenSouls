(function () {
	const rellax = () => {
		 new Rellax('.rellax');
	}

	document.addEventListener('shopify:section:load', function () {
		rellax();
	});

	rellax();
})();

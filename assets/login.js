$(document).on("click",".login__toggle",function() {
  $('.login__reset').toggle();
  $('.login__form').toggle();
});

(function () {
	const rellax = () => {
		 new Rellax('.rellax');
	}

	document.addEventListener('shopify:section:load', function () {
		rellax();
	});

	rellax();
})();


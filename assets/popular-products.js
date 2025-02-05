(function () {
  const productsFilters = () => {
    const products = document.querySelectorAll('.collection-popular-card');
    const limit = document.querySelector('.popular-products__wrapper').dataset.limit;

    document.querySelectorAll('.filters__item').forEach(item => {      
      item.addEventListener('click', (event) => {
        event.preventDefault();
        const typeTarget = item.dataset.typeTarget;
        document.querySelectorAll('.filters__item').forEach(element => {
          element.classList.remove('filters__item_active');
        })
        item.classList.add('filters__item_active');

        let i = 0;
        products.forEach(element => {
          let productType = element.dataset.type;
          if ((productType == typeTarget || typeTarget == "all") && i < limit) {
            element.classList.add('show');
            i++;
          }
          else {
            element.classList.remove('show');
          }
        });
      })
    })
  }

  productsFilters();

  document.addEventListener('shopify:section:load', function () {
		productsFilters();
	});
})();
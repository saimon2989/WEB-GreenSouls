(function () {
	const header = () => {
		const body = document.querySelector("body");
		const header__offcanvas = document.querySelector(
			".header__offcanvas-toggle"
		);
		const openBtn = document.querySelector(".header__offcanvas-toggle-link");
		const closeBtn = document.querySelector(
			".header__offcanvas-toggle-link--close"
		);
		const offMenu = document.querySelector(".header__offcanvas-menu");
		const searchDetails = document.querySelector(".header__details-right");
		const searchDetailsTop = document.querySelector(".header__details-top");
		const submenuDetails = document.querySelectorAll(
			".header__submenu li details"
		);
		const openSearchBtn = document.querySelector(".header__search-btn");
		const openSearchBtnTop = document.querySelector(".header__search-btn-top");
		const header = document.querySelector(".header-wrapper--under-menu");

		const openMenu = (e) => {
			e.preventDefault();
			offMenu.classList.add("header__offcanvas-menu--open");
			header__offcanvas.classList.add("active");
			body.classList.add("body--hidden");

			header && header.classList.remove("container");
			header && header.classList.add("header__offcanvas-menu-full");
		};

		const closeMenu = () => {
			offMenu.classList.remove("header__offcanvas-menu--open");
			header__offcanvas.classList.remove("active");
			body.classList.remove("body--hidden");

			header && header.classList.add("container");
			header && header.classList.remove("header__offcanvas-menu-full");
		};

		if(openBtn){
          openBtn.addEventListener("click", openMenu);
		closeBtn.addEventListener("click", function (e) {
			e.preventDefault();
			closeMenu();
		});
        }

		submenuDetails.forEach((targetDetail) => {
			targetDetail.addEventListener("click", () => {
				submenuDetails.forEach((detail) => {
					if (detail !== targetDetail) {
						detail.removeAttribute("open");
						body.classList.remove("overflow--hidden");
					}
				});
			});
		});

		document.addEventListener("keyup", (e) => {
			if (e.key === "Escape") {
				closeMenu();
				searchDetails.removeAttribute("open");
				body.classList.remove("overflow--hidden");
			}
		});

		openSearchBtn.addEventListener("click", () => {
			if (searchDetails.open) {
				body.classList.add("overflow--hidden");
			} else {
				body.classList.remove("overflow--hidden");
			}
		});

		openSearchBtnTop &&
			openSearchBtnTop.addEventListener("click", () => {
				if (searchDetailsTop.open) {
					body.classList.add("overflow--hidden");
				} else {
					body.classList.remove("overflow--hidden");
				}
			});
	};

	document.addEventListener("shopify:section:load", header);

	header();
})();

(function () {
	const imageTabs = () => {
		const mediaQueryObj = {
			$xs: "0",
			$sm: "576px",
			$md: "750px",
			$lg: "990px",
			$xl: "1200px",
			$xxl: "1360px",
			$xxxl: "1560px",
			$xxxxl: "1760px",
		};

		const mediaQuery = `(max-width: ${mediaQueryObj.$lg})`;
		const mediaQueryList = window.matchMedia(mediaQuery);
		let isMobile = false;

		$(".js-image-tabs").each(function (index, parent) {
			const parentId = `#${$(parent).attr("id")}`;
			const params = document
				.querySelector(parentId)
				.querySelector(".js-img-slide");
			const swiperImage = `${parentId} .js-img-slide`;
			const swiperDescription = `${parentId} .js-description-slide`;
			const jsTabs = `${parentId} .js-tabs`;
			const pagination = `${parentId} .swiper-pagination`;
			const effects = params.dataset.effects;

			const slideEffectsTabs = (effects) => {
				switch (effects) {
					case "slide-horizontal":
						return {};
					case "slide-vertical":
						return {
							direction: "vertical",
						};
					case "fade":
						return { effect: "fade", parallax: false };
					case "coverflow":
						return {
							effect: "coverflow",
							coverflowEffect: {
								rotate: 50,
								stretch: 0,
								depth: 100,
								modifier: 1,
								slideShadows: true,
							},
						};
					case "creative":
						return {
							effect: "creative",
							creativeEffect: {
								prev: {
									shadow: true,
									translate: [0, 0, -400],
								},
								next: {
									translate: ["100%", 0, 0],
								},
							},
						};
					case "flip":
						return { effect: "flip" };
					default:
						return {};
				}
			};

			const imageTabsSwiper = new Swiper(swiperImage, {
				speed: 1000,
				...slideEffectsTabs(effects),
				allowTouchMove: false,
				pagination: {
					el: `${pagination}`,
					clickable: true,
				},

				on: {
					init: function () {
						if (
							$(".swiper-slide-active").hasClass("block-theme-mode-dark") ===
							true
						) {
							$(".js-theme-mode").addClass("section-theme-mode-dark");
							$(".js-theme-mode").removeClass("section-theme-mode-light");
						} else {
							$(".js-theme-mode").addClass("section-theme-mode-light");
							$(".js-theme-mode").removeClass("section-theme-mode-dark");
						}
					},
					transitionStart: function () {
						if (
							$(".swiper-slide-active").hasClass("block-theme-mode-dark") ===
							true
						) {
							$(".js-theme-mode").addClass("section-theme-mode-dark");
							$(".js-theme-mode").removeClass("section-theme-mode-light");
						} else {
							$(".js-theme-mode").addClass("section-theme-mode-light");
							$(".js-theme-mode").removeClass("section-theme-mode-dark");
						}
					},
				},
			});

			const descriptionTabsSwiper = new Swiper(swiperDescription, {
				allowTouchMove: false,
				spaceBetween: 30,

				1200: {
					spaceBetween: 0,
				},
			});
			imageTabsSwiper.controller.control = descriptionTabsSwiper;
			descriptionTabsSwiper.controller.control = imageTabsSwiper;

			$(`${jsTabs} .tabs__item`).mouseenter(function () {
				const thisIndex = $(this).index();
				const currentIndex = $(`${jsTabs} .tabs__item--current`).index();

				if (thisIndex !== currentIndex) {
					$(this).addClass("tabs__item--current");
					$(".tabs__item").eq(currentIndex).removeClass("tabs__item--current");
					$(`${pagination} .swiper-pagination-bullet`)
						.eq(thisIndex)
						.trigger("click");
				}
			});
		});
	};

	document.addEventListener("DOMContentLoaded", function () {
		imageTabs();
		document.addEventListener("shopify:section:load", function () {
			imageTabs();
		});
	});
})();

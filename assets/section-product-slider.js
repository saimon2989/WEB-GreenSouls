(function () {
	const productSliderV1 = () => {
		$(document).ready(function () {
			$(".js-product-slider").each(function (index, parent) {
				let parentId = `#${$(parent).attr("id")}`;

				const params = document
					.querySelector(parentId)
					.querySelector(".js-data--product-slider-v1");
				// prettier-ignore
				const speedSlideing = removeSpace(params?.dataset?.speedSlideing) * 1000;
				// prettier-ignore
				const delaySlideing = removeSpace(params?.dataset?.delaySlideing) * 1000;
				// prettier-ignore
				const effects = params?.dataset?.effects;
				// prettier-ignore
				let isHoverStopAutoplay = toBoolean( params?.dataset?.isHoverStopAutoplay);
				const isAutoplay = toBoolean(params?.dataset?.isAutoplay);
				// prettier-ignore
				isHoverStopAutoplay = isAutoplay === false ? false : isHoverStopAutoplay;
				const circleAnimateName = "circle-animate-product-slider-v1";
				const jsSwiperPaginationName = "js-swiper-pagination-v1";
				const jsSwiperPagination = `${parentId} .${jsSwiperPaginationName}`;
				// prettier-ignore
				const swiperPaginationBulletActiveName = 'swiper-pagination-bullet-active';
				const swiperPaginationBulletActive = `.${swiperPaginationBulletActiveName}`;
				const jsSwiperName = "js-product-slider-v1-swiper";
				const jsSwiper = `${parentId} .${jsSwiperName}`;
				const circleButtonName = "circle-button";
				const circleButton = `.${circleButtonName}`;
				let btnsArray;
				let isHover = false;

				const nextEl = `${parentId} .swiper-button-next`;
				const prevEl = `${parentId} .swiper-button-prev`;
				const el = `${parentId} .js-swiper-pagination-v1`;

				const slideEffects = (effects) => {
					switch (effects) {
						case "slide":
							return {
								spaceBetween: 8,
							};
						case "fade":
							return { effect: "fade" };
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

				const insertAutoplay = () =>
					isAutoplay === true
						? {
								autoplay: {
									delay: delaySlideing,
									disableOnInteraction: false,
								},
						  }
						: {};

				// swiperParams
				const swiperParams = {
					centeredSlides: false,
					speed: speedSlideing,
					loop: true,
					...slideEffects(effects),
					...insertAutoplay(),
					navigation: {
						nextEl: nextEl,
						prevEl: prevEl,
					},
					pagination: {
						el: el,
						clickable: true,

						renderBullet: function (index, className) {
							const svg = `<svg width="62" height="62" class="circle-button__svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg">
												<circle cx="31" cy="31" r="31" />
												<circle cx="31" cy="31" r="31" />
											</svg>`;
							return `<button data-content='${
								index + 1
							}' class='${className} circle-button'
							aria-label="thumbnail"
									style="
													--cb--delay-slideing: ${delaySlideing}ms;
													--cb--speed-slideing: ${speedSlideing}ms
												"
									type="button">
						${svg}
					</button>`;
						},
					},

					on: {
						init: function () {
							if (isHover === false) {
								removePageAnimationClassName();
								addPageAnimationClassName();
							}
						},

						transitionStart: function () {
							if (isHover === false) {
								removePageAnimationClassName();
							}
						},

						transitionEnd: function () {
							if (isHover === false) {
								addPageAnimationClassName();
							}
						},

						paginationRender: function (swiper, paginationEl) {
							btnsArray = paginationEl.querySelectorAll("button");
						},
					},
				};
				// end swiperParams

				// swiper
				var swiper = new Swiper(jsSwiper, swiperParams);
				// end swiper
				// , ${jsSwiperPagination}
				// $(`${jsSwiper}`).mousemove(function () {
				// 	if (isHoverStopAutoplay === true) {
				// 		isHover = true;
				// 		stopSlide();
				// 	}
				// });
				// , ${jsSwiperPagination}
				$(jsSwiper).mouseenter(function () {
					if (isHoverStopAutoplay === true) {
						isHover = true;
						stopSlide();
					}
				});

				$(jsSwiper).mouseleave(function () {
					if (isHoverStopAutoplay === true) {
						isHover = false;
						startSlide();
					}
				});

				function addPageAnimationClassName() {
					$(
						`${jsSwiperPagination} ${swiperPaginationBulletActive} svg circle:last-child`
					).addClass(circleAnimateName);
				}

				function removePageAnimationClassName() {
					$(
						`${jsSwiperPagination} ${circleButton} svg circle:last-child`
					).removeClass(circleAnimateName);
				}

				function startSlide() {
					if (isAutoplay === true) {
						swiper.autoplay.start();
						addPageAnimationClassName();
					}
				}

				function stopSlide() {
					swiper.autoplay.stop();
					removePageAnimationClassName();
				}

				function toBoolean(stringValue) {
					return removeSpace(stringValue) === "true" ? true : false;
				}

				function removeSpace(stringValue) {
					return stringValue?.split(/\s+/).join("");
				}
			});
		});
	};

	document.addEventListener("DOMContentLoaded", function () {
		productSliderV1();
		document.addEventListener("shopify:section:load", function () {
			productSliderV1();
		});
	});
})();
// v2
(function () {
	const productSliderV2 = () => {
		$(document).ready(function () {
			$(".js-product-slider").each(function (index, parent) {
				let parentId = `#${$(parent).attr("id")}`;

				const params = document
					.querySelector(parentId)
					.querySelector(".js-data--product-slider-v2");
				// prettier-ignore
				const speedSlideing = removeSpace(params?.dataset?.speedSlideing) * 1000;
				// prettier-ignore
				const delaySlideing = removeSpace(params?.dataset?.delaySlideing) * 1000;
				const effects = params?.dataset?.effects;

				// prettier-ignore
				let isHoverStopAutoplay = toBoolean(params?.dataset?.isHoverStopAutoplay);
				const isAutoplay = toBoolean(params?.dataset?.isAutoplay);
				// prettier-ignore
				isHoverStopAutoplay = isAutoplay === false ? false : isHoverStopAutoplay;

				const circleAnimateName = "circle-animate-product-slider-v2";

				const jsSwiperPaginationName = "js-swiper-pagination-v2";
				const jsSwiperPagination = `${parentId} .${jsSwiperPaginationName}`;

				// prettier-ignore
				const swiperPaginationBulletActiveName = 'swiper-pagination-bullet-active';
				const swiperPaginationBulletActive = `.${swiperPaginationBulletActiveName}`;

				const jsSwiperName = "js-product-slider-v2-swiper";
				const jsSwiper = `${parentId} .${jsSwiperName}`;

				const circleButtonName = "circle-button";
				const circleButton = `.${circleButtonName}`;

				const nextEl = `${parentId} .swiper-button-next`;
				const prevEl = `${parentId} .swiper-button-prev`;
				const el = `${parentId} .js-swiper-pagination-v2`;

				let btnsArray;
				let isHover = false;

				const slideEffects = (effects) => {
					switch (effects) {
						case "slide":
							return {
								spaceBetween: 8,
							};
						case "fade":
							return { effect: "fade" };
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

				const insertAutoplay = () =>
					isAutoplay === true
						? {
								autoplay: {
									delay: delaySlideing,
									disableOnInteraction: false,
								},
						  }
						: {};

				// swiperParams
				const swiperParams = {
					centeredSlides: false,
					speed: speedSlideing,
					loop: true,
					...slideEffects(effects),
					...insertAutoplay(),
					navigation: {
						nextEl: nextEl,
						prevEl: prevEl,
					},

					pagination: {
						el: el,
						clickable: true,

						renderBullet: function (index, className) {
							const svg = `<svg width="62" height="62" class="circle-button__svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg">
													<circle cx="31" cy="31" r="31" />
													<circle cx="31" cy="31" r="31" />
												</svg>`;
							return `<button data-content='${
								index + 1
							}' class='${className} circle-button'
							aria-label="thumbnail"
										style="
														--cb--delay-slideing: ${delaySlideing}ms;
														--cb--speed-slideing: ${speedSlideing}ms
													"
										type="button">
							${svg}
						</button>`;
						},
					},

					on: {
						init: function () {
							if (isHover === false) {
								removePageAnimationClassName();
								addPageAnimationClassName();
							}
						},

						transitionStart: function () {
							if (isHover === false) {
								removePageAnimationClassName();
							}
						},

						transitionEnd: function () {
							if (isHover === false) {
								addPageAnimationClassName();
							}
						},

						paginationRender: function (swiper, paginationEl) {
							btnsArray = paginationEl.querySelectorAll("button");
						},
					},
				};
				// end swiperParams

				// swiper
				var swiper = new Swiper(jsSwiper, swiperParams);
				// end swiper
				// , ${jsSwiperPagination}
				// $(`${jsSwiper}`).mousemove(function () {
				// 	if (isHoverStopAutoplay === true) {
				// 		isHover = true;
				// 		stopSlide();
				// 	}
				// });
				// , ${jsSwiperPagination}
				$(jsSwiper).mouseenter(function () {
					if (isHoverStopAutoplay === true) {
						isHover = true;
						stopSlide();
					}
				});

				$(jsSwiper).mouseleave(function () {
					if (isHoverStopAutoplay === true) {
						isHover = false;
						startSlide();
					}
				});

				function addPageAnimationClassName() {
					$(
						`${jsSwiperPagination} ${swiperPaginationBulletActive} svg circle:last-child`
					).addClass(circleAnimateName);
				}

				function removePageAnimationClassName() {
					$(
						`${jsSwiperPagination} ${circleButton} svg circle:last-child`
					).removeClass(circleAnimateName);
				}

				function startSlide() {
					if (isAutoplay === true) {
						swiper.autoplay.start();
						addPageAnimationClassName();
					}
				}

				function stopSlide() {
					swiper.autoplay.stop();
					removePageAnimationClassName();
				}

				function toBoolean(stringValue) {
					return removeSpace(stringValue) === "true" ? true : false;
				}

				function removeSpace(stringValue) {
					return stringValue?.split(/\s+/).join("");
				}
			});
		});
	};

	document.addEventListener("DOMContentLoaded", function () {
		productSliderV2();
		document.addEventListener("shopify:section:load", function () {
			productSliderV2();
		});
	});
})();

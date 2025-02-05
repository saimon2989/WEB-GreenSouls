(function () {
	const aboutCarousel = () => {
		$(document).ready(function () {
			$(".js-carousel").each(function (index, parent) {
				let parentId = `#${$(parent).attr("id")}`;
				const params = document
					.querySelector(parentId)
					.querySelector(".js-about-for-data-get");
				const speedSlideing = removeSpace(params.dataset.speedSlideing) * 1000;
				const delaySlideing = removeSpace(params.dataset.delaySlideing) * 1000;
				let isHoverStopAutoplay = toBoolean(params.dataset.isHoverStopAutoplay);
				const isAutoplay = toBoolean(params.dataset.isAutoplay);
				const slideCount = params.dataset.count == 1 ? false : true
				isHoverStopAutoplay =
					isAutoplay === false ? false : isHoverStopAutoplay;
				const circleAnimateName = "circle-animate-carousel";
				const jsSwiperPaginationName = "js-about__swiper-pagination";
				const jsSwiperPagination = `.${jsSwiperPaginationName}`;
				const swiperPaginationBulletActiveName =
					"swiper-pagination-bullet-active";
				const swiperPaginationBulletActive = `.${swiperPaginationBulletActiveName}`;
				const jsSwiperName = "js-about__carousel";
				const jsSwiper = `.${jsSwiperName}`;
				const jsSwiperCarousel = `${parentId} .${jsSwiperName}`;
				const jsSwiperTextCarousel = `${parentId} .text-carousel`;
				const circleButtonName = "circle-button";
				const circleButton = `.${circleButtonName}`;
				let isHover = false;

				const insertAutoplay = () =>
					isAutoplay === true
						? {
								autoplay: {
									delay: delaySlideing,
									disableOnInteraction: false,
								},
						  }
						: {};

				let paginationContainer = document
					.querySelector(parentId)
					.querySelector(`.js-about__swiper-pagination`);

				const swiperParams = {
					slidesPerView: "auto",
					centeredSlides: false,
					speed: speedSlideing,
					spaceBetween: 8,
					loop: slideCount,
					...insertAutoplay(),
					pagination: {
						el: paginationContainer,
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

				var swiper = new Swiper(jsSwiperCarousel, swiperParams);
				$(`${parentId}`)
					.find(`${jsSwiper}`)
					.mouseenter(function () {
						if (isHoverStopAutoplay === true) {
							isHover = true;
							stopSlide();
						}
					});

				$(`${parentId}`)
					.find(`${jsSwiper}`)
					.mouseleave(function () {
						if (isHoverStopAutoplay === true) {
							isHover = false;
							startSlide();
						}
					});

				const textSwiper = new Swiper(jsSwiperTextCarousel, {
					parallax: true,
					slidesPerView: "auto",
					spaceBetween: 7,
					centeredSlides: false,
					speed: speedSlideing,
					loop: slideCount,
					allowTouchMove: false,
				});

				swiper.controller.control = textSwiper;
				textSwiper.controller.control = swiper;

				function addPageAnimationClassName() {
					$(
						`${parentId} ${jsSwiperPagination} ${swiperPaginationBulletActive} svg circle:last-child`
					).addClass(circleAnimateName);
				}

				function removePageAnimationClassName() {
					$(
						`${parentId} ${jsSwiperPagination} ${circleButton} svg circle:last-child`
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
		aboutCarousel();
		document.addEventListener("shopify:section:load", function () {
			aboutCarousel();
		});
	});
})();

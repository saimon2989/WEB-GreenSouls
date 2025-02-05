(function () {
	const slideshow = () => {
		$(document).ready(function () {
			$(".js-slideshow").each(function (index, parent) {
				let parentId = `#${$(parent).attr("id")}`;

				const params = document
					.querySelector(parentId)
					.querySelector(".js-data--slideshow");

				const speedSlideing = removeSpace(params.dataset.speedSlideing) * 1000;
				const delaySlideing = removeSpace(params.dataset.delaySlideing) * 1000;
				let isHoverStopAutoplay = toBoolean(params.dataset.isHoverStopAutoplay);
				const isAutoplay = toBoolean(params.dataset.isAutoplay);
				isHoverStopAutoplay =
					isAutoplay === false ? false : isHoverStopAutoplay;
				const parallax = toBoolean(params.dataset.parallax);
				const effects = params.dataset.effects;
				const sliderThumbnails = removeSpace(
					params.dataset.sliderThumbnails
				).split(",");

				const circleAnimateName = "circle-animate";
				const circleAnimate = `${parentId} .${circleAnimateName}`;

				const jsSwiperPaginationName = "js-swiper-pagination";
				const jsSwiperPagination = `${parentId} .${jsSwiperPaginationName}`;

				const swiperPaginationBulletActiveName =
					"swiper-pagination-bullet-active";
				const swiperPaginationBulletActive = `${parentId} .${swiperPaginationBulletActiveName}`;

				const jsSwiperName = "js-swiper";
				const jsSwiper = `${parentId} .${jsSwiperName}`;

				const circleButtonName = "circle-button";
				const circleButton = `${parentId} .${circleButtonName}`;

				let btnsArray;
				let isHover = false;

				const slideEffects = (effects) => {
					switch (effects) {
						case "slide":
							return {};
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
					loop: false,
					parallax: parallax,
					...slideEffects(effects),
					...insertAutoplay(),
					pagination: {
						el: ".js-swiper-pagination",
						clickable: true,

						renderBullet: function (index, className) {
							const thumbnail = sliderThumbnails[index]
								? `<img class="circle-button__thumbnail"
                        src="${sliderThumbnails[index]}"
                        alt="" width="42" height="42" />`
								: `<svg class="circle-button__thumbnail-empty-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 140 140">
                        <defs>
                          <style>
                            .cls-1{fill:#fff;}.cls-2{fill:#010101;}
                          </style>
                        </defs>
                        <circle class="cls-1" cx="70" cy="70" r="70"/>
                        <path class="cls-2" d="M103.46,43H36.54A1.54,1.54,0,0,0,35,44.53h0V95.47A1.54,1.54,0,0,0,36.54,97h66.92A1.54,1.54,0,0,0,105,95.47h0V44.54A1.56,1.56,0,0,0,103.46,43Zm.61,52.48a.61.61,0,0,1-.61.61H36.54a.61.61,0,0,1-.61-.61h0V44.54a.61.61,0,0,1,.61-.61h66.92a.61.61,0,0,1,.61.61h0Z"/>
                        <path class="cls-2" d="M41.1,91H57.41V91a.12.12,0,0,0,.1-.05H98.9V49H41.1Zm1-4,11-11a4.77,4.77,0,0,1,6.73,0l.83.82,9.24,9.25a96.83,96.83,0,0,0-12.56,4H42.1ZM98,81.45A171.73,171.73,0,0,0,71,85.8l-9.31-9.33L76.13,62a4.77,4.77,0,0,1,6.73,0L98,77.13ZM60.05,90c5.34-1.93,18.7-6,38-7.6V90Zm38-40V75.7L83.57,61.27a5.72,5.72,0,0,0-8,0L61.05,75.75l-.51-.47a5.72,5.72,0,0,0-8,0L42.15,85.61V49.92Z"/>
                        <path class="cls-2" d="M70,74.57A4.57,4.57,0,1,0,65.43,70h0A4.55,4.55,0,0,0,70,74.57Zm0-8.22A3.64,3.64,0,1,1,66.36,70h0A3.62,3.62,0,0,1,70,66.35Z"/>
                      </svg>`;
							const svg = `<svg width="62"
                              height="62"
                              class="circle-button__svg"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="31" cy="31" r="31" />
                          <circle cx="31" cy="31" r="31" />
                        </svg>`;
							return `<button data-content='${index + 1}'
                          class='${className} circle-button'
													aria-label="thumbnail"
                          style="
                                  --cb--delay-slideing: ${delaySlideing}ms;
                                  --cb--speed-slideing: ${speedSlideing}ms
                                "
                          type="button">
                    ${svg}${thumbnail}
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

				const swiper = new Swiper(jsSwiper, swiperParams);

				$(`${jsSwiper}, ${jsSwiperPagination}`).mousemove(function () {
					if (isHoverStopAutoplay === true) {
						isHover = true;
						stopSlide();
					}
				});

				$(`${jsSwiper}, ${jsSwiperPagination}`).mouseenter(function () {
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
					$(`${swiperPaginationBulletActive} svg circle:last-child`).addClass(
						circleAnimateName
					);
				}

				function removePageAnimationClassName() {
					$(circleButton)
						.find("svg circle:last-child")
						.removeClass(circleAnimateName);
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
		slideshow();
		document.addEventListener("shopify:section:load", function () {
			slideshow();
		});
	});
})();

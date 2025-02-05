// (function () {
//   const productSlider = () => {
//     $(document).ready(function () {
//       const productSliderSection = document.querySelector(
//         ".js-product-slider-for-data-get"
//       );
//       const getSpeedProductSlider =
//         productSliderSection.dataset.speedProductSlider;
//       const getDelayProductSlider =
//         productSliderSection.dataset.delayProductSlider;
//       const speedProductSlider = getSpeedProductSlider * 1000;
//       const delayProductSlider = getDelayProductSlider * 1000;
//       const sliderHoverAutoplayStop =
//         productSliderSection.dataset.sliderHoverAutoplayStop;

//       const swiperProductSlider = new Swiper(
//         ".js-progress-slide--product-slider",
//         {
//           slidesPerView: 1,
//           spaceBetween: 10,
//           centeredSlides: false,
//           speed: speedProductSlider,
//           loop: false,
//           // autoplay: {
//           //   delay: delayProductSlider,
//           //   disableOnInteraction: false,
//           //   pauseOnMouseEnter: false,
//           // },

//           on: {
//             init: function () {
//               setDuration(delayProductSlider);
//               setSelectorForAnimate(0);
//             },
//           },

//           navigation: {
//             prevEl: ".js-pss-btns--next",
//             nextEl: ".js-pss-btns--prev",
//           },

//           pagination: {
//             el: ".js-swiper-pagination--product-slider",
//             clickable: true,
//             renderBullet: function (index, className) {
//               const svg = `<svg height="62"
//                               width="62"
//                               class="circle-button__svg"
//                               preserveAspectRatio="xMidYMid meet"
//                               viewBox="0 0 62 62"
//                               xmlns="http://www.w3.org/2000/svg">
//                                 <circle cx="31" cy="31" r="31" />
//                                 <circle cx="31" cy="31" r="31" />
//                           </svg>`;

//               return `<button type="button" data-content='${
//                 index + 1
//               }' class='${className} circle-button'>${svg}</button>`;
//             },
//           },
//         }
//       );

//       function stop() {
//         swiperProductSlider.autoplay.stop();
//       }

//       function start() {
//         swiperProductSlider.autoplay.stop();
//       }

//       swiperProductSlider.on("setTransition", function () {
//         stop();
//       });

//       swiperProductSlider.on("slideChangeTransitionEnd", function () {
//         if (sliderHoverAutoplayStop === "true") {
//           start();
//           removeSelectorForAnimate();
//           setSelectorForAnimate(swiperProductSlider.activeIndex);
//         }
//       });

//       $(".js-swiper-cell--product-slider").mouseenter(function () {
//         if (sliderHoverAutoplayStop === "true") {
//           stop();
//         }
//       });

//       $(".js-swiper-cell--product-slider").mouseleave(function () {
//         if (sliderHoverAutoplayStop === "true") {
//           start();
//         }
//       });
//     });
//   };

//   // removeSelectorForAnimate
//   function removeSelectorForAnimate() {
//     $(".js-swiper-cell--product-slider .swiper-pagination-bullet").each(
//       function () {
//         $(this).find("svg circle:last-child").removeClass("circle-animate");
//       }
//     );
//   }

//   // setDuration
//   function setDuration(delayProductSlider) {
//     const bulletstList = document.querySelectorAll(
//       ".js-swiper-cell--product-slider .swiper-pagination-bullet"
//     );

//     bulletstList.forEach((item) => {
//       item.style.setProperty(
//         "--circle-button--progress-animation-duration",
//         delayProductSlider + "ms"
//       );
//     });
//   }

//   // setSelectorForAnimate
//   function setSelectorForAnimate(indexElement) {
//     document
//       .querySelectorAll(
//         ".js-swiper-cell--product-slider .swiper-pagination-bullet svg circle:last-child"
//       )
//       [indexElement].classList.add("circle-animate");
//   }

//   document.addEventListener("DOMContentLoaded", function () {
//     productSlider();
//     document.addEventListener("shopify:section:load", function () {
//       productSlider();
//     });
//   });
// })();

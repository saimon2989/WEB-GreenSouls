(function () {
	const cardAnimate = () => {
		function resetSplitUnWrapText(parent) {
			$(parent).find(".line").unwrap(".line-wrapper");
		}

		function splitWrapText(parent) {
			let parentID = $(`#${$(parent).attr("id")}`);
			// prettier-ignore
			parentID.find(".js-card__title--side-1").each(function (index, element) { new SplitType(element, { types: "lines" }) });
			// prettier-ignore
			parentID.find(".js-card__title--side-2").each(function (index, element) { new SplitType(element, { types: "lines" }) });
			// prettier-ignore
			parentID.find(".js-card__subheading--side-1").each(function (index, element) { new SplitType(element, { types: "lines" }) });
			// prettier-ignore
			parentID.find(".js-card__subheading--side-2").each(function (index, element) { new SplitType(element, { types: "lines" }) });
			// prettier-ignore
			parentID.find(".js-card__description").each(function (index, element) { new SplitType(element, { types: "lines" }) });

			setTimeout(function () {
				parentID.find(".line").wrap("<div class='line-wrapper'></div>");
			}, 0);
		}

		// cardAnimateScene;
		function cardAnimateScene(index, element) {
			let mainTimeLine;
			let begin = true;

			$(element)
				.mouseenter(function () {
					mainTimeLine = new TimelineMax({ paused: true, reversed: true });

					// prettier-ignore
					const picCover = $(element).find(".js-card__pic-cover");
					// prettier-ignore
					const subTitle1 = $(element).find(".js-card__subheading--side-1").find(".line-wrapper").find(".line");
					// prettier-ignore
					const subTitle2 = $(element).find(".js-card__subheading--side-2").find(".line-wrapper").find(".line");
					// prettier-ignore
					const title1 = $(element).find(".js-card__title--side-1").find(".line-wrapper").find(".line");
					// prettier-ignore
					const title2 = $(element).find(".js-card__title--side-2").find(".line-wrapper").find(".line");
					// prettier-ignore
					const side1 = $(element).find(".js-card__side--1");
					const side2 = $(element).find(".js-card__side--2");
					const shortImg = $(element).find(".js-card__short-img");
					// prettier-ignore
					const cardDescr = $(element).find(".js-card__description").find(".line-wrapper").find(".line");
					const cardBtn = $(element).find(".js-card__button");
					const cardBtnSvg = $(element).find(".js-card__button svg");
					const cardBtnSpan = $(element).find(".js-card__button span");

					mainTimeLine
						.fromTo(
							[...subTitle1, ...title1],
							{},
							{
								duration: 0.3,
								yPercent: 100,
								ease: Power4.easeIn,
								stagger: 0,
								delay: 0,
								onStart: () => {
									begin = false;
								},
								onComplete: () => {},
								onReverseComplete: () => {
									begin = false;
								},
							}
						)
						.fromTo(
							picCover,
							{},
							{
								duration: 0.3,
								yPercent: -100,
								ease: Power4.easeOut,
								delay: 0,
							}
						)
						.to(side1, {
							display: "none",
							zIndex: 5,
							duration: 0,
							delay: 0,
						})
						.to(side2, {
							display: "flex",
							zIndex: 6,
							duration: 0,
							delay: 0,
						})
						.fromTo(
							[...subTitle2],
							{
								yPercent: 100,
							},
							{
								duration: 0.51,
								yPercent: 0,
								ease: Power4.easeOut,
								stagger: 0,
								delay: 0,
							}
						)
						.fromTo(
							[...title2],
							{
								yPercent: 100,
							},
							{
								duration: 0.61,
								yPercent: 0,
								ease: Power4.easeOut,
								stagger: 0,
								delay: 0,
							},
							"-=0.51"
						)
						.fromTo(
							shortImg,
							{ opacity: 0, yPercent: 5 },
							{
								opacity: 1,
								duration: 0.51,
								yPercent: 0,
								ease: "power4",
								stagger: 0,
								delay: 0,
							},
							"-=0.51"
						)
						.fromTo(
							cardDescr,
							{ opacity: 0 },
							{
								opacity: 1,
								duration: 0.51,
								yPercent: 0,
								ease: "power4",
								stagger: 0,
								delay: 0,
							},
							"-=0.51"
						)
						.fromTo(
							cardBtn,
							{ opacity: 0 },
							{
								opacity: 1,
								duration: 0.51,
								yPercent: 0,
								ease: "power4",
								stagger: 0,
								delay: 0,
							},
							"-=0.51"
						)
						.fromTo(
							cardBtnSpan,
							{ xPercent: 5 },
							{
								duration: 0.25,
								xPercent: -7,
								ease: "power4",
								stagger: 0,
								delay: 0,
							},
							"-=0.25"
						)
						.fromTo(
							cardBtnSvg,
							{ opacity: 0, xPercent: -5 },
							{
								opacity: 1,
								duration: 0.25,
								xPercent: 0,
								ease: "power4",
								stagger: 0,
								delay: 0,
							},
							"-=0.25"
						);

					mainTimeLine.play();
				})
				.mouseleave(function () {
					mainTimeLine.reverse();
				});
		}

		$(".js-data-image-card").each(function (index, parent) {
			splitWrapText(parent);
			$(window).resize(function () {
				resetSplitUnWrapText(parent);
				splitWrapText(parent);
			});
			$(parent).find(".card").each(cardAnimateScene);

			$(parent)
				.find(".card__side--1")
				.each(function (index, element) {
					$(parent)
						.find(".card__side--2")
						.each(function (index, element2) {
							element2.setAttribute(
								"style",
								`height: ${element.clientHeight}px`
							);
						});
				});
		});
	};

	document.addEventListener("shopify:section:load", function () {
		if (!document.hidden) {
			cardAnimate();
		}
	});
	if (!document.hidden) {
		cardAnimate();
	}
})();

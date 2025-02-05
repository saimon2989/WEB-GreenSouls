(function () {
	const initTimer = () => {
		$(".js-countdown").each(function () {
			const userDate = $(this).data("date");
			const userTime = $(this).data("time");
			const completedCountdown = $(this).data("completed");
			const countdown = $(this).find(".newsletter__timer");
			const email = $(this).find(".newsletter__form");
			const countdownHeading = $(this).find(".countdown__heading");
			const daysEl = $(this).find(".date__days");
			const hoursEl = $(this).find(".date__hours");
			const minutesEl = $(this).find(".date__mins");
			const secondsEl = $(this).find(".date__secs");
			const section = $(this).parent(".shopify-section");
			// ----------------------------------------------------------------
			const countdownDate = new Date(`${userDate}T${userTime}`);
			const now = new Date();
			const distance = countdownDate.getTime() - now.getTime();
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);
			// ----------------------------------------------------------------
			if (distance < 0 && completedCountdown === "hide_section") {
				clearInterval(initTimer);
				section.stop(false, false).fadeOut(0);
			} else if (distance < 0 && completedCountdown === "show_text") {
				countdown.stop(false, false).fadeOut(0);
				countdownHeading.stop(false, false).fadeIn();
			} else {
				daysEl.html(days < 10 ? "0" + days : days);
				hoursEl.html(hours < 10 ? "0" + hours : hours);
				minutesEl.html(minutes < 10 ? "0" + minutes : minutes);
				secondsEl.html(seconds < 10 ? "0" + seconds : seconds);
			}
			// ----------------------------------------------------------------
		});
	};
	document.addEventListener("shopify:section:load", function () {
		if (!document.hidden) {
			setInterval(initTimer, 1000);
		}
	});
	if (!document.hidden) {
		setInterval(initTimer, 1000);
	}
})();

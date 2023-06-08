const swiper1 = new Swiper(".swiper-container-2", {
	loop: true,
	scrollbar: {
		el: ".swiper-scrollbar",
		hide: true,
	},
});

const swiper2 = new Swiper(".swiper-container-1", {
	loop: true,
	direction: "vertical",
	autoplay: {
		delay: 1000,
		disableOnInteraction: false,
	},
	noSwiping: true,
	noSwipingClass: ".swiper-container-1",
});

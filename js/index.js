$('.carousel').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	centerMode: true,
	nextArrow: '<div class="slick-next">></div>',
	prevArrow: '<div class="slick-prev"><</div>',
	responsive: [
		{
			breakpoint: 580,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
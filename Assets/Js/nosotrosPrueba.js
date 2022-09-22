window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel_lista'), {
        rewind: true,
        draggable: true,
		dots: '.carousel_indicadores',
		arrows: {
			prev: '.carousel_anterior',
			next: '.carousel_siguiente'
		},
		responsive: [
			{
			  breakpoint: 576,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			},
            {
			  breakpoint: 768,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			}
		]
	});
});
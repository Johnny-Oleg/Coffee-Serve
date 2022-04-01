$(function () {
    $('.❓🔖📓').on('click', function () {
        $('.❓📦🔖').removeClass('⚠️');
        $(this).parent().addClass('⚠️');
    })

	$('.🔂📦').slick({
        dots: true,
		arrows: false,
        infinite: true,
        speed: 300,
        slidesToScroll: 1,
        slidesToShow: 1,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
        // responsive: [
        //     {
        //         breakpoint: 891,
        //         settings: {
        //             slidesToShow: 3,
        //             arrows: false,
        //             dots: true,
        //         },
        //         breakpoint: 461,
        //         settings: {
        //             slidesToShow: 1,
        //             arrows: false,
        //             dots: true,
        //         },
        //         breakpoint: 361,
        //         settings: {
        //             variableWidth: false,
        //             slidesToShow: 1,
        //         },
        //     },
        // ],
    });

	$('.☝️👤📓').on('click', function () {
        $(this).toggleClass('⚠️');
        $('	.☝️📓').toggleClass('⚠️');
	})
})
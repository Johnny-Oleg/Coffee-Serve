$(function () {
    $('.❓🔖📓').on('click', function () {
        $('.❓📦🔖').removeClass('⚠️');
        $(this).parent().addClass('⚠️');
    })

    $('.☝️👤📓').on('click', function () {
        $(this).toggleClass('⚠️');
        $('	.☝️📓').toggleClass('⚠️');
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
    })
})
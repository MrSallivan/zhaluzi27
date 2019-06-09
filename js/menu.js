jQuery('document').ready(function () {
    $('#menu-button').click(function () { //делает выпадающее меню для карты
        $('#nav').slideToggle("fast");
        $('.addr').css('display', 'none');
        $('.phone').css('display', 'none');
    });
    $('#menu-button-geo').click(function () {
        $('#nav').css('display', 'none');
        $('.addr').slideToggle("fast");
        $('.phone').css('display', 'none');
    });
    $('.logo-map-karta').click(function () {
        $('#nav').css('display', 'none');
        $('.addr').slideToggle("fast");
        $('.phone').css('display', 'none');
    });
    $('#menu-button-phone').click(function () {
        $('#nav').css('display', 'none');
        $('.addr').css('display', 'none');
        $('.phone').slideToggle("fast");
    });
    $('li.anim1').click(function(){
        $('.sub-menu1').slideToggle("fast");
    });
    $('li.anim2').click(function () {
        $('.sub-menu2').slideToggle("fast");
     });
    $('li.anim3').click(function () {
        $('.sub-menu3').slideToggle("fast");
    });
    $('.popup-m').click(function () {
        $('#nav').css('display', 'none');
        $('.addr').css('display', 'none');
        $('.phone').css('display', 'none');
    });
});



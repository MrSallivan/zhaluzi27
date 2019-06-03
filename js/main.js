// Для сертификатов
$(function(){
$('.owl-carousel').owlCarousel({ 
	items: 1,
	margin: 0,
	autoHeight: true,
	nav: true
	})
});
//Для Popup окна
$(function(){
	$('.calc-button').on('click', function(){
		$('.overlay').show();
	});
	$('.popup-close').on('click', function(){
		$('.overlay').hide();
	});
	$('#button-zakaz').on('click', function(){
		$('.overlay2').show();
		$('.overlay').hide();
	});
	$('.button-zakaz').on('click', function () {
		$('.overlay2').show();
		$('.overlay-gal-vert_alum').hide();
		$('.overlay-gal-goriz_alum').hide(); 
		$('.overlay-gal-rulonki_lvt').hide();
		$('.overlay-gal-rulonki_mg').hide();
		$('.overlay-gal-rulonki_mini').hide();
		$('.overlay-gal-rulonki_uni').hide();
		$('.overlay-gal-rulonki_zebra').hide();
		$('.overlay-gal-vertikalki_tkan').hide();
		$('.overlay-gal-vertikalki_plast').hide();
		$('.overlay-gal-vertikalki_metal').hide();
	});
	$('.button-zakazz').on('click', function () {
		$('.overlayz').show();
		$('.overlay-gal-vert_alum').hide();
		$('.overlay-gal-goriz_alum').hide();
		$('.overlay-gal-rulonki_lvt').hide();
		$('.overlay-gal-rulonki_mg').hide();
		$('.overlay-gal-rulonki_mini').hide();
		$('.overlay-gal-rulonki_uni').hide();
		$('.overlay-gal-rulonki_zebra').hide();
		$('.overlay-gal-vertikalki_tkan').hide();
		$('.overlay-gal-vertikalki_plast').hide();
		$('.overlay-gal-vertikalki_metal').hide();
	});
	$('.popup-close-gal').on('click', function () { //закрытие всплывающего окна с типом жалюзи
		$('.overlay-gal-vert_alum').hide();
		$('.overlay-gal-goriz_alum').hide();
		$('.overlay-gal-goriz_derevo').hide();
		$('.overlay-gal-rulonki_lvt').hide();
		$('.overlay-gal-rulonki_mg').hide();
		$('.overlay-gal-rulonki_mini').hide();
		$('.overlay-gal-rulonki_uni').hide();
		$('.overlay-gal-rulonki_zebra').hide();
		$('.overlay-gal-vertikalki_tkan').hide();
		$('.overlay-gal-vertikalki_plast').hide();
		$('.overlay-gal-vertikalki_metal').hide();
	});
	$('.popup-close2').on('click', function () {
		$('.overlay2').hide();
		$('.overlayz').hide();
	});
	$('.cal-button').on('click', function () {
		$('.overlay3').show();
	});
	$('.logo-cal-button').on('click', function () {
		$('.overlay3').show();
	});
	$('.popup-close3').on('click', function () {
		$('.overlay3').hide();
	});
	$('.modal_bzamer').on('click', function () { //заказать бесплатный замер
		$('.overlay_bz').show();
	});
	$('.popup-close_bz').on('click', function () {
		$('.overlay_bz').hide();
	});
	
});

//Для расчета
$(function(){
		$('#button-calc').on('click', function(){
			var g_width = $('#width_gal').val();
			var g_height = $('#height_gal').val();
			var type_galuzi = $('select#type_gal').val();
			var rezalt = (((+g_width/1000)*(+g_height/1000))*(+type_galuzi))*2;
				$('.coast-gal').html(rezalt);
		});
});
//Для типов жалюзи Popup
$(function () {
	$('.sub-menu1 a[href="#1"], .gga').on('click', function () { //алюмишки
		$('.overlay-gal-goriz_alum').show();
	});
	$('.popup-close').on('click', function () {
		$('.overlay-gal-goriz_alum').hide();
	});
	$('.sub-menu1 a[href="#2"], .ggd').on('click', function () { //деревяшки горизонтальные
		$('.overlay-gal-goriz_derevo').show();
	});
	$('.popup-close').on('click', function () {
		$('.overlay-gal-goriz_derevo').hide();
	});
	$('.sub-menu2 a[href="#1"], .grl').on('click', function () { //рулонки LVT
		$('.overlay-gal-rulonki_lvt').show();
	});
	$('.popup-close').on('click', function () {
		$('.overlay-gal-rulonki_lvt').hide();
	});
	$('.sub-menu2 a[href="#2"], .grmg').on('click', function () { //рулонки MG
		$('.overlay-gal-rulonki_mg').show();
	});
	$('.popup-close').on('click', function () {
		$('.overlay-gal-rulonki_mg').hide();
	});
	$('.sub-menu2 a[href="#3"], .grmin').on('click', function () { //рулонки MINI
		$('.overlay-gal-rulonki_mini').show();
	});
	$('.popup-close').on('click', function () {
		$('.overlay-gal-rulonki_mini').hide();
	});
	$('.sub-menu2 a[href="#4"], .gru').on('click', function () { //рулонки UNI1/UNI2
		$('.overlay-gal-rulonki_uni').show();
	});
	$('.popup-close').on('click', function () {
		$('.overlay-gal-rulonki_uni').hide();
	});
	$('.sub-menu2 a[href="#5"], .grzebra').on('click', function () { //рулонки ZEBRA
		$('.overlay-gal-rulonki_zebra').show();
	});
	$('.popup-close').on('click', function () {
		$('.overlay-gal-rulonki_zebra').hide();
	});
	$('.sub-menu3 a[href="#1"], .gvt').on('click', function () { //вертикалки ткань
		$('.overlay-gal-vertikalki_tkan').show();
	});
	$('.popup-close').on('click', function () {
		$('.overlay-gal-vertikalki_tkan').hide();
	});
	$('.sub-menu3 a[href="#2"], .gvp').on('click', function () { //вертикалки пластик
		$('.overlay-gal-vertikalki_plast').show();
	});
	$('.popup-close').on('click', function () {
		$('.overlay-gal-vertikalki_plast').hide();
	});
	$('.sub-menu3 a[href="#3"], .gvm').on('click', function () { //вертикалки металл
		$('.overlay-gal-vertikalki_metal').show();
	});
	$('.popup-close').on('click', function () {
		$('.overlay-gal-vertikalki_metal').hide();
	});

});
//поворот стрелки в меню
$(function () {
	$('.anim1').click(function () {
		$('.anim_img1').toggleClass('rotate_img');
	});
	$('.anim2').click(function () {
		$('.anim_img2').toggleClass('rotate_img');
	});
	$('.anim3').click(function () {
		$('.anim_img3').toggleClass('rotate_img');
	});
});
	



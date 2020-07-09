//função do scrollsuave
$('.scrollSuave').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href');
		targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset
	}, 500);
});

//função para abrir a div de tecnologies

/*$(document).ready(function(){
	$('.hidden-div').hide(); //para esconder a div
	$('open-div').hover(function(){
		$(this).toggleClass('active').next().slideToggle('slow');
		return false;

	});
});*/

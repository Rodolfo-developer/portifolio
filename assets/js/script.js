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

//REVELAR DIV DESCRIPTION DE PROJECTS
$(function(){
	$('.open-div').click(function(){
		$(this).siblings('.hidden-div').slideToggle();

	});
});

/*function menuToggle() {
	document.querySelector('.open-div').addEventListener("click",function(){
		if (document.querySelector('.hidden-div').style.display == 'flex'){
			document.querySelector('.hidden-div').style.display = 'none';
		} else {
			document.querySelector('.hidden-div').style.display = 'flex';
		}
	})
}*/

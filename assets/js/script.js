//função do scrollsuave
$('.scrollSuave').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href');
		targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset
	}, 500);
});

// função para abrir a div de tecnologies

/*$(document).ready(function(){
	$('.open-div span').hide(); //para esconder a div
	$('open-div').click(function(){
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

//Efeito de maquina digitando
function typeWriter(elemento) {
	const textoArray = elemento.innerHTML.split('');
	elemento.innerHTML = '';
	textoArray.forEach((letra, i) =>{
		setTimeout(() => elemento.innerHTML += letra, 120 * i)
		
	});
}
const titulo = document.querySelector('.home-name h1');
typeWriter(titulo);


//esconder o span 

/*window.onload = function(){
		document.querySelector("#teste").addEventListener("click", function(){
			if(document.querySelector(".open-div span").style.display == 'none') {
				document.querySelector(".open-div span").style.display = 'flex';
			} else {
				document.querySelector(".open-div span").style.display = 'none';
			}
		});
	};	
*/

/*$('.open-div').click(
	function() {
		$(this).css({'background-color' : '#000'})
	}
);*/

//Função para abrir o menu mobile 

function menuToggle() {
	document.querySelector('.menuMobile').addEventListener("click",function(){
		if (document.querySelector('.menu-area').style.display == 'flex'){
			document.querySelector('.menu-area').style.display = 'none';
			document.querySelector('.home').style = 'padding-left: 0px';
			document.querySelector('.home-name').style = 'max-width: 500px';
		} else {
			document.querySelector('.menu-area').style.display = 'flex';
			document.querySelector('.home').style = 'padding-left: 200px';
			document.querySelector('.home-name').style = 'max-width: 300px';
		}
	})
}
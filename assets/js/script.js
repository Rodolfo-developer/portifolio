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

let menuOpen = document.querySelector('.menuMobile')

menuOpen.onclick = function(){
	if (document.querySelector('.menu-area').style.right == '0px'){

 			document.querySelector('.menu-area').style.right = '-200px';	
 			document.querySelector('.menuMobile').style = 'padding-right: 0px';
		
 		} else {

 			document.querySelector('.menu-area').style  = 'right: 0px';			
 			document.querySelector('.menuMobile').style = 'right: 200px; margin-top: 0px; margin-right: 0px; opacity: 50%; transition: .5s';
			
 		}
}


//função para fechar o menu mobile ao clicar no nav 

let menuClose = document.querySelector('.menu ul')
menuClose.onclick = function (){
	if (document.querySelector('.menu-area').style.left == '0px'|| max-width <= 800){

 			document.querySelector('.menu-area').style.left = '-200px';	
 			document.querySelector('.menuMobile').style = 'padding-right: 0px';
		
 		}else {
			
 						
 			document.querySelector('.menuMobile').style = 'left: 200px; margin-top: 0px; margin-left: 0px;';
			
 		}
}


//função para fechar o menu ao clicar no container

// let teste = document.querySelector('.container')
// teste.onclick = function(){
// 	if (document.querySelector('.menu-area').style.left == '0px') {
// 			document.querySelector('.menu-area').style.left = '-200px';	
//  			document.querySelector('.menuMobile').style = 'padding-right: 0px';
		
//  		} else {
			
//  			document.querySelector('.menu-area').style  = 'left: -200px';			
 			
			
//  		}
	
// }

// 
//função para esconder o menu mobile quando descer a tela

// var lastScrollTop = 0;
// $(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (st > lastScrollTop || st === 100){
//       $('.menuMobile').slideUp("fast");
//    } else {
//       $('.menuMobile').slideDown("fast");
//    }
//    lastScrollTop = st;
// });


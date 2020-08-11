//função do scrollsuave
$('.scrollSuave').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href');
		targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset
	}, 500);
});


//REVELAR DIV DESCRIPTION DE PROJECTS
$(function(){
	$('.open-div').click(function(){
		$(this).siblings('.hidden-div').slideToggle();

	});
});


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






//Função para abrir o menu mobile 

let menuOpen = document.querySelector('#check-one')

menuOpen.onclick = function(){
	if (document.querySelector('.menu-area').style.right == '0px'){

 			document.querySelector('.menu-area').style.right = '-200px';	
 			document.querySelector('.menuMobile').style = 'padding-right: 0px; transition: .5s';
			
 		} else {

 			document.querySelector('.menu-area').style  = 'right: 0px';			
 			document.querySelector('.menuMobile').style = 'margin-top: 0px; right: 168px; transition: .3s';
			document.querySelector('.menuMobile span').style = '';
 		}
}


//função para fechar o menu mobile ao clicar no nav 

let menuClose = document.querySelector('.menu ul')

menuClose.onclick = function (){
	if (document.querySelector('.menu-area').style.right == '0px' || width <= 800){

 			document.querySelector('.menu-area').style.right = '-200px';	
 			document.querySelector('.menuMobile').style = 'padding-right: 0px; transition: all .5s';
 			document.querySelector('#check').checked = false;
 		}else {
			
 			document.querySelector('.menu-area').style  = 'right: 0px';		
 			document.querySelector('.menuMobile').style = 'right: 0px; margin-top: 0px; margin-left: 0px;transition: all .5s';
			
 		}
}

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


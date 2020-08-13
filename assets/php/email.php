<?php

if(isset($_POST['email']) && !empty($_POST['email'])){

$nome = addslashes($_POST['name'])
$email = addslashes($_POST['email'])
$mensagem = addslashes($_POST['message'])

$to = "rodolforj13@gmail.com";
$subject = "Contato - Portifolio";
$body = "Nome: ".$nome. "\r\n".
		"Email: ".$email. "\r\n".
		"Mensagem: ".$mensagem
$header = "From:contato@rodolfoesteves-developer.com"."\r\n"
			."Reply-To".$email"\r\n"
			."X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)){
	echo ("Email enviado com sucesso!");
}else{
	echo ("O Email não pode ser enviado");
}


}
?>
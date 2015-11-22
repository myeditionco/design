<?php 
$layout = 'views/main/layout.phtml';

if(isset($_GET['v'])){
	$view = $_GET['v'];
	if($view == "elements"){
		if(isset($_GET['e'])){
			$element = $_GET['e'];
			$url = "views/".$view.'/'.$element.'/index.phtml';
		}
		else{
			$url = "views/".$view.'/index.phtml';
		}
	}
	elseif($view == "about"){
		$url = "views/about/index.phtml";
	}
	else{
		$url = "views/errors/e404.phtml";
	}
}
else{
	$url = "views/home/index.phtml";
}

ob_start();
include_once $url;
$content = ob_get_clean();

include $layout; ?>
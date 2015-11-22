<?php 
$layout = 'views/main/layout.phtml';

if(isset($_GET['v'])){
	$view = $_GET['v'];
	if($view == "elements"){
		if(isset($_GET['e'])){
			$element = $_GET['e'];
			$url = "views/".$view.'/'.$element.'/index.php';
		}
		else{
			$url = "views/".$view.'/index.php';
		}
	}
	elseif($view == "about"){
		$url = "views/about/index.php";
	}
	else{
		$url = "views/errors/e404.php";
	}
}
else{
	$url = "views/home/index.php";
}

ob_start();
include_once $url;
$content = ob_get_clean();

include $layout; ?>
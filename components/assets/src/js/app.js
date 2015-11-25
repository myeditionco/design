$(document).ready(function(){
	function setCookie(nom, valeur, expire, chemin, domaine, securite){
    document.cookie = nom + ' = ' + escape(valeur) + '  ' +
               ((expire == undefined) ? '' : ('; expires = ' + expire.toGMTString())) +
               ((chemin == undefined) ? '' : ('; path = ' + chemin)) +
               ((domaine == undefined) ? '' : ('; domain = ' + domaine)) +
               ((securite == true) ? '; secure' : '');
	}
	var dtExpire = new Date();
	dtExpire.setTime(dtExpire.getTime() + 259200 * 1000);
	var delete_cookie = function(name) {
	    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	};
	function checkUicookie(){
		if (document.cookie.indexOf("myed-uicolor-cookie") >= 0) {
		  //alert("hello again");
		  $('#toggle-dark').attr('checked', true);
			$('body').addClass('light');
			$('code[class*="language-"], pre[class*="language-"]').addClass('light');
			$('#toggle-dark').parent().addClass('white');
			$('.container').addClass('white');
		}
	}
	$('#toggle-dark').change(function(){
		if(document.cookie.indexOf("myed-uicolor-cookie") >= 0) {
			delete_cookie("myed-uicolor-cookie");
			$('body').removeClass('light');
			$('code[class*="language-"], pre[class*="language-"]').removeClass('light');
			$('#toggle-dark').parent().removeClass('white');
			$('.container').removeClass('white');
			console.log("no");
		}
		else{
			console.log("yo");
			setCookie("myed-uicolor-cookie", "1", dtExpire, "/");
			$('body').addClass('light');
			$('code[class*="language-"], pre[class*="language-"]').addClass('light');
			$('#toggle-dark').parent().addClass('white');
			$('.container').addClass('white');
		}
	});
	checkUicookie();
});


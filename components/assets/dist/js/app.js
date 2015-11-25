(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXHRmdW5jdGlvbiBzZXRDb29raWUobm9tLCB2YWxldXIsIGV4cGlyZSwgY2hlbWluLCBkb21haW5lLCBzZWN1cml0ZSl7XG4gICAgZG9jdW1lbnQuY29va2llID0gbm9tICsgJyA9ICcgKyBlc2NhcGUodmFsZXVyKSArICcgICcgK1xuICAgICAgICAgICAgICAgKChleHBpcmUgPT0gdW5kZWZpbmVkKSA/ICcnIDogKCc7IGV4cGlyZXMgPSAnICsgZXhwaXJlLnRvR01UU3RyaW5nKCkpKSArXG4gICAgICAgICAgICAgICAoKGNoZW1pbiA9PSB1bmRlZmluZWQpID8gJycgOiAoJzsgcGF0aCA9ICcgKyBjaGVtaW4pKSArXG4gICAgICAgICAgICAgICAoKGRvbWFpbmUgPT0gdW5kZWZpbmVkKSA/ICcnIDogKCc7IGRvbWFpbiA9ICcgKyBkb21haW5lKSkgK1xuICAgICAgICAgICAgICAgKChzZWN1cml0ZSA9PSB0cnVlKSA/ICc7IHNlY3VyZScgOiAnJyk7XG5cdH1cblx0dmFyIGR0RXhwaXJlID0gbmV3IERhdGUoKTtcblx0ZHRFeHBpcmUuc2V0VGltZShkdEV4cGlyZS5nZXRUaW1lKCkgKyAyNTkyMDAgKiAxMDAwKTtcblx0dmFyIGRlbGV0ZV9jb29raWUgPSBmdW5jdGlvbihuYW1lKSB7XG5cdCAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz07ZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVDsnO1xuXHR9O1xuXHRmdW5jdGlvbiBjaGVja1VpY29va2llKCl7XG5cdFx0aWYgKGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKFwibXllZC11aWNvbG9yLWNvb2tpZVwiKSA+PSAwKSB7XG5cdFx0ICAvL2FsZXJ0KFwiaGVsbG8gYWdhaW5cIik7XG5cdFx0ICAkKCcjdG9nZ2xlLWRhcmsnKS5hdHRyKCdjaGVja2VkJywgdHJ1ZSk7XG5cdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ2xpZ2h0Jyk7XG5cdFx0XHQkKCdjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSwgcHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXScpLmFkZENsYXNzKCdsaWdodCcpO1xuXHRcdFx0JCgnI3RvZ2dsZS1kYXJrJykucGFyZW50KCkuYWRkQ2xhc3MoJ3doaXRlJyk7XG5cdFx0XHQkKCcuY29udGFpbmVyJykuYWRkQ2xhc3MoJ3doaXRlJyk7XG5cdFx0fVxuXHR9XG5cdCQoJyN0b2dnbGUtZGFyaycpLmNoYW5nZShmdW5jdGlvbigpe1xuXHRcdGlmKGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKFwibXllZC11aWNvbG9yLWNvb2tpZVwiKSA+PSAwKSB7XG5cdFx0XHRkZWxldGVfY29va2llKFwibXllZC11aWNvbG9yLWNvb2tpZVwiKTtcblx0XHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbGlnaHQnKTtcblx0XHRcdCQoJ2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLCBwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdJykucmVtb3ZlQ2xhc3MoJ2xpZ2h0Jyk7XG5cdFx0XHQkKCcjdG9nZ2xlLWRhcmsnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnd2hpdGUnKTtcblx0XHRcdCQoJy5jb250YWluZXInKS5yZW1vdmVDbGFzcygnd2hpdGUnKTtcblx0XHRcdGNvbnNvbGUubG9nKFwibm9cIik7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHRjb25zb2xlLmxvZyhcInlvXCIpO1xuXHRcdFx0c2V0Q29va2llKFwibXllZC11aWNvbG9yLWNvb2tpZVwiLCBcIjFcIiwgZHRFeHBpcmUsIFwiL1wiKTtcblx0XHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnbGlnaHQnKTtcblx0XHRcdCQoJ2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLCBwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdJykuYWRkQ2xhc3MoJ2xpZ2h0Jyk7XG5cdFx0XHQkKCcjdG9nZ2xlLWRhcmsnKS5wYXJlbnQoKS5hZGRDbGFzcygnd2hpdGUnKTtcblx0XHRcdCQoJy5jb250YWluZXInKS5hZGRDbGFzcygnd2hpdGUnKTtcblx0XHR9XG5cdH0pO1xuXHRjaGVja1VpY29va2llKCk7XG59KTtcblxuIl19

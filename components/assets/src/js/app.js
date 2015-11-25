$(document).ready(function(){
	$('#toggle-dark').change(function(){
		$('body').toggleClass('light');
		$(this).parent().toggleClass('white');
		$('.container').toggleClass('white');
	});
});


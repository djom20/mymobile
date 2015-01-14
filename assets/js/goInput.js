$(function(){
	splash_screen();
});

function splash_screen(){
	setTimeout(function(){
		$('.splash_screen').fadeOut(2000, function(){
			$('.login').fadeIn(1000);
		});
	}, 3000);
}
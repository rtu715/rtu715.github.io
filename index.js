$(document).ready(function() {

/*$('#bio').on('click',function(){
	console.log('this is a message for debugging');
	$(this).html('wow lol');
}); */

/*$('.wechat').on('mouseover',function(){
	console.log('this is for debugging 2')
	$(this).html("sorry it's gone now");
	$('body').append('<img src = "https://timedotcom.files.wordpress.com/2016/11/evil-kermit-the-frog-meme-dark-side.jpg?quality=85&w=1012">' )
});*/

$('p').on('click', function(){
	$(this).toggleClass('cooltext');
});


/*$('h1').click(function(){
	console.log('this is for fade debugging')
	$('body').hide()
	$('body').fadeIn(10000,function(){

	}); 

}); */

$('h1').on('mouseover',function(){
	console.log('this is for fade debugging')
	$('body').animate({
		'opacity': '1',
	},80000);


});

});


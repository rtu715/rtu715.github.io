$(document).ready(function(){

	console.log($('p'));
	$('.inline-code').html('lol');


	/* this appends the text to h1 after every click */ 

	$('#mybutton').on('click', function() {
		console.log('this is a message for debugging');
	  $('h1').append('Nice Meme ');
	  $('<img src = "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Columbia_Lions_Logo.svg/1111px-Columbia_Lions_Logo.svg.png">').appendTo('body');

	 });

	$('h1').on('mouseover', function() {
  $(this).animate({ "font-size" : "40px" }, 400)
  .animate({ "letter-spacing" : "10px" }, 1000);
});
});

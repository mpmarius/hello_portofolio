var $hello = $('.hello');

var greetings = ['Hallo!', 'Ola!', 'Namaste!', 'Guten Tag!', 'Bonjour!', 'Jo napot!', 'Ciao!', 'Kon-nichiwa!', 'Hey!', 'Hello!'];
var language = 0;
var position = 0;




function type(){
	var word = greetings[language];
	var length = word.length;
	var delay = Math.floor((Math.random()*100)+100);
	console.log(delay);
	if (position <= length){
		var partial = word.slice(0, position++);
		$hello.text(partial);
		console.log(partial);
		setTimeout('type()',delay);
	}else {
		setTimeout('erase()',1000);
	}
};


function erase(){
	var word = greetings[language];

	if (position > 0){
		var partial = word.slice(0, position--);
		$hello.text(partial);
		setTimeout('erase()', 80);
		console.log(partial + ' ' + position);
	}else {
		(language < greetings.length - 1) ? language++ : language = 0;
		position=0;
		type();
	}
}




type();


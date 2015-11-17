/* CURRENTLY IN: javascript/main.js */

(function(){ // protect da scope

	function digitalWatch(){
		var time = new Date();
		console.log(time);
		var hours = time.getHours();
		console.log(hours,  'hours');
		var minutes = time.getMinutes();
		console.log(minutes, 'minutes');
		var seconds = time.getSeconds();
		console.log(seconds, 'seconds');

		// This gets a "handle" to the clock div in our HTML
   		var clockDiv = document.getElementsByClassName("clock");

   		clockDiv.innerText = hours + ":" + minutes + ":" + seconds;

	}

	digitalWatch();





})();
/* CURRENTLY IN: javascript/main.js */

(function(){ // protect da scope

	function digitalWatch(){
		var time = new Date()
			, hours = time.getHours()
			, minutes = time.getMinutes()
			, seconds = time.getSeconds();
		console.log(time, 'time');
		console.log(hours, 'hour');
		console.log(minutes, 'minutes');
		console.log(seconds, 'seconds');

		// If the seconds digit is less than ten                    
		if (seconds < 10) {
    		seconds = "0" + seconds;
		}
		else if( minutes < 10){
			minutes = "0" + minutes;
		}

		// 12 hours Clock
		var meridiem = 'AM';
		// Convert from 24 hour to 12 hour format
		// and keep track of the meridiem.
		if (hours > 12) {
		    hours = hours - 12;
		    meridiem = "PM";
		    console.log(hours, "Converted Hour");
		}
		else if (hours === 0) {
		// 0 AM and 0 PM should read as 12	
		    hours = 12;    
		}

    	var clockDiv = document.getElementById('clock');
    	clockDiv.innerText = hours + ":" + minutes + ":" + seconds + ' ' + meridiem;
	    console.log(clockDiv);	
	}

	digitalWatch();

	// This makes our clock 'tick' by repeatedly
	// running the displayTime function every second.
	setInterval( digitalWatch, 1000);

})();
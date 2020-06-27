"use strict"

// Global var
var counter = 0;
//var secondBlock = document.getElementById("sec");
//var minuteBlock = document.getElementById("min");
//var hourBlock = document.getElementById("hr");
var second = 0;
var flag = true;


const timer = ()=> {
		setInterval(setTime,1000);
}

const setTime = ()=> {
	if (flag == true) {
		clearInterval(setTime);
	}else {
	++second;
		document.getElementById("sec").innerHTML = pub(second%60);	
		document.getElementById("min").innerHTML = pub(parseInt(second / 60));
		document.getElementById("hr").innerHTML = pub(parseInt(second/3600));
	}
}
const pub = (val)=> {
	var valString = val + "";
	if (valString.length < 2) {
		return "0"+valString;
	} else {
		return valString;
	}
}

// Start the timer
const startStop = ()=> {
	 if (document.getElementById("startStop").innerHTML == "Start") {
	 	document.getElementById("startStop").innerHTML = "Stop";
	 	flag = false;
	 	timer();

	 } else {
	 	flag = true;
	 	document.getElementById("startStop").innerHTML = "Start";
	 	timer();
	 }
}


// To-Be continued
const clearAll = ()=> {
	second = 0;
	counter = 0;
	clearInterval(setTime);
	document.getElementById("startStop").innerHTML = "Start";
	flag = true;
}



// Problem solving count
const add = ()=> {
	counter++;
	document.getElementById("solved").innerHTML = counter;
}

// Decresing the count value for accidentaly pressing
const minus = ()=> {
	counter--;
	document.getElementById("solved").innerHTML = counter;
}

// Clear the count value
const cleared = ()=> {
	counter = 0; // reseting the counter
	document.getElementById("solved").innerHTML = counter;
}
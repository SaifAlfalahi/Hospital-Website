var too;

function init() 
{
  too = document.getElementById("here");

  registerEventListener ( document.getElementById("name"),          "Enter your name in this box.");  //When user click on name 
  registerEventListener ( document.getElementById("email"),          "Enter your e-mail address.");		// " on email
  registerEventListener ( document.getElementById("message"),        "Enter your Message here");			// " on message
} // end function init

//function to help register events
function registerEventListener(object, message) 
{
  object.addEventListener("focus", 	function() { too. innerHTML = message; },   	false);			//When user click "aka Focus"
  object.addEventListener("blur", 	function() { too. innerHTML = ""; },  		false);				
}

window.addEventListener("load", init, false);	// window, load in init



//Calculate time

var displayElement = document.getElementById("here2");

// Function to display the time
function displayTime() {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var amorpm = " AM";

    if (hour > 12) {
        hour -= 12;
        amorpm = " PM";
    } else if (hour === 0) {
        hour = 12;
    }

    // Formatting minutes to two digits
    min = min < 10 ? '0' + min : min;

    // Update the display element with the formatted time
    displayElement.innerHTML = "Time you entered this page: " + hour + ':' + min + amorpm;
}

// Call the function once to display the time
displayTime();
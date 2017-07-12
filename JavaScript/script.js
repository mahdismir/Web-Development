/* Script.js */
// custom function
function calculateTip() {
    
    // store the data of input
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;
    
    // validation
    if(billAmount === "" || serviceQuality == 0) {
        window.alert("please fill out the form");
        return; 
    }
    
    // Check to see if the input is empty or less than or equal to 1
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }
    
    // the math
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round (total * 100) / 100;
    total = total.toFixed(2);
    
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

// hide the tip amound on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking the button call our custom function
document.getElementById("calculate").onclick = function() { calculateTip(); };
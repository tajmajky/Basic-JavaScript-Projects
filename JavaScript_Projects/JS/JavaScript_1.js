//Switch Statement

function colorFunc() {
    var ColorOutput;
    var Colors= document.getElementById("ColorInput").value;
    var ColString= " is a great color!";
    switch(Colors) {
        case "pink":
            ColorOutput = "pink" + ColString;
        break;
        case "yellow":
            ColorOutput = "yellow" + ColString;
        break;
        case "black":
            ColorOutput = "black" + ColString;
        break;
        case "green":
            ColorOutput = "green" + ColString;
        break;
        case "brown":
            ColorOutput = "brown" + ColString;
        break;
        case "orange":
            ColorOutput = "orange" + ColString;
        break;
        default:
            ColorOutput = "Please enter a color exactly written on the above list.";

    }
    document.getElementById("Output").innerHTML = ColorOutput;
}



//assign 57
//document.getElementsByClassName() method

function helloWorldFunc() {
var A=document.getElementsByClassName("Click");
A[0].innerHTML = "The text has changed."; //chose the 0 index to make changes

}


//gradient filling canvas

var c = document.getElementById("idName");
var ctx = c.getContext("2d");

var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 400);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(0,0,500,250);


//circle in canvas

var c = document.getElementById("graphic");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

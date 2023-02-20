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
//while loop

function countToTen(){
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("loop").innerHTML = Digit;
}



//for loop

var Instruments=["Guitar", "Piano", "Bass", "Violin", "Trumpet"];
var Content = "";
var y;
function forLoop() {
    for (y = 0; y <Instruments.length; y++) {
    Content += Instruments[y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = Content;
}


// array

function catPic(){
    var catPicture = [];
        catPicture[0] = "sleeping";
        catPicture[1] = "eating";
        catPicture[2] = "purring";
        catPicture[3] = "hunting";
   document.getElementById("cat").innerHTML = "In this picture the cat is " + catPicture[2] + ".";
}

// const keyword

function constFunc(){
    const Musical_Inst = { type: "guitar", brand:"Fender", color:"black"};
    Musical_Inst.color = "blue";
    Musical_Inst.price = "900$";
        
   document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Inst.type + " was " + Musical_Inst.price + ".";
}


// let -  let keyword cannot be accessed outside of the block

var X = 10;
document.write(X);
    {
        let X = 33;
        document.write("<br>" + X);

    }
document.write("<br>" + X);



//object assignment 55
function callCar(){
let car = { // creating car object
    make: "Vauxhall",
    model: "Corsa",
    year: "2018",
    color: "white",
    description: function() { // here the description of the car is a function
        return "The car is a " + this.year + " " + this.color + " " + this.make +  " " + this.model + ".";
    }
};
document.getElementById("carObject").innerHTML = car.description();
}



function getReceipt() {
    /*this initializes our string so it can get passed from 
    function to function, growing line by line into a full receipt */

    var text1 = "<h3> You ordered:</h3>"; //a string that will be used later to display the text "You ordered:" on the page
    var runningTotal = 0; //variable will be used to keep track of the total cost of the order
    var sizeTotal = 0; //variable will be used to keep track of the total cost of the pizza size
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) { //a for loop that will iterate over each element in the sizeArray array. The loop initializes a variable called i to 0, and will continue as long as i is less than the length of the sizeArray array.
        if (sizeArray[i].checked) { //checks if the current element in the sizeArray array is checked (i.e. selected)
            //If it is, then the next line assigns the value of the checked element to a variable called selectedSize.
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>"; //concatenates the value of selectedSize with the text1 variable, 
            //This will display the selected pizza size on the page, in addition to the text "You ordered:".
        }
    }//below are the prices of each size:
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal:   $"+runningTotal+".00");
    //these var will get passed on to each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else { 
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};
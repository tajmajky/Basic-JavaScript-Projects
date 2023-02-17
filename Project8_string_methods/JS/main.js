//Module 3 JS
//String methods


//concat
function full_sentence(){
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence. ";
    var whole_sentence = part1.concat(part2, part3, part4);document.getElementById("Concatenate").innerHTML = whole_sentence;

    
}
//assignment 45
//slice
function sliceMethod(){
    var Sentence = "All work and no play makes Jhonny a dull boy. ";
    var Section = Sentence.slice(27,33); //The numbers indicate which characters in your string will be cut out and displayed. 
    //This code would display “Johnny”.
    document.getElementById("Slice").innerHTML = Section;

    }


// Challenge # 10 
// toUpperCase() method
function myFunction() { // <-- converts all text to upper case
    let text = document.getElementById("upper").innerHTML;
    document.getElementById("upper").innerHTML =
    text.toUpperCase();
  }


// search() method - searches based on certain criteria
function mySearchFunction() {
    let text = "Please locate where 'locate' occurs!"; //returns the position of `locate`in this line
    document.getElementById("demo").innerHTML = text.search("locate");
    }

// number method - toString() - makes a string from a number
function stringMethod() {
    var x = 182;
    document.getElementById("NumbersToString").innerHTML = x.toString();
    }
    


// number method - toPrecision() - gives result to a precise number place
function precisionMethod() {
    var y = 182.1564897489156;
    document.getElementById("Precision").innerHTML = y.toPrecision(10); //gives result to 10 number places
    }

// toFixed() method - 
function fixFunction() {
    let num = 182.1;
    let z = num.toFixed(10); //gives result to 10 number places
    document.getElementById("fixme").innerHTML = z; 
    }

// valueOf() method - 
function valueFunction() {
    let text = "Is there a value added?";//valueOf() returns the primitive value of a string:
    let result = text.valueOf();

    document.getElementById("noValueAdded").innerHTML = result;

    }
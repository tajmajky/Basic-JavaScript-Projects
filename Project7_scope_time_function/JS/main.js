//Assignment 39 
//Global vs Local variables 


//GLOBAL VAR - Var is outside function
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}

function Add_numbers_2(){
    document.write(X + 100+"<br>");
}

Add_numbers_1();
Add_numbers_2(); 

//LOCAL VAR - Var is inside function

function Add_numbers_3() {
    var x = 10; //var x is in function so calculation is done
    document.write(20 + x + "<br>");
}

function Add_numbers_4(){ //var x is NOT in function so calculation is NOT done
    console.log(x + 100);
}

Add_numbers_3();
Add_numbers_4();

function get_Date() {
    if (new Date().getHours() > 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}



//My Own If Statement

function Restriction() {
    var age = document.getElementById("Age").value;
    if (age >= 18) {
        document.getElementById("Enter").innerHTML = "You can attend this event";
    }
}

//Else statement
function Age2_Function() {
    let Vote;
    let Age2 = document.getElementById("Age2").value;
    if(Age2 >= 18) {
        Vote ="You are old enough to vote!";
    }
    else {
        Vote="You are not old enough to  vote!";
    }  
    document.getElementById("How_old_are_you?").innerHTML = Vote; 
}

//My Own If-Else Statement
function days_Function() {
    let howMany;
    let days = document.getElementById("days").value;
    if(days == 31) {
        howMany ="That is correct! Well done!";
    }
    else {
        howMany="Wrong answer. Try again!";
    }  
    document.getElementById("january").innerHTML = howMany; 
}

//Else If Statements
function Time_function() {
    var Time= new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0) {
        Reply = "It is morning time";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
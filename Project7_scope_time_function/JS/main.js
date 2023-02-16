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


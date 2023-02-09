//adding  two numbers
function myMath() {
  var a = parseInt(document.getElementById("alpha").value);
  var b = parseInt(document.getElementById("beta").value);

  var result= a + b;
  document.getElementById("Math").innerHTML=result;
}

  //subtracting  two numbers
function mySubtraction() {
  var a = parseInt(document.getElementById("gamma").value);
  var b = parseInt(document.getElementById("delta").value);

  var result= a - b;
  document.getElementById("Subtract").innerHTML=result;
}

//multiplying  two numbers
function myMultiplication() {
  var a = parseInt(document.getElementById("omega").value);
  var b = parseInt(document.getElementById("sampi").value);

  var result= a * b;
  document.getElementById("Multiplication").innerHTML=result;
}

  //dividing  two numbers
  function myDivision() {
  var a = parseInt(document.getElementById("omicron").value);
  var b = parseInt(document.getElementById("pi").value);

  var result= a / b;
  document.getElementById("Division").innerHTML=result;
}

  //multiple operation
  function myMultipleOp() {
  var a = parseInt(document.getElementById("x").value);
  var b = parseInt(document.getElementById("y").value);
  var c = parseInt(document.getElementById("z").value);
  var d = parseInt(document.getElementById("e").value);

  var result= (a + b) * c - d;
  document.getElementById("MultipleOp").innerHTML=result;
  }

//whats the remainder
function myModulo() {
  var a = parseInt(document.getElementById("xi").value);
  var b = parseInt(document.getElementById("phi").value);

  var result= a % b;
  document.getElementById("Modulo").innerHTML=result;
}

//negation - There is a unary operator called a “negation operator.”“Unary” means “having, made up of, or acting on one component, item or element”
function myNegation() {
  var a = parseInt(document.getElementById("n").value);

  var result= -a;
  document.getElementById("Negation").innerHTML=result;
}

  //Increment and Decrement Operators: An increment is an addition or increase to something. “To increment” means to increase. The increment operator in JavaScript is written as ++ and counts one step up.
  function myIncrement() {
  var a = document.getElementById("m").value;
  a++;
  var result= a;
  document.getElementById("Increment").innerHTML=result;
}

  //Increment and Decrement Operators: An increment is an addition or increase to something. “To increment” means to increase. The increment operator in JavaScript is written as ++ and counts one step up.
  function myDecrement() {
  var a = document.getElementById("o").value;
  a--;
  document.getElementById("Decrement").innerHTML = a;
}       
    
    
//Randomization. if display between 0 and 1 just write(Math.random()) if between 0 and 100, multiply by 100 
function myRandom() {

  document.getElementById("l").value = Math.random()*100;    
}  

    
//Math.ceil(): Math.ceil(x) returns the value of x rounded up to its nearest integer:
function myCeil() {
  var a = document.getElementById("k").value;
  a  = Math.ceil(a);

  document.getElementById("ceil").innerHTML = a;
}  


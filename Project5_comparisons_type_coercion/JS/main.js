//Project5_comparisons_type_coercion

//typeof operator
function myDictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:"5",
        Sound:"Bark"
    };

    document.getElementById("Dictionary").innerHTML=typeof 5;
  }


//NaN
function myFunction() {
	document.getElementById("Test").innerHTML= 0/0;
}

//true
function myFunction1() {
	document.getElementById("Testing").innerHTML= isNaN('Not a Number!');
}


//false
function myFunction2() {
	document.getElementById("Tested").innerHTML= isNaN(`007`);
}

//Infinity - To display “infinity” (higher than our maximum floating point number), 
//we would write any number larger than 1.7976931348623157E308.
function myFunction3() {
	document.getElementById("Infinity").innerHTML= 2E310;
}

//-Infinity-To display -Infinity, 
//we would write any negative number that is -1.7976931348623157E308 or lower
function myFunction4() {
	document.getElementById("MinusInfinity").innerHTML= -3E310;
}

//Boolean - true
function myFunction5() {
	document.getElementById("x").innerHTML= (10>2);
		
}


//Boolean - false
function myFunction6() {
	document.getElementById("y").innerHTML= (10<2);
		
}
	
//console
console.log(2+2); 


//type coercion: in JS you can put multiple different type together, in other lgs it is an error
function myFunction7() {
	document.getElementById("z").innerHTML= ("10" + 5);//<- these 2 will be connected as 105
}

//challenge 7 - boolean in console
console.log(10<2);
console.log(10>2);
	

//the "==" symbol is an instruction to check 
//whether the data on the left side of the symbol is equal to the data on the right side
function myFunction8() {
	document.getElementById("equal").innerHTML= (10 + 5 == 15);
}
	
function myFunction9() {
	document.getElementById("notequal").innerHTML= (10 + 5 == 10);
}
	
//This "===" symbol is an instruction to check whether the data on the left side of the symbol 
//is equal in VALUE & TYPE to the data on the right side 



//ASSIGNMENT #32

//Return true by ensuring to match the data type and value:
function myFunction10() {
	X = 10;
	Y = 10;
	document.getElementById("alpha").innerHTML= (X === Y);
}

//Return false by writing a different data type and different value.
function myFunction11() {
	X = 10;
	Y = "yes";
	document.getElementById("beta").innerHTML= (X === Y);
}


//Return false by writing a different data type but the same value for both.
function myFunction12() {
	X = 10;
	Y = "10";
	document.getElementById("gamma").innerHTML= (X === Y);
}


//Return false by writing the same data type but a different value for both.
function myFunction13() {
	X = 10;
	Y = 9;
	document.getElementById("delta").innerHTML= (X === Y);
}


//AND.
function myFunction14() {
	X = 10;
	Y = 9;
	document.getElementById("omicron").innerHTML= ((X > 5) && (Y > 3));
}

//OR
function myFunction15() {
	X = 10;
	Y = 9;
	document.getElementById("xi").innerHTML= ((X > 5) || (Y > 3));
}


//NOT
function myFunction16() {
	X = 10;
	Y = 9;
	document.getElementById("not").innerHTML= !(X > Y);
}
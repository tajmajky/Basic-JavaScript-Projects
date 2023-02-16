//JS Assignment 35

//Ternary Operators:
//It helps to think of the ternary operator 
//as a shorthand way or writing an if-else statement.
//Syntax: condition ? value_if_true : value_if_false

function Ride_Function() {
var Height, Can_ride;
Height = document.getElementById("Height").value;
    //The first is a comparison argument,
    //The second is the result upon a true comparison,
    //The third is the result upon a false comparison:
Can_ride = (Height < 52) ? "You are too short " : "You are tall enough ";
document.getElementById("Ride").innerHTML = Can_ride + "to ride.";

}

function Vote_Function() {
    var Age, Can_vote; //declaring 2 var without value
    Age = document.getElementById("Age").value; // assigning value of the html element with id: "Age", in our case this is a user input value 
    //The first is a comparison argument,
    //The second is the result upon a true comparison,
    //The third is the result upon a false comparison:
    Can_vote = (Age < 18) ? "You are too young " : "You are old enough ";
    document.getElementById("Vote").innerHTML = Can_vote + "to vote.";
    
    }


//Constructor & Keywords

// JS Assignment 36
function Vehicle(Make, Model, Year, Color) { //Vehicle is an object constructor
    this.Vehicle_Make = Make; //`this` is a keyword, not a var
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year; 
    this.Vehicle_Color = Color;
    
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction(){
    document.getElementById("Keyword_and_Constructors").innerHTML= 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + (".");
}

// JS Assignment 37
function People(Age, Height, Weight, Gender) {
    this.People_Age = Age; //`this` is a keyword, not a var
    this.People_Height = Height;
    this.People_Weight = Weight; 
    this.People_Gender = Gender;
    
}

var Jim = new People(18, "174 cm", "82kg", "Man");
var Emma = new People(22, "162 cm", "65kg", "Woman");
var Arnold = new People(34, "169 cm", "92kg", "Man");
function myFunction1(){
    document.getElementById("New_and_This").innerHTML= 
    "Jim is " + Jim.People_Age + " years old and is  " + Jim.People_Height + " tall.";
}


// Challange 9 - Reserved word - 
//IT WAS TRIED WITH A REVERSED WORD BUT GITHUB DOES NOT LET ME COMMIT AND SZNCHRONIZE DUE TO THE PROBLEM EXISTING
//HENCE IT IS A WORKIKNG fun
function People(Age, Height, Weight, Gender) {
    this.People_Age = Age; //`this` is a keyword, In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.
    this.People_Height = Height;
    this.People_Weight = Weight; 
    this.People_Gender = Gender;
    
}

var Jim = new People(18, "174 cm", "82kg", "Man");
var Sara = new People(22, "162 cm", "65kg", "Woman");
var Arnold = new People(34, "169 cm", "92kg", "Man");
function myFunction2(){
    document.getElementById("good1").innerHTML= 
    "Sara is " + Sara.People_Age + " years old and is  " + Sara.People_Height + " tall.";
}

//Assignment 38 
function nestFunc() {
document.getElementById("Nested_Function").innerHTML = addme();
    function addme() {
        var Starting_point = 1;
            function plus_one() {Starting_point += 1;}
            plus_one();
            return Starting_point;
    }

}
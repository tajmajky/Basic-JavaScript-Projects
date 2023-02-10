//dictionary with delete option
function myDictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:"5",
        Sound:"Bark"
    };
    delete Animal.Breed;
    document.getElementById("Dictionary").innerHTML=Animal.Breed;
  }
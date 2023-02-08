//adding  two numbers
function myResult() {
    var a = parseInt(document.getElementById("alpha").value);
    var b = parseInt(document.getElementById("beta").value);

    var result= a + b;
    alert(result);
  }

  //concat 2 strings on a button click
  function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book.";
    document.getElementById("Concatenate").innerHTML = sentence;
  }

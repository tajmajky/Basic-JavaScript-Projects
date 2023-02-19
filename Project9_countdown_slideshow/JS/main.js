//CountDown
function countDown(){
    var seconds = document.getElementById("seconds").value;

        function tick(){
            seconds = seconds - 1;
            timer.innerHTML = seconds;
            setTimeout(tick, 1000); //The statement “setTimeout(tick, 1000);” means that the program is pausing for 1,000 milliseconds (i.e., 1 second
        if(seconds == -1){
            alert("Time`s up!");
        }    
            }
        tick();
    }

//slideshow

let slideIndex = 1; //starting position of first slide
showSlides(slideIndex);

function plusSlides(n) { //jumping to next slide
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) { // slideshow function
  let i; // counter
  let slides = document.getElementsByClassName("mySlides"); //object saved from html that has the classname mySlides which is the name of the pic
  let dots = document.getElementsByClassName("dot"); 
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) { //for loop
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


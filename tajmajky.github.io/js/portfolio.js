//This function open and closes the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


// --------------------- Dark Mode -------------------------

let darkMode = localStorage.getItem('darkMode'); // do we have a dark mode already set on the page? yes or no

const darkModeToggle= document.querySelector('#darkmode-toggle'); //if no, then we need to refer back to HTML and with querySelector choose the id = darkmode-toggle
//check if dark mode is enabled
//if it is enabled, we want turn it off
//if it is disabled, turn it on 

const enableDarkMode = () => {
    //1. add the class darkmode to the body
    document.body.classList.add("darkmode");
    //2. update darkMode in the localStorage
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    //1. add the class darkmode to the body
    document.body.classList.remove("darkmode");
    //2. update darkMode in the localStorage
    localStorage.setItem("darkMode");
}

darkModeToggle.addEventListener('click', () => {
    if (darkMode !== 'enabled') {
        enableDarkMode();
    }
    
});
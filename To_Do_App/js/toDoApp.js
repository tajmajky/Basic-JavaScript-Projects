/* This function gets the task from input */
function get_todos() {

    /* This creates an array of task that are inputted */
    var todos = new Array; /* todos is now an array that can be used to store a collection of values */
    
    /* This pulls the task that was saved in the web browser memory */
    var todos_str = localStorage.getItem('todo');

    /* If the input is not null then JSON.parse will
    communicate with the web browser to make the task a JS object */
    if (todos_str !== null) {
        todos=JSON.parse(todos_str);
    } 
    return todos;
}

/* This function adds the inputted task to the get_todos function array */
function add() {
            /* This takes the inputed task and creates a variable of it */
    var task = document.getElementById('task').value;
            // This retrieves the current array of tasks from local storage
    var todos = get_todos();
            /* This adds a new task to the end of the array */
    todos.push(task);
            /* This converts the task input to a JSON string */
    localStorage.setItem('todo',JSON.stringify(todos));
            // This clears the input field where the task was entered
    document.getElementById("task").value ="";
            // This calls the 'show' function to update the display of the tasks list
    show();
            // This returns false to prevent the form from submitting and reloading the page
    return false;
}

/* This function keeps the tasks permanently displayed on the screen */
function show() {
    var todos = get_todos();

    /* This sets up each task as an unordered list */
    var html = '<ul>';
    /* This displays a task to the list in the order that it is inputed */
    for (var i = 0; i < todos.length; i++) {
        /* this also displays the task as a list and creates the button with the "x" */
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };

    html += '</ul>';
    /* This displays the task as a list */
    document.getElementById('todos').innerHTML = html;
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

/*This displays the inputed task when the `Add item` button is clicked */
document.getElementById('add').addEventListener('click', add);
/* this will keep the inputs displayed permanently on the screen */
show();


//Removing tasks from the list displayed
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id,1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /*this looks in the show() how to display a removed item on the screen */
    show();

    return false;
}



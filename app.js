// Username and Password for the registration form
var username = document.getElementById('username');
var password = document.getElementById('password');

// Store input from registration form in localStorage
function storeLogin() {
    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);
    alert('New user has been created.');
}


// Function to list
function showUser() {
    console.log('Show user stored in localStorage.')
    console.log(localStorage);
}

// Function to check if the stored data from the registration form is equal to the entered data in the login form
function checkLogin() {

    // Stored data from the registration form
    var storedName = localStorage.getItem('username');
    var storedPass = localStorage.getItem('password');

    // Entered data in the login form
    var enteredName = document.getElementById('enteredName');
    var enteredPass = document.getElementById('enteredPass');

    // Check if stored data from registration form is equal to entered data from login form
    if(enteredName.value == storedName && enteredPass.value == storedPass) {
        alert('You are logged in. Here&rsquo;s the link:');


    }else {
        alert('Error. Wrong login.');
    }
}

// Function to show my Instagram in a hyperlink if the login is correct
function showInsta() {

    // Stored data from the registration form
    var storedName = localStorage.getItem('username');
    var storedPass = localStorage.getItem('password');

    // Entered data in the login form
    var enteredName = document.getElementById('enteredName');
    var enteredPass = document.getElementById('enteredPass');

    var hyperLink[i].text = 'Kronbog&rsquo;s insta!';

        // Check if stored data from registration form is equal to entered data from login form
        if(enteredName.value == storedName && enteredPass.value == storedPass) {
        alert(document.write(hyperLink[i].text. link('https://www.instagram.com/kronbog/'));

    }else {
        alert('Error. Wrong log in.');
    }
}


// Function to clear user from localStorage
function clearUser() {
    localStorage.clear();
    alert('User has been cleared from localStorage.');
}

var str = "Kronbog&rsquo;s insta!";
var result = str.link("https://www.instagram.com/kronbog/");
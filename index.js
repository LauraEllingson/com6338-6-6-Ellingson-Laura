// Selecting the hamburger button and the menu
var hamburgerBtn = document.querySelector('button.hamburger-btn'); // Selects the hamburger button element
var hamburgerMenu = document.querySelector('.hamburger-menu'); // Selects the hamburger menu element

// Function to open the menu
function openMenu(e) {
    e.stopPropagation(); // Prevents event bubbling to parent elements
    hamburgerMenu.classList.toggle('show-menu'); // Toggles the 'show-menu' class on the hamburger menu
    hamburgerBtn.setAttribute('aria-expanded', true); // Sets aria-expanded attribute to true
    hamburgerBtn.focus(); // Focuses on the hamburger button
}

// Function to close the menu
function closeMenu(e) {
    e.stopPropagation(); // Prevents event bubbling to parent elements
    hamburgerMenu.classList.remove('show-menu'); // Removes the 'show-menu' class from the hamburger menu
    hamburgerBtn.setAttribute('aria-expanded', false); // Sets aria-expanded attribute to false
    hamburgerBtn.focus(); // Focuses on the hamburger button
}

// Event listener for hamburger button click
hamburgerBtn.onclick = function(e) {
    if (hamburgerMenu.classList.contains('show-menu')) { // Checks if the menu is currently shown
        closeMenu(e); // Closes the menu if it's open
    } else {
        openMenu(e); // Opens the menu if it's closed
    }
};

// Event listener for clicking outside the menu
document.body.onclick = function(e) {
    if (!hamburgerMenu.contains(e.target) && hamburgerMenu.classList.contains('show-menu')) {
        closeMenu(e); // Closes the menu if clicked outside and it's open
    }
};

// Event listener for pressing the Escape key
document.onkeyup = function(e) {
    if (e.key === 'Escape' && hamburgerMenu.classList.contains('show-menu')) {
        closeMenu(e); // Closes the menu if Escape key is pressed and it's open
    }
};






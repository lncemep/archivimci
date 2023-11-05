// script.js

// Get a reference to the reload button by its id
var reloadButton = document.getElementById('reloadButton');

// Add a click event listener to the button
reloadButton.addEventListener('click', function () {
    // Use the location object to reload the current page
    location.reload();
});
// script.js

// Get a reference to the reload button by its id
var reloadButton = document.getElementById('reloadButton');

// Add a click event listener to the button
reloadButton.addEventListener('click', function () {
    // Use the location object to reload the current page
    location.reload();
});

// Add an event listener to the "Dalej" button
var reloadButton = document.getElementById('flipCard');
reloadButton.addEventListener('click', function () {
    // Hide the category container
    var categoryContainer = document.getElementById('category-container');
    categoryContainer.style.display = 'none';

    // Remove the event listener after hiding the categories
    reloadButton.removeEventListener('click', arguments.callee);
});
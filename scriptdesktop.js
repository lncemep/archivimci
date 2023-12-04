document.addEventListener('DOMContentLoaded', function () {
    var reloadButton = document.getElementById('reloadButton');
    var flipButton = document.getElementById('flipCard');

    reloadButton.addEventListener('click', function () {
        // Use the location object to reload the current page
        location.reload();
    });

    flipButton.addEventListener('click', function () {
        // Hide the category container
        var categoryContainer = document.getElementById('category-container');
        if (categoryContainer) {
            categoryContainer.style.display = 'none';
        } else {
            console.error('Category container not found.');
        }

        // Get a reference to the container by its id
        var container = document.getElementById('myCard');

    });
});


document.addEventListener('contextmenu', event => event.preventDefault());
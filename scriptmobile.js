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

        if (container) {
            // Set a new margin-top value (adjust as needed)
            var newMarginTop = 180; // Change this value according to your needs
            // Apply the new margin-top value to the container
            container.style.marginTop = newMarginTop + 'px';
        } else {
            console.error('Container not found.');
        }

        var containerButtons = document.getElementById('containerButtons');

        if (containerButtons) {

            var newMarginTop = 130; 

            containerButtons.style.marginTop = newMarginTop + 'px';
        } else {
            console.error('containerButtons not found.');
        }
    });
});

document.addEventListener('contextmenu', event => event.preventDefault());



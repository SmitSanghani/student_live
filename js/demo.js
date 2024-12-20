

let previouslyActiveButton = null; // Store the previously clicked button

document.querySelectorAll('.button-btn-2').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('data-target');

        // Remove 'active' class from previously clicked button (if any)
        if (previouslyActiveButton !== null) {
            previouslyActiveButton.classList.remove('active');
        }

        // Update the active button
        previouslyActiveButton = this;
        this.classList.add('active');

        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });

        document.getElementById(targetId).style.display = 'block';
    });
});


// img change js index page 
document.querySelectorAll('.bg-white-btn').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        // Remove active class from all buttons
        document.querySelectorAll('.bg-white-btn').forEach(btn => btn.classList.remove('selected'));

        // Add active class to the clicked button
        this.classList.add('selected');

        // Hide all image sections
        document.querySelectorAll('.image-section').forEach(section => section.classList.remove('selected'));

        // Show the corresponding image section
        const target = this.getAttribute('data-target');
        document.getElementById(target).classList.add('selected');
    });
});


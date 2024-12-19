

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

let lastClickedButton = null; // Track the last clicked button globally

document.querySelectorAll('.bg-white-btn').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        // Ensure the target section exists
        if (!targetSection) {
            console.error(`Target section with ID '${targetId}' not found.`);
            return;
        }

        // Remove 'lightbtn' class from previously clicked button (if any)
        if (lastClickedButton !== null) {
            lastClickedButton.classList.remove('lightbtn');
        }

        // Update the active button
        lastClickedButton = this;
        this.classList.add('lightbtn');

        // Hide all content sections and images within them
        document.querySelectorAll('.content-section1').forEach(section => {
            section.style.display = 'none';
            section.querySelectorAll('img').forEach(img => {
                if (img) img.classList.add('d-none'); // Hide all images
            });
        });

        // Display the targeted content section and its first image
        targetSection.style.display = 'block';
        const firstImage = targetSection.querySelector('img:first-child');
        if (firstImage) {
            firstImage.classList.remove('d-none');
        }

        // Toggle visibility of the second image on a second click within the same content section
        const secondImage = targetSection.querySelector('img:nth-child(2)');
        if (secondImage && this === lastClickedButton) {
            secondImage.classList.toggle('d-none');
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.arcade-link');
    const sections = document.querySelectorAll('.arcade-section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });

            // Optional: Scroll smoothly to the top of the content
            window.scrollTo({
                top: document.querySelector('.arcade-header').offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Activate the first section by default
    sections[0].classList.add('active');
});
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close');
    const modalTitle = document.querySelector('.modal-title');
    const modalDescription = document.querySelector('.modal-description');
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // Get the data attributes from the clicked card
            const title = card.getAttribute('data-title');
            const description = card.getAttribute('data-description');

            // Update the modal content with the project data
            modalTitle.textContent = title;
            modalDescription.textContent = description;

            // Show the modal
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside the content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navbarContainer = document.querySelector('.navbar-container');
    const links = document.querySelectorAll('.arcade-link');

    // Toggle the navbar when the hamburger menu is clicked
    hamburger.addEventListener('click', () => {
        navbarContainer.classList.toggle('navbar-open');
    });

    // Close the navbar when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            navbarContainer.classList.remove('navbar-open');
        });
    });

    // Close the navbar when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!navbarContainer.contains(event.target) && !hamburger.contains(event.target)) {
            navbarContainer.classList.remove('navbar-open');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var disclaimerModalElement = document.getElementById('disclaimerModal');

    if (disclaimerModalElement) {
        var disclaimerModal = new bootstrap.Modal(disclaimerModalElement, {
            backdrop: 'static', // Prevent closing on outside click
            keyboard: false // Prevent closing with keyboard
        });

        // Show the modal on page load
        disclaimerModal.show();

        // Disable animations initially
        document.documentElement.style.setProperty('--animation-state', 'paused');

        // Disable scrolling
        document.body.style.overflow = 'hidden';

        // Handle "I Agree" button click
        var agreeButton = document.getElementById('agreeButton');
        if (agreeButton) {
            agreeButton.addEventListener('click', function () {
                disclaimerModal.hide(); // Hide modal
                document.body.style.overflow = ''; // Re-enable scrolling
                
                // Enable animations
                document.documentElement.style.setProperty('--animation-state', 'running');
            });
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // Initialize Bootstrap modal for contact section
    var contactModal = new bootstrap.Modal(document.getElementById("contactModal"));

    // Smooth scrolling when clicking the "Get in Touch" button
    document.querySelectorAll(".btn-danger").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSection = document.getElementById("contactModal");
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Floating icons - Adjust position dynamically
    const floatingIcons = document.querySelectorAll('.floating-icon');
    floatingIcons.forEach(icon => {
        let randomX = Math.floor(Math.random() * window.innerWidth);
        let randomY = Math.floor(Math.random() * window.innerHeight);
        icon.style.left = `${randomX}px`;
        icon.style.top = `${randomY}px`;
    });

    // Make floating icons move randomly
    setInterval(() => {
        floatingIcons.forEach(icon => {
            let randomX = Math.floor(Math.random() * window.innerWidth);
            let randomY = Math.floor(Math.random() * window.innerHeight);
            icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
        });
    }, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('a[href^="#contact"]').addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    });
});



        // Form validation
        (function () {
            'use strict'
            var forms = document.querySelectorAll('.needs-validation')
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        }
                        form.classList.add('was-validated')
                    }, false)
                })
        })()

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });


        document.addEventListener("DOMContentLoaded", () => {
            const navbar = document.querySelector(".navbar");
            const searchIcon = document.getElementById("searchIcon");
            const searchInput = document.getElementById("searchInput"); // Ensure this ID exists in HTML
            const menuToggle = document.getElementById("menuToggle");
            const navbarNav = document.getElementById("navbarNav");
        
            // ✅ Shrink Navbar on Scroll
            window.addEventListener("scroll", () => {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        
            // ✅ Mobile Menu Toggle
            if (menuToggle && navbarNav) {
                menuToggle.addEventListener("click", () => {
                    navbarNav.classList.toggle("show");
                });
            }
        
            // ✅ Search Icon Click - Now Fully Functional
            if (searchIcon && searchInput) {
                searchIcon.addEventListener("click", (e) => {
                    e.preventDefault();
        
                    // Toggle search input visibility
                    if (!searchInput.classList.contains("active")) {
                        searchInput.classList.add("active");
                        searchInput.focus(); // Automatically focus the input field
                    } else {
                        const query = searchInput.value.trim();
                        if (query === "") {
                            alert("Please enter a search term.");
                        } else {
                            window.location.href = `search.html?q=${encodeURIComponent(query)}`;
                        }
                    }
                });
        
                // Allow pressing "Enter" to search
                searchInput.addEventListener("keypress", (e) => {
                    if (e.key === "Enter") {
                        searchIcon.click();
                    }
                });
        
                // Hide search input when clicking outside
                document.addEventListener("click", (event) => {
                    if (!searchInput.contains(event.target) && !searchIcon.contains(event.target)) {
                        searchInput.classList.remove("active");
                    }
                });
            }
        });
        
         // Generate random numbers and store their sum
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let captchaAnswer = num1 + num2;
    
    // Set captcha question
    document.getElementById("captchaLabel").innerText = `Solve: ${num1} + ${num2} =`;


    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("contactForm");
        const submitButton = document.querySelector("button[type='submit']");
        
        submitButton.addEventListener("mouseover", function () {
            submitButton.style.transform = "scale(1.1)";
        });
        submitButton.addEventListener("mouseout", function () {
            submitButton.style.transform = "scale(1)";
        });
        
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            submitButton.innerHTML = "Sending...";
            submitButton.disabled = true;
    
            setTimeout(() => {
                alert("Message Sent Successfully!");
                form.reset();
                submitButton.innerHTML = "Submit";
                submitButton.disabled = false;
            }, 2000);
        });
    
        // Dynamic Form Input Focus Effect
        document.querySelectorAll(".form-control").forEach(input => {
            input.addEventListener("focus", function () {
                this.style.backgroundColor = "rgba(255, 204, 0, 0.1)";
            });
            input.addEventListener("blur", function () {
                this.style.backgroundColor = "transparent";
            });
        });
    });

    
// JavaScript for smooth scrolling
document.querySelectorAll('.footer-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').slice(1); // Get the target ID from the href
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// JavaScript for interactive modals (e.g., Privacy Policy, Terms & Conditions)
document.getElementById('privacyLink').addEventListener('click', function(event) {
    event.preventDefault();
    openModal('Privacy Policy');
});

document.getElementById('termsLink').addEventListener('click', function(event) {
    event.preventDefault();
    openModal('Terms & Conditions');
});

function openModal(title) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>${title}</h2>
            <p>Here is the information for the ${title}. You can replace this text with the actual content of your policy.</p>
        </div>
    `;
    document.body.appendChild(modal);

    // Close the modal
    modal.querySelector('.close-btn').addEventListener('click', function() {
        modal.remove();
    });
}

// Close modal if clicked outside of modal content
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.remove();
    }
});

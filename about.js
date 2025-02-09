gsap.registerPlugin(ScrollTrigger);

        // Profile section animations
        gsap.from(".profile-image-container", {
            scrollTrigger: {
                trigger: ".profile-image-container",
                start: "top center",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            x: -100,
            duration: 1.2,
            ease: "power3.out"
        });

        gsap.from(".profile-content", {
            scrollTrigger: {
                trigger: ".profile-content",
                start: "top center",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            x: 100,
            duration: 1.2,
            ease: "power3.out"
        });

        // Awards animations
        gsap.utils.toArray(".award-card").forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                y: 50,
                duration: 1,
                delay: i * 0.2,
                ease: "power3.out"
            });
        });

        // Smooth scroll navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
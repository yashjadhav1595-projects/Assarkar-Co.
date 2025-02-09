
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const serviceCards = document.querySelectorAll(".service-card");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    
    let index = 0;
    let autoScroll = true;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        serviceCards.forEach((card, i) => {
            if (i === index) {
                card.classList.add("active");
            } else {
                card.classList.remove("active");
            }
        });
    }

    document.querySelector(".service-card").addEventListener("mouseover", function() {
    this.style.backgroundColor = "black";
    this.style.color = "white";
});



    function scrollRight() {
        if (autoScroll) {
            index = (index + 1) % serviceCards.length;
            updateCarousel();
        }
    }

    let interval = setInterval(scrollRight, 4000);

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + serviceCards.length) % serviceCards.length;
        updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % serviceCards.length;
        updateCarousel();
    });

    

    carousel.addEventListener("mouseenter", () => {
        clearInterval(interval);
    });

    carousel.addEventListener("mouseleave", () => {
        if (autoScroll) {
            interval = setInterval(scrollRight, 6000);
        }
    });


    updateCarousel();
});

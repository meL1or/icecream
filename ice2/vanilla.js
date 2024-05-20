document.addEventListener('DOMContentLoaded', (event) => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slider .slides img');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    }

    document.querySelector('.slider .next').addEventListener('click', nextSlide);
    document.querySelector('.slider .prev').addEventListener('click', prevSlide);

    showSlide(slideIndex); // Initial display
});

const slides = document.querySelectorAll('.slide');

const toggleActiveSlide = slideIndex => {
    slides.forEach((slide, index) => {
        let isPreActive = false;
        if (slide.classList.contains('active')) {
            slide.classList.remove('active');
            isPreActive = true;
        }
        if (slideIndex === index && !isPreActive) {
            slide.classList.add('active');
        }
    });
}
for (let slideIndex = 0; slideIndex < slides.length; slideIndex++){
    const currentSlide = slides[slideIndex];
    currentSlide.addEventListener('click', () => {
        toggleActiveSlide(slideIndex);
    })
}
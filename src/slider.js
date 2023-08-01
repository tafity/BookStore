const track = document.querySelector('.slider-content-container');
const slides = Array.from(track.children);
const dotsNav = document.querySelector('.circles-btn');
const dots = Array.from(dotsNav.children);


const slideSize = slides[0].getBoundingClientRect().width;
const sizeWidth = slideSize;


const setSlidePosition = (slide, index) => {
    slide.style.left = sizeWidth * index + 'px'
};

slides.forEach(setSlidePosition);

export const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left;
    currentSlide.classList.remove('currentSlide');
    targetSlide.classList.add('currentSlide');
}

export const slidesAutoplay = () => {
        let currentSlide = track.querySelector('.currentSlide');
        let nextSlide = currentSlide.nextElementSibling;
        if(slides[2] === currentSlide) {
            track.style.transition = 'none';
            nextSlide = slides[0];

        }
        moveToSlide(track, currentSlide, nextSlide);
 }

export function autoPlay () {
    setInterval(() => slidesAutoplay(), 5000);
}


dotsNav.addEventListener ('click', e => {
    const targetDot = e.target.closest('button');
    if(!targetDot) return;

     const currentSlide = track.querySelector('.currentSlide');
     const currentDot = dotsNav.querySelector('.currentSlide');
     const targetIndex = dots.findIndex ( dot => dot === targetDot);
     const targetSlide = slides[targetIndex];
     
     moveToSlide(track, currentSlide, targetSlide);

     currentDot.classList.remove('currentSlide');
     targetDot.classList.add('currentSlide');
});
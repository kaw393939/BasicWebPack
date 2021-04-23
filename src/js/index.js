const slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);
function initSlideShow(slideshow) {
  const slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);
  let index = 0;
  const time = 5000;
  slides[index].classList.add('active');
  setInterval(() => {
    slides[index].classList.remove('active');


    index += 1;
    if (index === slides.length) index = 0;
    slides[index].classList.add('active');
    console.log(slides);
  }, time);
}

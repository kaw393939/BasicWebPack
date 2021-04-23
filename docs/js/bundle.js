/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
  var slides = document.querySelectorAll("#".concat(slideshow.id, " [role=\"list\"] .slide"));
  var index = 0;
  var time = 5000;
  slides[index].classList.add('active');
  setInterval(function () {
    slides[index].classList.remove('active');
    index += 1;
    if (index === slides.length) index = 0;
    slides[index].classList.add('active');
    console.log(slides);
  }, time);
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbInNsaWRlc2hvd3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaW5pdFNsaWRlU2hvdyIsInNsaWRlc2hvdyIsInNsaWRlcyIsImlkIiwiaW5kZXgiLCJ0aW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0SW50ZXJ2YWwiLCJyZW1vdmUiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQiw4QkFBMUIsQ0FBbkI7QUFDQUYsVUFBVSxDQUFDRyxPQUFYLENBQW1CQyxhQUFuQjs7QUFDQSxTQUFTQSxhQUFULENBQXVCQyxTQUF2QixFQUFrQztBQUNoQyxNQUFNQyxNQUFNLEdBQUdMLFFBQVEsQ0FBQ0MsZ0JBQVQsWUFBOEJHLFNBQVMsQ0FBQ0UsRUFBeEMsNkJBQWY7QUFDQSxNQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUNBLE1BQU1DLElBQUksR0FBRyxJQUFiO0FBQ0FILFFBQU0sQ0FBQ0UsS0FBRCxDQUFOLENBQWNFLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLFFBQTVCO0FBQ0FDLGFBQVcsQ0FBQyxZQUFNO0FBQ2hCTixVQUFNLENBQUNFLEtBQUQsQ0FBTixDQUFjRSxTQUFkLENBQXdCRyxNQUF4QixDQUErQixRQUEvQjtBQUdBTCxTQUFLLElBQUksQ0FBVDtBQUNBLFFBQUlBLEtBQUssS0FBS0YsTUFBTSxDQUFDUSxNQUFyQixFQUE2Qk4sS0FBSyxHQUFHLENBQVI7QUFDN0JGLFVBQU0sQ0FBQ0UsS0FBRCxDQUFOLENBQWNFLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLFFBQTVCO0FBQ0FJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixNQUFaO0FBQ0QsR0FSVSxFQVFSRyxJQVJRLENBQVg7QUFTRCxDIiwiZmlsZSI6ImpzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNsaWRlc2hvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jb21wb25lbnQ9XCJzbGlkZXNob3dcIl0nKTtcbnNsaWRlc2hvd3MuZm9yRWFjaChpbml0U2xpZGVTaG93KTtcbmZ1bmN0aW9uIGluaXRTbGlkZVNob3coc2xpZGVzaG93KSB7XG4gIGNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke3NsaWRlc2hvdy5pZH0gW3JvbGU9XCJsaXN0XCJdIC5zbGlkZWApO1xuICBsZXQgaW5kZXggPSAwO1xuICBjb25zdCB0aW1lID0gNTAwMDtcbiAgc2xpZGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIHNsaWRlc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cblxuICAgIGluZGV4ICs9IDE7XG4gICAgaWYgKGluZGV4ID09PSBzbGlkZXMubGVuZ3RoKSBpbmRleCA9IDA7XG4gICAgc2xpZGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBjb25zb2xlLmxvZyhzbGlkZXMpO1xuICB9LCB0aW1lKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
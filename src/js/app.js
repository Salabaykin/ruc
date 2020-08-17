document.addEventListener("DOMContentLoaded", function() {

  // Promo-Swiper
  const promoSlider = document.querySelectorAll('.promo-slider.swiper-container .swiper-slide');
  if (promoSlider.length > 1) {
    var promoSwiper = new Swiper('.promo-slider.swiper-container', {
      speed: 400,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  } 

});
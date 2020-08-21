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


  // Company-Swiper
  const companySlider = document.querySelectorAll('.company-slider.swiper-container .swiper-slide');
  if (companySlider.length > 5) {
    var companySwiper = new Swiper('.company-slider.swiper-container', {
      speed: 400,
      slidesPerView: 5,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      autoplay: {
        delay: 2600,
        disableOnInteraction: false,
      },
      loop: true,
      breakpoints: {
        // >= 991px
        991: {
          slidesPerView: 4
        },
        870: {
          slidesPerView: 3
        },
        460: {
          slidesPerView: 2
        }
      },
    });
  } 


  // Gallery-Swiper
  const gallerySlider = document.querySelectorAll('.gallery-slider.swiper-container .swiper-slide');
  if (gallerySlider.length > 5) {
    var gallerySwiper = new Swiper('.gallery-slider.swiper-container', {
      speed: 400,
      slidesPerView: 5,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next.gallery-slider__next',
        prevEl: '.swiper-button-prev.gallery-slider__prev',
      },
      breakpoints: {
        1650: {
          slidesPerView: 4
        },
        1380: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 2
        }
      }
    });
  } 


  // Crop-Text
  const cropElement = document.querySelectorAll('.crop-text'), // выбор элементов 
        size = 200, // кол-во символов 
        endCharacter = '...'; // окончание 

  function cropText() {
    cropElement.forEach(function(el) {
      let text = el.innerText;

      if (el.innerText.length > size) {
          text = text.substr(0, size);
          el.innerText = text + endCharacter;
      }
    });
  }
  cropText();


  // Menu-Open
  const menu = document.querySelector('.menu'),
        burgerBtn = document.querySelector('.burger-button'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.close');

  function toggle() {
    overlay.classList.toggle('open');
    menu.classList.toggle('open');
  }

  burgerBtn.addEventListener('click', function() {toggle()});
  close.addEventListener('click', function() {toggle()});
  overlay.addEventListener('click', function() {toggle()});


  // Programme-Tabs
  const tabLinks = document.querySelectorAll('.programme-tabs__link'),
        tabContent = document.querySelectorAll(".programme__content");

  tabLinks.forEach(function(el) {
    el.addEventListener("click", openTabs);
  });

  function openTabs(el) {
    const btnTarget = el.currentTarget;
    const country = btnTarget.dataset.country;
    tabContent.forEach(function(el) {
        el.classList.remove('active');
    });
    tabLinks.forEach(function(el) {
        el.classList.remove('active');
    });
    document.querySelector('#' + country).classList.add('active');
    btnTarget.classList.add('active');
  }


  // Search-Block 
  const searchButton = document.querySelector('.search-button'),
        searchForm = document.querySelector('.search');

  searchButton.addEventListener('click', function() {
    searchForm.classList.toggle('active');
  })

});
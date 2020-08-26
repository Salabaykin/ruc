document.addEventListener("DOMContentLoaded", function() {

  // Promo-Swiper
  var promoSwiper = new Swiper('.promo-slider.swiper-container', {
    speed: 400,
    watchOverflow: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    on: {
      slideChange: function () {
        new WOW().init();
      },
    }
  });


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


  // More News Swiper
  var MoreNewsSwiper = new Swiper('.more-news-slider.swiper-container', {
    speed: 400,
    slidesPerView: 3,
    watchOverflow: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  // News Page Swiper
  var NewsPageSwiper = new Swiper('.news-page-slider.swiper-container', {
    speed: 400,
    slidesPerView: 3,
    lazy: true,
    watchOverflow: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  // Gallery-Swiper
  const gallerySlider = document.querySelectorAll('.gallery-slider.swiper-container .swiper-slide');
  if (gallerySlider.length > 5) {
    var gallerySwiper = new Swiper('.gallery-slider.swiper-container', {
      speed: 400,
      slidesPerView: 5,
      lazy: true,
      spaceBetween: 30,
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next.gallery-slider__next',
        prevEl: '.swiper-button-prev.gallery-slider__prev',
      },
      breakpoints: {
        1650: {
          slidesPerView: 4,
          centeredSlides: false,
          loop: false
        },
        1380: {
          slidesPerView: 3,
          centeredSlides: false,
          loop: false
        },
        991: {
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 10,
          loop: true
        },
        670: {
          slidesPerView: 2,
          centeredSlides: true,
          spaceBetween: 10,
          loop: true
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
        close = document.querySelector('.close'),
        menuBody = document.querySelector('body');

  function toggle() {
    overlay.classList.toggle('open');
    menu.classList.toggle('open');
    menuBody.classList.toggle('hidden');
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

  // Modal 
  const modal = document.querySelector('.modal'),
        modalWrapper = document.querySelector('.modal__wrapper'),
        body = document.querySelector('body'),
        modalLink = document.querySelectorAll('.modal-link'),
        closeModal = document.querySelector('.modal .close'),
        modalBody = document.querySelector('.modal__body');

  modalLink.forEach( function(el) {
    el.addEventListener('click', function() {
      modal.classList.toggle('active');
      body.classList.toggle('hidden');
    });
  })

  closeModal.addEventListener('click', function() {
    modal.classList.toggle('active');
    body.classList.toggle('hidden');
  });

  // Accordion 
  var accordion = (function (element) {
    var _getItem = function (elements, className) { // функция для получения элемента с указанным классом
      var element = undefined;
      elements.forEach(function (item) {
        if (item.classList.contains(className)) {
          element = item;
        }
      });
      return element;
    };
    return function () {
      var _mainElement = {}, // .accordion
        _items = {}, // .accordion-item
        _contents = {}; // .accordion-item-content 
      var _actionClick = function (e) {
        if (!e.target.classList.contains('accordion-item__header')) { // прекращаем выполнение функции если кликнули не по заголовку
          return;
        }
        e.preventDefault(); // отменям стандартное действие
        // получаем необходимые данные
        var header = e.target;
        var item = header.parentElement;
        item.classList.toggle('show');
      },
      _setupListeners = function () {
        // добавим к элементу аккордиона обработчик события click
        _mainElement.addEventListener('click', _actionClick);
      };

      return {
        init: function (element) {
          _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
          _items = _mainElement.querySelectorAll('.accordion-item');
          _setupListeners();
        }
      }
    }
  })();

  var group = accordion();
  group.init('#accordion');


  // WOW Animations 
  new WOW().init();

});
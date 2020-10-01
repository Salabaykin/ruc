document.addEventListener("DOMContentLoaded", function() {

  // Header Nav 
  function hideElements() {
    const navList = document.querySelector('.header-bottom__wrapper .nav ul'),
          navItem = document.querySelectorAll('.header-bottom__wrapper .nav .nav__list');
    let open = null;
    const maxElementsCount = 4;
    if (navItem.length > 5) {
      const navMore = document.createElement('div');
      const li = document.createElement('li');
      li.classList.add('nav__list');
      li.classList.add('more');
      li.innerHTML = `
          <a href="#">
              <span></span>
          </a>
      `;
      navList.appendChild(li);
      navMore.className = 'nav-more';
      li.addEventListener('click', (e) => {
        e.preventDefault();
        navMore.classList.toggle('active');
      });
      navItem.forEach((item, i) => {
        if (i > maxElementsCount) {
          navMore.appendChild(item);
        }
      });
      document.querySelector('.header-bottom__wrapper .nav').append(navMore);
    }

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.more') && !e.target.closest('.nav-more')) {
        document.querySelector('.nav-more').classList.remove('active');
      }
    })
    
  }

  hideElements();

  // Header Fixed
  const header = document.querySelector('.header');

  function fixed() {
    if (window.scrollY > 57) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  }

  window.addEventListener('scroll', fixed);

  // History-Swiper
  var historyThumbs = new Swiper('.history-thumbs', {
    // spaceBetween: 83,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      // >= 991px
      1220: {
        slidesPerView: 7
      },
      870: {
        slidesPerView: 6,
        // spaceBetween: 115
      },
      700: {
        slidesPerView: 5
      },
      319: {
        slidesPerView: 4
      }
    },
  });
  var historySlider = new Swiper('.history-slider', {
    autoHeight: true,
    navigation: {
      nextEl: '.history-slider-next.swiper-button-next',
      prevEl: '.history-slider-prev.swiper-button-prev',
    },
    thumbs: {
      swiper: historyThumbs
    }
  });

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
    breakpoints: {
      767: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      650: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    }
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
    breakpoints: {
      767: {
        slidesPerView: 2
      },
      500: {
        slidesPerView: 1
      },
    }
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


  // Virtual-Tour-Swiper
  const virtualTourSlider = document.querySelectorAll('.virtual-tour-slider.swiper-container .swiper-slide');
  if (virtualTourSlider.length > 5) {
    var virtualTour = new Swiper('.virtual-tour-slider.swiper-container', {
      speed: 400,
      slidesPerView: 5,
      lazy: true,
      spaceBetween: 20,
      watchOverflow: true,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next.gallery-slider__next',
        prevEl: '.swiper-button-prev.gallery-slider__prev',
      },
      breakpoints: {
        1600: {
          slidesPerView: 5,
          centeredSlides: false,
          loop: false
        },
        1500: {
          slidesPerView: 4,
          centeredSlides: false,
          loop: false
        },
        1200: {
          slidesPerView: 3,
          centeredSlides: false,
          loop: false
        },
        620: {
          slidesPerView: 2,
          centeredSlides: false
        },
        319: {
          slidesPerView: 1,
          centeredSlides: false
        }
      }
    });
  } 


  // Crop-Text
  function cropText(selector, size) {
    const cropElement = document.querySelectorAll(selector), // выбор элементов 
    endCharacter = '...'; // окончание 
    cropElement.forEach(function(el) {
      let text = el.innerText;

      if (el.innerText.length > size) {
          text = text.substr(0, size);
          el.innerText = text + endCharacter;
      }
    });
  }
  cropText('.crop-text', 170);
  cropText('.news-section__title', 63);


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


  // Tabs
  class Tabs {
    constructor(button, content) {
      this.button = button;
      this.content = content;
    }

    render() {
      const showTabs = (el) => {
        const btnTarget = el.currentTarget;
        const country = btnTarget.dataset.country;
        this.content.forEach((el) => {
          this.removeClass(el);
        });
        this.button.forEach((el) => {
          this.removeClass(el);
        });
        document.querySelector('#' + country).classList.add('active');
        btnTarget.classList.add('active');
      }
      
      this.button.forEach(function(el) {
        el.addEventListener("click", showTabs);
      });
    }

    removeClass(el) {
      el.classList.remove('active');
    }

  }

  // Documents-Tabs
  const documenttabLinks = document.querySelectorAll('.documents-tabs__link'),
        documenttabContent = document.querySelectorAll('.documents-tabs__content');

  // Programme-Tabs
  const programmetabLinks = document.querySelectorAll('.programme-tabs__link'),
        programmetabContent = document.querySelectorAll(".programme__content");

  const documentsTabs = new Tabs(documenttabLinks, documenttabContent);
  documentsTabs.render();

  const programmeTabs = new Tabs(programmetabLinks, programmetabContent);
  programmeTabs.render();


  // Search-Block 
  const searchButton = document.querySelector('.search-button'),
        searchForm = document.querySelector('.search');

  const toggleClose = () => {
    searchButton.innerHTML = searchButton.classList.contains('active')
    ? `<svg class="search-button__icon">
        <use xlink:href="/images/sprite.svg#close"></use>
      </svg>`
    : `<svg class="search-button__icon">
        <use xlink:href="/images/sprite.svg#search"></use>
      </svg>`;
  }

  searchButton.addEventListener('click', function() {
    searchButton.classList.toggle('active');
    toggleClose();
    searchForm.classList.toggle('active');
  })


  class Modal {
    constructor(button, modal) {
      this.button = button;
      this.modal = modal;
      this.openModal();
    }

    openModal() {
      document.addEventListener('click', (e) => {
        if (e.target.closest(this.button)) {
          e.preventDefault();
          document.querySelector(this.modal).classList.toggle('active');
          if (document.querySelector('.modal.active')) {
            document.body.classList.add('hidden');
          } else {
            document.body.classList.remove('hidden');
          }
        }
      });
      this.closeModal();
    }

    closeModal() {
      const closeBtn = document.querySelectorAll('.modal .close'),
            modalWrapper = document.querySelectorAll('.modal__wrapper');

      closeBtn.forEach(item => {
        item.addEventListener('click', () => {
          document.querySelector(this.modal).classList.remove('active');
          if (document.querySelector('.menu.open')) {
            document.body.classList.add('hidden');
          } else {
            document.body.classList.remove('hidden');
          }
        });
      });

      modalWrapper.forEach(elem => {
        elem.addEventListener('click', (event) => {
          const target = event.target;
          
          if (!target.closest('.modal__body') && !target.closest(this.button)) {
            document.querySelector(this.modal).classList.remove('active');
            if (document.querySelector('.menu.open')) {
              document.body.classList.add('hidden');
            } else {
              document.body.classList.remove('hidden');
            }
          }
        });
      });

    }
  }

  const modalBranch = new Modal('.modal-link', '.modal-branch');
  const modalQuestion = new Modal('.button__modal-question', '.modal-question');

  // Accordion
  class Accordion {
    constructor(id) {
      this.id = id;
      this.render();
    }

    render() {
      function initAccordion(element) {
        function actionClick(e) {
          e.preventDefault();
          const headerHead = e.target;
          const item = headerHead.parentElement;
          item.classList.toggle('show');
        };
        function setupListeners(element) {
          element.addEventListener('click', actionClick);
        }
        setupListeners(element);
      }
      initAccordion(this.id);
    }
  }

  const acc = document.querySelectorAll('.accordion-init');
  
  acc.forEach(item => {
    const accordionInit = new Accordion(item);
  });



  // Scroll Up
  $(window).on('scroll', function () {
      if ($(window).scrollTop() > 350) {
        $('.up').fadeIn();
      }
      else {
        $('.up').fadeOut();
      }
  });
  $('.up').on('click', function () {
      $('html, body').animate({ 'scrollTop': 0 }, 400);
  });

  $().fancybox({
    selector: '.swiper-slide a',
    backFocus: false,
    hash: false,
    buttons: [
      'close'
    ]
  });

  var phoneMask = IMask(
    document.getElementById('q-user-tel'), {
      mask: '+{7}(000)000-00-00'
  });

});


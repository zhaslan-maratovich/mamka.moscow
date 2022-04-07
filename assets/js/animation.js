document.addEventListener('DOMContentLoaded', function () {
  var windowOldScrollY = 0;

  window.addEventListener('scroll', function () {
    // fade-up
    (function () {
      var elemsForAnimations = document.querySelectorAll('.fade-up');

      for (let elem of elemsForAnimations) {
        var elemRect = elem.getBoundingClientRect(),
            offset   = elemRect.top - window.innerHeight,
            bufferOffset = 60;

        if (offset + bufferOffset <= 0 && !elem.classList.contains('start')) {
          elem.classList.add('start');
        }
      }
    })();

    // bg for header
    (function () {
      var headerElement = document.querySelector('.header');
      if (window.scrollY > 60) {
        headerElement.classList.add('header--bg');
      } else {
        headerElement.classList.remove('header--bg');
      }
    })();
  });

  var btnBurgerElement = document.querySelector('.js-header-burger');
  var bodyElement = document.querySelector('body');
  var headerElement = document.querySelector('.header');

  bodyElement.classList.add('page--ready');

  btnBurgerElement.addEventListener('click', function () {
    var classNameClose = 'icon-burger--close';
    var classNameMenuOpen = 'page--menu-open';
    if (btnBurgerElement.classList.contains(classNameClose)) {
      btnBurgerElement.classList.remove(classNameClose);
      bodyElement.classList.remove(classNameMenuOpen);
      // headerElement.classList.add('header--bg');
    } else {
      btnBurgerElement.classList.add(classNameClose);
      bodyElement.classList.add(classNameMenuOpen);
    }
  });

  function handleScroll (e) {
    if (e.target.classList.contains("on-scrollbar") === false) {
        e.target.classList.add("on-scrollbar");
    }
  }

  var tabsScrollElement = document.querySelector('.tabs-scroll');

  if (tabsScrollElement) {
    tabsScrollElement.addEventListener('scroll', handleScroll, true);
  }

});
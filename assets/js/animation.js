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

    // fix-center
    // (function () {
    //   var elem = document.querySelector('.animation-fix-number'),
    //       elemRect = elem.getBoundingClientRect(),
    //       topOffset = (window.innerHeight - elemRect.height) / 2;

    //   var container = document.querySelector('.animation-fix-container'),
    //       containerRect = container.getBoundingClientRect();

    //   var bufferOffset = window.innerHeight / 10;

    //   if (elemRect.top <= topOffset) {
    //     if (!elem.classList.contains('start')) {
    //       windowOldScrollY = window.scrollY;
    //       elem.classList.add('start');
    //       elem.style.top = topOffset + 'px';
    //     }
    //   }
    //   console.log(window.scrollY, windowOldScrollY);
    //   if (window.scrollY < windowOldScrollY) {
    //     if (elem.classList.contains('start')) {
    //       elem.classList.remove('start');
    //       elem.style.top = '';
    //       windowOldScrollY = 0;
    //     }
    //   }

    //   // console.log(containerRect);
    //   var containerVisibleHeight = containerRect.top + containerRect.height,
    //       elemVisibleHeight = elemRect.height + elemRect.top + bufferOffset;
    //   if (containerVisibleHeight <= elemVisibleHeight) {
    //     if (!elem.classList.contains('end')) {
    //       elem.classList.add('end');
    //     }
    //   } else {
    //     if (elem.classList.contains('end')) {
    //       elem.classList.remove('end');
    //     }
    //   }
    // })();
  });

  var btnBurgerElement = document.querySelector('.js-header-burger');
  var bodyElement = document.querySelector('body');

  bodyElement.classList.add('page--ready');

  btnBurgerElement.addEventListener('click', function () {
    var classNameClose = 'icon-burger--close';
    var classNameMenuOpen = 'page--menu-open';
    if (btnBurgerElement.classList.contains(classNameClose)) {
      btnBurgerElement.classList.remove(classNameClose);
      bodyElement.classList.remove(classNameMenuOpen);
    } else {
      btnBurgerElement.classList.add(classNameClose);
      bodyElement.classList.add(classNameMenuOpen);
    }
  });
});
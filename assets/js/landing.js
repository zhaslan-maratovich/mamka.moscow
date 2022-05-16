document.addEventListener('DOMContentLoaded', function () {
  var elms = document.getElementsByClassName( 'splide' );
  var commonOptions = {};

  for ( var i = 0; i < elms.length; i++ ) {
    new Splide( elms[ i ] ).mount();
  }

  var elements = document.querySelectorAll('.js-open-popup');
  for (let element of elements) {
    element.addEventListener('click', function () {
      var videoUrl = element.getAttribute('data-video-url');
      var iframe = '<iframe class="w-full h-[300px] md:h-[420px] lg:h-[600px] 2xl:h-[920px]" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src="' + videoUrl + '" scrolling="no"></iframe>';

      document.querySelector('.js-popup-content').innerHTML = iframe;
      document.querySelector('.js-popup').classList.remove('hidden');
    });
  }

  function closePopup () {
    document.querySelector('.js-popup-content').innerHTML = '';
    document.querySelector('.js-popup').classList.add('hidden');
  }

  document.querySelector('.js-popup-bg').addEventListener('click', closePopup);
  document.querySelector('.js-popup-content-wrap').addEventListener('click', closePopup);
  document.addEventListener('keydown', function(e) {
    let keyCode = e.keyCode;
    if (keyCode === 27) {//keycode is an Integer, not a String
      closePopup();
    }
  });

  // Переключение на странице Автора
  function toggleAuthorContent(e) {
    var elms = document.querySelectorAll( '.toggle-mobile-content' );
    var activeClass = 'tab--active';
    var toggleId = Number(e.target.getAttribute('data-toggle'));

    for ( var i = 0; i < elms.length; i++ ) {
      elms[ i ].classList.remove(activeClass);
    }
    e.target.classList.add(activeClass);

    if ( toggleId === 1 ) {
      document.querySelector('.mobile-content-1').classList.add('mobile-content--show');
      document.querySelector('.mobile-content-2').classList.remove('mobile-content--show');
    } else {
      document.querySelector('.mobile-content-1').classList.remove('mobile-content--show');
      document.querySelector('.mobile-content-2').classList.add('mobile-content--show');
    }
  }

  var btns = document.querySelectorAll('.toggle-mobile-content');
  for ( var i = 0; i < btns.length; i++ ) {
    btns[ i ].addEventListener('click', toggleAuthorContent);
  }
  if (btns[ 0 ]) {
    btns[ 0 ].click();
  }

  // Попап материалов
  function showPopupMaterial(e) {
    var elms = document.querySelectorAll( '.material-popup' );
    var activeClass = 'material-popup--show';
    var popupId = Number(e.path[1].getAttribute('data-material-popup'));
    console.log(e.path[1]);

    for ( var i = 0; i < elms.length; i++ ) {
      elms[ i ].classList.remove(activeClass);
    }

    document.querySelector('.material-popup[data-material-popup="' + popupId + '"]').classList.add(activeClass);
    // document.querySelector('body').classList.add('overflow-hidden');
  }

  var materials = document.querySelectorAll('.trigger-popup-material');
  for ( var i = 0; i < materials.length; i++ ) {
    materials[ i ].addEventListener('click', showPopupMaterial);
  }

  function closePopupMaterial() {
    var bgs = document.querySelectorAll('.material-popup');
    for ( var i = 0; i < bgs.length; i++ ) {
      bgs[ i ].classList.remove('material-popup--show');
    }

    // document.querySelector('body').classList.remove('overflow-hidden');
  }

  var bgs = document.querySelectorAll('.material-popup__bg');
  for ( var i = 0; i < bgs.length; i++ ) {
    bgs[ i ].addEventListener('click', closePopupMaterial);
  }

  var icloses = document.querySelectorAll('.material-popup__close');
  for ( var i = 0; i < icloses.length; i++ ) {
    icloses[ i ].addEventListener('click', closePopupMaterial);
  }
});
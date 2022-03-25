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
});
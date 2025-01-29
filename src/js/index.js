import '../scss/style.scss'
import '../js/modal.js'
import '../js/showmore.js'

console.log('Works!')

var swiperArray = document.querySelectorAll('.swiper')
var swiperInstance = []

var swiperActivator = function () {
  for (var i = 0; i < swiperArray.length; i++) {
    swiperInstance[i] = new Swiper('.swiper', {
      mousewheel: true,
      direction: 'horizontal',
      loop: false,
      slidesPerView: 1.5,
      spaceBetween: 16,
      breakpoints: {
        600: {
          slidesPerView: 2
        },
        768: {
          enabled: false,
          spaceBetween: 0
        }
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    })
  }
}

var swiperAdaptive = function () {
  if (window.matchMedia('(max-width: 768px)')) {
    swiperActivator()
    console.log('работает')
  }
}
swiperAdaptive()

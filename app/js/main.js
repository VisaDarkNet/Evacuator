$(document).ready(function () {
  $('.species__list').slick({
    speed: 1200,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    prevArrow: '<button type="button" class="species__btn slick-prev"><img class="species__icons" src="images/icons/arrow-right.svg" alt=""></button>',
    nextArrow: '<button type="button" class="species__btn slick-next"><img class="species__icons" src="images/icons/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 993,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });

});


$('.product-tabs__info-item').on('click', function (e) {
  e.preventDefault();
  $('.product-tabs__info-item').removeClass('product-tabs__info-item--active');
  $(this).addClass('product-tabs__info-item--active');

  $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
  $($(this).attr('href')).addClass('product-tabs__content-item--active')

});

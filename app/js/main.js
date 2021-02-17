$(function () {

  $(".rate-star").rateYo({
    rating: 4.5,
    readOnly: true,
    normalFill: "#FFC000",
    ratedFill: "#FFC000",
    starWidth: "14px",
    spacing: "4px",
  });

  $(".rate-star-font-sm").rateYo({
    rating: 4.5,
    readOnly: true,
    normalFill: "#FFC000",
    ratedFill: "#FFC000",
    starWidth: "12px",
    spacing: "5px",
  });


  var swiperOne = new Swiper('.js__one-slider > .swiper-container', {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.featured-products__arrows > .swiper-button-prev',
      prevEl: '.featured-products__arrows > .swiper-button-next',
    },
  });

  var swiperTwo = new Swiper('.js__two-slider > .swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.follower-feed__arrows > .swiper-button-prev',
      prevEl: '.follower-feed__arrows > .swiper-button-next',
    },
  });

  var swiperThree = new Swiper('.testimonial__slider-container', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 28,
    navigation: {
      nextEl: '.testimonial__slider-button-next',
      prevEl: '.testimonial__slider-button-prev',
    },
  });



  var mixer = mixitup('.release-product__inner');

});
$(function () {

  $(".rate-star").rateYo({
    rating: 4.5,
    readOnly: true,
    normalFill: "#FFC000",
    ratedFill: "#FFC000",
    starWidth: "14px",
    spacing: "4px",
  });

  $(".rate-star-font-small").rateYo({
    rating: 4.5,
    readOnly: true,
    normalFill: "#FFC000",
    ratedFill: "#FFC000",
    starWidth: "12px",
    spacing: "5px",
  });


  var swiperOne = new Swiper('.featured-product-slider-container', {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.featured-product-slider-button-next',
      prevEl: '.featured-product-slider-button-prev',
    },
  });

  var swiperTwo = new Swiper('.follower-feed-slider-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.follower-feed-slider-button-next',
      prevEl: '.follower-feed-slider-button-prev',
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
$(function () {

  $(".rate-star").rateYo({
    rating: 4.5,
    readOnly: true,
    normalFill: "#FFC000",
    ratedFill: "#FFC000",
    starWidth: "14px",
    spacing: "4px",
  });

  $(".rate-star-sm").rateYo({
    rating: 4.5,
    readOnly: true,
    normalFill: "#FFC000",
    ratedFill: "#FFC000",
    starWidth: "12px",
    spacing: "5px",
  });


  var swiperOne = new Swiper('.featured-products .swiper-container', {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.featured-products__arrows > .swiper-button-prev',
      prevEl: '.featured-products__arrows > .swiper-button-next',
    },
  });

  var swiperTwo = new Swiper('.follower-feed .swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.follower-feed__arrows > .swiper-button-prev',
      prevEl: '.follower-feed__arrows > .swiper-button-next',
    },
  });

  var swiperThree = new Swiper('.testimonial .swiper-container', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 28,
    navigation: {
      nextEl: '.testimonial__control > .swiper-button-prev',
      prevEl: '.testimonial__control > .swiper-button-next',
    },
  });



  var mixer = mixitup('.release-product__inner');

});
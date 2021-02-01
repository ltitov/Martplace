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


  var swiper = new Swiper('.featured-product-slider-container', {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });







  var mixer = mixitup('.release-product__inner');

});
$(function () {

  $(function () {
 
    $(".rate-star").rateYo({
      rating: 4.5,
      readOnly: true,
      starWidth: "14px",
      spacing: "4px"
    });
   
  });

  var swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mixer = mixitup('.products__inner-box');
  
  
  });
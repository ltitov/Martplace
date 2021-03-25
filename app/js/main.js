$(function () {


  // $('.header__btn-menu').on('click', function () {
  //   $('.dropdown__cart, .dropdown__user').toggleClass('active');
  // });

  // Header menu top
  $('.header__btn-menu').on('click', function () {
    $('.dropdown').toggleClass('active');
  });

  // Header menu bottom
  // Hamburger menu rotation
  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
  });
  // Hamburger menu open
  $('.hamburger').on('click', function () {
    $('.menu__list').slideToggle();
  });
  // Hamburger Subtitle open
  $('.nav-dropdown').on('click', function () {
    $(this).toggleClass('active');
  });

  // Rate star for card

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
    pagination: {
      el: '.featured-products .swiper-pagination',
      type: 'bullets',
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
    pagination: {
      el: '.follower-feed .swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      310: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25
      },
      992: {
        slidesPerView: 3
      }
    }
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
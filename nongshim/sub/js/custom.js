 var mySwiper = new Swiper ('#banner .swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
    infinite: true
  });

 var mySwiper = new Swiper2 ('#fbanner .swiper-container', {
    loop: true,
    slidePerView: 2,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

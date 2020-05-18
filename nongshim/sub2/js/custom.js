 var mySwiper = new Swiper ('#banner .swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 5000,
    },
    infinite: true
  });
  
  var mySwiper = new Swiper2 ('#fbanner .swiper-container', {
    loop: true,
    slidePerView: 3,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

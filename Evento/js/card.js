var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: -400,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {

      // when window width is >= 640px
      1621: {
        slidesPerView: 4,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 40
      },

      800: {
        slidesPerView: 2,
        spaceBetween: 40
      },

      485: {
        slidesPerView: 2,
        spaceBetween: 50
      },

      300: {
        slidesPerView: 1,
        spaceBetween:0
      }
    
    }
  });
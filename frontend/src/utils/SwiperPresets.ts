export const SWIPER_PRESETS = {
  products: {
    slidesPerView: 5,
    speed: 500,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
    }
  },
  
  category: {
    slidesPerView: 3,
    speed: 500,
    navigation: {
      nextEl: ".category-carousel-next",
      prevEl: ".category-carousel-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 2,
      },
      1500: {
        slidesPerView: 3,
      },
    }
  },
  
  testimonial: {
    pagination: {
      el: ".testimonial-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      572: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 3,
      },
    }
  }
} as const;
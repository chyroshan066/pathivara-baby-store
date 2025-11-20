export const SWIPER_PRESETS = {
  products: {
    slidesPerView: 5,
    spaceBetween: 30,
    speed: 500,
    navigation: {
                    nextEl: ".products-carousel-next",
                    prevEl: ".products-carousel-prev",
                },
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
  
  // Category carousel configuration
  category: {
    slidesPerView: 3,
    spaceBetween: 30,
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
  
  // Testimonial carousel configuration
//   testimonial: {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       572: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//     }
//   }
} as const;
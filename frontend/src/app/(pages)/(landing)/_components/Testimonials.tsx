// "use client";

// import { TESTIMONIALS } from "@/constants/testimonials";
// import { useSwiper } from "@/hooks/useSwiper";
// import { SWIPER_PRESETS } from "@/utils/SwiperPresets";
// import { memo } from "react";

// export const Testimonials = memo(() => {
//     const swiperRef = useSwiper({
//         ...SWIPER_PRESETS.testimonial
//     });

//     return (
//         <section
//             id="review"
//             className="section-padding pt-0"
//         >
//             <div className="container-lg">
//                 <div
//                     ref={swiperRef}
//                     className="swiper testimonial-Swiper text-center"
//                 >

//                     <div className="swiper-wrapper">
//                         {TESTIMONIALS.map((review, index) => (
//                             <div
//                                 key={index}
//                                 className="swiper-slide"
//                             >
//                                 <p className="review fw-light fs-4">&quot;{review.text}&quot;</p>
//                                 <span className="fw-bold mt-3">{review.name}</span>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="swiper-pagination testimonial-pagination position-relative mt-5" />
//                 </div>
//             </div>
//         </section>
//     )
// });

// Testimonials.displayName = "Testimonials";
















"use client";

import { TESTIMONIALS } from "@/constants/testimonials";
import { useSwiper } from "@/hooks/useSwiper";
import { SWIPER_PRESETS } from "@/utils/SwiperPresets";
import { memo } from "react";

export const Testimonials = memo(() => {
    const shouldCenter = TESTIMONIALS.length < 3;

    const swiperRef = useSwiper({
        ...SWIPER_PRESETS.testimonial,
        // Disable features that interfere with centering when fewer than 3 slides
        ...(shouldCenter && {
            loop: false,
            enabled: false, // Disables Swiper completely, removing transforms
        }),
    });

    // When fewer than 3 testimonials, render without Swiper behavior
    if (shouldCenter) {
        return (
            <section
                id="review"
                className="section-padding pt-0"
            >
                <div className="container-lg">
                    <div className="d-flex justify-content-center gap-5 flex-wrap text-center">
                        {TESTIMONIALS.map((review, index) => (
                            <div
                                key={index}
                                style={{ maxWidth: '400px' }}
                            >
                                <p className="review fw-light fs-4">&quot;{review.text}&quot;</p>
                                <span className="fw-bold mt-3">{review.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section
            id="review"
            className="section-padding pt-0"
        >
            <div className="container-lg">
                <div
                    ref={swiperRef}
                    className="swiper testimonial-Swiper text-center"
                >
                    <div className="swiper-wrapper">
                        {TESTIMONIALS.map((review, index) => (
                            <div
                                key={index}
                                className="swiper-slide"
                            >
                                <p className="review fw-light fs-4">&quot;{review.text}&quot;</p>
                                <span className="fw-bold mt-3">{review.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="swiper-pagination testimonial-pagination position-relative mt-5" />
                </div>
            </div>
        </section>
    )
});

Testimonials.displayName = "Testimonials";
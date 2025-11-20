"use client";

import { TESTIMONIALS } from "@/constants/testimonials";
import { useSwiper } from "@/hooks/useSwiper";
import { SWIPER_PRESETS } from "@/utils/SwiperPresets";
import { memo } from "react";

export const Testimonials = memo(() => {
    const swiperRef = useSwiper({
        ...SWIPER_PRESETS.testimonial
    });

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
                                <p className="review fw-light fs-4">"{review.text}"</p>
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
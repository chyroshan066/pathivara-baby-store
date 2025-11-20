"use client";

import { memo, useEffect, useRef } from "react";
import { RowContainer } from "./utility/RowContainer";
import { SectionHeader } from "./utility/SectionHeader";
import { FEATURED_PRODUCTS } from "@/constants";
import { Card } from "./utility/Card";
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const Featured = memo(() => {
    const swiperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (swiperRef.current) {
            // Initialize Swiper with exact config from script.js
            const productsSwiper = new Swiper(swiperRef.current, {
                modules: [Navigation],
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
            });

            // Cleanup on unmount
            return () => {
                if (productsSwiper) {
                    productsSwiper.destroy(true, true);
                }
            };
        }
    }, []);

    return (
        <section
            id="featured-products"
            className="section-padding pt-0 products-carousel"
        >
            <div className="container-lg overflow-hidden py-5">

                <SectionHeader
                    title="Featured products"
                    btnText="View All"
                    showNavBtn={true}
                    carouselPrefix="products-carousel"
                    btnColor="primary"
                />

                <RowContainer>

                    <div
                        ref={swiperRef}
                        className="swiper"
                    >
                        <div className="swiper-wrapper">

                            {FEATURED_PRODUCTS.map((product, index) => (
                                <Card
                                    key={index}
                                    product={product}
                                    outerDivClassName="swiper-slide"
                                />
                            ))}

                        </div>
                    </div>

                </RowContainer>
            </div>
        </section>
    )
});

Featured.displayName = "Featured";
"use client";

import { memo } from "react";
import { RowContainer } from "./utility/RowContainer";
import { SectionHeader } from "./utility/SectionHeader";
import { FEATURED_PRODUCTS } from "@/constants";
import { Card } from "./utility/Card";
import { useSwiper } from "@/hooks/useSwiper";
import { SWIPER_PRESETS } from "@/utils/SwiperPresets";

export const Featured = memo(() => {
    const swiperRef = useSwiper({
        ...SWIPER_PRESETS.products
    });


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
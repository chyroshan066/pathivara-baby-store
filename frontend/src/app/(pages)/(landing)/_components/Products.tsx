"use client";

import { memo, useId } from "react";
import { useSwiper } from "@/hooks/useSwiper";
import { SWIPER_PRESETS } from "@/utils/SwiperPresets";
import { Product, Title } from "@/types";
import { SectionHeader } from "@/components/utility/SectionHeader";
import { RowContainer } from "@/components/utility/RowContainer";
import { ProductCard } from "@/components/utility/ProductCard/ProductCard";

interface ProductsProps extends Title {
    sectionClassName?: string;
    productArray: Product[];

}

export const Products = memo(({
    title, sectionClassName, productArray
}: ProductsProps) => {
    const uniqueId = useId().replace(/:/g, '-');
    const carouselPrefix = `products-carousel-${uniqueId}`;

    const swiperRef = useSwiper({
        ...SWIPER_PRESETS.products,
        navigation: {
            nextEl: `.${carouselPrefix}-next`,
            prevEl: `.${carouselPrefix}-prev`,
        }
    });


    return (
        <section className={`section-padding products-carousel ${sectionClassName || ''}`}>
            <div className="container-lg overflow-hidden py-5">

                <SectionHeader
                    title={title}
                    showNavBtn={true}
                    carouselPrefix={carouselPrefix}
                    btnColor="primary"
                />

                <RowContainer>

                    <div
                        ref={swiperRef}
                        className="swiper"
                    >
                        <div className="swiper-wrapper">

                            {productArray.map((product, index) => (
                                <ProductCard
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

Products.displayName = "Products";
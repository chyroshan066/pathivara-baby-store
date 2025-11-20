"use client";

import { dmSans } from "@/app/fonts";
import { CATEGORIES } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import styles from "./Categories.module.css";
import { RowContainer } from "../utility/RowContainer";
import { SectionHeader } from "../utility/SectionHeader";
import { SectionContainer } from "../utility/SectionContainer";
import { useSwiper } from "@/hooks/useSwiper";
import { SWIPER_PRESETS } from "@/utils/SwiperPresets";

export const Categories = memo(() => {
    const swiperRef = useSwiper({
        ...SWIPER_PRESETS.category
    });

    return (
        <SectionContainer sectionClassName="overflow-hidden">

            <SectionHeader
                title="Category"
                btnText="View All"
                showNavBtn={true}
            />

            <RowContainer>
                <div
                    ref={swiperRef}
                    className={`swiper ${styles.categoryCarousel}`}
                >
                    <div className="swiper-wrapper">
                        {CATEGORIES.map((category, index) => (
                            <Link
                                key={index}
                                href="#"
                                className="nav-link swiper-slide text-center"
                            >
                                <Image
                                    src={category.imgSrc}
                                    width={300}
                                    height={300}
                                    className="img-fluid"
                                    alt="Category Thumbnail"
                                    style={{
                                        width: '100%',
                                        height: 'auto'
                                    }}
                                />
                                <h4 className={`fs-6 mt-3 fw-normal ${dmSans.className} ${styles.categoryTitle}`}>{category.name}</h4>
                            </Link>
                        ))}
                    </div>
                </div>
            </RowContainer>

        </SectionContainer>
    )
});

Categories.displayName = "Categories";
"use client";

import { dmSans } from "@/app/fonts";
import { CATEGORIES } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useRef } from "react";
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import styles from "./Categories.module.css";
import { RowContainer } from "../utility/RowContainer";
import { SectionHeader } from "../utility/SectionHeader";
import { SectionContainer } from "../utility/SectionContainer";

export const Categories = memo(() => {
    const swiperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (swiperRef.current) {
            // Initialize Swiper with exact config from script.js
            const categorySwiper = new Swiper(swiperRef.current, {
                modules: [Navigation],
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
            });

            // Cleanup on unmount
            return () => {
                if (categorySwiper) {
                    categorySwiper.destroy(true, true);
                }
            };
        }
    }, []);

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
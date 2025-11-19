"use client";

import { dmSans } from "@/app/fonts";
import { CATEGORIES } from "@/constants";
import { Icon, Name } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useRef } from "react";
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import styles from "./Categories.module.css";
import { RowContainer } from "../utility/RowContainer";

interface NavButton extends Icon, Name { }

const NAVBUTTONS: NavButton[] = [
    {
        icon: "❮",
        name: "prev",
    },
    {
        icon: "❯",
        name: "next",
    },
];

export const Categories = memo(() => {
    const swiperRef = useRef(null);

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
        <section className="section-padding overflow-hidden">
            <div className="container-lg">

                <RowContainer>
                    <div className="section-header d-flex flex-wrap justify-content-between mb-3">
                        <h2 className={`section-title text-capitalize ${dmSans.className}`}>Category</h2>

                        <div className="d-flex align-items-center">
                            <Link
                                href="#"
                                className="btn btn-primary me-2"
                            >
                                View All
                            </Link>
                            <div className="swiper-buttons">
                                {NAVBUTTONS.map((btn, index) => (
                                    <button
                                        key={index}
                                        className={`swiper-${btn.name} category-carousel-${btn.name} btn btn-yellow`}>
                                        {btn.icon}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </RowContainer>

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

            </div>
        </section>
    )
});

Categories.displayName = "Categories";
"use client";

import { dmSans } from "@/app/fonts";
import { CATEGORIES } from "@/constants";
import Image from "next/image";
import { memo, useCallback, useEffect, useState } from "react";
import styles from "./Categories.module.css";
import { useSwiper } from "@/hooks/useSwiper";
import { SWIPER_PRESETS } from "@/utils/SwiperPresets";
import { SectionContainer } from "@/components/utility/SectionContainer";
import { SectionHeader } from "@/components/utility/SectionHeader";
import { RowContainer } from "@/components/utility/RowContainer";

export const Categories = memo(() => {
    const swiperRef = useSwiper({
        ...SWIPER_PRESETS.category
    });

    const [modalOpen, setModalOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const openModal = useCallback((index: number) => {
        setActiveIndex(index);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeModal = useCallback(() => {
        setModalOpen(false);
        document.body.style.overflow = '';
    }, []);

    const goToPrev = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev === 0 ? CATEGORIES.length - 1 : prev - 1));
    }, []);

    const goToNext = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev === CATEGORIES.length - 1 ? 0 : prev + 1));
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!modalOpen) return;
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') setActiveIndex((prev) => (prev === 0 ? CATEGORIES.length - 1 : prev - 1));
            if (e.key === 'ArrowRight') setActiveIndex((prev) => (prev === CATEGORIES.length - 1 ? 0 : prev + 1));
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [modalOpen, closeModal]);

    return (
        <SectionContainer
            id="category"
            sectionClassName="overflow-hidden"
        >
            <SectionHeader title="Category" showNavBtn={true} />

            <RowContainer>
                <div ref={swiperRef} className={`swiper ${styles.categoryCarousel}`}>
                    <div className="swiper-wrapper">
                        {CATEGORIES.map((category, index) => (
                            <div key={index} className="nav-link swiper-slide text-center">
                                <div
                                    className={styles.imageWrapper}
                                    onClick={() => openModal(index)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => e.key === 'Enter' && openModal(index)}
                                >
                                    <Image
                                        src={category.imgSrc}
                                        width={300}
                                        height={300}
                                        className={`img-fluid ${styles.categoryImage}`}
                                        alt="Category Thumbnail"
                                    />
                                    <div className={styles.imageOverlay}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8" />
                                            <path d="m21 21-4.3-4.3" />
                                            <path d="M11 8v6" />
                                            <path d="M8 11h6" />
                                        </svg>
                                    </div>
                                </div>
                                <h4 className={`fs-6 mt-3 fw-normal ${dmSans.className} ${styles.categoryTitle}`}>{category.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </RowContainer>

            {/* Modal */}
            {modalOpen && (
                <div className={styles.modal} onClick={closeModal}>
                    {/* Close button - outside modalContent */}
                    <button
                        className={styles.closeBtn}
                        onClick={(e) => { e.stopPropagation(); closeModal(); }}
                        aria-label="Close modal"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                        </svg>
                    </button>

                    {/* Previous button - outside modalContent */}
                    <button
                        className={`${styles.navBtn} ${styles.prevBtn}`}
                        onClick={goToPrev}
                        aria-label="Previous image"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>

                    {/* Next button - outside modalContent */}
                    <button
                        className={`${styles.navBtn} ${styles.nextBtn}`}
                        onClick={goToNext}
                        aria-label="Next image"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>

                    {/* Image container only */}
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={CATEGORIES[activeIndex].imgSrc}
                            width={800}
                            height={800}
                            className={styles.modalImage}
                            alt={CATEGORIES[activeIndex].name}
                            priority
                        />
                        <h3 className={styles.modalTitle}>{CATEGORIES[activeIndex].name}</h3>
                        <p className={styles.modalCounter}>{activeIndex + 1} / {CATEGORIES.length}</p>
                    </div>
                </div>
            )}
        </SectionContainer>
    )
});

Categories.displayName = "Categories";
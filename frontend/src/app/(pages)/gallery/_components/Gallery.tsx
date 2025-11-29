"use client";

import { dmSans } from "@/app/fonts";
import Image from "next/image";
import { memo, useState, useCallback, useEffect } from "react";
import styles from "./Gallery.module.css";
import { SectionContainer } from "@/components/utility/SectionContainer";
import { SectionHeader } from "@/components/utility/SectionHeader";
import { RowContainer } from "@/components/utility/RowContainer";
import { GALLERY } from "@/constants";
import { ChevronLeft, ChevronRight, CloseIcon } from "@/components/utility/IconSprite";

const ZoomIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.overlayIcon}
    >
        <circle
            cx="11"
            cy="11"
            r="8"
        />
        <path d="m21 21-4.3-4.3" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
    </svg>
);

export const Gallery = memo(() => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const openLightbox = useCallback((index: number) => {
        setActiveIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeLightbox = useCallback(() => {
        setLightboxOpen(false);
        document.body.style.overflow = '';
    }, []);

    const goToPrev = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev === 0 ? GALLERY.length - 1 : prev - 1));
    }, []);

    const goToNext = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev === GALLERY.length - 1 ? 0 : prev + 1));
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;

            if (e.key === 'Escape') closeLightbox();

            if (e.key === 'ArrowLeft') setActiveIndex((prev) => (prev === 0 ? GALLERY.length - 1 : prev - 1));

            if (e.key === 'ArrowRight') setActiveIndex((prev) => (prev === GALLERY.length - 1 ? 0 : prev + 1));
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, closeLightbox]);

    return (
        <>
            <SectionContainer
                id="gallery"
                sectionClassName="pt-4"
            >
                <SectionHeader title="Our Gallery" />
                <RowContainer>

                    <div className={styles.galleryGrid}>
                        {GALLERY.map((image, index) => (
                            <div
                                key={index}
                                className={styles.galleryItem}
                                onClick={() => openLightbox(index)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={image.imgSrc}
                                        alt={image.title ? image.title : 'Pathivara Baby Store - Gallery'}
                                        width={300}
                                        height={300}
                                        className={styles.galleryImage}
                                    />
                                    <div className={styles.imageOverlay}>
                                        <ZoomIcon />
                                    </div>
                                </div>
                                <div className={styles.imageCaption}>
                                    <h3 className={`${styles.imageTitle} ${dmSans.className}`}>{image.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                </RowContainer>
            </SectionContainer>

            {lightboxOpen && (
                <div
                    className={styles.lightbox}
                    onClick={closeLightbox}
                >
                    <button
                        className={`${styles.lightboxBtn} ${styles.closeBtn}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            closeLightbox();
                        }}
                        aria-label="Close lightbox"
                    >
                        <CloseIcon />
                    </button>

                    <button
                        className={`${styles.lightboxBtn} ${styles.navBtn} ${styles.prevBtn}`}
                        onClick={goToPrev}
                        aria-label="Previous image"
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        className={`${styles.lightboxBtn} ${styles.navBtn} ${styles.nextBtn}`}
                        onClick={goToNext}
                        aria-label="Next image"
                    >
                        <ChevronRight />
                    </button>

                    <div
                        className={styles.lightboxContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={GALLERY[activeIndex].imgSrc}
                            alt={GALLERY[activeIndex].title ? GALLERY[activeIndex].title : 'Pathivara Baby Store - Gallery'}
                            width={800}
                            height={800}
                            className={styles.lightboxImage}
                            priority
                        />
                        <h3 className={styles.lightboxTitle}>{GALLERY[activeIndex].title}</h3>
                        <p className={styles.lightboxCounter}>{activeIndex + 1} / {GALLERY.length}</p>
                    </div>
                </div>
            )}
        </>
    );
});

Gallery.displayName = "Gallery";
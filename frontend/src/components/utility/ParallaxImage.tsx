"use client";

import { dmSans } from "@/app/fonts";
import { memo, useEffect, useRef } from "react";

export const ParallaxImage = memo(({
    header
}: {
    header: string;
}) => {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const heroElement = heroRef.current;

        if (!heroElement) return;

        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const heroHeight = heroElement.offsetHeight;

            // Only apply parallax if we're within the hero section
            if (scrolled <= heroHeight) {
                const parallaxSpeed = 0.5;
                heroElement.style.backgroundPositionY = `${scrolled * parallaxSpeed}px`;
            }
        };

        // Set initial background position
        heroElement.style.backgroundPositionY = '0px';

        window.addEventListener('scroll', handleScroll, { passive: true });  // With passive - browser scrolls immediately, smoother experience. It helps in performance optimization and won't call preventDefault

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="position-relative"
            style={{
                backgroundImage: "url('/images/banner-1.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "400px"
            }}
        >
            <div className="container-lg">
                <div
                    className="row align-items-center"
                    style={{ minHeight: "400px" }}
                >
                    <div className="col-12">
                        <h1 className={`display-3 text-dark ${dmSans.className}`}>
                            {header}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
});

ParallaxImage.displayName = "ParallaxImage";
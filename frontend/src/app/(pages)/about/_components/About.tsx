"use client";

import { memo, useEffect, useRef } from "react";
import { dmSans } from "@/app/fonts";
import Image from "next/image";
import { SectionContainer } from "@/components/utility/SectionContainer";
import { RowContainer } from "@/components/utility/RowContainer";

export const About = memo(() => {
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
        <>
            {/* Hero Section */}
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
                                About Us
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <SectionContainer sectionClassName="pt-10">
                <RowContainer>
                    <div className="col-12">
                        <p className="fs-5 text-body mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. All of us are also obliged and capable of withstanding it. Outside of the unbound, the pleasures of life are rejected. Consequently, by the advantages of the bodily is not foreseen by those for him be he choose what is of the nature.
                        </p>

                        <p className="fs-5 text-body mb-4">
                            Classes aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam nisi condimentum sed, nam mollis magna, dapibus velit. Phasellus luctus consectetur viverra. This place is to us is set down, one of the most. Mauris sed hendrerit imperdiet, turpis molestie eu, placerat nec tellus rutrum. Cras vehicula consectetur rutrum. Nam sed leo et nisi consequat tincidunt.
                        </p>

                        <p className="fs-5 text-body mb-5">
                            Maecenas tristique varius magna, at convallis nisl accumsan ac. In eu urna id dolor hendrerit faucibus. Nam sed faucibus neque tempus. Sed it chooses to so. Among now all that can and by those who can, quae in it which is the great. But it there chooses to follow the outcome of that other. Class aptent taciti sociosqu ad litora torquent per conubia nostra. In fact, it follows that it is clear to us that all is selected. But it is so that that.
                        </p>
                    </div>
                </RowContainer>
            </SectionContainer>

            {/* Product Images Section */}
            <SectionContainer sectionClassName="mt-n11">
                <RowContainer>
                    <div className="col-12">
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div
                                    className="position-relative"
                                    style={{ aspectRatio: "4/3" }}
                                >
                                    <Image
                                        src="/images/categories/category-thumb-1.jpg"
                                        alt="Orange T-Shirt"
                                        fill
                                        className="img-fluid"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div
                                    className="position-relative"
                                    style={{ aspectRatio: "4/3" }}
                                >
                                    <Image
                                        src="/images/categories/category-thumb-2.jpg"
                                        alt="Black Hoodie"
                                        fill
                                        className="img-fluid"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </RowContainer>
            </SectionContainer>
        </>
    );
});

About.displayName = "About";
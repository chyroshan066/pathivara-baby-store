"use client";

import { memo } from "react";
import Image from "next/image";
import { SectionContainer } from "@/components/utility/SectionContainer";
import { RowContainer } from "@/components/utility/RowContainer";
import { ParallaxImage } from "@/components/utility/ParallaxImage";

export const About = memo(() => (
    <>
        <ParallaxImage header="About Us" />

        {/* Main Content Section */}
        <SectionContainer sectionClassName="pt-10">
            <RowContainer>
                <div className="col-12">
                    {/* Introduction */}
                    <h2 className="h4 fw-bold mb-3">Your Trusted Baby Store in Itahari, Sunsari</h2>
                    <p className="fs-5 text-body mb-4">
                        Welcome to <strong>Pathivara Baby Store</strong> — your one-stop destination for quality baby products in Itahari, Nepal. Located at the heart of <strong>Itahari Chowk, Sunsari</strong>, we have been serving parents and families across the region with a wide selection of baby essentials, from newborns to children up to 14 years old.
                    </p>

                    {/* Why Choose Us */}
                    <h2 className="h4 fw-bold mb-3 mt-5">Why Choose Pathivara Baby Store?</h2>
                    <p className="fs-5 text-body mb-4">
                        At Pathivara Baby Store, we understand that every parent wants the best for their child. That&apos;s why we carefully select each product in our store to ensure quality, comfort, and safety for your little ones. Our convenient location right at Itahari Chowk makes us easily accessible from Dharan, Biratnagar, and surrounding areas of Sunsari district.
                    </p>

                    {/* Products */}
                    <h2 className="h4 fw-bold mb-3 mt-5">Our Products</h2>
                    <p className="fs-5 text-body mb-4">
                        From adorable newborn outfits to comfortable everyday wear for toddlers and kids, we stock a variety of baby clothes suitable for all seasons. Preparing for your baby&apos;s arrival? We offer complete hospital bag sets and maternity essentials to help expecting mothers get ready for the big day.
                    </p>
                    <p className="fs-5 text-body mb-4">
                        We are proud stockists of premium diaper brands trusted by parents across Nepal, including <strong>Awibi</strong>, <strong>Zuvara</strong>, and <strong>Mumbuds</strong> — known for superior absorbency, comfort, and gentle care for your baby&apos;s skin. We also carry wet wipes, baby lotions, feeding bottles, and other daily care essentials.
                    </p>

                    {/* Serving Areas */}
                    <h2 className="h4 fw-bold mb-3 mt-5">Serving Itahari and Beyond</h2>
                    <p className="fs-5 text-body mb-5">
                        While our store is located in Itahari Chowk, we proudly serve customers from across Sunsari district and the greater Koshi Province, including Dharan, Biratnagar, Inaruwa, Duhabi, and Tarahara. Whether you&apos;re a first-time parent or shopping for a baby shower gift, Pathivara Baby Store is here to help you find the perfect products for your little one.
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
                                    src="/images/categories/category-1.webp"
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
                                    src="/images/categories/category-4.webp"
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
));

About.displayName = "About";
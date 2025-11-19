import { memo } from "react";
import { RowContainer } from "./utility/RowContainer";
import { SectionHeader } from "./utility/SectionHeader";
import Link from "next/link";
import { PRODUCTS } from "@/constants/products";
import Image from "next/image";
import { dmSans } from "@/app/fonts";

export const BestSelling = memo(() => (
    <section className="section-padding pt-0">
        <div className="container-lg">

            <SectionHeader
                title="Best selling products"
                btnText="View All"
            />

            <RowContainer>

                <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">

                    {PRODUCTS.map((product, index) => (
                        <div
                            key={index}
                            className="col"
                        >
                            <div className="product-item mb-4">
                                <figure>
                                    <Link
                                        href="#"
                                        title="Product Title"
                                    >
                                        <Image
                                            src={product.imgSrc}
                                            alt="Product Thumbnail"
                                            className="img-fluid"
                                            width={500}
                                            height={500}
                                            style={{
                                                width: '100%',
                                                height: 'auto'
                                            }}
                                        />
                                    </Link>
                                </figure>
                                <div className="d-flex flex-column text-center">
                                    <h3 className={`fs-6 fw-normal ${dmSans.className}`}>{product.name}</h3>
                                    <div className="d-flex justify-content-center align-items-center gap-2">
                                        <del>${product.prevPrice}</del>
                                        <span className="text-dark fw-semibold">${product.discountedPrice}</span>
                                        <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">1{product.discount}% OFF</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>

            </RowContainer>

        </div >
    </section >
));

BestSelling.displayName = "BestSelling";
import { dmSans } from "@/app/fonts";
import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
    product: Product;
    outerDivClassName?: string;
}

export const ProductCard = memo(({
    product, outerDivClassName
}: ProductCardProps) => {
    const { imgSrc, name, prevPrice, discountedPrice, discount } = product;
    return (
        <div className={`mb-4 ${styles.productItem} ${outerDivClassName}`}>
            <figure>
                <Link
                    href="#"
                    title="Product Title"
                >
                    <Image
                        src={imgSrc}
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
                <h3 className={`fs-6 fw-normal ${dmSans.className}`}>{name}</h3>
                <div className="d-flex justify-content-center align-items-center gap-2">
                    <del>${prevPrice}</del>
                    <span className="text-dark fw-semibold">${discountedPrice}</span>
                    <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">1{discount}% OFF</span>
                </div>
            </div>
        </div>
    )
});

ProductCard.displayName = "ProductCard";
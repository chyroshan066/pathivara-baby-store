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
    const { imgSrc, name } = product;
    // const { imgSrc, name, prevPrice, discountedPrice, discount } = product;
    return (
        <div className={`mb-4 ${styles.productItem} ${outerDivClassName}`}>
            <figure>
                <div className={styles.imageWrapper}>
                    <Image
                        src={imgSrc}
                        alt="Product Thumbnail"
                        className={styles.productImage}
                        width={500}
                        height={500}
                    />
                </div>
            </figure>
            <div className={`d-flex flex-column text-center ${styles.productInfo}`}>
                <h3 className={`fs-6 fw-normal ${dmSans.className}`}>{name}</h3>
                {/* <div className="d-flex justify-content-center align-items-center gap-2">
                    <del>${prevPrice}</del>
                    <span className="text-dark fw-semibold">${discountedPrice}</span>
                    <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">1{discount}% OFF</span>
                </div> */}
            </div>
        </div>
    )
});

ProductCard.displayName = "ProductCard";
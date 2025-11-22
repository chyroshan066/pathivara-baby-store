import { memo } from "react";
import Link from "next/link";
import { ImgSrc, Text, Title } from "@/types";
import styles from "./BannerAd.module.css";
import { SectionContainer } from "@/components/utility/SectionContainer";
import { RowContainer } from "@/components/utility/RowContainer";

interface BannerDetailProps extends Title, Text { }
interface Banner extends BannerDetailProps, ImgSrc { }

const BANNERS: Banner[] = [
    {
        title: "Combo offers",
        text: "Discounts up to 50%",
        imgSrc: "/images/banner/banner-ad-2.jpg",
    },
];

const BannerDetail = memo(({
    title, text
}: BannerDetailProps) => (
    <div className="content-wrapper text-light">
        <h3 className="banner-title text-light">{title}</h3>
        <p>{text}</p>
        <Link
            href="#"
            className={`text-white ${styles.btnLink}`}
        // className="text-white 
        >Shop Now</Link>
    </div>
));

BannerDetail.displayName = "BannerDetail";

export const BannerAd = memo(() => (
    <SectionContainer divClassName="container-fluid">

        <RowContainer>

            <div className={styles.bannerBlocks}>

                <div
                    className={`banner-ad d-flex align-items-center large bg-info ${styles.block1}`}
                    style={{
                        background: "url('/images/banner/banner-ad-1.jpg') no-repeat",
                        backgroundSize: "cover"
                    }}
                >
                    <div className="banner-content p-5">
                        <BannerDetail
                            title="Items on SALE"
                            text="Discounts up to 30%"
                        />
                    </div>
                </div>

                {BANNERS.map((detail, index) => (
                    <div
                        key={index}
                        className={`banner-ad bg-success-subtle ${styles.block2}`}
                        style={{
                            background: `url(${detail.imgSrc}) no-repeat`,
                            backgroundSize: "cover"
                        }}
                    >
                        <div className="banner-content align-items-center p-5">
                            <BannerDetail
                                title={detail.title}
                                text={detail.text}
                            />
                        </div>
                    </div>
                ))}

            </div >

        </RowContainer >

    </SectionContainer >
));

BannerAd.displayName = "BannerAd";
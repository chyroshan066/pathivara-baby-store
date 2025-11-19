import { memo } from "react";
import { RowContainer } from "./utility/RowContainer";
import { SectionContainer } from "./utility/SectionContainer";
import Link from "next/link";
import { ImgSrc, Text, Title } from "@/types";

interface BannerDetailProps extends Title, Text { }
interface Banner extends BannerDetailProps, ImgSrc { }

const BANNERS: Banner[] = [
    {
        title: "Combo offers",
        text: "Discounts up to 50%",
        imgSrc: "/images/banner/banner-ad-2.jpg",
    },
    {
        title: "Discount Coupons",
        text: "Discounts up to 40%",
        imgSrc: "/images/banner/banner-ad-3.jpg",
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
            className="btn-link text-white"
        >Shop Now</Link>
    </div>
));

BannerDetail.displayName = "BannerDetail";

export const BannerAd = memo(() => (
    <SectionContainer divClassName="container-fluid">

        <RowContainer>

            <div className="banner-blocks">

                <div
                    className="banner-ad d-flex align-items-center large bg-info block-1"
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
                        className="banner-ad bg-success-subtle block-2"
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

            </div>

        </RowContainer>

    </SectionContainer>
));

BannerAd.displayName = "BannerAd";
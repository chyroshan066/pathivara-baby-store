import { memo } from "react";
import { RowContainer } from "./RowContainer";
import { dmSans } from "@/app/fonts";
import Link from "next/link";
import { Icon, Name, Title } from "@/types";

interface NavButton extends Icon, Name { }

interface SectionHeaderProps extends Title {
    showNavBtn?: boolean;
    carouselPrefix?: string;
    btnColor?: string;
}

const NAVBUTTONS: NavButton[] = [
    {
        icon: "❮",
        name: "prev",
    },
    {
        icon: "❯",
        name: "next",
    },
];


export const SectionHeader = memo(({
    title,
    showNavBtn = false,
    carouselPrefix = "category-carousel",
    btnColor = "primary"
}: SectionHeaderProps) => (
    <RowContainer>

        <div className="section-header d-flex flex-wrap justify-content-between mb-3">
            <h2 className={`section-title text-capitalize ${dmSans.className}`}>{title}</h2>
            <div className="d-flex align-items-center">
                {/* <Link
                    href="#"
                    className="btn btn-primary me-2"
                >
                    View All
                </Link> */}

                {showNavBtn && (<div className="swiper-buttons">
                    {NAVBUTTONS.map((btn, index) => (
                        <button
                            key={index}
                            className={`swiper-${btn.name} ${carouselPrefix}-${btn.name} btn btn-${btnColor}`}>
                            {btn.icon}
                        </button>
                    ))}
                </div>)}

            </div>
        </div>

    </RowContainer>
));

SectionHeader.displayName = "SectionHeader";
import { memo } from "react";
import { RowContainer } from "./utility/RowContainer";
import { SectionHeader } from "./utility/SectionHeader";
import { BEST_SELLING } from "@/constants/products";
import { SectionContainer } from "./utility/SectionContainer";
import { Card } from "./utility/Card";

export const BestSelling = memo(() => (
    <SectionContainer>

        <SectionHeader
            title="Best selling products"
            btnText="View All"
        />

        <RowContainer>

            <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">

                {BEST_SELLING.map((product, index) => (
                    <div
                        key={index}
                        className="col"
                    >
                        <Card product={product} />
                    </div>
                ))}


            </div>

        </RowContainer>

    </SectionContainer>
));

BestSelling.displayName = "BestSelling";
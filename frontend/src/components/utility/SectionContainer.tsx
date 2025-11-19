import { Children } from "@/types";
import { memo } from "react";

interface SectionContainerProps extends Children {
    sectionClassName?: string;
    divClassName?: string;
}

export const SectionContainer = memo(({
    children,
    sectionClassName = "pt-0",
    divClassName = "container-lg"
}: SectionContainerProps) => (
    <section className={`section-padding ${sectionClassName}`}>
        <div className={divClassName}>
            {children}
        </div>
    </section>
));

SectionContainer.displayName = "SectionContainer";
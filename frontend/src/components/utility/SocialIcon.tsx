import { Icon } from "@/types";
import { memo } from "react";

export const SocialIcon = memo(({
    icon
}: Icon) => (
    <svg
        width="16"
        height="16"
    >
        <use xlinkHref={`#${icon}`} />
    </svg>
));

SocialIcon.displayName = "SocialIcon";
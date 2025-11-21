import { dmSans } from "@/app/fonts";
import { SOCIALLINKS } from "@/constants/social-links";
import { memo } from "react";
import styles from "./Contact.module.css";

const ITEMS: string[] = [
    "730 Glenstone Ave 65802, Springfield, US",
    "+123 987 321",
    "+123 123 654",
    "info@pathivarababystore.com"
];

export const ContactInfo = memo(() => {
    return (
        <div>
            <p className="text-muted mb-4">
                Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.
            </p>

            <div className="mb-5">
                <h4 className={`fs-3 fw-bold mb-3 ${dmSans.className}`}>
                    Store
                </h4>
                <ul className="list-unstyled">
                    {ITEMS.map((item, itemIndex) => (
                        <li
                            key={itemIndex}
                            className="mb-2"
                        >
                            <a href="">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Social Links */}
            <div className="mt-4">
                <ul className="d-flex list-unstyled gap-2">
                    {SOCIALLINKS.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.href}
                                className={`btn btn-outline-light border-secondary text-dark ${styles.socialLinkHover}`}
                                aria-label={link.name}
                            >
                                <svg
                                    width="16"
                                    height="16"
                                >
                                    <use xlinkHref={`#${link.name}`} />
                                </svg>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
});

ContactInfo.displayName = "ContactInfo";
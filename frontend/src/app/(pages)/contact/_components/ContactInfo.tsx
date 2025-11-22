import { dmSans } from "@/app/fonts";
import { SOCIALLINKS } from "@/constants/social-links";
import { memo } from "react";
import styles from "./Contact.module.css";
import { SocialIcon } from "@/components/utility/SocialIcon";
import { CONTACT } from "@/constants";

export const ContactInfo = memo(() => {
    return (
        <div>
            <p className="text-muted mb-4">
                Have questions about our baby products or need help finding the perfect item for your little one? We'd love to hear from you! Visit us at our store in Itahari Chowk or reach out using the contact form — our friendly team is here to help.
            </p>

            <div className="mb-5">
                <h4 className={`fs-3 fw-bold mb-3 ${dmSans.className}`}>
                    Store
                </h4>
                <ul className="list-unstyled">
                    {CONTACT.map((contact, index) => (
                        <li
                            key={index}
                            className="mb-2"
                        >
                            <a href={contact.href}>{contact.text}</a>
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
                                <SocialIcon icon={link.name} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
});

ContactInfo.displayName = "ContactInfo";
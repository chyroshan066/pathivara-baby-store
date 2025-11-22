import type { Metadata } from "next";
import { Contact } from "./_components/Contact";
import { baseURL } from "@/constants";

export const metadata: Metadata = {
    title: "Contact Us - Pathivara Baby Store | Get in Touch",
    description: "Contact Pathivara Baby Store for any queries, support, or feedback. Visit our store in Itahari or reach out via phone, email, or our contact form.",
    keywords: [
        "contact Pathivara Baby Store",
        "baby store Itahari contact",
        "customer support",
        "store location Itahari",
        "get in touch",
    ],
    openGraph: {
        title: "Contact Us - Pathivara Baby Store",
        description: "Get in touch with Pathivara Baby Store for any assistance or queries.",
        url: `${baseURL}/contact`,
        images: [
            {
                url: `${baseURL}/images/preview.webp`,
                width: 1200,
                height: 630,
                alt: "Contact Pathivara Baby Store - Premium Baby Products & Essentials",
            }
        ],
    },
};

export default function ContactPage() {
    return <Contact />;
}
import { Metadata } from "next";
import { About } from "./_components/About";
import { baseURL } from "@/constants";

export const metadata: Metadata = {
    title: "About Us - Pathivara Baby Store",
    description: "Learn more about Pathivara Baby Store, our mission, values, and commitment to providing quality baby products in Itahari. Discover our story and dedicated team.",
    keywords: [
        "about Pathivara Baby Store",
        "baby store Itahari",
        "our mission",
        "baby products",
        "quality baby items",
        "trusted baby store",
    ],
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Us - Pathivara Baby Store",
        description: "Learn more about Pathivara Baby Store and our commitment to providing quality baby products.",
        url: `${baseURL}/about`,
        images: [
            {
                url: `${baseURL}/images/preview.webp`,
                width: 1200,
                height: 630,
                alt: "Pathivara Baby Store Team - Premium Baby Products & Essentials",
            }
        ],
    },
};

export default function AboutPage() {
    return (
        <>
            <main>
                <About />
            </main>
        </>
    );
}
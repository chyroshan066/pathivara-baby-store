import { Metadata } from "next";
import { Gallery } from "./_components/Gallery";
import { baseURL } from "@/constants";

export const metadata: Metadata = {
    title: "Gallery - Pathivara Baby Store | Photos of Our Baby Products Shop in Itahari",
    description: "Explore the gallery of Pathivara Baby Store in Itahari Chowk, Sunsari, Nepal. View photos of our baby store, product displays, baby clothes, toys, feeding essentials, nursery items, and our wide collection of quality baby products.",
    keywords: [
        "Pathivara Baby Store gallery",
        "baby store photos Itahari",
        "baby shop images Sunsari",
        "baby products gallery Nepal",
        "baby store pictures Itahari Chowk",
        "baby shop gallery Sunsari",
        "baby clothes display Itahari",
        "baby products showcase Nepal",
        "baby store interior Itahari",
        "baby shop tour Sunsari",
        "baby essentials photos Nepal",
        "baby products display Itahari",
        "nursery items gallery Sunsari",
        "baby toys showcase Itahari",
        "baby store collection photos",
        "infant products gallery Nepal",
        "baby accessories display Itahari",
        "baby care products photos Sunsari",
        "baby store showcase Itahari Chowk",
        "baby products catalog Nepal"
    ],
    alternates: {
        canonical: "/gallery",
    },
    openGraph: {
        title: "Gallery - Pathivara Baby Store | See Our Baby Products Collection",
        description: "Browse photos from Pathivara Baby Store in Itahari Chowk, Sunsari, Nepal. See our store, explore our product displays, and view our wide range of quality baby essentials and accessories.",
        url: `${baseURL}/gallery`,
        images: [
            {
                url: `${baseURL}/images/preview.webp`,
                width: 1200,
                height: 630,
                alt: "Pathivara Baby Store Gallery - Baby Products Photos in Itahari, Sunsari, Nepal",
            }
        ],
    },
};

export default function GalleryPage() {
    return <Gallery />;
}
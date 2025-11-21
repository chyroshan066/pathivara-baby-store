import { Metadata } from "next";
import { About } from "./_components/About";

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
    openGraph: {
        title: "About Us - Pathivara Baby Store",
        description: "Learn more about Pathivara Baby Store and our commitment to providing quality baby products.",
        type: "website",
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
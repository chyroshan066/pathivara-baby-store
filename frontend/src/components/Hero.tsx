import { dmSans } from "@/app/layout";
import { Icon, Text, Title } from "@/types";
import Link from "next/link";
import { memo } from "react";

interface HeroDetail extends Title, Text, Icon { }

const HERODETAILS: HeroDetail[] = [
    {
        title: "Product Varieties",
        text: "Explore a diverse range of clothing styles, from trendy casual wears.",
        icon: "#bag-heart",
    },
    {
        title: "Happy Customers",
        text: "Join thousands of satisfied customers who love shopping with us!",
        icon: "#hand-stars",
    },
    {
        title: "Free delivery",
        text: "Enjoy hassle-free shopping with our free delivery service!",
        icon: "#delivery",
    },
];

export const Hero = memo(() => (
    <section style={{
        backgroundImage: "url('/images/banner-1.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }}>
        <div className="container-lg">
            <div className="row">
                <div className="col-lg-6 py-5 my-5">
                    <h2 className={`display-2 text-capitalize ${dmSans.className}`}>
                        <span className="fw-medium">
                            Discover </span>the latest <span className="fw-medium text-primary">fashion trends
                        </span>
                    </h2>
                    <p className="fs-5">Whether you're looking for casual wear, formal attire, or seasonal outfits, we have something for everyone.</p>
                    <div className="d-flex gap-3">
                        <Link
                            href="#"
                            className="btn btn-dark text-uppercase fs-6 rounded-pill px-5 py-4 mt-3"
                        >
                            Start Shopping
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-3 g-0 justify-content-center shadow">
                {HERODETAILS.map((detail, index) => (
                    <div
                        key={index}
                        className="col d-flex"
                    >
                        <div className={`card border-0 ${index === 1 && " border-light-subtle border-start border-end"} bg-white rounded-0 p-5 text-dark w-100`}>
                            <div className="row">
                                <div className="col-lg-3 text-center">
                                    <svg
                                        width="60"
                                        height="60"
                                    >
                                        <use xlinkHref={detail.icon} />
                                    </svg>
                                </div>
                                <div className="col-lg-9">
                                    <div className="card-body p-0">
                                        <h5 className={dmSans.className}>{detail.title}</h5>
                                        <p className="card-text">{detail.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
));

Hero.displayName = "Hero";
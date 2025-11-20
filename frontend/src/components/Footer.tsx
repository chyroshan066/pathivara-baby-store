import { NAVLINKS } from "@/constants";
import { SOCIALLINKS } from "@/constants/social-links";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

export const Footer = memo(() => {
    return (
        <>
            <footer className="bg-dark text-light section-padding pb-5">
                <div className="container-lg">
                    <div className="row justify-content-between">

                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0">
                            <div className="footer-menu">
                                <Image
                                    src="/images/logo/logo-white.svg"
                                    width={240}
                                    height={70}
                                    alt="logo"
                                />
                                <div className="social-links mt-3">
                                    <ul className="d-flex list-unstyled gap-2">
                                        {SOCIALLINKS.map((link, index) => (
                                            <li key={index}>
                                                <a
                                                    href={link.href}
                                                    className="btn btn-outline-light"
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
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6 mb-4 mb-lg-0">
                            <div className="footer-menu">
                                <h5 className="widget-title text-light">Quick Links</h5>
                                <ul className="menu-list list-unstyled">
                                    {NAVLINKS.map((link, index) => (
                                        <li
                                            key={index}
                                            className="menu-item"
                                        >
                                            <Link
                                                href={link.href}
                                                className="nav-link"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 mb-4 mb-lg-0">
                            <div className="footer-menu">
                                <h5 className="widget-title text-light">Subscribe Us</h5>
                                <p>Subscribe to our newsletter to get updates about our grand offers.</p>
                                <form className="d-flex mt-3 gap-0" action="index.html">
                                    <input className="form-control rounded-start rounded-0 bg-light" type="email" placeholder="Email Address" aria-label="Email Address" />
                                    <button className="btn btn-primary rounded-end rounded-0" type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>

            <div
                id="footer-bottom"
                className="bg-dark text-light py-5"
            >
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-6 copyright">
                            <p>© 2025 Pathivara Baby Store. All rights reserved.</p>
                        </div>
                        <div className="col-md-6 credit-link text-start text-md-end">
                            <p>Designed by <a href="https://github.com/chyroshan066" className="text-light" target="_blank">Roshan</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
});

Footer.displayName = "Footer";
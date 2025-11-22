import { inter } from "@/app/fonts";
import { NAVLINKS } from "@/constants";
import Link from "next/link";
import { memo } from "react";

export const Header = memo(() => {
    return (
        <header>
            <div className="container-fluid">
                <div className="row py-4 align-items-center">

                    <div className="col-12 d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center gap-3">
                        <div className="d-flex align-items-center">
                            <Link
                                href="/"
                                className="text-decoration-none"
                            >
                                <span
                                    style={{
                                        fontSize: '1.75rem',
                                        fontWeight: 600,
                                        color: '#333',
                                        letterSpacing: '-0.02em'
                                    }}
                                    className={inter.className}
                                >
                                    Pathivara Baby Store
                                </span>
                            </Link>
                        </div>

                        <nav>
                            <ul className="navbar-nav list-unstyled d-flex flex-row gap-3 gap-lg-5 mb-0 fw-bold text-uppercase text-dark flex-nowrap">
                                {NAVLINKS.map((link, index) => (
                                    <li
                                        key={index}
                                        className="nav-item active"
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
                        </nav>
                    </div>

                </div>
            </div>
        </header>
    )
});

Header.displayName = "Header";
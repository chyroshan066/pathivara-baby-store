"use client";

import { dmSans, inter } from "@/app/fonts";
import { NAVLINKS } from "@/constants";
import { SOCIALLINKS } from "@/constants/social-links";
import Link from "next/link";
import { memo, useMemo } from "react";
import { SocialIcon } from "../utility/SocialIcon";
import { ErrorMessage, InputField } from "../utility/InputField";
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { SubscriptionFormData, SubscriptionFormSchema } from "@/middlewares/schema";
import { onSubscriptionSubmit } from "@/utils/subscriptionData";
import { SubmitButton } from "../utility/SubmitButton";
import styles from "./Footer.module.css";
import { Alert } from "../Alert";

const initialSubscriptionValues: SubscriptionFormData = {
    email: "",
};

export const Footer = memo(() => {
    const {
        register,
        formState: {
            errors,
            isSubmitting
        },
        onFormSubmit,
        isButtonDisabled,
        alertState,
        hideAlert,
    } = useFormSubmission<SubscriptionFormData>({
        schema: SubscriptionFormSchema,
        defaultValues: initialSubscriptionValues,
        onSubmit: onSubscriptionSubmit,
        successMessage: "Thank you for subscribing! You'll receive our latest news and offers.",
        successTitle: "Subscribed!",
        errorTitle: "Subscription Failed",
        errorMessage: "Something went wrong while subscribing. Please try again.",
    });

    const buttonText = useMemo(
        () => isSubmitting ? "Subscribing..." : "Subscribe",
        [isSubmitting]
    );

    return (
        <>
            <Alert
                type={alertState.type}
                title={alertState.title}
                message={alertState.message}
                isVisible={alertState.isVisible}
                onDismiss={hideAlert}
                autoDismiss={true}
                autoDismissDelay={6000}
                className="sm:max-w-md"
            />

            <footer className="bg-dark text-light section-padding pb-5">
                <div className="container-lg">
                    <div className="row justify-content-between">

                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0">
                            <div className="footer-menu">
                                <Link
                                    href="/"
                                    className="text-decoration-none"
                                >
                                    <span
                                        style={{
                                            fontSize: '1.75rem',
                                            fontWeight: 600,
                                            color: '#fff',
                                            letterSpacing: '-0.02em'
                                        }}
                                        className={inter.className}
                                    >
                                        Pathivara Baby Store
                                    </span>
                                </Link>

                                <div className="social-links mt-3">
                                    <ul className="d-flex list-unstyled gap-2">
                                        {SOCIALLINKS.map((link, index) => (
                                            <li key={index}>
                                                <a
                                                    href={link.href}
                                                    className="btn btn-outline-light"
                                                >
                                                    <SocialIcon icon={link.name} />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6 mb-4 mb-lg-0">
                            <div className="footer-menu">
                                <h5 className={`widget-title text-light ${dmSans.className}`}>Quick Links</h5>
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
                                <h5 className={`widget-title text-light ${dmSans.className}`}>Subscribe Us</h5>
                                <p>Subscribe to our newsletter to get updates about our grand offers.</p>

                                <form
                                    className="d-flex mt-3 gap-0"
                                    onSubmit={onFormSubmit}
                                    noValidate
                                >
                                    <div>
                                        <div className="d-flex">
                                            <InputField
                                                id="email"
                                                placeholder="Your Email"
                                                register={register("email")}
                                                error={errors.email?.message}
                                                disabled={isSubmitting}
                                                className="form-control rounded-start rounded-0 bg-light"
                                                showError={false}
                                            />
                                            <SubmitButton
                                                isButtonDisabled={isButtonDisabled}
                                                btnText={buttonText}
                                                className="rounded-end rounded-0"
                                            />
                                        </div>

                                        <div className={styles.errorContainer}>
                                            {errors.email?.message && <ErrorMessage message={errors.email.message} />}
                                        </div>
                                    </div>
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
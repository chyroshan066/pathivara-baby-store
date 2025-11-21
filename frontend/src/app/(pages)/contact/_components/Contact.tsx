import { dmSans } from "@/app/fonts";
import { RowContainer } from "@/components/utility/RowContainer";
import { SectionContainer } from "@/components/utility/SectionContainer";
import { memo } from "react";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { ParallaxImage } from "@/components/utility/ParallaxImage";

export const Contact = memo(() => {
    return (
        <>
            <ParallaxImage header="Contact Us" />

            {/* Contact Section */}
            <SectionContainer sectionClassName="pt-10">
                <RowContainer>
                    <div className="row g-5">
                        {/* Contact Information */}
                        <div className="col-lg-5">
                            <ContactInfo />
                        </div>

                        {/* Contact Form */}
                        <div className="col-lg-7">
                            <ContactForm />
                        </div>
                    </div>
                </RowContainer>
            </SectionContainer>

            {/* Map Section */}
            <section className="container-fluid px-0 mb-n1">
                <div className="row g-0">
                    <div className="col-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Store Location"
                        />
                    </div>
                </div>
            </section>
        </>
    );
});

Contact.displayName = "Contact";
"use client";

import { dmSans } from "@/app/fonts";
import { InputField } from "@/components/utility/InputField";
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { ContactFormData, ContactFormSchema } from "@/middlewares/schema";
import { onSubmit } from "@/utils/contactData";
import { memo, useMemo } from "react";

const initialValues: ContactFormData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
};

export const ContactForm = memo(() => {
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
    } = useFormSubmission<ContactFormData>({
        schema: ContactFormSchema,
        defaultValues: initialValues,
        onSubmit: onSubmit,
        successMessage: "Thank you! Your message has been sent. We look forward to serving you.",
        successTitle: "Message Sent!",
        errorTitle: "Sending Failed",
        errorMessage: "Something went wrong while sending your message. Please try again.",
    });

    const buttonText = useMemo(
        () => isSubmitting ? "Sending..." : "Send Message",
        [isSubmitting]
    );

    return (
        <>
            <h3 className={`fs-2 fw-bold mb-2 ${dmSans.className}`}>
                Get in Touch
            </h3>
            <p className="text-muted mb-4">
                Use the form below to get in touch with us
            </p>

            <form
                onSubmit={onFormSubmit}
                noValidate
            >
                <div className="row g-3">
                    {/* Name Field */}
                    <div className="col-md-6">
                        <InputField
                            id="name"
                            placeholder="Your Name"
                            register={register("name")}
                            error={errors.name?.message}
                            disabled={isSubmitting}
                        />
                    </div>

                    {/* Email Field */}
                    <div className="col-md-6">
                        <InputField
                            id="email"
                            placeholder="Write Your Email Here"
                            register={register("email")}
                            error={errors.email?.message}
                            disabled={isSubmitting}
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="col-md-12">
                        <InputField
                            id="phone"
                            type="tel"
                            placeholder="Phone Number"
                            register={register("phone")}
                            error={errors.phone?.message}
                            disabled={isSubmitting}
                        />
                    </div>

                    {/* Subject */}
                    <div className="col-md-12">
                        <InputField
                            id="subject"
                            placeholder="Write Your Subject Here"
                            register={register("subject")}
                            error={errors.subject?.message}
                            disabled={isSubmitting}
                        />
                    </div>

                    {/* Message */}
                    <div className="col-12">
                        <InputField
                            id="message"
                            placeholder="Write Your Message Here"
                            register={register("message")}
                            isTextarea={true}
                            error={errors.message?.message}
                            disabled={isSubmitting}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="col-12">
                        <button
                            type="submit"
                            className="btn btn-primary w-100 py-3 text-uppercase"
                            style={{ letterSpacing: '2px' }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
});

ContactForm.displayName = "ContactForm";
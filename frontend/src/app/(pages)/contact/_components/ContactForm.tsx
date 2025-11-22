"use client";

import { dmSans } from "@/app/fonts";
import { Alert } from "@/components/Alert";
import { InputField } from "@/components/utility/InputField";
import { SubmitButton } from "@/components/utility/SubmitButton";
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { ContactFormData, ContactFormSchema } from "@/middlewares/schema";
import { onSubmit } from "@/utils/contactData";
import { memo, useMemo } from "react";

interface Field {
    id: "name" | "email" | "phone" | "subject" | "message";
    placeholder: string;
}

const FIELDS: Field[] = [
    {
        id: "name",
        placeholder: "Your Name",
    },
    {
        id: "email",
        placeholder: "Write Your Email Here",
    },
    {
        id: "phone",
        placeholder: "Phone Number",
    },
    {
        id: "subject",
        placeholder: "Write Your Subject Here",
    },
    {
        id: "message",
        placeholder: "Write Your Message Here",
    },
];

const getColClass = (id: string) => {
    if (id === "message") return "col-12";

    if (id === "name" || id === "email") return "col-md-6";

    return "col-md-12";
};

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
        () => isSubmitting ? "Submitting..." : "Submit",
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

                    {FIELDS.map((field, index) => (
                        <div
                            key={index}
                            className={getColClass(field.id)}
                        >
                            <InputField
                                id={field.id}
                                type={field.id === "phone" ? "tel" : "text"}
                                placeholder={field.placeholder}
                                register={register(field.id)}
                                isTextarea={field.id === "message" ? true : false}
                                error={errors[field.id]?.message}
                                disabled={isSubmitting}
                            />
                        </div>
                    ))}

                    {/* Submit Button */}
                    <div className="col-12">
                        <SubmitButton
                            isButtonDisabled={isButtonDisabled}
                            btnText={buttonText}
                        />
                    </div>
                </div>
            </form>
        </>
    );
});

ContactForm.displayName = "ContactForm";
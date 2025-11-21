"use client";

import { dmSans } from "@/app/fonts";
import { memo } from "react";

export const ContactForm = memo(() => {

    return (
        <>
            <h3 className={`fs-2 fw-bold mb-2 ${dmSans.className}`}>
                Get in Touch
            </h3>
            <p className="text-muted mb-4">
                Use the form below to get in touch with us
            </p>

            <form
            // onSubmit={handleSubmit}
            >
                <div className="row g-3">
                    {/* Name Field */}
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Write Your Name Here"
                            // value={formData.name}
                            // onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="col-md-6">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Write Your Email Here"
                            // value={formData.email}
                            // onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="col-md-12">
                        <input
                            type="tel"
                            name="phone"
                            className="form-control"
                            placeholder="Phone Number"
                        // value={formData.phone}
                        // onChange={handleChange}
                        />
                    </div>

                    {/* Subject */}
                    <div className="col-md-12">
                        <input
                            type="text"
                            name="subject"
                            className="form-control"
                            placeholder="Write Your Subject Here"
                            // value={formData.subject}
                            // onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Message */}
                    <div className="col-12">
                        <textarea
                            name="message"
                            className="form-control"
                            style={{ resize: 'none' }}
                            rows={6}
                            placeholder="Write Your Message Here"
                            // value={formData.message}
                            // onChange={handleChange}
                            required
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
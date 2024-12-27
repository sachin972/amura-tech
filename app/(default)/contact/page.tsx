import Image from "next/image";

export default function ContactUs() {
    return (
        <section>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Section header */}
                <div className="pb-12 text-center md:pb-20">
                    <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-yellow-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-yellow-200/50">
                        <span className="inline-flex bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
                            Get in Touch
                        </span>
                    </div>
                    <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.yellow.200),theme(colors.gray.50),theme(colors.yellow.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                        We'd Love to Hear From You
                    </h2>
                    <p className="text-lg text-yellow-200/65">
                        Whether you have questions, feedback, or need
                        assistance, feel free to reach out. We're here to help!
                    </p>
                </div>

                {/* Contact Form */}
                <div className="grid gap-12 md:grid-cols-2">
                    {/* Form */}
                    <div>
                        <form>
                            <div className="mb-6">
                                <label
                                    className="block text-sm font-medium text-yellow-200/80"
                                    htmlFor="name"
                                >
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="block text-sm font-medium text-yellow-200/80"
                                    htmlFor="email"
                                >
                                    Your Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="block text-sm font-medium text-yellow-200/80"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    placeholder="Write your message"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="btn w-full bg-gradient-to-t from-yellow-600/40 to-yellow-500 text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold text-yellow-200">
                                Our Office
                            </h3>
                            <p className="text-yellow-200/70">
                                NCR – 108, Tower 3 , Park View Residency 122003
                                <br />
                                Banglore - Falcon Towers , Ejipura , Kormangala
                                , Bangalore 560047
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-yellow-200">
                                Email Us
                            </h3>
                            <p className="text-yellow-200/70">
                                contact@theajai.com
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-yellow-200">
                                Call Us
                            </h3>
                            <p className="text-yellow-200/70">
                                +91 (777)608-2238
                            </p>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16">
                    <iframe
                        className="w-full h-64 rounded-lg border border-gray-700"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509217!2d-122.40141168468377!3d37.7936145797571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f74fce1e7%3A0x4c1babc7c15e7743!2sAI%20Tech%20Hub!5e0!3m2!1sen!2sus!4v1673634884512!5m2!1sen!2sus"
                        allowFullScreen={true}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

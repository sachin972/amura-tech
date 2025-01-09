import React from "react";
import { Link } from "react-router-dom";
import Departments from "../../components/departments";

export default function Careers() {
    return (
        <>
            <section className=" text-yellow-200">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    {/* Section Header */}
                    <div className="pb-12 text-center md:pb-20 ">
                        <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-yellow-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-yellow-200/50">
                            <span
                                className="inline-flex bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent"
                                data-aos="fade-up"
                            >
                                Careers | AJAI
                            </span>
                        </div>
                        <h2
                            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.yellow.200),theme(colors.gray.50),theme(colors.yellow.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            At AJAI <br /> Different disciplines collaborate to
                            design beautifully simple solutions.
                        </h2>
                    </div>

                    {/* Content Section */}
                    <div className="bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 rounded-lg p-8 shadow-lg text-center">
                        <h3 className="text-2xl font-semibold text-yellow-200">
                            Find Your Place At AJAI
                        </h3>
                        <p className="mt-4 text-yellow-200/80">
                            Ever wonder what it’s like to be a team player at
                            AJAI ? If you’re looking to actively seek out job
                            check out the career opportunities in multiple
                            fields at AJAI.
                        </p>
                        <p className="mt-2 text-yellow-200/80">
                            Get hands-on experience in creating and managing
                            online campaigns with AJAI.
                        </p>
                        <span
                            // href="/careers" // Replace with the actual link to the openings
                            className="mt-6 inline-block rounded bg-yellow-500/30 px-6 py-2 text-gray-900 cursor-default "
                        >
                            Get in Touch
                        </span>
                        <p className="mt-4 text-yellow-200/80">
                            <strong>Email:</strong>{" "}
                            <Link
                                to="mailto:careers@theajai.com"
                                className="text-yellow-500 hover:underline"
                            >
                                careers@theajai.com
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
            <Departments />
        </>
    );
}

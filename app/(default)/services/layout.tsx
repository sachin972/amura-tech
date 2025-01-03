// "use client";

// import { useEffect } from "react";

// import AOS from "aos";
// import "aos/dist/aos.css";
// import Spotlight from "@/components/spotlight";
// import Image from "next/image";
// import WorflowImg01 from "@/public/images/workflow-01.png";
// import WorflowImg02 from "@/public/images/workflow-02.png";
// import WorflowImg03 from "@/public/images/workflow-03.png";
// import VideoThumb from "@/public/images/digital-marketing.webp";
// import ModalVideo from "@/components/modal-video";
// import Link from "next/link";

// import Footer from "@/components/ui/footer";

// export default function DefaultLayout({
//     children,
// }: {
//     children: React.ReactNode;
// }) {
//     useEffect(() => {
//         AOS.init({
//             once: true,
//             disable: "phone",
//             duration: 600,
//             easing: "ease-out-sine",
//         });
//     });

//     return (
//         <>
//             <section>
//                 <div className="mx-auto max-w-6xl px-4 sm:px-6">
//                     {/* Hero content */}
//                     <div className="py-12 md:py-20">
//                         {/* Section header */}
//                         <div className="pb-12 text-center md:pb-20">
//                             <h1
//                                 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.yellow.200),theme(colors.gray.50),theme(colors.yellow.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
//                                 data-aos="fade-up"
//                             >
//                                 Technology Meets Innovation
//                             </h1>
//                             <div className="mx-auto max-w-3xl">
//                                 <p
//                                     className="mb-8 text-xl text-yellow-200/65"
//                                     data-aos="fade-up"
//                                     data-aos-delay={200}
//                                 >
//                                     A winning combination that ensures we're
//                                     delivering value to help you grow!
//                                 </p>
//                             </div>
//                         </div>
//                         <ModalVideo
//                             thumb={VideoThumb}
//                             thumbWidth={1104}
//                             thumbHeight={576}
//                             thumbAlt="Modal video thumbnail"
//                             video={``}
//                             videoWidth={1920}
//                             videoHeight={1080}
//                         />
//                     </div>
//                 </div>
//             </section>
//             <section>
//                 <div className="mx-auto max-w-6xl px-4 sm:px-6">
//                     <div className="pb-12 md:pb-20">
//                         {/* Section header */}
//                         <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
//                             <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
//                                 <span className="inline-flex bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
//                                     Services
//                                 </span>
//                             </div>
//                             <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.yellow.200),theme(colors.gray.50),theme(colors.yellow.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
//                                 The Roadmap to Your Growth
//                             </h2>
//                             <p className="text-lg text-yellow-200/65">
//                                 Our data-powered insights and growth-centric
//                                 strategies are designed to expand your customer
//                                 lifetime value and increase revenue in the long
//                                 run.
//                             </p>
//                         </div>
//                         <div className="bg-gradient-to-br from-green-950 via-gray-900 to-green-700 text-white">
//                             <div className="flex flex-col">
//                                 {/* Sidebar Navigation */}
//                                 <div className="w-full bg-green-800 p-6">
//                                     <ul className="flex items-center justify-between">
//                                         <li className="text-yellow-200/60 hover:text-yellow-500 cursor-pointer">
//                                             <Link
//                                                 href={
//                                                     "/services/digital-marketing"
//                                                 }
//                                             >
//                                                 Digital Strategy
//                                             </Link>
//                                         </li>
//                                         <li className="text-yellow-200/60 hover:text-yellow-500 cursor-pointer">
//                                             <Link
//                                                 href={
//                                                     "/services/content-and-engineering"
//                                                 }
//                                             >
//                                                 Content & Engagement Marketing
//                                             </Link>
//                                         </li>
//                                         <li className="text-yellow-200/60 hover:text-yellow-500 cursor-pointer">
//                                             <Link
//                                                 href={
//                                                     "/services/media-planning-analytics"
//                                                 }
//                                             >
//                                                 Media Planning & Analytics
//                                             </Link>
//                                         </li>
//                                         <li className="text-yellow-200/60 hover:text-yellow-500 cursor-pointer">
//                                             <Link
//                                                 href={
//                                                     "/services/digital-transformation"
//                                                 }
//                                             >
//                                                 Digital Transformation
//                                             </Link>
//                                         </li>
//                                         <li className="text-yellow-200/60 hover:text-yellow-500 cursor-pointer">
//                                             <Link
//                                                 href={
//                                                     "/services/experience-design"
//                                                 }
//                                             >
//                                                 Experience Design
//                                             </Link>
//                                         </li>
//                                         <li className="text-yellow-200/60 hover:text-yellow-500 cursor-pointer">
//                                             <Link
//                                                 href={
//                                                     "/services/e-commerce-solutions"
//                                                 }
//                                             >
//                                                 E-Commerce Solutions
//                                             </Link>
//                                         </li>
//                                     </ul>
//                                 </div>
//                                 <main className="relative flex grow flex-col">
//                                     {children}
//                                 </main>
//                             </div>
//                             <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
//                                 <div data-aos="fade-up" data-aos-delay={400}>
//                                     <a
//                                         className="cursor-pointer btn group mb-4 w-full bg-gradient-to-t from-yellow-600/40 to-yellow-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
//                                         onClick={() => {
//                                             document
//                                                 .getElementById("enquire-now")
//                                                 ?.click();
//                                         }}
//                                     >
//                                         <span className="relative inline-flex items-center">
//                                             Learn More
//                                             <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
//                                                 -&gt;
//                                             </span>
//                                         </span>
//                                     </a>
//                                 </div>
//                                 {/* <div data-aos="fade-up" data-aos-delay={600}>
//                                     <a
//                                         className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
//                                         href="#0"
//                                     >
//                                         Schedule Demo
//                                     </a>
//                                 </div> */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import ModalVideo from "@/components/modal-video";
import Link from "next/link";
import DigitalMarketing from "@/public/images/digital-marketing.webp";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        AOS.init({
            once: true,
            disable: "phone",
            duration: 600,
            easing: "ease-out-sine",
        });
    });

    return (
        <>
            <main className="relative flex grow flex-col p-4 sm:p-6">
                <section>
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        {/* Hero content */}
                        <div className="py-12 md:py-20">
                            {/* Section header */}
                            <div className="pb-12 text-center md:pb-20">
                                <h1
                                    className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.yellow.200),theme(colors.gray.50),theme(colors.yellow.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                                    data-aos="fade-up"
                                >
                                    Technology Meets Innovation
                                </h1>
                                <div className="mx-auto max-w-3xl">
                                    <p
                                        className="mb-8 text-lg text-yellow-200/65 md:text-xl"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                    >
                                        A winning combination that ensures we're
                                        delivering value to help you grow!
                                    </p>
                                </div>
                            </div>
                            <ModalVideo
                                thumb={DigitalMarketing}
                                thumbWidth={1104}
                                thumbHeight={576}
                                thumbAlt="Modal video thumbnail"
                                video={``}
                                videoWidth={1920}
                                videoHeight={1080}
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        <div className="pb-12 md:pb-20">
                            {/* Section header */}
                            <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
                                <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
                                    <span className="inline-flex bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
                                        Services
                                    </span>
                                </div>
                                <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.yellow.200),theme(colors.gray.50),theme(colors.yellow.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                                    The Roadmap to Your Growth
                                </h2>
                                <p className="text-lg text-yellow-200/65 md:text-xl">
                                    Our data-powered insights and growth-centric
                                    strategies are designed to expand your
                                    customer lifetime value and increase revenue
                                    in the long run.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-green-950 via-gray-900 to-green-700 text-white">
                                <div className="flex flex-col">
                                    {/* Sidebar Navigation */}
                                    <div className="w-full bg-green-800 p-6">
                                        <ul className="flex flex-wrap items-center justify-between gap-4">
                                            <li className="text-yellow-200/60 hover:text-yellow-500 cursor-pointer">
                                                <Link href="/services/digital-marketing">
                                                    Digital Strategy
                                                </Link>
                                            </li>
                                            <li className="text-yellow-200/60 hover:text-yellow-500 cursor-pointer">
                                                <Link href="/services/content-and-engineering">
                                                    Content & Engagement
                                                    Marketing
                                                </Link>
                                            </li>
                                            <li className="text-yellow-200/60 hover:text-yellow-500 cursor-pointer">
                                                <Link href="/services/media-planning-analytics">
                                                    Media Planning & Analytics
                                                </Link>
                                            </li>
                                            <li className="text-yellow-200/60 hover:text-yellow-500 cursor-pointer">
                                                <Link href="/services/digital-transformation">
                                                    Digital Transformation
                                                </Link>
                                            </li>
                                            <li className="text-yellow-200/60 hover:text-yellow-500 cursor-pointer">
                                                <Link href="/services/experience-design">
                                                    Experience Design
                                                </Link>
                                            </li>
                                            <li className="text-yellow-200/60 hover:text-yellow-500 cursor-pointer">
                                                <Link href="/services/e-commerce-solutions">
                                                    E-Commerce Solutions
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    {children}
                                </div>
                                <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay={400}
                                    >
                                        <a
                                            className="cursor-pointer btn group mb-4 w-full bg-gradient-to-t from-yellow-600/40 to-yellow-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                                            onClick={() => {
                                                document
                                                    .getElementById(
                                                        "enquire-now"
                                                    )
                                                    ?.click();
                                            }}
                                        >
                                            <span className="relative inline-flex items-center">
                                                Learn More
                                                <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                                                    -&gt;
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

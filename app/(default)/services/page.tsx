"use client";
import Spotlight from "@/components/spotlight";
import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import VideoThumb from "@/public/images/digital-marketing.webp";
import ModalVideo from "@/components/modal-video";
import Link from "next/link";
import DigitalMarketing from "./digital-marketing/page";
import { useEffect } from "react";

export default function Services() {
    useEffect(() => {
        // Ensure the page doesn't scroll on initial render
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <DigitalMarketing />
        </>
    );
    // return (
    //     <>
    //         <section>
    //             <div className="mx-auto max-w-6xl px-4 sm:px-6">
    //                 {/* Hero content */}
    //                 <div className="py-12 md:py-20">
    //                     {/* Section header */}
    //                     <div className="pb-12 text-center md:pb-20">
    //                         <h1
    //                             className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.yellow.200),theme(colors.gray.50),theme(colors.yellow.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
    //                             data-aos="fade-up"
    //                         >
    //                             Technology Meets Innovation
    //                         </h1>
    //                         <div className="mx-auto max-w-3xl">
    //                             <p
    //                                 className="mb-8 text-xl text-yellow-200/65"
    //                                 data-aos="fade-up"
    //                                 data-aos-delay={200}
    //                             >
    //                                 A winning combination that ensures we're
    //                                 delivering value to help you grow!
    //                             </p>
    //                             {/* <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
    //                                 <div
    //                                     data-aos="fade-up"
    //                                     data-aos-delay={400}
    //                                 >
    //                                     <a
    //                                         className="btn group mb-4 w-full bg-gradient-to-t from-yellow-600/40 to-yellow-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
    //                                         href="#0"
    //                                     >
    //                                         <span className="relative inline-flex items-center">
    //                                             Learn More
    //                                             <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
    //                                                 -&gt;
    //                                             </span>
    //                                         </span>
    //                                     </a>
    //                                 </div>
    //                                 <div
    //                                     data-aos="fade-up"
    //                                     data-aos-delay={600}
    //                                 >
    //                                     <a
    //                                         className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
    //                                         href="#0"
    //                                     >
    //                                         Schedule Demo
    //                                     </a>
    //                                 </div>
    //                             </div> */}
    //                         </div>
    //                     </div>
    //                     <ModalVideo
    //                         thumb={VideoThumb}
    //                         thumbWidth={1104}
    //                         thumbHeight={576}
    //                         thumbAlt="Modal video thumbnail"
    //                         video={``}
    //                         videoWidth={1920}
    //                         videoHeight={1080}
    //                     />
    //                 </div>
    //             </div>
    //         </section>
    //         <section>
    //             <div className="mx-auto max-w-6xl px-4 sm:px-6">
    //                 <div className="pb-12 md:pb-20">
    //                     {/* Section header */}
    //                     <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
    //                         <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
    //                             <span className="inline-flex bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
    //                                 Services
    //                             </span>
    //                         </div>
    //                         <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.yellow.200),theme(colors.gray.50),theme(colors.yellow.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
    //                             The Roadmap to Your Growth
    //                         </h2>
    //                         <p className="text-lg text-yellow-200/65">
    //                             Our data-powered insights and growth-centric
    //                             strategies are designed to expand your customer
    //                             lifetime value and increase revenue in the long
    //                             run.
    //                         </p>
    //                     </div>
    //                     {/* Spotlight items */}
    //                     {/* <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
    //                         <article>
    //                             <svg
    //                                 className="mb-3 fill-yellow-500"
    //                                 xmlns="http://www.w3.org/2000/svg"
    //                                 width={24}
    //                                 height={24}
    //                             >
    //                                 <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
    //                                 <path
    //                                     fillOpacity=".48"
    //                                     d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
    //                                 />
    //                             </svg>
    //                             <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
    //                                 Market and Buyer Analysis
    //                             </h3>
    //                             <p className="text-yellow-200/65">
    //                                 Our growth marketing strategy defines your
    //                                 consumer’s behaviour and path to purchase.
    //                                 This analysis helps us nurture your
    //                                 customers across the marketing funnel.
    //                             </p>
    //                         </article>
    //                         <article>
    //                             <svg
    //                                 className="mb-3 fill-yellow-500"
    //                                 xmlns="http://www.w3.org/2000/svg"
    //                                 width={24}
    //                                 height={24}
    //                             >
    //                                 <path
    //                                     fillOpacity=".48"
    //                                     d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z"
    //                                 />
    //                                 <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
    //                             </svg>
    //                             <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
    //                                 Marketing Strategy
    //                             </h3>
    //                             <p className="text-yellow-200/65">
    //                                 In a series of short experiments that allow
    //                                 us to go live faster and see what’s working
    //                                 faster, then scaling it to achieve long-term
    //                                 results. This blueprint attracts, engages
    //                                 and converts your target audience into
    //                                 leads, and also goes forward to nurture and
    //                                 retain them for long-term value.
    //                             </p>
    //                         </article>
    //                         <article>
    //                             <svg
    //                                 className="mb-3 fill-yellow-500"
    //                                 xmlns="http://www.w3.org/2000/svg"
    //                                 width={24}
    //                                 height={24}
    //                             >
    //                                 <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
    //                                 <path
    //                                     fillOpacity=".48"
    //                                     d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
    //                                 />
    //                             </svg>
    //                             <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
    //                                 Communication & Creative Strategy
    //                             </h3>
    //                             <p className="text-yellow-200/65">
    //                                 Our creative strategies map specific
    //                                 messaging for your defined audiences and
    //                                 create exceptional experiences in the
    //                                 process, all with pre-determined success
    //                                 metrics in hand.
    //                             </p>
    //                         </article>
    //                         <article>
    //                         <svg
    //                             className="mb-3 fill-yellow-500"
    //                             xmlns="http://www.w3.org/2000/svg"
    //                             width={24}
    //                             height={24}
    //                         >
    //                             <path
    //                                 fillOpacity=".48"
    //                                 d="m3.031 9.05-.593-.805 1.609-1.187.594.804a6.966 6.966 0 0 1 0 8.276l-.594.805-1.61-1.188.594-.805a4.966 4.966 0 0 0 0-5.9Z"
    //                             />
    //                             <path d="m7.456 6.676-.535-.845 1.69-1.07.534.844a11.944 11.944 0 0 1 0 12.789l-.535.845-1.69-1.071.536-.845a9.944 9.944 0 0 0 0-10.647Z" />
    //                             <path
    //                                 d="m11.888 4.35-.514-.858 1.717-1.027.513.858a16.9 16.9 0 0 1 2.4 8.677 16.9 16.9 0 0 1-2.4 8.676l-.513.859-1.717-1.028.514-.858A14.9 14.9 0 0 0 14.003 12a14.9 14.9 0 0 0-2.115-7.65Z"
    //                                 opacity=".48"
    //                             />
    //                             <path d="m16.321 2-.5-.866 1.733-1 .5.866A22 22 0 0 1 21 12c0 3.852-1.017 7.636-2.948 10.97l-.502.865-1.73-1.003.501-.865A19.878 19.878 0 0 0 19 12a20 20 0 0 0-2.679-10Z" />
    //                         </svg>
    //                         <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
    //                             Digital Marketing for Manufaturing Companies
    //                         </h3>
    //                         <p className="text-yellow-200/65">
    //                             Looking for digital marketing for manufacturing
    //                             companies in India? Our industrial marketing
    //                             strategies provide end-to-end digital marketing
    //                             solutions for manufacturers.
    //                         </p>
    //                     </article>
    //                     <article>
    //                         <svg
    //                             className="mb-3 fill-yellow-500"
    //                             xmlns="http://www.w3.org/2000/svg"
    //                             width={24}
    //                             height={24}
    //                         >
    //                             <path
    //                                 fillOpacity=".48"
    //                                 d="M12 8.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
    //                             />
    //                             <path d="m7.454 2.891.891-.454L7.437.655l-.891.454a12 12 0 0 0 0 21.382l.89.454.91-1.781-.892-.455a10 10 0 0 1 0-17.818ZM17.456 1.11l-.891-.454-.909 1.782.891.454a10 10 0 0 1 0 17.819l-.89.454.908 1.781.89-.454a12 12 0 0 0 0-21.382Z" />
    //                         </svg>
    //                         <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
    //                             Healthcare Digital Marketing
    //                         </h3>
    //                         <p className="text-yellow-200/65">
    //                             Looking for healthcare digital marketing
    //                             agencies in India? Our healthcare marketing
    //                             strategies provide end-to-end solutions for the
    //                             industry.
    //                         </p>
    //                     </article>
    //                     <article>
    //                         <svg
    //                             className="mb-3 fill-yellow-500"
    //                             xmlns="http://www.w3.org/2000/svg"
    //                             width={24}
    //                             height={24}
    //                         >
    //                             <path
    //                                 fillOpacity=".48"
    //                                 d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z"
    //                             />
    //                             <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
    //                         </svg>
    //                         <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
    //                             E-Commerce Industry
    //                         </h3>
    //                         <p className="text-yellow-200/65">
    //                             Looking for E-commerce Industry agencies in
    //                             India? Our comprehensive strategies provide
    //                             end-to-end E-commerce Industry solutions.
    //                         </p>
    //                     </article>
    //                         <article className="mx-auto">
    //                         <svg
    //                             className="mb-3 fill-indigo-500"
    //                             xmlns="http://www.w3.org/2000/svg"
    //                             width={24}
    //                             height={24}
    //                         >
    //                             <path
    //                                 fillOpacity=".48"
    //                                 d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z"
    //                             />
    //                             <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
    //                         </svg>
    //                         <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
    //                             B2B Industry
    //                         </h3>
    //                         <p className="text-indigo-200/65">
    //                             Looking for B2B digital Marketing agencies in
    //                             india? Our comprehensive strategies provide
    //                             end-to-end B2B industry solutions.
    //                         </p>
    //                     </article>
    //                     </div> */}
    //                     <div className="bg-gradient-to-br from-black via-gray-900 to-green-900 min-h-screen text-white">
    //                         <div className="flex flex-col">
    //                             {/* Sidebar Navigation */}
    //                             <div className="w-full bg-green-800 p-6">
    //                                 {/* <h3 className="text-yellow-400 text-lg font-bold mb-6">
    //                                     Services
    //                                 </h3> */}
    //                                 <ul className="flex items-center justify-between">
    //                                     <li className="text-yellow-200/60 hover:text-yellow-500 cursor-pointer">
    //                                         <Link href={"/services/"}>
    //                                             Digital Strategy
    //                                         </Link>
    //                                     </li>
    //                                     <li className="text-yellow-200/60 hover:text-yellow-500 cursor-pointer">
    //                                         Content & Engagement Marketing
    //                                     </li>
    //                                     <li className="text-yellow-200/60 hover:text-yellow-500 cursor-pointer">
    //                                         <Link
    //                                             href={
    //                                                 "/services/media-planning-analytics"
    //                                             }
    //                                         >
    //                                             Media Planning & Analytics
    //                                         </Link>
    //                                     </li>
    //                                     <li className="text-yellow-200/60 hover:text-yellow-500 cursor-pointer">
    //                                         Digital Transformation
    //                                     </li>
    //                                     <li className="text-yellow-200/60 hover:text-yellow-500 cursor-pointer">
    //                                         Experience Design
    //                                     </li>
    //                                     <li className="text-yellow-200/60 hover:text-yellow-500 cursor-pointer">
    //                                         E-Commerce Solutions
    //                                     </li>
    //                                 </ul>
    //                             </div>

    //                             {/* Main Content Area
    //                             <div className="w-full p-8">
    //                                 <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
    //                                     <h2 className="text-yellow-400 text-lg uppercase tracking-wide">
    //                                         01 Digital Strategy
    //                                     </h2>
    //                                     <h1 className="text-4xl font-bold mt-4">
    //                                         The Roadmap to Your Growth
    //                                     </h1>
    //                                     <p className="text-lg text-gray-300 mt-4">
    //                                         Our data-powered insights and
    //                                         growth-centric strategies are
    //                                         designed to expand your customer
    //                                         lifetime value and increase revenue
    //                                         in the long run.
    //                                     </p>
    //                                 </div>

    //                                 Scope Section
    //                                 <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
    //                                     <h3 className="text-2xl font-bold text-white mb-4">
    //                                         Scope
    //                                     </h3>
    //                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    //                                         Market and Buyer Analysis
    //                                         <article>
    //                                             <svg
    //                                                 className="mb-3 fill-yellow-500"
    //                                                 xmlns="http://www.w3.org/2000/svg"
    //                                                 width={24}
    //                                                 height={24}
    //                                             >
    //                                                 <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
    //                                                 <path
    //                                                     fillOpacity=".48"
    //                                                     d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
    //                                                 />
    //                                             </svg>
    //                                             <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
    //                                                 Communication & Creative
    //                                                 Strategy
    //                                             </h3>
    //                                             <p className="text-yellow-200/65">
    //                                                 Our creative strategies map
    //                                                 specific messaging for your
    //                                                 defined audiences and create
    //                                                 exceptional experiences in
    //                                                 the process, all with
    //                                                 pre-determined success
    //                                                 metrics in hand.
    //                                             </p>
    //                                         </article>

    //                                         Marketing Strategy
    //                                         <article>
    //                                             <svg
    //                                                 className="mb-3 fill-yellow-500"
    //                                                 xmlns="http://www.w3.org/2000/svg"
    //                                                 width={24}
    //                                                 height={24}
    //                                             >
    //                                                 <path
    //                                                     fillOpacity=".48"
    //                                                     d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z"
    //                                                 />
    //                                                 <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
    //                                             </svg>
    //                                             <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
    //                                                 Marketing Strategy
    //                                             </h3>
    //                                             <p className="text-yellow-200/65">
    //                                                 In a series of short
    //                                                 experiments that allow us to
    //                                                 go live faster and see
    //                                                 what’s working faster, then
    //                                                 scaling it to achieve
    //                                                 long-term results. This
    //                                                 blueprint attracts, engages
    //                                                 and converts your target
    //                                                 audience into leads, and
    //                                                 also goes forward to nurture
    //                                                 and retain them for
    //                                                 long-term value.
    //                                             </p>
    //                                         </article>

    //                                         Communication & Creative Strategy
    //                                         <article>
    //                                             <svg
    //                                                 className="mb-3 fill-yellow-500"
    //                                                 xmlns="http://www.w3.org/2000/svg"
    //                                                 width={24}
    //                                                 height={24}
    //                                             >
    //                                                 <path d="M0 0h14v17H0V0Zm2 2v13h10V2H2Z" />
    //                                                 <path
    //                                                     fillOpacity=".48"
    //                                                     d="m16.295 5.393 7.528 2.034-4.436 16.412L5.87 20.185l.522-1.93 11.585 3.132 3.392-12.55-5.597-1.514.522-1.93Z"
    //                                                 />
    //                                             </svg>
    //                                             <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
    //                                                 Market and Buyer Analysis
    //                                             </h3>
    //                                             <p className="text-yellow-200/65">
    //                                                 Our growth marketing
    //                                                 strategy defines your
    //                                                 consumer’s behaviour and
    //                                                 path to purchase. This
    //                                                 analysis helps us nurture
    //                                                 your customers across the
    //                                                 marketing funnel.
    //                                             </p>
    //                                         </article>
    //                                     </div>
    //                                 </div>
    //                             </div> */}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //     </>
    // );
}

// import React from "react";

// const Services = () => {
//     return (
//         <div className="bg-gradient-to-br from-black via-gray-900 to-green-900 min-h-screen text-white">
//             <div className="flex">
//                 {/* Sidebar Navigation */}
//                 <div className="w-1/4 bg-green-800 p-6">
//                     <h3 className="text-yellow-400 text-lg font-bold mb-6">
//                         Services
//                     </h3>
//                     <ul className="space-y-4">
//                         <li className="text-white hover:text-yellow-400 cursor-pointer">
//                             Digital Strategy
//                         </li>
//                         <li className="text-gray-400 hover:text-yellow-400 cursor-pointer">
//                             Content & Engagement Marketing
//                         </li>
//                         <li className="text-gray-400 hover:text-yellow-400 cursor-pointer">
//                             Media Planning & Analytics
//                         </li>
//                         <li className="text-gray-400 hover:text-yellow-400 cursor-pointer">
//                             Digital Transformation
//                         </li>
//                         <li className="text-gray-400 hover:text-yellow-400 cursor-pointer">
//                             Experience Design
//                         </li>
//                         <li className="text-gray-400 hover:text-yellow-400 cursor-pointer">
//                             E-Commerce Solutions
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Main Content Area */}
//                 <div className="w-3/4 p-8">
//                     {/* Header Section */}
//                     <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
//                         <h2 className="text-yellow-400 text-lg uppercase tracking-wide">
//                             01 Digital Strategy
//                         </h2>
//                         <h1 className="text-4xl font-bold mt-4">
//                             The Roadmap to Your Growth
//                         </h1>
//                         <p className="text-lg text-gray-300 mt-4">
//                             Our data-powered insights and growth-centric
//                             strategies are designed to expand your customer
//                             lifetime value and increase revenue in the long run.
//                         </p>
//                     </div>

//                     {/* Scope Section */}
//                     <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
//                         <h3 className="text-2xl font-bold text-white mb-4">
//                             Scope
//                         </h3>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                             {/* Market and Buyer Analysis */}
//                             <div>
//                                 <h4 className="text-xl font-bold text-yellow-400 mb-2">
//                                     Market and Buyer Analysis
//                                 </h4>
//                                 <p className="text-gray-300">
//                                     With in-depth research & user segmentation
//                                     supported by online behavior analysis, we
//                                     help you understand your customers better.
//                                 </p>
//                             </div>

//                             {/* Marketing Strategy */}
//                             <div>
//                                 <h4 className="text-xl font-bold text-yellow-400 mb-2">
//                                     Marketing Strategy
//                                 </h4>
//                                 <p className="text-gray-300">
//                                     Our strategies help you go live faster,
//                                     identify what works, and scale efficiently
//                                     to achieve long-term results.
//                                 </p>
//                             </div>

//                             {/* Communication & Creative Strategy */}
//                             <div>
//                                 <h4 className="text-xl font-bold text-yellow-400 mb-2">
//                                     Communication & Creative Strategy
//                                 </h4>
//                                 <p className="text-gray-300">
//                                     Our creative strategies ensure exceptional
//                                     customer experiences and measurable success
//                                     across all channels.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Services;

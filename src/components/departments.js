// "use client";
// import Image from "next/image";
import React from "react";
// import ContentImage from "@/public/images/careers/content.webp";
// import DesignImage from "@/public/images/careers/design.webp";
// import ClientServicingImage from "@/public/images/careers/client-servicing .webp";
// import DevelopmentImage from "@/public/images/careers/development.webp";
// import DigitalAdvertisingImage from "@/public/images/careers/digital-advertising .webp";
// import HumanResourcesImage from "@/public/images/careers/human-resources.webp";
// import MarketingBrandingImage from "@/public/images/careers/marketing-branding.webp";
// import ProductImage from "@/public/images/careers/product.webp";
// import QualityAssuranceImage from "@/public/images/careers/quality-assurance .webp";
// import SalesImage from "@/public/images/careers/sales.webp";
// import SocialMediaImage from "@/public/images/careers/social-media.webp";
// import AccountsImage from "@/public/images/careers/accounts.webp";

export default function Departments() {
    const cards = [
        {
            id: "design",
            image: "/images/careers/design.webp",
            title: "Design",
        },
        {
            id: "content",
            image: "/images/careers/content.webp",
            title: "Content",
        },
        {
            id: "development",
            image: "/images/careers/development.webp",
            title: "Development",
        },
        {
            id: "client-servicing",
            image: "/images/careers/client-servicing .webp",
            title: "Client Servicing",
        },
        {
            id: "quality-assurance",
            image: "/images/careers/quality-assurance .webp",
            title: "Quality Assurance",
        },
        {
            id: "digital-advertising",
            image: "/images/careers/digital-advertising .webp",
            title: "Digital Advertising",
        },
        {
            id: "marketing-branding",
            image: "/images/careers/marketing-branding.webp",
            title: "Marketing Branding",
        },
        {
            id: "product",
            image: "/images/careers/product.webp",
            title: "Product",
        },
        {
            id: "sales",
            image: "/images/careers/sales.webp",
            title: "Sales",
        },
        {
            id: "human-resources",
            image: "/images/careers/human-resources.webp",
            title: "Human Resources",
        },
        {
            id: "accounts",
            image: "/images/careers/accounts.webp",
            title: "Accounts",
        },
        {
            id: "social-media",
            image: "/images/careers/social-media.webp",
            title: "Social Media & SEO",
        },
    ];

    return (
        <section className="bg-darkGray py-12">
            <div className="container mx-auto px-6 md:px-12">
                {/* <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-8 animate-fadeIn">
                    Explore Our Solutions
                </h2> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            onMouseOver={() => {
                                document
                                    .getElementById(card.id)
                                    ?.classList.add("rounded-none");
                            }}
                            onMouseOut={() => {
                                document
                                    .getElementById(card.id)
                                    ?.classList.remove("rounded-none");
                            }}
                            className="group relative w-60 h-80 mx-auto overflow-hidden shadow-lg transform transition-transform duration-700 hover:scale-105 hover:rounded-none hover:bg-black"
                        >
                            {/* Image */}
                            <img
                                id={card.id}
                                src={card.image}
                                alt={card.title}
                                className="w-full object-cover transition-opacity duration-700 group-hover:opacity-80 rounded-full hover:rounded-none"
                                width={100}
                                height={100}
                            />

                            {/* Text */}
                            <div
                                className="bottom-0 w-full bg-none py-4 text-center"
                                // id={card.id}
                            >
                                <p className="text-yellow-300 text-lg font-semibold">
                                    {card.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import Image from "next/image";
import React from "react";
import ContentImage from "@/public/images/careers/content.webp";
import DesignImage from "@/public/images/careers/design.webp";
import ClientServicingImage from "@/public/images/careers/client-servicing .webp";
import DevelopmentImage from "@/public/images/careers/development.webp";
import DigitalAdvertisingImage from "@/public/images/careers/digital-advertising .webp";
import HumanResourcesImage from "@/public/images/careers/human-resources.webp";
import MarketingBrandingImage from "@/public/images/careers/marketing-branding.webp";
import ProductImage from "@/public/images/careers/product.webp";
import QualityAssuranceImage from "@/public/images/careers/quality-assurance .webp";
import SalesImage from "@/public/images/careers/sales.webp";
import SocialMediaImage from "@/public/images/careers/social-media.webp";
import AccountsImage from "@/public/images/careers/accounts.webp";

export default function AnimatedCards() {
    const cards = [
        { image: DesignImage, title: "Design" },
        { image: ContentImage, title: "Content" },
        {
            image: DevelopmentImage,
            title: "Development",
        },
        {
            image: ClientServicingImage,
            title: "Client Servicing",
        },
        {
            image: QualityAssuranceImage,
            title: "Quality Assurance",
        },
        {
            image: DigitalAdvertisingImage,
            title: "Digital Advertising",
        },
        {
            image: MarketingBrandingImage,
            title: "Marketing Branding",
        },
        { image: ProductImage, title: "Product" },
        { image: SalesImage, title: "Sales" },
        {
            image: HumanResourcesImage,
            title: "Human Resources",
        },
        { image: AccountsImage, title: "Accounts" },
        {
            image: SocialMediaImage,
            title: "Social Media & SEO",
        },
    ];

    return (
        <section className="bg-darkGray py-12">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-8 animate-fadeIn">
                    Explore Our Solutions
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative rounded-lg overflow-hidden bg-gradient-to-b from-gray-700 to-gray-900 shadow-lg transform transition-transform duration-300 hover:scale-105"
                        >
                            {/* Image */}
                            <Image
                                src={card.image}
                                alt={card.title}
                                className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-80"
                                width={48}
                                // height={48}
                            />

                            {/* Text */}
                            <div className="absolute bottom-0 w-full bg-black bg-opacity-70 py-4 text-center">
                                <p className="text-white text-lg font-semibold">
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

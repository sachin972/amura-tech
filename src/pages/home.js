import React, { useEffect } from "react";
// export const metadata = {
//     title: "Home - Open PRO",
//     description: "Page description",
//   };

import PageIllustration from "../components/page-illustration";
// import Hero from "../components/hero-home";
import Workflows from "../components/workflows";
import Features from "../components/features";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import HeroHome from "../components/hero-home";
import Aos from "aos";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
}, []);
    return (
        <>
            <PageIllustration />
            <HeroHome />
            <Workflows />
            <Features />
            <Testimonials />
            <Cta />
        </>
    );
}

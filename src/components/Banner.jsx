// // Updated Banner Component with 3 Screens and Animations
// import React, { useState, useEffect } from 'react';
// import 'antd/dist/reset.css';
// import './Banner.css'; // Custom CSS file for animations

// const slides = [
//   {
//     title: "Up Your Digital Marketing Game With",
//     subtitle: "Our B2B Expertise",
//     description: "Account Based Marketing | B2B Lead Generation | Marketing Automation",
//     buttonText: "Learn More",
//     image: "https://www.amuratech.com/uploads/blog_post/thumbnail/272/Thumbnail_____10.jpg" // Replace with your first image path
//   },
//   {
//     title: "Drive Business Growth",
//     subtitle: "With Data-Driven Strategies",
//     description: "Analytics | Insights | Campaign Optimization",
//     buttonText: "Get Started",
//     image: "https://www.amuratech.com/uploads/blog_post/thumbnail/154/Banners-02.jpg" // Replace with your second image path
//   },
//   {
//     title: "Achieve Marketing Excellence",
//     subtitle: "Through Innovative Solutions",
//     description: "Creative Campaigns | Branding | Marketing Automation",
//     buttonText: "Discover More",
//     image: "https://www.amuratech.com/uploads/blog_post/thumbnail/154/Banners-02.jpg" // Replace with your third image path
//   }
// ];

// const Banner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative bg-blue-900 h-screen flex items-center justify-center overflow-hidden">
//       <div className="absolute inset-0">
//         <img
//           src={slides[currentSlide].image}
//           alt="Banner Background"
//           className="object-cover w-full h-full transition-opacity duration-1000 ease-in-out"
//         />
//       </div>
//       <div className="relative z-10 max-w-4xl text-white px-6 text-center">
//         <h1
//           className="text-3xl md:text-5xl font-bold tracking-wide animate-slide-in"
//           key={`title-${currentSlide}`}
//         >
//           {slides[currentSlide].title}
//         </h1>
//         <h2
//           className="text-4xl md:text-6xl font-extrabold text-green-400 mt-4 animate-slide-in"
//           style={{ animationDelay: '0.3s' }}
//           key={`subtitle-${currentSlide}`}
//         >
//           {slides[currentSlide].subtitle}
//         </h2>
//         <p
//           className="mt-6 text-lg md:text-xl space-y-4 animate-slide-in"
//           style={{ animationDelay: '0.6s' }}
//           key={`description-${currentSlide}`}
//         >
//           {slides[currentSlide].description}
//         </p>
//         <button
//           className="mt-8 px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition ease-in-out duration-300 animate-breathe"
//           key={`button-${currentSlide}`}
//         >
//           {slides[currentSlide].buttonText}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Banner;

// Updated Banner Component with Left-Aligned Text and Right-Aligned Image
import React, { useState, useEffect } from 'react';
import 'antd/dist/reset.css';
import './Banner.css'; // Custom CSS file for animations

const slides = [
  {
    title: "Up Your Digital Marketing Game With",
    subtitle: "Our B2B Expertise",
    description: "Account Based Marketing | B2B Lead Generation | Marketing Automation",
    buttonText: "Learn More",
    image: "https://www.amuratech.com/uploads/blog_post/thumbnail/272/Thumbnail_____10.jpg" // Replace with your first image path
  },
  {
    title: "Drive Business Growth",
    subtitle: "With Data-Driven Strategies",
    description: "Analytics | Insights | Campaign Optimization",
    buttonText: "Get Started",
    image: "https://www.amuratech.com/uploads/blog_post/thumbnail/154/Banners-02.jpg" // Replace with your second image path
  },
  {
    title: "Achieve Marketing Excellence",
    subtitle: "Through Innovative Solutions",
    description: "Creative Campaigns | Branding | Marketing Automation",
    buttonText: "Discover More",
    image: "https://www.amuratech.com/uploads/blog_post/thumbnail/154/Banners-02.jpg" // Replace with your third image path
  }
];
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-blue-900 h-4/5 flex items-center overflow-hidden">
      {/* Left Text Section */}
      <div className="relative z-10 w-1/2 px-12 text-white translate-x-1/4 max-sm:w-full">
        <h1
          className="text-3xl md:text-5xl font-bold tracking-wide animate-slide-to-center"
          key={`title-${currentSlide}`}
        >
          {slides[currentSlide].title}
        </h1>
        <h2
          className="text-4xl md:text-6xl font-extrabold text-green-400 mt-4 animate-slide-to-center"
          style={{ animationDelay: '0.3s' }}
          key={`subtitle-${currentSlide}`}
        >
          {slides[currentSlide].subtitle}
        </h2>
        <p
          className="mt-6 text-lg md:text-xl space-y-4 animate-slide-to-center"
          style={{ animationDelay: '0.6s' }}
          key={`description-${currentSlide}`}
        >
          {slides[currentSlide].description}
        </p>
        <button
          className="mt-8 px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition ease-in-out duration-300"
          key={`button-${currentSlide}`}
        >
          {slides[currentSlide].buttonText}
        </button>
      </div>

      {/* Right Image Section */}
      <div className="relative w-1/2 h-full max-md:hidden">
        <div className="bg-blue-300 -p-4 rounded-l-full">
        <img
          src={slides[currentSlide].image}
          alt="Banner Background"
          className="object-cover w-full h-full transition-opacity rounded-l-full transform translate-x-28"
        />
        </div>
      </div>
    </div>
  );
};

export default Banner;

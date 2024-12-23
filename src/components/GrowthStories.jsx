// import React, { useState, useEffect } from "react";

// const GrowthStories = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Example data for the slider
//   const stories = [
//     {
//       category: "Pharmaceutical",
//       title: "Skin & Hair Academy",
//       description:
//         "Boosting consumer reach, creating digital branded experiences. Glenmark, India’s research-driven global pharmaceutical organisation, partnered with Amura to create a powerful & distinct digital presence.",
//       stats: [
//         { value: "14x", label: "Increase in reach" },
//         { value: "4x", label: "Improvement in page likes" },
//         { value: "36x", label: "Rise in engagement" },
//       ],
//       buttonLabel: "VIEW CASE STUDY",
//       image: "/path-to-your-image/image1.png",
//     },
//     // Add more stories here...
//   ];

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % stories.length);
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(handleNext, 5000); // Auto-slide every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const { category, title, description, stats, buttonLabel, image } =
//     stories[currentIndex];

//   return (
//     <div className="py-16 bg-gray-50 text-center">
//       <h2 className="text-3xl font-bold text-green-600 mb-4">Growth Stories</h2>
//       <p className="text-lg text-gray-600 mb-10">
//         The landmark campaigns in Amura’s Hall of Fame
//       </p>
//       <div className="flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20">
//         {/* Image Section */}
//         <div className="flex-shrink-0">
//           <img
//             src={image}
//             alt={title}
//             className="w-72 h-72 object-cover rounded-full shadow-lg"
//           />
//         </div>

//         {/* Content Section */}
//         <div className="text-left max-w-2xl">
//           <span className="text-sm text-green-600 font-semibold uppercase">
//             {category}
//           </span>
//           <h3 className="text-2xl font-bold text-gray-800 mt-2 mb-4">
//             {title}
//           </h3>
//           <p className="text-gray-600 text-base mb-6">{description}</p>
//           <div className="flex gap-8 mb-6">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <strong className="block text-2xl font-bold text-gray-800">
//                   {stat.value}
//                 </strong>
//                 <span className="text-sm text-gray-600">{stat.label}</span>
//               </div>
//             ))}
//           </div>
//           <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md">
//             {buttonLabel}
//           </button>
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className="flex justify-center gap-4 mt-10">
//         <button
//           onClick={handlePrevious}
//           className="text-gray-600 hover:text-green-600 font-semibold"
//         >
//           PREVIOUS
//         </button>
//         <button
//           onClick={handleNext}
//           className="text-gray-600 hover:text-green-600 font-semibold"
//         >
//           NEXT
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GrowthStories;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GrowthStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      category: "Pharmaceutical",
      title: "Skin & Hair Academy",
      description:
        "Boosting consumer reach, creating digital branded experiences. Glenmark, India’s research-driven global pharmaceutical organisation, partnered with Amura to create a powerful & distinct digital presence.",
      stats: [
        { value: "14x", label: "Increase in reach" },
        { value: "4x", label: "Improvement in page likes" },
        { value: "36x", label: "Rise in engagement" },
      ],
      buttonLabel: "VIEW CASE STUDY",
      image: "https://www.amuratech.com/assets/newindex/02-min-c591819fbfd63d39f3c12e3ccb7f649c.png",
    },
    {
      category: "FMCG",
      title: "Dabur Honey",
      description:
        "Creating a buzzworthy digital presence. Dabur Honey joined hands with Amura to build a robust online community with impactful campaigns.",
      stats: [
        { value: "10x", label: "Growth in followers" },
        { value: "6x", label: "Increase in reach" },
        { value: "20x", label: "Growth in online sales" },
      ],
      buttonLabel: "DISCOVER MORE",
      image: "https://www.amuratech.com/assets/newindex/02-min-c591819fbfd63d39f3c12e3ccb7f649c.png",
    },
    {
      category: "E-Learning",
      title: "BYJU's Learning App",
      description:
        "Expanding horizons in digital education. BYJU's collaborated with Amura to create targeted campaigns and reach learners across the globe.",
      stats: [
        { value: "8x", label: "Increase in app installs" },
        { value: "12x", label: "Boost in engagement" },
        { value: "25x", label: "Revenue growth" },
      ],
      buttonLabel: "EXPLORE NOW",
      image: "https://www.amuratech.com/assets/newindex/02-min-c591819fbfd63d39f3c12e3ccb7f649c.png",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Growth Stories</h2>
        <p className="text-lg text-gray-600 mb-10">
          The landmark campaigns in Amura’s Hall of Fame
        </p>
      </div>

      {/* Slider */}
      <div className="flex flex-col lg:flex-row w-11/12 items-center gap-10 p-2 mx-auto lg:px-20 bg-white">
        {/* Image */}
        <div className="flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={stories[currentIndex].image}
              src={stories[currentIndex].image}
              alt={stories[currentIndex].title}
              className="w-72 h-72 object-cover rounded-full shadow-lg"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="text-left max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={stories[currentIndex].title}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm text-green-600 font-semibold uppercase">
                {stories[currentIndex].category}
              </span>
              <h3 className="text-2xl font-bold text-gray-800 mt-2 mb-4">
                {stories[currentIndex].title}
              </h3>
              <p className="text-gray-600 text-base mb-6">
                {stories[currentIndex].description}
              </p>
              <div className="flex gap-8 mb-6">
                {stories[currentIndex].stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <strong className="block text-2xl font-bold text-gray-800">
                      {stat.value}
                    </strong>
                    <span className="text-sm text-gray-600">{stat.label}</span>
                  </div>
                ))}
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md">
                {stories[currentIndex].buttonLabel}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={handlePrevious}
          className="text-gray-600 hover:text-green-600 font-semibold"
        >
          PREVIOUS
        </button>
        <button
          onClick={handleNext}
          className="text-gray-600 hover:text-green-600 font-semibold"
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default GrowthStories;

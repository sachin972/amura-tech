// import React, { useState } from 'react';

// const TemplatePage = ({ title, subtitle, backgroundImage, features }) => {
//   // State to track the currently selected feature
//   const [selectedFeature, setSelectedFeature] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header Section */}
//       <div
//         className="relative bg-cover bg-center"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative z-10 text-white p-10">
//           <h2 className="text-sm font-bold uppercase">{title}</h2>
//           <h1 className="text-4xl font-bold">{subtitle}</h1>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="grid grid-cols-3 md:grid-cols-6 gap-4 p-10 bg-white">
//         {features.map((feature, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectedFeature(feature)}
//             className={`text-center p-4 hover:bg-gray-100 transition ${
//               selectedFeature?.title === feature.title ? 'bg-gray-200' : ''
//             }`}
//           >
//             <div className="text-4xl">{feature.icon}</div>
//             <h3 className="mt-2 font-semibold">{feature.title}</h3>
//           </button>
//         ))}
//       </div>

//       {/* Selected Feature Content */}
//       <div className="p-10">
//         {selectedFeature ? (
//           <div>
//             <h2 className="text-2xl font-bold mb-4">{selectedFeature.title}</h2>
//             <p>{selectedFeature.content}</p>
//           </div>
//         ) : (
//           <p className="text-gray-500 text-center">Select a feature to view details</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TemplatePage;


import React, { useState } from 'react';

const TemplatePage = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    { title: 'Digital Strategy', icon: '🔍' },
    { title: 'Content & Engagement Marketing', icon: '✍️' },
    { title: 'Media Planning & Analytics', icon: '📊' },
    { title: 'Digital Transformation', icon: '💻' },
    { title: 'Experience Design', icon: '🎨' },
    { title: 'E-Commerce Solution', icon: '🛒' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage: `url('/path-to-your-header-image.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h3 className="text-sm uppercase tracking-widest">Our Services</h3>
          <h1 className="text-4xl font-bold">Technology meets innovation</h1>
          <p className="mt-4 text-lg">
            A winning combination that ensures we’re delivering value to help you grow!
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 p-10 bg-white">
        {features.map((feature, index) => (
          <div
            key={index}
            onClick={() => setSelectedFeature(feature)}
            className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer ${
              selectedFeature?.title === feature.title ? 'bg-green-200' : 'hover:bg-gray-100'
            }`}
          >
            <div className="text-4xl">{feature.icon}</div>
            <h3 className="mt-2 text-sm font-semibold text-center">{feature.title}</h3>
          </div>
        ))}
      </div>

      {/* Selected Feature Content */}
      <div className="p-10 bg-gray-50">
        {selectedFeature ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold">{selectedFeature.title}</h2>
            <p className="mt-4 text-gray-700">
              Detailed content about {selectedFeature.title} goes here.
            </p>
          </div>
        ) : (
          <p className="text-center text-gray-500">Click on a feature to learn more.</p>
        )}
      </div>
    </div>
  );
};

export default TemplatePage;

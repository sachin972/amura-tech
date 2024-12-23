// import React from 'react';
// import { Card } from 'antd';
// import { FaLightbulb, FaChartLine, FaMobileAlt, FaLaptopCode, FaPaintBrush, FaShoppingCart } from 'react-icons/fa';

// const services = [
//   { title: 'Digital Strategy', icon: <FaLightbulb />, color: 'bg-lime-500' },
//   { title: 'Content & Engagement Marketing', icon: <FaChartLine />, color: 'bg-lime-500' },
//   { title: 'Media Planning & Analytics', icon: <FaChartLine />, color: 'bg-lime-500' },
//   { title: 'Digital Transformation', icon: <FaMobileAlt />, color: 'bg-lime-500' },
//   { title: 'Experience Design', icon: <FaPaintBrush />, color: 'bg-lime-500' },
//   { title: 'E-Commerce Solution', icon: <FaShoppingCart />, color: 'bg-lime-500' },
// ];

// const Services = () => {
//   return (
//     <div className="bg-gray-50 py-10 px-4">
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold text-lime-600">Our Services</h2>
//         <p className="text-gray-600">Blending the best of technology & marketing</p>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {services.map((service, index) => (
//           <Card
//             key={index}
//             className="flex items-center justify-center p-6 border rounded-lg shadow-md bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
//           >
//             <div className="flex flex-col items-center text-center">
//               <div
//                 className={`text-5xl text-gray-700 group-hover:text-white p-4 rounded-full transition-colors duration-300 ${service.color} group-hover:${service.color}`}
//               >
//                 {service.icon}
//               </div>
//               <h3 className="mt-4 text-lg font-medium text-gray-800 group-hover:text-lime-600">
//                 {service.title}
//               </h3>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from 'react';
import { Card } from 'antd';
import { FaLightbulb, FaFileAlt, FaChartLine, FaMobileAlt, FaPaintBrush, FaShoppingCart } from 'react-icons/fa';

const services = [
  {
    title: 'Digital Strategy',
    icon: <FaLightbulb className='mx-auto' />,
    hoverBg: 'hover:bg-lime-500',
    hoverText: 'hover:text-white',
  },
  {
    title: 'Content & Engagement Marketing',
    icon: <FaFileAlt className='mx-auto'/>,
    hoverBg: 'hover:bg-lime-500',
    hoverText: 'hover:text-white',
  },
  {
    title: 'Media Planning & Analytics',
    icon: <FaChartLine className='mx-auto'/>,
    hoverBg: 'hover:bg-lime-500',
    hoverText: 'hover:text-white',
  },
  {
    title: 'Digital Transformation',
    icon: <FaMobileAlt className='mx-auto'/>,
    hoverBg: 'hover:bg-lime-500',
    hoverText: 'hover:text-white',
  },
  {
    title: 'Experience Design',
    icon: <FaPaintBrush className='mx-auto'/>,
    hoverBg: 'hover:bg-lime-500',
    hoverText: 'hover:text-white',
  },
  {
    title: 'E-Commerce Solution',
    icon: <FaShoppingCart className='mx-auto'/>,
    hoverBg: 'hover:bg-lime-500',
    hoverText: 'hover:text-white',
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-lime-600">Our Services</h2>
        <p className="text-gray-600 text-lg">Blending the best of technology & marketing</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-1">
        {services.map((service, index) => (
          <Card
            key={index}
            className={`flex flex-col items-center justify-center text-center p-6 border border-gray-200 rounded-lg shadow-md bg-white transition-transform duration-300 hover:-translate-y-1 ${service.hoverBg}`}
          >
            <div
              className={`text-4xl mb-4 p-4 rounded-full transition-colors duration-300 ${service.hoverBg} ${service.hoverText}`}
            >
              {service.icon}
            </div>
            <h3 className={`text-lg font-semibold transition-colors duration-300 ${service.hoverText}`}>
              {service.title}
            </h3>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;

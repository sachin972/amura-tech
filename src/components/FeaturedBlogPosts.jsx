import React from 'react';
import { Card } from 'antd';
import { FaLightbulb, FaFileAlt, FaChartLine, FaMobileAlt, FaPaintBrush, FaShoppingCart } from 'react-icons/fa';

const featuredBlogPosts = [
  {
    title: 'Digital Strategy',
    icon: <FaLightbulb className='mx-auto' />,
    hoverBg: 'hover:bg-lime-500',
    hoverText: 'hover:text-white',
    text: 'Engaging users at every stage of the funnel, keeping their journey and unique requirements in mind',
    image: 'https://www.amuratech.com/uploads/blog_post/thumbnail/268/Thumbnail___layered.jpg'
  },
  {
    title: 'Content & Engagement Marketing',
    icon: <FaFileAlt className='mx-auto'/>,
    hoverBg: 'hover:bg-lime-500',
    hoverText: 'hover:text-white',
    text: 'Engaging users at every stage of the funnel, keeping their journey and unique requirements in mind',
    image: 'https://www.amuratech.com/uploads/blog_post/thumbnail/193/Desktop_Th_image.jpg'
  },
  {
    title: 'Media Planning & Analytics',
    icon: <FaChartLine className='mx-auto'/>,
    hoverBg: 'hover:bg-lime-500',
    hoverText: 'hover:text-white',
    text: 'Engaging users at every stage of the funnel, keeping their journey and unique requirements in mind',
    image: 'https://www.amuratech.com/uploads/blog_post/thumbnail/170/pharmaceutical-marketing-strategies-for-physicians-thumbnails.jpg'
  },
  {
    title: 'Digital Transformation',
    icon: <FaMobileAlt className='mx-auto'/>,
    hoverBg: 'hover:bg-lime-500',
    hoverText: 'hover:text-white',
    text: 'Engaging users at every stage of the funnel, keeping their journey and unique requirements in mind',
    image: 'https://www.amuratech.com/uploads/blog_post/thumbnail/154/Banners-02.jpg'
  },
//   {
//     title: 'Experience Design',
//     icon: <FaPaintBrush className='mx-auto'/>,
//     hoverBg: 'hover:bg-lime-500',
//     hoverText: 'hover:text-white',
//   },
//   {
//     title: 'E-Commerce Solution',
//     icon: <FaShoppingCart className='mx-auto'/>,
//     hoverBg: 'hover:bg-lime-500',
//     hoverText: 'hover:text-white',
//   },
];

const FeaturedBlogPosts = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-lime-600">Our Services</h2>
        <p className="text-gray-600 text-lg">Blending the best of technology & marketing</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-28">
        {featuredBlogPosts.map((service, index) => (
          <Card
            key={index}
            className={`flex flex-col items-center justify-between text-center p-6 border border-gray-200 rounded-lg shadow-md bg-white transition-transform duration-300 hover:-translate-y-1 min-h-[600px] ${service.hoverBg}`}
          >
            <div
              className={`text-4xl mb-4 p-4 rounded-full transition-colors duration-300 ${service.hoverBg} ${service.hoverText}`}
            >
              <img src={`${service.image}`} />
            </div>
            <h3 className={`text-2xl font-semibold transition-colors duration-300 ${service.hoverText}`}>
              {service.title}
            </h3>
            <p className='text-xl'>{service.text}</p>
            <button> Read More</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogPosts;

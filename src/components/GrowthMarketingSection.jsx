import React from 'react';
import { Button } from 'antd';

const GrowthMarketingSection = () => {
  const features = [
    {
      icon: '👥',
      title: 'Higher Consumer Focus',
      description:
        'Engaging users at every stage of the funnel, keeping their journey and unique requirements in mind.',
    },
    {
      icon: '⚙️',
      title: 'Faster Go-to-market',
      description:
        'By setting up small modulated experiments rather than large-scale campaigns for faster go-live time.',
    },
    {
      icon: '📊',
      title: 'Better ROI',
      description:
        'By focussing on the right customers and driving higher value with your marketing.',
    },
  ];

  return (
    <section className="px-4 py-8 md:py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-lime-600 mb-2">
          Get The Digital Growth Marketing Edge
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          A data-driven marketing approach that focusses on the entire consumer funnel and delivers long-term value for your brand.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
        {features.map((feature, index) => (
          <div key={index} className="text-center border rounded-lg p-3 shadow-lg w-1/3 max-w-sm">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button type="primary" className="bg-lime-600 hover:bg-lime-700">
          KNOW MORE ABOUT GROWTH MARKETING
        </Button>
      </div>
    </section>
  );
};

export default GrowthMarketingSection;

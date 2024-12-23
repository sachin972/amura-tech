import React from 'react';

const DigitalMarketing = () => {
  // Data for the curved sections
  const stats = [
    {
      value: '200+',
      label: 'Digital Experts',
      gradientClass: 'from-[#587B1F] to-[#9BC53D]'
    },
    {
      value: '250+',
      label: 'Clients',
      gradientClass: 'from-[#3A5913] to-[#587B1F]'
    },
    {
      value: '31+',
      label: 'Softwares In\nOur Tech Stack',
      gradientClass: 'from-[#1B1F3B] to-[#3A5913]'
    }
  ];

  return (
    <div className="bg-[#1B1F3B] w-full min-h-screen relative overflow-hidden flex flex-row">
      {/* Content Section */}
      <div className="relative z-10 p-12">
        <h1 className="text-[#9BC53D] text-4xl font-bold leading-tight mb-4">
          WE ARE REVOLUTIONISING<br />
          DIGITAL MARKETING IN INDIA.
        </h1>
        <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
          Our growth marketing solutions deliver constant growth for our clients in the pursuit of a 
          higher top-line and CLTV. This makes us one of the best digital growth marketing 
          agencies in the country.
        </p>
      </div>

      {/* Curved Sections Container */}
      <div className="w-1/3">
        {/* Create three curved sections */}
        {stats.map((stat, index) => (
          <div 
            key={index}
            className={`
              absolute top-0 right-0 h-full
              transform transition-all duration-500
              hover:scale-[1.02] cursor-pointer
              group
            `}
            style={{
              width: `${(index + 1) * 33.33}%`,
              zIndex: 3 - index,
            }}
          >
            <div 
              className={`
                absolute top-0 right-0 h-full w-full
                bg-gradient-to-r ${stat.gradientClass}
              `}
              style={{
                clipPath: 'path("M0 0 L100% 0 L100% 100% L0 100% C50% 50% 0 0 0 0")',
              }}
            >
              {/* Stats Content */}
              <div className="absolute right-24 top-1/2 -translate-y-1/2 text-right">
                <div className="flex items-center justify-end gap-2">
                  <span className="text-white text-5xl font-bold">{stat.value}</span>
                  <div className="w-12 h-[2px] bg-white"></div>
                </div>
                <div className="text-white text-lg mt-2 whitespace-pre-line">
                  {stat.label}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalMarketing;
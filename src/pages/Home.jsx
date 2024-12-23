import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import GrowthMarketingSection from '../components/GrowthMarketingSection';
import Services from '../components/Services';
import GrowthStories from '../components/GrowthStories';
import DigitalMarketing from '../components/MarketingStats';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <GrowthMarketingSection />
      <Services />
      <GrowthStories />
      <DigitalMarketing />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/path-to-hero-image.jpg)' }}>
          <div className="flex items-center justify-center h-full text-white text-center">
            <h1 className="text-5xl font-bold">Welcome to Amura Clone</h1>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600">We provide top-notch solutions for your business.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
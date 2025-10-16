
import { useState } from 'react';
import Hero from './components/Hero';
import SearchSection from './components/SearchSection';
import Categories from './components/Categories';
import FeaturedVendors from './components/FeaturedVendors';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SearchSection />
      <Categories />
      <FeaturedVendors />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

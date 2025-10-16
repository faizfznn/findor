import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VendorPromo from './components/VendorPromo';
import FeaturedCategories from './components/FeaturedCategories';
import FeaturedVendors from './components/FeaturedVendors';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <VendorPromo />
        <FeaturedCategories />
        <FeaturedVendors />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
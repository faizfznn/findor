
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>
                Findor.co
              </h3>
              <p className="text-gray-400 mt-4 leading-relaxed">
                The leading digital vendor directory platform in Medan, connecting customers with trusted local service providers.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-twitter-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill"></i>
              </a>
            </div>
          </div>

          {/* For Customers */}
          <div>
            <h4 className="text-lg font-bold mb-6">For Customers</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Browse Vendors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Search Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Book Appointments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Write Reviews</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Customer Support</a></li>
            </ul>
          </div>

          {/* For Vendors */}
          <div>
            <h4 className="text-lg font-bold mb-6">For Vendors</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Join as Vendor</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Vendor Dashboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Pricing Plans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Marketing Tools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Vendor Support</a></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact & Legal</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <i className="ri-map-pin-line mr-2"></i>
                Jl. Gatot Subroto No. 123, Medan
              </li>
              <li className="text-gray-400">
                <i className="ri-phone-line mr-2"></i>
                +62 61 123 4567
              </li>
              <li className="text-gray-400">
                <i className="ri-mail-line mr-2"></i>
                info@findor.co
              </li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Findor.co. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a 
                href="https://readdy.ai/?origin=logo" 
                className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
              >
                Powered by Readdy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
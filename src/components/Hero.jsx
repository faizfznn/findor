
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-light text-gray-900 leading-tight tracking-tight">
                Find the Best
                <span className="text-blue-600 block font-normal">Vendors in Medan</span>
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto font-light">
                Discover trusted local vendors for all your needs. From culinary delights to professional photography, find quality services in one place.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <i className="ri-search-line text-gray-400 text-xl"></i>
                </div>
                <input
                  type="text"
                  placeholder="Search for vendors, services, or categories..."
                  className="w-full pl-16 pr-32 py-6 text-lg border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-colors whitespace-nowrap cursor-pointer">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-xl font-medium text-lg transition-colors whitespace-nowrap cursor-pointer">
                Browse Categories
              </button>
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-4 rounded-xl font-medium text-lg transition-colors whitespace-nowrap cursor-pointer">
                Join as Vendor
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16">
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-500 font-medium tracking-wide uppercase">Verified Vendors</div>
            </div>
            <div className="text-center border-l border-r border-gray-200">
              <div className="text-4xl font-light text-gray-900 mb-2">10K+</div>
              <div className="text-sm text-gray-500 font-medium tracking-wide uppercase">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">50+</div>
              <div className="text-sm text-gray-500 font-medium tracking-wide uppercase">Categories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-50 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-100 rounded-full opacity-40"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20"></div>
    </section>
  );
}

export default Hero;

export default function CallToAction() {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.9), rgba(59, 130, 246, 0.9)), url('https://readdy.ai/api/search-image?query=Modern%20business%20networking%20event%2C%20professional%20vendors%20meeting%2C%20digital%20marketplace%20concept%2C%20business%20growth%2C%20collaboration%2C%20success%2C%20contemporary%20office%20environment&width=1920&height=600&seq=cta-bg&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join hundreds of successful vendors on Findor.co and connect with customers who are actively looking for your services. Start your journey today!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-add-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Easy Registration</h3>
              <p className="text-blue-100">Sign up in minutes and start showcasing your services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Customers</h3>
              <p className="text-blue-100">Connect with verified customers looking for your services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-line-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Grow Your Revenue</h3>
              <p className="text-blue-100">Increase your bookings and expand your business reach</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-store-line mr-2"></i>
              Join as Vendor
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-phone-line mr-2"></i>
              Contact Sales
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm">Active Vendors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-sm">Monthly Bookings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4.8★</div>
              <div className="text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

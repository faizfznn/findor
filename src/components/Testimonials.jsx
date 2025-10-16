
export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Wijaya',
      role: 'Event Organizer',
      company: 'Medan Events Co.',
      rating: 5,
      text: 'Findor.co helped me find the perfect vendors for my wedding. The platform is so easy to use and all vendors are verified. Highly recommended!',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indonesian%20woman%2C%20business%20portrait%2C%20confident%20smile%2C%20modern%20office%20background%2C%20professional%20attire%2C%20friendly%20appearance%2C%20corporate%20headshot&width=300&height=300&seq=testimonial1&orientation=squarish'
    },
    {
      name: 'Ahmad Rahman',
      role: 'Restaurant Owner',
      company: 'Kuliner Nusantara',
      rating: 5,
      text: 'As a vendor on Findor.co, I have received so many quality customers. The platform really helps local businesses grow and connect with the right audience.',
      image: 'https://readdy.ai/api/search-image?query=Indonesian%20male%20business%20owner%2C%20restaurant%20chef%2C%20professional%20portrait%2C%20warm%20smile%2C%20culinary%20background%2C%20confident%20appearance%2C%20business%20headshot&width=300&height=300&seq=testimonial2&orientation=squarish'
    },
    {
      name: 'Maya Sari',
      role: 'Photographer',
      company: 'Maya Photography Studio',
      rating: 5,
      text: 'Joining Findor.co was the best decision for my photography business. The platform brings me consistent bookings and helps showcase my work to potential clients.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20photographer%2C%20creative%20portrait%2C%20artistic%20background%2C%20camera%20equipment%2C%20confident%20smile%2C%20professional%20appearance%2C%20studio%20setting&width=300&height=300&seq=testimonial3&orientation=squarish'
    },
    {
      name: 'Budi Santoso',
      role: 'Corporate Manager',
      company: 'PT Medan Sejahtera',
      rating: 5,
      text: 'We use Findor.co for all our corporate event needs. The quality of vendors and the ease of booking makes our job so much easier. Excellent service!',
      image: 'https://readdy.ai/api/search-image?query=Indonesian%20corporate%20manager%2C%20business%20suit%2C%20professional%20headshot%2C%20office%20background%2C%20confident%20expression%2C%20executive%20appearance%2C%20formal%20portrait&width=300&height=300&seq=testimonial4&orientation=squarish'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers and vendors have to say about Findor.co
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 mr-1"></i>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Thousands of Satisfied Users
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you're looking for vendors or want to grow your business, Findor.co is the perfect platform for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-search-line mr-2"></i>
              Find Vendors
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-store-line mr-2"></i>
              Become a Vendor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


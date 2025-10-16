
export default function FeaturedVendors() {
  const vendors = [
    {
      name: 'Lemper Mama Medan Snack Box',
      category: 'Culinary',
      rating: 4.9,
      reviews: 324,
      location: 'Medan Barat',
      price: 'Rp 25,000 - 75,000',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Indonesian%20Padang%20restaurant%2C%20authentic%20nasi%20padang%20dishes%2C%20warm%20lighting%2C%20cozy%20dining%20atmosphere%2C%20delicious%20Indonesian%20cuisine%2C%20traditional%20food%20presentation&width=400&height=300&seq=vendor1&orientation=landscape',
      verified: true,
      featured: true
    },
    {
      name: 'Studio Foto rumaribuspace',
      category: 'Photography',
      rating: 4.8,
      reviews: 156,
      location: 'Medan Timur',
      price: 'Rp 500,000 - 2,000,000',
      image: 'https://readdy.ai/api/search-image?query=Professional%20photography%20studio%20in%20Medan%2C%20modern%20camera%20equipment%2C%20portrait%20photography%20setup%2C%20creative%20lighting%2C%20photographer%20workspace%2C%20professional%20environment&width=400&height=300&seq=vendor2&orientation=landscape',
      verified: true,
      featured: true
    },
    {
      name: 'Makeupby.vita',
      category: 'Beauty & Wellness',
      rating: 4.7,
      reviews: 289,
      location: 'Medan Utara',
      price: 'Rp 150,000 - 800,000',
      image: 'https://readdy.ai/api/search-image?query=Professional%20makeup%20artist%20workspace%2C%20beauty%20makeup%20application%2C%20elegant%20makeup%20studio%2C%20cosmetic%20products%20display%2C%20professional%20beauty%20services%2C%20clean%20and%20modern%20makeup%20environment&width=400&height=300&seq=vendor3&orientation=landscape',
      verified: true,
      featured: false
    },
    {
      name: 'Medio Production',
      category: 'Event Planning',
      rating: 4.9,
      reviews: 98,
      location: 'Medan Selatan',
      price: 'Rp 5,000,000 - 50,000,000',
      image: 'https://readdy.ai/api/search-image?query=Professional%20event%20production%20setup%2C%20video%20production%20equipment%2C%20media%20production%20studio%2C%20event%20filming%20and%20recording%2C%20professional%20production%20services%2C%20modern%20media%20workspace&width=400&height=300&seq=vendor4&orientation=landscape',
      verified: true,
      featured: true
    },
    {
      name: 'The Fame Management',
      category: 'Entertainment',
      rating: 4.6,
      reviews: 203,
      location: 'Medan Kota',
      price: 'Rp 200,000 - 2,500,000',
      image: 'https://readdy.ai/api/search-image?query=Professional%20music%20band%20performing%20on%20stage%2C%20live%20music%20performance%2C%20band%20members%20with%20instruments%2C%20concert%20stage%20lighting%2C%20entertainment%20venue%2C%20musical%20performance%20atmosphere&width=400&height=300&seq=vendor5&orientation=landscape',
      verified: true,
      featured: false
    },
    {
      name: 'Fauve Imagine',
      category: 'Photography',
      rating: 4.8,
      reviews: 127,
      location: 'Medan Helvetia',
      price: 'Rp 300,000 - 5,000,000',
      image: 'https://readdy.ai/api/search-image?query=Professional%20wedding%20photographer%20capturing%20beautiful%20moments%2C%20elegant%20wedding%20photography%20session%2C%20romantic%20wedding%20venue%2C%20photographer%20with%20professional%20camera%20equipment%2C%20wedding%20documentation%20services&width=400&height=300&seq=vendor6&orientation=landscape',
      verified: true,
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Vendors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our top-rated and most trusted vendors in Medan, carefully selected for their quality and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              data-product-shop
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {vendor.verified && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <i className="ri-shield-check-line mr-1"></i>
                      Verified
                    </span>
                  )}
                  {vendor.featured && (
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <i className="ri-star-fill mr-1"></i>
                      Featured
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hoverbg-white transition-colors">
                    <i className="ri-heart-line text-gray-600 hover:text-red-500"></i>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {vendor.name}
                    </h3>
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {vendor.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  <div className="flex items-center mr-4">
                    <i className="ri-star-fill text-yellow-400 mr-1"></i>
                    <span className="font-semibold text-gray-900">{vendor.rating}</span>
                    <span className="text-gray-600 ml-1">({vendor.reviews} reviews)</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <i className="ri-map-pin-line mr-2"></i>
                  <span>{vendor.location}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <i className="ri-price-tag-3-line mr-2"></i>
                  <span className="font-semibold">{vendor.price}</span>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                    View Details
                  </button>
                  <button className="px-4 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                    <i className="ri-message-line"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
            View All Vendors
          </button>
        </div>
      </div>
    </section>
  );
}

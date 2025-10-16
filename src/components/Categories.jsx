
export default function Categories() {
  const categories = [
    {
      name: 'Culinary',
      icon: 'ri-restaurant-line',
      count: '120+ vendors',
      image: 'https://readdy.ai/api/search-image?query=Indonesian%20culinary%20food%20vendors%2C%20traditional%20and%20modern%20cuisine%2C%20restaurant%20kitchen%2C%20food%20preparation%2C%20professional%20cooking%2C%20vibrant%20colors%2C%20appetizing%20dishes%2C%20clean%20kitchen%20environment&width=400&height=300&seq=culinary-cat&orientation=landscape'
    },
    {
      name: 'Photography',
      icon: 'ri-camera-line',
      count: '85+ vendors',
      image: 'https://readdy.ai/api/search-image?query=Professional%20photography%20studio%2C%20camera%20equipment%2C%20portrait%20photography%2C%20wedding%20photography%2C%20modern%20studio%20lighting%2C%20photographer%20at%20work%2C%20creative%20workspace&width=400&height=300&seq=photo-cat&orientation=landscape'
    },
    {
      name: 'Beauty & Wellness',
      icon: 'ri-scissors-line',
      count: '95+ vendors',
      image: 'https://readdy.ai/api/search-image?query=Modern%20beauty%20salon%2C%20spa%20wellness%20center%2C%20professional%20beauty%20treatments%2C%20relaxing%20atmosphere%2C%20clean%20and%20elegant%20interior%2C%20beauty%20services%2C%20skincare%20treatments&width=400&height=300&seq=beauty-cat&orientation=landscape'
    },
    {
      name: 'Event Planning',
      icon: 'ri-calendar-event-line',
      count: '60+ vendors',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20event%20planning%2C%20wedding%20decoration%2C%20corporate%20events%2C%20beautiful%20venue%20setup%2C%20professional%20event%20coordination%2C%20festive%20atmosphere%2C%20organized%20celebration&width=400&height=300&seq=event-cat&orientation=landscape'
    },
    {
      name: 'Fashion',
      icon: 'ri-shirt-line',
      count: '75+ vendors',
      image: 'https://readdy.ai/api/search-image?query=Fashion%20boutique%2C%20clothing%20store%2C%20modern%20fashion%20retail%2C%20stylish%20apparel%2C%20fashion%20design%20studio%2C%20trendy%20clothing%20displays%2C%20contemporary%20fashion&width=400&height=300&seq=fashion-cat&orientation=landscape'
    },
    {
      name: 'Entertainment',
      icon: 'ri-music-line',
      count: '40+ vendors',
      image: 'https://readdy.ai/api/search-image?query=Entertainment%20services%2C%20live%20music%20performance%2C%20DJ%20setup%2C%20band%20performing%2C%20MC%20hosting%20event%2C%20stage%20lighting%2C%20professional%20entertainment%2C%20vibrant%20atmosphere%2C%20musical%20instruments&width=400&height=300&seq=entertainment-cat&orientation=landscape'
    },
    {
      name: 'Daily Needs',
      icon: 'ri-service-line',
      count: '90+ vendors',
      image: 'https://readdy.ai/api/search-image?query=Daily%20services%2C%20laundry%20service%2C%20cleaning%20service%2C%20local%20transportation%2C%20household%20needs%2C%20professional%20service%20providers%2C%20organized%20service%20environment%2C%20quality%20daily%20assistance&width=400&height=300&seq=daily-cat&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of vendor categories to find exactly what you need for your business or personal requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <i className={`${category.icon} text-blue-600 text-xl`}></i>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.count}</p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  <span className="mr-2">Explore</span>
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors whitespace-nowrap cursor-pointer">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}

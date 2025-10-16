import Button from "./ui/Button";
import Card from "./ui/Card";

const categories = [
    { title: "Toy Figure", vendors: 42, image: "https://via.placeholder.com/300x200/2563EB/FFFFFF?text=Toys" },
    { title: "Photography", vendors: 28, image: "https://via.placeholder.com/300x200/10B981/FFFFFF?text=Photo" },
    { title: "Home Decor", vendors: 35, image: "https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Decor" },
    { title: "Diecast", vendors: 51, image: "https://via.placeholder.com/300x200/EF4444/FFFFFF?text=Diecast" },
    { title: "Music", vendors: 19, image: "https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=Music" },
    { title: "Art", vendors: 24, image: "https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Art" },
];

const FeaturedCategories = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-findor-dark">Featured Categories</h2>
                <p className="mt-2 text-gray-500">Explore vendors by their category.</p>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map(category => (
                        <Card key={category.title} className="text-left cursor-pointer group">
                             <div className="overflow-hidden rounded-t-xl">
                                <img src={category.image} alt={category.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg">{category.title}</h3>
                                <p className="text-gray-500 text-sm">{category.vendors} vendors</p>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="mt-12">
                    <Button variant="outline">View More</Button>
                </div>
            </div>
        </section>
    );
}

export default FeaturedCategories;
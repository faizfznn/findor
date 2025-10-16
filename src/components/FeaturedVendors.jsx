import Button from "./ui/Button";
import Card from "./ui/Card";
import { FaStar } from "react-icons/fa";

const vendors = [
    { name: "Medan Diecast", category: "Diecast", rating: 4.8, reviews: 120, image: "https://via.placeholder.com/300x200/4B5563/FFFFFF?text=Vendor1" },
    { name: "Studio XYZ", category: "Photography", rating: 5.0, reviews: 98, image: "https://via.placeholder.com/300x200/4B5563/FFFFFF?text=Vendor2" },
    { name: "Home Decor ID", category: "Decor", rating: 4.7, reviews: 210, image: "https://via.placeholder.com/300x200/4B5563/FFFFFF?text=Vendor3" },
    { name: "Action Figure Hub", category: "Toy Figure", rating: 4.9, reviews: 150, image: "https://via.placeholder.com/300x200/4B5563/FFFFFF?text=Vendor4" },
];

const FeaturedVendors = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-findor-dark">Featured Vendors</h2>
                 <p className="mt-2 text-gray-500">Top-rated vendors on our platform.</p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {vendors.map(vendor => (
                        <Card key={vendor.name} className="text-left">
                            <img src={vendor.image} alt={vendor.name} className="w-full h-48 object-cover rounded-t-xl" />
                            <div className="p-4">
                                <h3 className="font-bold text-lg">{vendor.name}</h3>
                                <p className="text-sm text-gray-500">{vendor.category}</p>
                                <div className="flex items-center mt-2">
                                    <FaStar className="text-yellow-400" />
                                    <span className="ml-1 font-bold">{vendor.rating}</span>
                                    <span className="ml-2 text-gray-400 text-sm">({vendor.reviews} reviews)</span>
                                </div>
                                <Button className="w-full mt-4">View Vendor</Button>
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

export default FeaturedVendors;
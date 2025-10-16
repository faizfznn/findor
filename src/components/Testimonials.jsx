import Button from "./ui/Button";
import Card from "./ui/Card";
import { FaStar } from "react-icons/fa";

const testimonials = [
    { name: "John Doe", text: "Findor helped me find the perfect photographer for my event. Highly recommended!", rating: 5, avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
    { name: "Jane Smith", text: "Amazing platform to discover local toy collectors. The community is great!", rating: 5, avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d" },
    { name: "Mike Johnson", text: "I was able to grow my diecast business significantly after joining Findor.", rating: 5, avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d" },
    { name: "Sarah Williams", text: "A must-have for anyone looking for quality local vendors. Very easy to use.", rating: 5, avatar: "https://i.pravatar.cc/150?u=a042581f4e29026707d" },
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-findor-dark">What Our Users Say</h2>
                <p className="mt-2 text-gray-500">Real stories from our satisfied customers.</p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map(item => (
                        <Card key={item.name} className="p-6 text-left flex flex-col sm:flex-row items-start gap-4">
                           <img src={item.avatar} alt={item.name} className="w-16 h-16 rounded-full flex-shrink-0" />
                           <div>
                                <p className="text-gray-600">"{item.text}"</p>
                                <h4 className="mt-4 font-bold">{item.name}</h4>
                                <div className="flex mt-1">
                                    {[...Array(item.rating)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
                                </div>
                           </div>
                        </Card>
                    ))}
                </div>
                 <div className="mt-12">
                    <Button variant="outline">Show more feedback</Button>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
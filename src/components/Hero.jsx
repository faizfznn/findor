import Button from "./ui/Button";

const Hero = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-findor-dark leading-tight">
                    Find the Best Vendors <span className="text-findor-blue">in Medan</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
                    Discover and connect with the best local vendors for all your needs. From hobbies to services, we've got you covered.
                </p>
                <div className="mt-8 max-w-3xl mx-auto bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex flex-col md:flex-row items-center gap-4">
                    <input type="text" placeholder="Find Vendors..." className="w-full md:w-1/3 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Location" className="w-full md:w-1/3 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
                    <select className="w-full md:w-1/3 p-3 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500">
                        <option>Category</option>
                        <option>Toys</option>
                        <option>Photography</option>
                        <option>Decor</option>
                    </select>
                    <Button className="w-full md:w-auto px-8 py-3">Search</Button>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
                    <div>
                        <p className="text-3xl font-bold text-findor-dark">300+</p>
                        <p className="text-gray-500">Vendors</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-findor-dark">1K+</p>
                        <p className="text-gray-500">Users</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-findor-dark">5+</p>
                        <p className="text-gray-500">Categories</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
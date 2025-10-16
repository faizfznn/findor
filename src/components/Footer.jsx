import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-findor-dark text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1: Brand */}
                    <div className="md:col-span-1">
                        <h1 className="text-2xl font-bold">findor</h1>
                        <p className="mt-2 text-gray-400">The best place to find and connect with local vendors in your city.</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2, 3, 4: Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:col-span-3 gap-8">
                        <div>
                            <h4 className="font-semibold">Links</h4>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold">Marketplace</h4>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Toys</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Photography</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Decor</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold">Support</h4>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Findor. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
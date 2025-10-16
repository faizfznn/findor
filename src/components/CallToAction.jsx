import Button from "./ui/Button";

const CTA = () => {
    return (
        <section className="bg-findor-blue text-white py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Grow Your Business?</h2>
                <p className="mt-4 max-w-2xl mx-auto opacity-80">Join our community of vendors and reach more customers than ever before.</p>
                
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Button variant="primary" className="bg-white text-findor-blue hover:bg-gray-100">Get Started</Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-20">Contact Us</Button>
                </div>
            </div>
        </section>
    );
}

export default CTA;
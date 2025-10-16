import Button from "./ui/Button";

const VendorPromo = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                 <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="text-center lg:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-findor-dark">Are you a Vendor?</h2>
                        <p className="mt-2 text-gray-500">Join our platform and grow your business with us.</p>
                    </div>
                    <div className="w-full lg:w-auto flex-shrink-0">
                         <Button className="w-full lg:w-auto px-8 py-3">Start Selling</Button>
                    </div>
                 </div>
            </div>
        </section>
    )
}

export default VendorPromo;
const Sale = () => {
    return (
        <div className="my-12 container mx-auto ">
            <div>
                <div className="p-6 py-12 bg-[#009FF5] bg-opacity-50 dark:text-[#0A2A3B] rounded-lg">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <h2 className="text-center text-6xl tracki font-bold">
                                Up to
                                <br className="sm:hidden" />
                                25% Off
                            </h2>
                            <div className="space-x-2 text-center py-2 lg:py-0">
                                <span>Use code:</span>
                                <span className="font-bold text-lg">PHB8</span>
                            </div>
                            <a
                                href="#"
                                rel="noreferrer noopener"
                                className="px-5 mt-4 lg:mt-0 py-3 rounded-md  block bg-[#0A2A3B] text-white "
                            >
                                Select Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sale;

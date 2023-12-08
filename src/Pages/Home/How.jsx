import { FaUserPlus, FaCalendarCheck, FaToolbox } from "react-icons/fa6";

const How = () => {
    return (
        <div className="my-12 container mx-auto bg-[#009FF5] p-8 rounded-lg bg-opacity-50">
            <div className="mb-12 space-y-2">
                <h2 className="text-center text-lg font-semibold">
                    How We Work
                </h2>
                <h1 className="text-center text-3xl text-[#0A2A3B] font-bold">
                    Step into the Light with our <br /> Working Process
                </h1>
            </div>
            <div className="mx-auto  max-w-7xl px-2 lg:px-8">
                <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0A2A3B]">
                            <FaUserPlus className="text-4xl text-white" />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">
                            Sign Up
                        </h3>
                        <p className="mt-4 text-sm text-gray-600">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0A2A3B]">
                            <FaCalendarCheck className="text-4xl text-white" />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">
                            Schedule Service
                        </h3>
                        <p className="mt-4 text-sm text-gray-600">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit.
                        </p>
                    </div>
                    <div>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0A2A3B]">
                            <FaToolbox className="text-4xl text-white" />
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black">
                            Get Repaired
                        </h3>
                        <p className="mt-4 text-sm text-gray-600">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default How;

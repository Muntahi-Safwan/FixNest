import { useEffect, useState } from "react";
import PopularServiceCard from "./PopularServiceCard";
import { Link } from "react-router-dom";

const OurServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://fix-nest-server.vercel.app/services`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setServices(data);
            });
    }, []);

    const popularServices = services.slice(0, 4);

    return (
        <div className="my-12 py-8 bg-[#0A2A3B]">
            <h1 className="text-3xl text-center font-semibold text-white">
                Our Popular Services
            </h1>
            <p className="text-center text-white my-6">
                See the most popular services our customer wants from us
            </p>
            <div className="grid md:grid-cols-2 gap-4 container mx-auto">
                {popularServices.map((service) => (
                    <PopularServiceCard
                        key={service._id}
                        service={service}
                    ></PopularServiceCard>
                ))}
            </div>
            <div className="my-4 flex justify-center items-center">
                <Link to="/services">
                    <button className="bg-[#009FF5] text-[#0A2A3B] font-bold px-3 py-2 rounded-md">
                        Show All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default OurServices;

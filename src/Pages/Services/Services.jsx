import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { Helmet } from "react-helmet-async";

const Services = () => {
    const services = useLoaderData();

    return (
        <div>
            <Helmet>
                <title> Services | FixNest</title>
            </Helmet>
            <div className="my-12">
                <h1 className="text-center font-bold text-3xl my-12">
                    Let's Explore all the Services
                </h1>
                <div className="container mx-auto grid md:grid-cols-3 gap-4">
                    {services?.map((service) => (
                        <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import ServiceCard from "../Services/ServiceCard";

const MySchedule = () => {
    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const url = `https://fix-nest-server.vercel.app/myServices?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div className="container mx-auto my-12">
            <Helmet>
                <title> My Schedule | FixNest</title>
            </Helmet>
            <h1 className="text-center font-bold text-3xl my-12">
                My Schedule
            </h1>
            <div className="container mx-auto grid grid-cols-2">
                {services.map((service) => (
                    <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>
                ))}
            </div>
        </div>
    );
};

export default MySchedule;

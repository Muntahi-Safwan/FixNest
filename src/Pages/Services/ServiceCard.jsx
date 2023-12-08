import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { name, photo_url, short_description, price, _id } = service;
    console.log(service);

    return (
        <div className="container mx-auto">
            <div className=" md:w-96 p-3 container mx-auto rounded-md shadow-md bg-[#0A2A3B] dark:text-gray-50">
                <img
                    src={photo_url}
                    alt=""
                    className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
                <div className="flex flex-col  justify-between p-3 space-y-2">
                    <div className="mt-2 mb-2">
                        <h2 className="text-xl font-semibold tracki">{name}</h2>
                        <p className="dark:text-gray-100 text-base my-2">
                            {short_description}
                        </p>
                        <p className="text-lg font-semibold">Price: ${price}</p>
                    </div>
                    <Link to={`/service/${_id}`}>
                        <button
                            type="button"
                            className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-[#009FF5] dark:text-gray-900"
                        >
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

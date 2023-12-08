import { Link } from "react-router-dom";

const PopularServiceCard = ({ service }) => {
    const {
        name,
        photo_url,
        short_description,
        user_img,
        user_name,
        _id,
        price,
    } = service;

    return (
        <div className="container mx-auto">
            <div className="container mx-auto items-center bg-[#009FF5] rounded-lg shadow sm:flex  dark:bg-[#009FF5]">
                <img
                    className="w-64 h-52 rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={photo_url}
                    alt="Bonnie Avatar"
                />
                <div className="p-3">
                    <h3 className="text-xl font-bold tracking-tight text-[#0A2A3B]">
                        {name}
                    </h3>
                    <p className="mt-1 mb-1 font-light text-sm text-[#0A2A3B]">
                        {short_description}
                    </p>
                    <p>Price: ${price}</p>
                    <div className="grid grid-flow-col justify-between items-center">
                        <div className="flex gap-3 items-center">
                            <img
                                className="w-12 rounded-full "
                                src={user_img}
                                alt=""
                            />
                            <h1>{user_name}</h1>
                        </div>
                        <div>
                            <Link to={`/service/${_id}`}>
                                <button className="bg-[#0A2A3B] px-3 py-2 text-white rounded-lg">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularServiceCard;

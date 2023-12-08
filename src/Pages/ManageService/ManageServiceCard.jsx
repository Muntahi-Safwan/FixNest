/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const ManageServiceCard = ({ service, handleDelete }) => {
    const { name, photo_url, short_description, price, _id, serviceArea } =
        service;
    const { user } = useContext(AuthContext);
    const user_name = user.displayName;
    const user_img = user.photoURL;
    console.log(service);

    const [openModal, setOpenModal] = useState(false);
    // Close Modal Function
    function onCloseModal() {
        setOpenModal(false);
    }

    const handleUpdateService = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo_url = form.photo_url.value;
        const short_description = form.short_description.value;
        const serviceArea = form.serviceArea.value;
        const price = form.price.value;
        const updatedService = {
            name,
            user_name,
            user_img,
            photo_url,
            short_description,
            serviceArea,
            price,
        };
        console.log(updatedService);

        fetch(`https://fix-nest-server.vercel.app/service/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedService),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        "Congratulations!",
                        "Service Updated Successfully",
                        "success"
                    );
                    onCloseModal();
                    window.location.reload();
                }
            });
    };

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
                    <button
                        onClick={() => handleDelete(_id)}
                        type="button"
                        className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-[#009FF5] dark:text-gray-900"
                    >
                        Delete
                    </button>
                    <button
                        onClick={() => setOpenModal(true)}
                        type="button"
                        className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-[#009FF5] dark:text-gray-900"
                    >
                        Update
                    </button>
                </div>
            </div>
            {/* Update Modal */}
            <Modal
                className="bg-[#0A2A3B]"
                show={openModal}
                size="md"
                onClose={onCloseModal}
                popup
            >
                <Modal.Header className="bg-[#0A2A3B] " />
                <Modal.Body className="bg-[#0A2A3B] ">
                    <div className="space-y-6 ">
                        <div>
                            <div>
                                <form onSubmit={handleUpdateService}>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input
                                            defaultValue={name}
                                            type="name"
                                            name="name"
                                            id="name"
                                            className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-[#002D41] peer"
                                            placeholder=" "
                                            required
                                        />
                                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Name
                                        </label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input
                                            defaultValue={photo_url}
                                            type="text"
                                            name="photo_url"
                                            id="photo-url"
                                            className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-[#002D41] peer"
                                            placeholder=" "
                                            required
                                        />
                                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Service Image Link
                                        </label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input
                                            defaultValue={short_description}
                                            type="text"
                                            name="short_description"
                                            id="short-description"
                                            className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-[#002D41] peer"
                                            placeholder=" "
                                            required
                                        />
                                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                            Short Description of the Service
                                        </label>
                                    </div>
                                    <div className="grid md:grid-cols-1 md:gap-6">
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input
                                                defaultValue={serviceArea}
                                                type="text"
                                                name="serviceArea"
                                                id="type"
                                                className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-[#002D41] peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                Service Area
                                            </label>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input
                                                defaultValue={price}
                                                type="number"
                                                name="price"
                                                id="price"
                                                className="block py-2.5 px-0 w-full text-sm text-[#002D41] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-[#002D41] peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                                Price
                                            </label>
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <h1 className="text-xl text-white">
                                                Service Provider:{" "}
                                            </h1>
                                            <p className="text-white">
                                                {user_name}
                                            </p>
                                            <img
                                                className="w-16"
                                                src={user_img}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="text-white bg-[#00A2EF] hover:bg-[#002D41] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#00A2EF] dark:hover:bg-[#002D41] dark:focus:ring-blue-800"
                                    >
                                        Update
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ManageServiceCard;

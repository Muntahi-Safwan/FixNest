import { useLoaderData } from "react-router-dom";
import { Modal } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const SingleService = () => {
    const service = useLoaderData();
    const { name, photo_url, short_description, price, serviceArea } = service;
    const { user } = useContext(AuthContext);
    const user_name = user.displayName;
    const user_img = user.photoURL;
    const user_email = user.email;
    console.log(user);
    console.log(service);

    // Close Modal Function
    function onCloseModal() {
        setOpenModal(false);
    }
    // Service Booking Form
    const handleBookService = (e) => {
        e.preventDefault();
        const form = e.target;
        const date = form.date.value;
        const instruction = form.instruction.value;
        const bookService = {
            name,
            user_email,
            date,
            instruction,
            user_name,
            user_img,
            photo_url,
            short_description,
            serviceArea,
            price,
        };
        console.log(bookService);

        fetch("https://fix-nest-server.vercel.app/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bookService),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        "Congratulations!",
                        "Service Added Successfully",
                        "success"
                    );
                    onCloseModal();
                }
            });
    };

    //Modal
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="container mx-auto my-12">
            <Helmet>
                <title> {name} | FixNest</title>
            </Helmet>
            <h2 className="mb-4  font-bold text-3xl">{service.name} </h2>
            <div className="grid gap-4 ">
                <img src={service.photo_url} alt="" />
                <div className="flex  items-start">
                    <button
                        onClick={() => setOpenModal(true)}
                        className="bg-[#0A2A3B] text-white py-2 px-3 rounded-lg "
                    >
                        Add Booking
                    </button>
                </div>
            </div>
            <div className="my-4 space-y-2">
                <p>{service.short_description}</p>
                <p className="text-xl font-semibold">Price: ${service.price}</p>
                <p className="text-xl">Service Provider: </p>
                <div className="flex items-center gap-4">
                    <img className="w-14" src={service.user_img} alt="" />
                    <h1>{service.user_name}</h1>
                </div>
            </div>

            {/* Modal */}
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
                                <h1 className="text-white font-semibold text-lg mb-3">
                                    Service Name: {name}
                                </h1>
                                <img src={photo_url} alt="" />
                                <div className="mt-3">
                                    <h1 className="text-white">
                                        Provider Email: {user.email}
                                    </h1>
                                    <p className="text-white">
                                        Price: ${price}
                                    </p>
                                </div>
                                <form
                                    onSubmit={handleBookService}
                                    className="space-y-2"
                                >
                                    <p className="text-white">
                                        Add Service Date:
                                    </p>
                                    <input
                                        type="date"
                                        name="date"
                                        className="w-full rounded-lg p-2"
                                    />
                                    <p className="text-white">
                                        Special Instruction:{" "}
                                    </p>
                                    <input
                                        type="text"
                                        name="instruction"
                                        className="w-full rounded-lg p-2"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-[#009FF5] p-2 rounded-lg"
                                    >
                                        Purchase this Service
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

export default SingleService;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ManageServiceCard from "./ManageServiceCard";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const ManageService = () => {
    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const url = `https://fix-nest-server.vercel.app/myServices?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://fix-nest-server.vercel.app/service/${id}`, {
                    method: "Delete",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your Service has been deleted.",
                                "success"
                            );
                            window.location.reload();
                        }
                    });
            }
        });
    };

    return (
        <div className="container mx-auto my-12">
            <Helmet>
                <title> Manage Services | FixNest</title>
            </Helmet>
            <h1 className="text-center font-bold text-3xl my-12">
                Manage Service
            </h1>
            <div className="container mx-auto grid gap-4 md:grid-cols-2">
                {services.map((service) => (
                    <ManageServiceCard
                        key={service._id}
                        service={service}
                        handleDelete={handleDelete}
                    ></ManageServiceCard>
                ))}
            </div>
        </div>
    );
};

export default ManageService;

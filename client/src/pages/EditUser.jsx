import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditUser = () => {
    const { id } = useParams()
    useEffect(() => {
        getDataById();
    }, [])
    const { authorizationtoken } = useAuth();
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        phone: "",
    });

    const getDataById = async () => {
        const res = await fetch(`http://127.0.0.1:3000/api/admin/users/${id}`,
            {
                method: "GET",
                headers: {
                    Authorization: authorizationtoken,
                }
            })
        const data = await res.json();
        if (res.status === 200) {
            setUserData(data.msg);
            debugger
        }
    }

    const handleUserData = (evt) => {
        const { name, value } = evt.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const save = async (evt) => {
        evt.preventDefault();
        const data = {
            ...userData,
        }
        console.log(JSON.stringify(data))
        debugger
        try {
            const res = await fetch(`http://127.0.0.1:3000/api/admin/users/update/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authorizationtoken,
                },
                body: JSON.stringify(data),
            });
            const response = await res.json();
            debugger
            if (res.ok) {
                toast.success("User updated Successfully");
            }

        } catch (error) {
            console.log(error);
            debugger
            toast.error("something went wrong");
        }
    }
    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Update User Data</p>

                                        <form onSubmit={save} className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                    <input type="text" onChange={handleUserData} value={userData.username} name="username" className="form-control" />
                                                    <label className="form-label" htmlFor="">User Name</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                    <input type="email" onChange={handleUserData} value={userData.email} name='email' className="form-control" />
                                                    <label className="form-label" htmlFor="">Your Email</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                    <input type="text" onChange={handleUserData} value={userData.phone} name='phone' className="form-control" />
                                                    <label className="form-label" htmlFor="">phone</label>
                                                </div>
                                            </div>



                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg">Update</button>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" alt="Sample image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditUser
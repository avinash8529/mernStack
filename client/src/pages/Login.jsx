import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';


const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    })
    const [typePass, setTypePass] = useState("password");

    const handleLogin = (evt) => {
        const { name, value } = evt.target;
        setLoginData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handlePassword = () => {
        if (typePass === "password") {
            setTypePass("text")
        }
        else {
            setTypePass("password");
        }
    }

    const { storeTokenInLS } = useAuth();
    const login = async (evt) => {
        evt.preventDefault();
        var data = {
            ...loginData,
        }
        console.log(data);
        debugger
        try {
            const res = await fetch(`http://127.0.0.1:3000/api/auth/login`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(data)
            })
            console.log(res);
            const res_data = await res.json();
            console.log({ "message from login": res_data });
            debugger
            if (res.status === 200) {

                debugger
                window.location.href = "/"
                storeTokenInLS(res_data.token);
                // localStorage.setItem("token", res_data.token);
                setLoginData({ email: "", password: "" });
                toast.success("login successfully");
                setTimeout(function () {
                    window.location.href = "/";
                }, 4000);
            }
            else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.messsage);
            }
        } catch (error) {

        }

    }
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">

                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={login}>
                            <div className="d-flex flex-row align-items-center mt-4 mb-4 justify-content-center justify-content-lg-start">
                                <h1>Login </h1>
                            </div>

                            {/* <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Login</p>
                            </div> */}


                            <div data-mdb-input-init className="form-outline mb-4">
                                <input type="email" id="form3Example3" name='email' onChange={handleLogin} value={loginData.email} className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" />
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                            </div>

                            <div data-mdb-input-init className="form-outline mb-3">
                                <input type={typePass} id="form3Example4" name='password' value={loginData.password} onChange={handleLogin} className="form-control form-control-lg"
                                    placeholder="Enter password" />
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                {typePass === "password" ? <span className='ms-3 mt-1 rounded p-1  bg-success' type='button' onClick={handlePassword}>show</span> :
                                    <span className='ms-3 mt-1 rounded p-1  bg-danger' type='button' onClick={handlePassword}>hide</span>}
                            </div>

                            <div className="d-flex justify-content-between align-items-center">

                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me

                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/register"
                                    className="link-danger">Register</Link></p>
                            </div>

                        </form>
                    </div>
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Login
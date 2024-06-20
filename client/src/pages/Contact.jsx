import React, { useState } from 'react'
import { useAuth } from "../store/auth";

const Contact = () => {
    const [contactData, setContactData] = useState({
        username: "",
        email: "",
        message: "",
    })
    const [userData, setUserData] = useState(true);

    const { user } = useAuth();
    console.log(user);
    debugger
    if (userData && user) {
        setContactData({
            username: user.username,
            email: user.email,
            message: "",
        })
        setUserData(false);
    }

    const handleConatctInput = (evt) => {
        const { name, value } = evt.target;
        setContactData((prevState) => ({
            ...prevState,
            [name]: value
        }));

    }
    const saveContact = async (evt) => {
        evt.preventDefault();
        const data = {
            ...contactData
        }
        console.log(data);
        debugger;
        const response = await fetch("http://localhost:3000/api/form/contactUs",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
        console.log(response);
        if (response.status === 200) {
            alert("message sent successfully");
            setContactData({ message: "", email: "", username: "" })
        }
        else {
            console.log("something went worng")
        }
    }

    return (
        <form onSubmit={saveContact} style={{ width: "26rem", margin: "auto" }}>

            <div data-mdb-input-init className="form-outline mb-4">
                <h1>Contact Us</h1>
            </div>

            <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" id="form4Example1" onChange={handleConatctInput} name='username' value={contactData.username} className="form-control" />
                <label className="form-label" htmlFor="form4Example1">user Name</label>
            </div>


            <div data-mdb-input-init className="form-outline mb-4">
                <input type="email" id="form4Example2" name='email' onChange={handleConatctInput} value={contactData.email} className="form-control" />
                <label className="form-label" htmlFor="form4Example2">Email address</label>
            </div>


            <div data-mdb-input-init className="form-outline mb-4">
                <textarea className="form-control" id="form4Example3" name='message' value={contactData.message} onChange={handleConatctInput} rows="4"></textarea>
                <label className="form-label" htmlFor="form4Example3">Message</label>
            </div>

            <button data-mdb-ripple-init type="submit" className="btn btn-primary btn-block mb-4">Send</button>
        </form>
    )
}

export default Contact
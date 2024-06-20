import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='container-fluid'>
            <h1> 404</h1>
            <h4> sorry page you are tryinh is not found</h4>
            <p>oops..!! the page you arre trying to access is not found
                if you find there is an issue please feel free to report it we ll look in to it.
            </p>

            <div className="col-sm-12">
                <Link to="/">Home</Link>
                <Link className='ms-3' to="/contact">Contact Us</Link>
            </div>

        </div>
    )
}

export default Error
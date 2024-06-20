import React, { useState } from 'react';
import "./Login.css";
import { useAuth } from '../store/auth';

const Services = () => {
    const { serviceData } = useAuth();

    debugger
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-12 d-flex flex-wrap d-flex justify-content-center">
                    {serviceData.map((evt, index) => {
                        return (
                            <div className="col-sm-3 border border-success m-1" key={index}>
                                <div className="col-sm-12 card-image border border-danger">

                                </div>
                                <h4 className='text-center'>{evt.service}</h4>
                                <div className="col-sm-12">
                                    <p className="text-center"><b>Description-:</b>{evt.description}</p>
                                    <p className="text-center"><b>price-:</b>{evt.price}</p>
                                    <p className="text-center"><b>provider-:</b>{evt.provider}</p>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
        </div>
    )
}

export default Services
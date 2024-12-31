import React, { useState } from 'react'
import { FeatureData } from '../Utils/Util';

function Feature() {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    return (
        <div>
            <div className="container mt-4">
                <nav>
                    <div className='d-flex justify-content-between align-items-center justify-content-center'>
                        <div className='col-4 fs-6' style={{ color: '#5e72e4' }}>
                            <div>
                                <i class="fa-solid fa-house"></i> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Features</a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Admin</a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>features</a>
                            </div>
                        </div>
                        <div className='col-8 fs-6 d-flex justify-content-end'>
                            <div>
                                <button
                                    type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    className="btn btn-lg float-right btn-sm p-1 px-2 mx-1"
                                    style={{ backgroundColor: "rgba(55, 125, 255, 0.1)", color: "#5e72e4" }}
                                    onClick={openModal}
                                >
                                    <a href="/add_feature"><i className="fa-solid fa-plus me-2"></i>
                                        Create Feature</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav >
            </div>
{/* 
            /* table start */}
            <div className="container mt-4">
                <div className='d-flex justify-content-between align-items-center justify-content-center' style={{ backgroundColor: 'white' }}>
                    <h4 style={{ color: '#57584E' }} className='m-3'>Our Features</h4>
                    <div>
                        <input type="text" placeholder='Search....' className='m-3' style={{ backgroundColor: '#FAFAFA', border: '0', padding: '10px' }} />
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Title</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Description</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Language</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: '14px', color: '#212529' }}>
                        {FeatureData.map((feature) => (
                            <tr key={feature.id}>
                                {/* <td style={{ padding: '16px' }}>{blog.thumbnail}</td> */}
                                <td style={{ padding: '16px' }}>{feature.title}</td>
                                <td style={{ padding: '16px' }}>{feature.description}</td>
                                <td style={{ padding: '16px' }}>{feature.language}</td>
                                <td style={{ padding: '16px' }}>
                                    {/* <button className="btn px-2 py-1" style={{ fontSize: '14px', color: '#CED4DA' }} > <div class="btn-group dropstart"> */}
                                    <button type="button" className="dropdown-toggle border-0 px-2 py-1" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: 'rgba(55, 125, 255, 0.1)', color: '#2642dd', borderRadius: '5px' }} >
                                        Action <i class="fa-solid fa-angle-down ms-1" style={{ fontSize: '10px' }}></i>
                                    </button>
                                    <ul className="dropdown-menu ps-3">
                                        <a href="/edit_feature"><li className='mb-2'><i class="fa-solid fa-pen-to-square pe-2"></i> Edit Blog</li></a>

                                        <li><i class="fa-solid fa-trash-can pe-2"></i> Remove Blog</li>
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            {/* table end */}

        </div>
    )
}

export default Feature

import React, { useState } from 'react'
import { PartnerData } from '../Utils/Util';

const Partner = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    return (
        <div>
            <div>
                <div className="container mt-4">
                    <nav>
                        <div className='d-flex justify-content-between align-items-center justify-content-center'>
                            <div className='col-4 fs-6' style={{ color: '#5e72e4' }}>
                                <div>
                                    <i class="fa-solid fa-house"></i> -
                                    <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Partner</a> -
                                    <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Admin</a> -
                                    <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>partners</a>
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
                                        <i className="fa-solid fa-plus me-2"></i>
                                        Create Partner
                                    </button>
                                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Create Partner</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                </div>
                                                <div className="modal-body">
                                                    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                                                        <div className="my-4">
                                                            <div className='my-4'>
                                                                <label className="d-block text-sm mb-1">
                                                                    Brand Url
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                                                />
                                                            </div>

                                                            <div className='my-4'>
                                                                <label className="d-block text-sm mb-1">
                                                                    Brand image
                                                                </label>
                                                                <input
                                                                    type="file"
                                                                    className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                                                />
                                                            </div>

                                                            <div className='my-4'>
                                                                <label className="d-block text-sm mb-1">
                                                                    Type
                                                                </label>
                                                                <select className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}>
                                                                    <option>Partner/ Brand</option>
                                                                    <option>Integration Partner</option>
                                                                </select>
                                                            </div>

                                                            <div className='my-4'>
                                                                <label className="d-block text-sm mb-1">
                                                                    Status
                                                                </label>
                                                                <select className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}>
                                                                    <option>Active</option>
                                                                    <option>InActive</option>
                                                                </select>
                                                            </div>


                                                            <button
                                                                type="button"
                                                                className=" py-2 px-4 rounded-md" style={{ width: '100%', backgroundColor: '#377DFF1A', color: '#2642dd', border: '0px' }}
                                                            >
                                                                Create
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav >
                </div>
            </div>

            {/* box start */}
            <div className="container mt-4">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='col-4 p-2'>
                        <div style={{ backgroundColor: 'white', padding: '15px' }}>
                            <div className="d-flex justify-content-between">
                                <h4>12</h4>
                                <i class="fa-solid fa-elevator fs-5" style={{ border: '1px', borderRadius: '50%', backgroundColor: '#825ee4', padding: '15px', color: 'white' }}></i>
                            </div>
                            <p className='fs-6 mt-2 mb-0' style={{ color: '#8898aa' }}>Total Partners</p>
                        </div>
                    </div>
                    <div className='col-4 p-2'>
                        <div style={{ backgroundColor: 'white', padding: '15px' }}>
                            <div className="d-flex justify-content-between">
                                <h4>12</h4>
                                <i class="fa-solid fa-circle-check fs-5" style={{ border: '1px', borderRadius: '50%', backgroundColor: '#825ee4', padding: '15px', color: 'white' }}></i>
                            </div>
                            <p className='fs-6 mt-2 mb-0' style={{ color: '#8898aa' }}>Active Partners</p>
                        </div>
                    </div>
                    <div className='col-4 p-2'>
                        <div style={{ backgroundColor: 'white', padding: '15px' }}>
                            <div className="d-flex justify-content-between">
                                <h4>0</h4>
                                <i class="fa-solid fa-circle-xmark fs-5" style={{ border: '1px', borderRadius: '50%', backgroundColor: '#825ee4', padding: '15px', color: 'white' }}></i>
                            </div>
                            <p className='fs-6 mt-2 mb-0' style={{ color: '#8898aa' }}>Inactive Partners</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* box End */}

            {/* table start */}
            <div className="container mt-4">
                <div className='d-flex justify-content-between align-items-center justify-content-center' style={{ backgroundColor: 'white' }}>
                    <h4 style={{ color: '#57584E' }} className='m-3'>Partners / Brands</h4>
                    <div>
                        <input type="text" placeholder='Search....' className='m-3' style={{ backgroundColor: '#FAFAFA', border: '0', padding: '10px' }} />
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Image</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>URL</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Type</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Status</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>CreatedAt</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: '14px', color: '#212529' }}>
                        {PartnerData.map((partner) => (
                            <tr key={partner.id}>
                                <td style={{ padding: '16px' }}>{partner.image}</td>
                                <td style={{ padding: '16px' }}>{partner.url}</td>
                                <td style={{ padding: '16px' }}>{partner.type}</td>
                                <td style={{ padding: '16px' }}>
                                    <span className="badge bg-success">{partner.status}</span>
                                </td>
                                <td style={{ padding: '16px' }}>{partner.createdAt}</td>
                                <td style={{ padding: '16px' }}>
                                    <button type="button" className="dropdown-toggle border-0 px-2 py-1" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: 'rgba(55, 125, 255, 0.1)', color: '#2642dd', borderRadius: '5px' }} >
                                        Action <i class="fa-solid fa-angle-down ms-1" style={{ fontSize: '10px' }}></i>
                                    </button>
                                    <ul className="dropdown-menu ps-3">
                                        <li>
                                            <div>
                                                <button
                                                    type="button" data-bs-toggle="modal" data-bs-target="#exampleModal3"
                                                    className="btn btn-lg float-right btn-sm p-1 px-2 mx-1"
                                                    style={{ backgroundColor: "rgba(55, 125, 255, 0.1)", color: "#5e72e4" }}
                                                    onClick={openModal}
                                                >
                                                    <i className="fa-regular fa-square-check me-2"></i>
                                                    Invoice Settings
                                                </button>
                                                <div className="modal fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel3" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id="exampleModalLabel">Edit Invoice Information</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                                                                    <div className="my-4">
                                                                        <div className='my-4'>
                                                                            <label className="d-block text-sm mb-1">
                                                                                Company Name
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                placeholder="Whatserve"
                                                                                className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                                                            />
                                                                        </div>

                                                                        <div className='my-4'>
                                                                            <label className="d-block text-sm mb-1">
                                                                                Company Address
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                placeholder="San francisco"
                                                                                className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                                                            />
                                                                        </div>

                                                                        <div className='my-4'>
                                                                            <label className="d-block text-sm mb-1">
                                                                                Company City
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                placeholder="California"
                                                                                className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                                                            />
                                                                        </div>

                                                                        <div className='my-4'>
                                                                            <label className="d-block text-sm mb-1">
                                                                                Post Code
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                placeholder="12345"
                                                                                className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                                                            />
                                                                        </div>

                                                                        <div className='my-4'>
                                                                            <label className="d-block text-sm mb-1">
                                                                                Country
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                placeholder="USA"
                                                                                className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                                                            />
                                                                        </div>

                                                                        <button
                                                                            type="button"
                                                                            className=" py-2 px-4 rounded-md col-4" style={{ backgroundColor: '#377DFF1A', color: '#2642dd', border: '0px' }}
                                                                        >
                                                                            Update
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li><i class="fa-solid fa-trash-can pe-2"></i> Remove</li>
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

export default Partner

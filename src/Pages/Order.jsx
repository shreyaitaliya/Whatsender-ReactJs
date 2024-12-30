import React, { useState } from 'react'
import { orders } from '../Utils/Util';

function Order() {
    const [orderData, setOrderData] = useState(orders);
    // State to control modal visibility
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    return (
        <div>
            <div className="container mt-4">
                <nav>
                    <div className='d-flex justify-content-between align-items-center justify-content-center'>
                        <div className='col-4 fs-6' style={{ color: '#5e72e4' }}>
                            <div>
                                <i class="fa-solid fa-house"></i> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Orders</a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Admin</a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>order</a>
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
                                    <i className="fa-regular fa-square-check me-2"></i>
                                    Create Order
                                </button>
                                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Create Order</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                            </div>
                                            <div className="modal-body">
                                                <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                                                    <div className="my-4">
                                                        <div className='my-4'>
                                                            <label className="d-block text-sm mb-1">
                                                                User Email
                                                            </label>
                                                            <input
                                                                type="email"
                                                                placeholder="example@email.com"
                                                                className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                                            />
                                                        </div>

                                                        <div className='my-4'>
                                                            <label className="d-block text-sm mb-1">
                                                                Select Plan
                                                            </label>
                                                            <select className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}>
                                                                <option>Basic</option>
                                                                <option>Premium</option>
                                                                <option>Pro</option>
                                                            </select>
                                                        </div>

                                                        <div className='my-4'>
                                                            <label className="d-block text-sm mb-1">
                                                                Select Gateway
                                                            </label>
                                                            <select className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}>
                                                                <option>Paypal</option>
                                                                <option>Stripe</option>
                                                                <option>Paystrak</option>
                                                                <option>Razorpay</option>
                                                                <option>Payu</option>
                                                                <option>Thawani</option>
                                                            </select>
                                                        </div>

                                                        <div className='my-4'>
                                                            <label className="d-block text-sm mb-1">
                                                                Payment Id
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                                            />
                                                        </div>

                                                        <div className='d-flex align-items-center justify-content-center'>
                                                            <div className="col-6 p-0">
                                                                <div className='my-4'>
                                                                    <label className="d-block text-sm mb-1">
                                                                        Amount
                                                                    </label>
                                                                    <input
                                                                        type="number"
                                                                        placeholder="0"
                                                                        className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                                                    />
                                                                </div>

                                                            </div>
                                                            <div className="col-6">
                                                                <div className='my-4'>
                                                                    <label className="d-block text-sm mb-1">
                                                                        Tax
                                                                    </label>
                                                                    <input
                                                                        type="number"
                                                                        placeholder="0"
                                                                        className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                                                    />
                                                                </div>

                                                            </div>
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

                            <div>
                                <button
                                    type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2"
                                    className="btn btn-lg float-right btn-sm p-1 px-2 mx-1"
                                    style={{ backgroundColor: "rgba(55, 125, 255, 0.1)", color: "#5e72e4" }}
                                    onClick={openModal}
                                >
                                    <i className="fa-regular fa-square-check me-2"></i>
                                    Currency Settings
                                </button>
                                <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel2" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Currancy Settings</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                            </div>
                                            <div className="modal-body">
                                                <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                                                    <div className="my-4">
                                                        <div className='my-4'>
                                                            <label className="d-block text-sm mb-1">
                                                                Currency Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                placeholder="USD"
                                                                className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                                            />
                                                        </div>

                                                        <div className='my-4'>
                                                            <label className="d-block text-sm mb-1">
                                                                Currency Icon
                                                            </label>
                                                            <input
                                                                type="text"
                                                                placeholder="$"
                                                                className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                                            />
                                                        </div>

                                                        <div className='my-4'>
                                                            <label className="d-block text-sm mb-1">
                                                                Currency Icon
                                                            </label>
                                                            <select className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}>
                                                                <option>Left</option>
                                                                <option>Right</option>
                                                            </select>
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

                            <div>
                                <button
                                    type="button" data-bs-toggle="modal" data-bs-target="#exampleModal1"
                                    className="btn btn-lg float-right btn-sm p-1 px-2 mx-1"
                                    style={{ backgroundColor: "rgba(55, 125, 255, 0.1)", color: "#5e72e4" }}
                                    onClick={openModal}
                                >
                                    <i className="fa-regular fa-square-check me-2"></i>
                                    Tax Settings
                                </button>
                                <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel1" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Tax Settings</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                            </div>
                                            <div className="modal-body">
                                                <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                                                    <div className="my-4">
                                                        <div className='my-4'>
                                                            <label className="d-block text-sm mb-1">
                                                                Tax Amount
                                                            </label>
                                                            <input
                                                                type="number"
                                                                placeholder="0"
                                                                className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                                            />
                                                        </div>

                                                        <button
                                                            type="button"
                                                            className=" py-2 px-4 rounded-md" style={{ width: '100%', backgroundColor: '#377DFF1A', color: '#2642dd', border: '0px' }}
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

                        </div>
                    </div>
                </nav >
            </div>

            {/* box start */}
            <div className="container mt-4">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='col-3 p-2'>
                        <div style={{ backgroundColor: 'white', padding: '15px' }}>
                            <div className="d-flex justify-content-between">
                                <h4>421</h4>
                                <i class="fa-solid fa-boxes-stacked fs-5" style={{ border: '1px', borderRadius: '50%', backgroundColor: '#825ee4', padding: '15px', color: 'white' }}></i>
                            </div>
                            <p className='fs-6 mt-2 mb-0' style={{ color: '#8898aa' }}>Total Orders</p>
                        </div>
                    </div>
                    <div className='col-3 p-2'>
                        <div style={{ backgroundColor: 'white', padding: '15px' }}>
                            <div className="d-flex justify-content-between">
                                <h4>416</h4>
                                <i class="fa-solid fa-square-check fs-5" style={{ border: '1px', borderRadius: '50%', backgroundColor: '#825ee4', padding: '15px', color: 'white' }}></i>
                            </div>
                            <p className='fs-6 mt-2 mb-0' style={{ color: '#8898aa' }}>Completed Orders</p>
                        </div>
                    </div>
                    <div className='col-3 p-2'>
                        <div style={{ backgroundColor: 'white', padding: '15px' }}>
                            <div className="d-flex justify-content-between">
                                <h4>0</h4>
                                <i class="fa-solid fa-business-time fs-5" style={{ border: '1px', borderRadius: '50%', backgroundColor: '#825ee4', padding: '15px', color: 'white' }}></i>
                            </div>
                            <p className='fs-6 mt-2 mb-0' style={{ color: '#8898aa' }}>Pending Orders</p>
                        </div>
                    </div>
                    <div className='col-3 p-2'>
                        <div style={{ backgroundColor: 'white', padding: '15px' }}>
                            <div className="d-flex justify-content-between">
                                <h4>5</h4>
                                <i class="fa-solid fa-folder-minus fs-5" style={{ border: '1px', borderRadius: '50%', backgroundColor: '#825ee4', padding: '15px', color: 'white' }}></i>
                            </div>
                            <p className='fs-6 mt-2 mb-0' style={{ color: '#8898aa' }}>Rejected Orders
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* box End */}

            {/* table start */}
            <div className="container mt-4">
                <div className='d-flex justify-content-between align-items-center justify-content-center' style={{ backgroundColor: 'white' }}>
                    <h4 style={{ color: '#57584E' }} className='m-3'>Orders</h4>
                    <div>
                        <input type="text" placeholder='Search....' className='m-3' style={{ backgroundColor: '#FAFAFA', border: '0', padding: '10px' }} />
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Order No</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Plan Name</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Payment Mode</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Amount</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Status</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>User</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Created At</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>View</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: '14px', color: '#212529' }}>
                        {orderData.map((order) => (
                            <tr key={order.id}>
                                <td style={{ padding: '16px' }}>{order.id}</td>
                                <td style={{ padding: '16px' }}>{order.plan}</td>
                                <td style={{ padding: '16px' }}>{order.payment}</td>
                                <td style={{ padding: '16px' }}>{order.amount.toFixed(2)}</td>
                                <td style={{ padding: '16px' }}>
                                    <span className="badge bg-success">{order.status}</span>
                                </td>
                                <td style={{ padding: '16px' }}>{order.user}</td>
                                <td style={{ padding: '16px' }}>{order.date}</td>
                                <td style={{ padding: '16px' }}>
                                    <button className="btn btn-primary px-2 py-1" style={{ fontSize: '14px' }}>View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            {/* table end */}

        </div >
    )
}

export default Order
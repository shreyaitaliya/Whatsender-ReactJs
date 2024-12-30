import React from 'react'

function Subscription() {
    return (
        <div>
            <div className="container mt-4">
                <nav>
                    <div className='d-flex justify-content-between align-items-center justify-content-center'>
                        <div className='col-4 fs-6' style={{ color: '#5e72e4' }}>
                            <div>
                                <i class="fa-solid fa-house"></i> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Plans</a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Admin</a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Plan</a>
                            </div>
                        </div>
                        <div className='col-8 fs-6 d-flex justify-content-end'>
                            <div>
                                <button
                                    type="button"
                                    className="btn btn-lg float-right btn-sm p-1 px-2 mx-1"
                                    style={{ backgroundColor: "rgba(55, 125, 255, 0.1)", color: "#5e72e4" }}
                                >
                                    <a href="/add_plan"> <i class="fa-solid fa-plus me-2"></i>
                                        Create A Plan</a>
                                </button>
                                {/* <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                </nav >
            </div>

            {/* box start */}
            <div className='container mt-4'>
                <div className='d-flex justify-content-center'>
                    <div className="col-4">
                        <div className="card border-0" style={{ backgroundColor: 'white', padding: '15px' }}>
                            <div className="card-header text-center" style={{ backgroundColor: 'white' }}>
                                <p style={{ fontSize: '25px', margin: '0' }}>Basic</p>
                                <p style={{ fontSize: '35px', margin: '0' }}>20.00 USD</p>
                                <p style={{ fontSize: '16px', margin: '0' }}>Per month</p>
                                <p style={{ fontSize: '14px', color: '#8898AA' }}>Active Users (602)</p>
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> messages limit (10)
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> contact limit (1)
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> device limit (1)
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> template limit (1)
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> apps limit (1)
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-xmark" style={{ color: 'red', listStyle: 'none' }}></i> chatbox
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-xmark" style={{ color: 'red', listStyle: 'none' }}></i> bulk message
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> schedule message
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> access chat list
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-xmark" style={{ color: 'red', listStyle: 'none' }}></i> access group list
                                    </li>
                                </blockquote>
                            </div>
                            <div className="card-footer text-center py-4" style={{ backgroundColor: 'white' }}>
                                <div>
                                    <button className='mx-2 border-0 px-2 py-1' style={{ backgroundColor: '#377DFF1A', borderRadius: '5px' }}><a href="#"><i class="fa-solid fa-pen-to-square"></i></a></button>
                                    <button className='mx-2 border-0 px-2 py-1' style={{ backgroundColor: '#1937E4', borderRadius: '5px' }}><a href="#"><i class="fa-solid fa-trash text-white"></i></a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card border-0" style={{ backgroundColor: 'white', padding: '15px' }}>
                            <div className="card-header text-center" style={{ backgroundColor: 'white' }}>
                                <p style={{ fontSize: '25px', margin: '0' }}>Enterprise</p>
                                <p style={{ fontSize: '35px', margin: '0' }}>50.00 USD</p>
                                <p style={{ fontSize: '16px', margin: '0' }}>Per month</p>
                                <p style={{ fontSize: '14px', color: '#8898AA' }}>Active Users (4702)</p>
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> messages limit (10)
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> contact limit (1)
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> device limit (unlimited)
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> template limit (unlimited)
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> apps limit (unlimited)
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> chatbox
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> bulk message
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> schedule message
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> access chat list
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> access group list
                                    </li>
                                </blockquote>
                            </div>
                            <div className="card-footer text-center py-4" style={{ backgroundColor: 'white' }}>
                                <div>
                                    <button className='mx-2 border-0 px-2 py-1' style={{ backgroundColor: '#377DFF1A', borderRadius: '5px' }}><a href="#"><i class="fa-solid fa-pen-to-square"></i></a></button>
                                    <button className='mx-2 border-0 px-2 py-1' style={{ backgroundColor: '#1937E4', borderRadius: '5px' }}><a href="#"><i class="fa-solid fa-trash text-white"></i></a></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card border-0" style={{ backgroundColor: 'white', padding: '15px' }}>
                            <div className="card-header text-center" style={{ backgroundColor: 'white' }}>
                                <p style={{ fontSize: '25px', margin: '0' }}>Starter</p>
                                <p style={{ fontSize: '35px', margin: '0' }}>10.00 USD</p>
                                <p style={{ fontSize: '16px', margin: '0' }}>Per month</p>
                                <p style={{ fontSize: '14px', color: '#8898AA' }}>Active Users (255)</p>
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> messages limit (10)
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> contact limit (1)
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> device limit (1)
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> template limit (1)
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> apps limit (1)
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-check" style={{ color: 'green', listStyle: 'none' }}></i> chatbox
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-xmark" style={{ color: 'red', listStyle: 'none' }}></i> bulk message
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-xmark" style={{ color: 'red', listStyle: 'none' }}></i> schedule message
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-xmark" style={{ color: 'red', listStyle: 'none' }}></i> access chat list
                                    </li>
                                    <li style={{ fontSize: '15px' }} className='my-2'><i class="fa-regular fa-circle-xmark" style={{ color: 'red', listStyle: 'none' }}></i> access group list
                                    </li>
                                </blockquote>
                            </div>
                            <div className="card-footer text-center py-4" style={{ backgroundColor: 'white' }}>
                                <div>
                                    <button className='mx-2 border-0 px-2 py-1' style={{ backgroundColor: '#377DFF1A', borderRadius: '5px' }}><a href="#"><i class="fa-solid fa-pen-to-square"></i></a></button>
                                    <button className='mx-2 border-0 px-2 py-1' style={{ backgroundColor: '#1937E4', borderRadius: '5px' }}><a href="#"><i class="fa-solid fa-trash text-white"></i></a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* box end */}

        </div>
    )
}

export default Subscription

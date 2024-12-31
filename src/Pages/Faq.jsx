import React, { useState } from 'react'
import { FaqData } from '../Utils/Util';

const Faq = () => {
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
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Frequently asked questions
                                </a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Admin</a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>faq</a>
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
                                    Create FAQ
                                </button>
                                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Create FAQ</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                            </div>
                                            <div className="modal-body">
                                                <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                                                    <div className="my-4">
                                                        <div className='my-4'>
                                                            <label className="d-block text-sm mb-1">
                                                                Question
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                                            />
                                                        </div>

                                                        <div className='my-4'>
                                                            <label className="d-block text-sm mb-1">
                                                                Answer
                                                            </label>
                                                            <textarea className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}></textarea>
                                                            {/* <input
                                                                type="textarea"
                                                                className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                                            /> */}
                                                        </div>

                                                        <div className='my-4'>
                                                            <label className="d-block text-sm mb-1">
                                                                Select position
                                                            </label>
                                                            <select className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}>
                                                                <option>Regular</option>
                                                                <option>For App Question</option>
                                                            </select>
                                                        </div>

                                                        <div className='my-4'>
                                                            <label className="d-block text-sm mb-1">
                                                                Select Language
                                                            </label>
                                                            <select className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}>
                                                                <option>English</option>
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

            {/* table start */}
            <div className="container mt-4">
                <div className='d-flex justify-content-between align-items-center justify-content-center' style={{ backgroundColor: 'white' }}>
                    <h4 style={{ color: '#57584E' }} className='m-3'>Notification</h4>
                    <div>
                        <input type="text" placeholder='Search....' className='m-3' style={{ backgroundColor: '#FAFAFA', border: '0', padding: '10px' }} />
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Name</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>SLUG</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Language</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: '14px', color: '#212529' }}>
                        {FaqData.map((faq) => (
                            <tr key={faq.id}>
                                {/* <td style={{ padding: '16px' }}>{blog.thumbnail}</td> */}
                                <td style={{ padding: '16px' }}>{faq.question}</td>
                                <td style={{ padding: '16px' }}>{faq.answer}</td>
                                <td style={{ padding: '16px' }}>{faq.language}</td>
                                <td style={{ padding: '16px' }}>
                                    {/* <button className="btn px-2 py-1" style={{ fontSize: '14px', color: '#CED4DA' }} > <div class="btn-group dropstart"> */}
                                    <button type="button" className="dropdown-toggle border-0 px-2 py-1" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: 'rgba(55, 125, 255, 0.1)', color: '#2642dd', borderRadius: '5px' }} >
                                        Action <i class="fa-solid fa-angle-down ms-1" style={{ fontSize: '10px' }}></i>
                                    </button>
                                    <ul className="dropdown-menu ps-3">
                                        <li className='mb-2'><i class="fa-solid fa-pen-to-square pe-2"></i> Edit Blog</li>

                                        <li><i class="fa-solid fa-trash-can pe-2"></i> Remove Blog</li>
                                    </ul>
                                    {/* </div></button> */}

                                    {/* {isMenuOpen && (
                                                                                                                                <div className="menu" style={{ position: 'absolute', top: '40px', left: '0' }}>
                                                                                                                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                                                                                                                        <li><button>Remove</button></li>
                                                                                                                                    </ul>
                                                                                                                                </div>
                                                                                                                            )} */}
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

export default Faq

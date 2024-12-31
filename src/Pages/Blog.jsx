import React from 'react'
import { BlogData } from '../Utils/Util'

function Blog() {
    return (
        <div>
            <div className="container mt-4">
                <nav>
                    <div className='d-flex justify-content-between align-items-center justify-content-center'>
                        <div className='col-4 fs-6' style={{ color: '#5e72e4' }}>
                            <div>
                                <i class="fa-solid fa-house"></i> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Blogs</a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Admin</a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>blog</a>
                            </div>
                        </div>
                        <div className='col-8 fs-6 d-flex justify-content-end'>
                            <div>
                                <button
                                    type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    className="btn btn-lg float-right btn-sm p-1 px-2 mx-1"
                                    style={{ backgroundColor: "rgba(55, 125, 255, 0.1)", color: "#5e72e4" }}
                                >
                                    <a href="/create_blog"><i className="fa-solid fa-plus me-2"></i>Create A Blog Post</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav >
            </div>

            {/* box start */}
            <div className="container mt-4">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='col-4 p-2 ps-0'>
                        <div style={{ backgroundColor: 'white', padding: '15px' }}>
                            <div className="d-flex justify-content-between">
                                <h4>3</h4>
                                <i class="fa-solid fa-envelopes-bulk fs-5" style={{ border: '1px', borderRadius: '50%', backgroundColor: '#825ee4', padding: '15px', color: 'white' }}></i>
                            </div>
                            <p className='fs-6 mt-2 mb-0' style={{ color: '#8898aa' }}>Total Blogs
                            </p>
                        </div>
                    </div>
                    <div className='col-4 p-2'>
                        <div style={{ backgroundColor: 'white', padding: '15px' }}>
                            <div className="d-flex justify-content-between">
                                <h4>3</h4>
                                <i class="fa-solid fa-book-open fs-5" style={{ border: '1px', borderRadius: '50%', backgroundColor: '#825ee4', padding: '15px', color: 'white' }}></i>
                            </div>
                            <p className='fs-6 mt-2 mb-0' style={{ color: '#8898aa' }}>Active Blogs
                            </p>
                        </div>
                    </div>
                    <div className='col-4 p-2'>
                        <div style={{ backgroundColor: 'white', padding: '15px' }}>
                            <div className="d-flex justify-content-between">
                                <h4>0</h4>
                                <i class="fa-regular fa-circle-xmark fs-5" style={{ border: '1px', borderRadius: '50%', backgroundColor: '#825ee4', padding: '15px', color: 'white' }}></i>
                            </div>
                            <p className='fs-6 mt-2 mb-0' style={{ color: '#8898aa' }}>Inactive Blogs</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* box End */}

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
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Title</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>URL</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Status</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>CreatedAt</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: '14px', color: '#212529' }}>
                        {BlogData.map((blog) => (
                            <tr key={blog.id}>
                                {/* <td style={{ padding: '16px' }}>{blog.thumbnail}</td> */}
                                <td style={{ padding: '16px' }}>{blog.title}</td>
                                <td style={{ padding: '16px' }}>{blog.url}</td>
                                <td style={{ padding: '16px' }}>
                                    <span className="badge p-2" style={{ backgroundColor: '#D1ECE0', color: '#047417' }}>{blog.status}</span>
                                </td>
                                <td style={{ padding: '16px' }}>{blog.createdAt}</td>
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

export default Blog

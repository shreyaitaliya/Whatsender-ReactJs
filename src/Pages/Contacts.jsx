import React from 'react'
import { ContactData } from '../Utils/Util';

function Contacts() {
    return (
        <div>
            <div className="container mt-4">
                <nav>
                    <div className='d-flex justify-content-between align-items-center justify-content-center'>
                        <div className='col-4 fs-6' style={{ color: '#5e72e4' }}>
                            <div>
                                <i class="fa-solid fa-house"></i> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Contacts</a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Admin</a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>contacts</a>
                            </div>
                        </div>
                    </div>
                </nav >
            </div>

            {/* box start */}
            <div className="container mt-4">
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='col-6 p-2 ps-0'>
                        <div style={{ backgroundColor: 'white', padding: '15px' }}>
                            <div className="d-flex justify-content-between">
                                <h4>672</h4>
                                <i class="fa-solid fa-address-book fs-5" style={{ border: '1px', borderRadius: '50%', backgroundColor: '#825ee4', padding: '15px', color: 'white' }}></i>
                            </div>
                            <p className='fs-6 mt-2 mb-0' style={{ color: '#8898aa' }}>Total Contacts</p>
                        </div>
                    </div>
                    <div className='col-6 p-2'>
                        <div style={{ backgroundColor: 'white', padding: '15px' }}>
                            <div className="d-flex justify-content-between">
                                <h4>54</h4>
                                <i class="fa-regular fa-calendar-days fs-5" style={{ border: '1px', borderRadius: '50%', backgroundColor: '#825ee4', padding: '15px', color: 'white' }}></i>
                            </div>
                            <p className='fs-6 mt-2 mb-0' style={{ color: '#8898aa' }}>Schedule Contacts</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* box End */}

            {/* table start */}
            <div className="container mt-4">
                <div className='d-flex justify-content-between align-items-center justify-content-center' style={{ backgroundColor: 'white' }}>
                    <h4 style={{ color: '#57584E' }} className='m-3'>Contacts</h4>
                    <div>
                        <input type="text" placeholder='Search....' className='m-3' style={{ backgroundColor: '#FAFAFA', border: '0', padding: '10px' }} />
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Name</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>User</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Phone</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Created At</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: '14px', color: '#212529' }}>
                        {ContactData.map((contact) => (
                            <tr key={contact.id}>
                                <td style={{ padding: '16px' }}>{contact.name}</td>
                                <td style={{ padding: '16px' }}>{contact.user}</td>
                                <td style={{ padding: '16px' }}>
                                    <span className="badge bg-danger">{contact.phone}</span>
                                </td>
                                <td style={{ padding: '16px' }}>{contact.createdAt}</td>
                                <td style={{ padding: '16px' }}>
                                    <button className="btn px-2 py-1" style={{ fontSize: '14px', color: '#CED4DA' }} ><i class="fa-solid fa-ellipsis-vertical"></i></button>
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

export default Contacts

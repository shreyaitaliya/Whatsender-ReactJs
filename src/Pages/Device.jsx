import { React, useState } from 'react'
import { Devicedata } from '../Utils/Util';

function Device() {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };
    return (
        <div>
            <div className="container mt-4">
                <nav>
                    <div className='d-flex justify-content-between align-items-center justify-content-center'>
                        <div className='col-4 fs-6' style={{ color: '#5e72e4' }}>
                            <div>
                                <i class="fa-solid fa-house"></i> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Devices</a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Admin</a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>devices</a>
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
                                <h4>1694</h4>
                                <i class="fa-solid fa-laptop-code fs-5" style={{ border: '1px', borderRadius: '50%', backgroundColor: '#825ee4', padding: '15px', color: 'white' }}></i>
                            </div>
                            <p className='fs-6 mt-2 mb-0' style={{ color: '#8898aa' }}>Total Devices</p>
                        </div>
                    </div>
                    <div className='col-4 p-2'>
                        <div style={{ backgroundColor: 'white', padding: '15px' }}>
                            <div className="d-flex justify-content-between">
                                <h4>104</h4>
                                <i class="fa-regular fa-circle-check fs-5" style={{ border: '1px', borderRadius: '50%', backgroundColor: '#825ee4', padding: '15px', color: 'white' }}></i>
                            </div>
                            <p className='fs-6 mt-2 mb-0' style={{ color: '#8898aa' }}>Active Devices</p>
                        </div>
                    </div>
                    <div className='col-4 p-2'>
                        <div style={{ backgroundColor: 'white', padding: '15px' }}>
                            <div className="d-flex justify-content-between">
                                <h4>1590</h4>
                                <i class="fa-solid fa-circle-exclamation fs-5" style={{ border: '1px', borderRadius: '50%', backgroundColor: '#825ee4', padding: '15px', color: 'white' }}></i>
                            </div>
                            <p className='fs-6 mt-2 mb-0' style={{ color: '#8898aa' }}>Inactive Devices</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* box End */}

            {/* table start */}
            <div className="container mt-4">
                <div className='d-flex justify-content-between align-items-center justify-content-center' style={{ backgroundColor: 'white' }}>
                    <h4 style={{ color: '#57584E' }} className='m-3'>Devices</h4>
                    <div>
                        <input type="text" placeholder='Search....' className='m-3' style={{ backgroundColor: '#FAFAFA', border: '0', padding: '10px' }} />
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>DeviceName</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>User</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Phone</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Transactions</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Status</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Created At</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: '14px', color: '#212529' }}>
                        {Devicedata.map((device) => (
                            <tr key={device.id}>
                                <td style={{ padding: '16px' }}>{device.deviceName}</td>
                                <td style={{ padding: '16px' }}>{device.user}</td>
                                <td style={{ padding: '16px' }}>{device.phone}</td>
                                <td style={{ padding: '16px' }}>{device.transactions.toFixed(2)}</td>
                                <td style={{ padding: '16px' }}>
                                    <span className="badge bg-danger">{device.status}</span>
                                </td>
                                <td style={{ padding: '16px' }}>{device.createdAt}</td>
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

        </div >
    )
}

export default Device

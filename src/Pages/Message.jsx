import React from 'react'
import { MessageData } from '../Utils/Util'

function Message() {
    return (
        <div>
            <div className="container mt-4">
                <nav>
                    <div className='d-flex justify-content-between align-items-center justify-content-center'>
                        <div className='col-12 fs-6' style={{ color: '#5e72e4' }}>
                            <div>
                                <i class="fa-solid fa-house"></i> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Message Transactions Logs
                                </a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Admin</a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>message-transactions</a>
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
                                <h4>9,938</h4>
                                <i class="fa-solid fa-comment-sms fs-5" style={{ border: '1px', borderRadius: '50%', backgroundColor: '#825ee4', padding: '15px', color: 'white' }}></i>
                            </div>
                            <p className='fs-6 mt-2 mb-0' style={{ color: '#8898aa' }}>Total Messages
                            </p>
                        </div>
                    </div>
                    <div className='col-4 p-2'>
                        <div style={{ backgroundColor: 'white', padding: '15px' }}>
                            <div className="d-flex justify-content-between">
                                <h4>0</h4>
                                <i class="fa-regular fa-circle-down fs-5" style={{ border: '1px', borderRadius: '50%', backgroundColor: '#825ee4', padding: '15px', color: 'white' }}></i>
                            </div>
                            <p className='fs-6 mt-2 mb-0' style={{ color: '#8898aa' }}>Todays Messages
                            </p>
                        </div>
                    </div>
                    <div className='col-4 p-2'>
                        <div style={{ backgroundColor: 'white', padding: '15px' }}>
                            <div className="d-flex justify-content-between">
                                <h4>586</h4>
                                <i class="fa-solid fa-calendar-days fs-5" style={{ border: '1px', borderRadius: '50%', backgroundColor: '#825ee4', padding: '15px', color: 'white' }}></i>
                            </div>
                            <p className='fs-6 mt-2 mb-0' style={{ color: '#8898aa' }}>Last 30 days Messages</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* box End */}

            {/* table start */}
            <div className="container mt-4">
                <div className='d-flex justify-content-between align-items-center justify-content-center' style={{ backgroundColor: 'white' }}>
                    <h4 style={{ color: '#57584E' }} className='m-3'>Message</h4>
                    <div>
                        <input type="text" placeholder='Search....' className='m-3' style={{ backgroundColor: '#FAFAFA', border: '0', padding: '10px' }} />
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>User</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Message Form</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>MessageTo</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Message Type</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Request Type</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>CreatedAt</th>
                            <th style={{ backgroundColor: 'transparent', color: '#212529' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: '14px', color: '#212529' }}>
                        {MessageData.map((message) => (
                            <tr key={message.id}>
                                <td style={{ padding: '16px' }}>{message.user}</td>
                                <td style={{ padding: '16px' }}>
                                    <span className="badge p-2" style={{backgroundColor:'#FEE6E0',color:'#FF3709'}}>{message.messageFrom}</span>
                                </td>
                                <td style={{ padding: '16px' }}>
                                <span className="badge p-2" style={{backgroundColor:'#FEE6E0',color:'#FF3709'}}>{message.messageTo}</span>
                                </td>
                                <td style={{ padding: '16px' }}>{message.messageType}</td>
                                <td style={{ padding: '16px' }}>{message.requestType}</td>
                                <td style={{ padding: '16px' }}>{message.createdAt}</td>
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

export default Message

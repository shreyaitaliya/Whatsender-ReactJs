import React from 'react'

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

        </div>
    )
}

export default Message

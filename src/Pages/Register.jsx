import React from 'react'

const register = () => {
    return (
        <div className='align-items-center justify-content-center d-flex'>
            <div className='col-6'>
                <img src='/images/login.jpg' style={{ width: '100%', height: '100vh' }} />
            </div>
            <div className='col-6 text-center'>
                <div className="register-container">
                    <h2>Register your Account</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name" className='text-start'>Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className='text-start'>Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className='text-start'>Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button type="submit" className="btn-submit">
                            SIGN UP
                        </button>
                    </form>
                    <p>
                        have an account? <a href="/">Sign in now</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default register
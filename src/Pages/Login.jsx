import React from 'react'

function Login() {
    return (
        <div>
            <div className='align-items-center justify-content-center d-flex'>
                <div className='col-6 text-center'>
                    <div className="register-container">
                        <h2>Login your Account</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email" className='text-start'>Email</label>
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
                            <a href="/dashboard"><button type="submit" className="btn-submit">
                                SIGN UP
                            </button></a>
                        </form>
                        <p>
                            Dont have an account? <a href="/register">Sign in</a>
                        </p>
                    </div>
                </div>
                <div className='col-6'>
                    <img src='/images/login.jpg' style={{ width: '100%', height: '100vh' }} />
                </div>
            </div>
        </div>
    )
}

export default Login


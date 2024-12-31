import React from 'react'

const Blogcreate = () => {
    return (
        <div>
            <div className="container mt-4">
                <nav>
                    <div className='d-flex justify-content-between align-items-center justify-content-center'>
                        <div className='col-4 fs-6' style={{ color: '#5e72e4' }}>
                            <div>
                                <i class="fa-solid fa-house"></i> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Create A Blog</a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Admin</a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>blog</a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Create</a>
                            </div>
                        </div>
                        <div className='col-8 fs-6 d-flex justify-content-end'>
                            <div>
                                <button
                                    type="button"
                                    className="btn btn-lg float-right btn-sm p-1 px-2 mx-1"
                                    style={{ backgroundColor: "rgba(55, 125, 255, 0.1)", color: "#5e72e4" }}
                                >
                                    <a href="/blog">Back</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav >
            </div>

            {/* formstart */}
            <div className="container mt-5">
                <div className="d-flex">
                    {/* <div className="col-4" style={{ fontSize: '14px' }}>
                        <h6>Plan</h6>
                        <p>Create subscription plan for charging from the customer</p>
                    </div> */}

                    <div className='m-auto' style={{ width: '80%' }}>
                        <div>
                            <div className="card border-0" style={{ backgroundColor: 'white', padding: '15px', fontSize: '14px' }}>
                                <form>
                                    <div className='my-4'>
                                        <label className="d-block text-sm mb-1">
                                            Blog Title
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                        />
                                    </div>
                                    <div className='my-4'>
                                        <label className="d-block text-sm mb-1">
                                            Blog Image (Preview)
                                        </label>
                                        <input
                                            type="file"
                                            className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                        />
                                    </div>
                                    <div className='my-4'>
                                        <label className="d-block text-sm mb-1">
                                            Short Description
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                        />
                                    </div>
                                    <div className='my-4'>
                                        <label className="d-block text-sm mb-1">
                                            Main Description
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                        />
                                    </div>
                                    <div className='my-4'>
                                        <label className="d-block text-sm mb-1">
                                            Select Category
                                        </label>
                                        <select name="duration" className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}>
                                            <option>Target Marketing</option>
                                            <option>Button Message</option>
                                            <option>Template Message</option>
                                        </select>
                                    </div>
                                    <div className='my-4'>
                                        <label className="d-block text-sm mb-1">
                                            Select Tags
                                        </label>
                                        <select name="duration" className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}>
                                            <option>Marketing</option>
                                            <option>Whatsapp</option>
                                            <option>Chatbot</option>
                                        </select>
                                    </div>
                                    <div className='my-4'>
                                        <label className="d-block text-sm mb-1">
                                            Select Langauge
                                        </label>
                                        <select name="duration" className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}>
                                            <option>English</option>
                                        </select>
                                    </div>
                                    <div className='my-4'>
                                        <label className="d-block text-sm mb-1">
                                            SEO Meta Title
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                        />
                                    </div>
                                    <div className='my-4'>
                                        <label className="d-block text-sm mb-1">
                                            SEO Meta Image
                                        </label>
                                        <input
                                            type="file"
                                            className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                        />
                                    </div>
                                    <div className='my-4'>
                                        <label className="d-block text-sm mb-1">
                                            SEO Meta Description
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                        />
                                    </div>
                                    <div className='my-4'>
                                        <label className="d-block text-sm mb-1">
                                            SEO Meta Tags
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                        />
                                    </div>
                                    <div className="form-check form-switch my-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="featured"
                                        />
                                        <label className="form-check-label" htmlFor="featured">
                                            Make it featured?
                                        </label>
                                    </div>
                                    <div className="form-check form-switch my-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="recommended"
                                        />
                                        <label className="form-check-label" htmlFor="recommended">
                                            Make it publish?
                                        </label>
                                    </div>

                                    <button
                                        type="button"
                                        className="btn btn-lg btn-sm p-1 px-2 mx-1"
                                        style={{ backgroundColor: "rgba(55, 125, 255, 0.1)", color: "#5e72e4" }}
                                    >
                                        <a href="/subscription">Submit</a>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* formend */}

        </div>
    )
}

export default Blogcreate

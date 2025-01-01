import React from 'react'

function Addteam() {
    return (
        <div>
            <div>
                <div className="container mt-4">
                    <nav>
                        <div className='d-flex justify-content-between align-items-center justify-content-center'>
                            <div className='col-4 fs-6' style={{ color: '#5e72e4' }}>
                                <div>
                                    <i class="fa-solid fa-house"></i> -
                                    <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Create Team Member</a> -
                                    <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Admin</a> -
                                    <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Teams</a> -
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
                                        <a href="/team">Back</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav >
                </div>

                {/* formstart */}
                <div className="container mt-5">
                    <div className="d-flex">
                        <div className="col-5" style={{ fontSize: '14px' }}>
                            <h6>Create a team member</h6>
                            <p>Add your team member details and necessary information from here</p>
                        </div>

                        <div className="col-7">
                            <div className="card border-0" style={{ backgroundColor: 'white', padding: '15px', fontSize: '14px' }}>
                                <form>
                                    <div className='my-4'>
                                        <label className="d-block text-sm mb-1">
                                            Member Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                        />
                                    </div>
                                    <div className='my-4'>
                                        <label className="d-block text-sm mb-1">
                                            Member Position
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                        />
                                    </div>
                                    <div className='my-4'>
                                        <label className="d-block text-sm mb-1">
                                            Profile Picture
                                        </label>
                                        <input
                                            type="file"
                                            className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                        />
                                    </div>
                                    <div className='my-4'>
                                        <label className="d-block text-sm mb-1">
                                            Profile Description
                                        </label>
                                        <textarea className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%',height:'200px' }}></textarea>
                                    </div>
                                    <div className='my-4'>
                                        <label className="d-block text-sm mb-1">
                                            Facebook profile link
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                        />
                                    </div>
                                    <div className='my-4'>
                                        <label className="d-block text-sm mb-1">
                                            Twitter profile link
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                        />
                                    </div>
                                    <div className='my-4'>
                                        <label className="d-block text-sm mb-1">
                                            Linkedin profile link
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                        />
                                    </div>
                                    <div className='my-4'>
                                        <label className="d-block text-sm mb-1">
                                            Instagram profile link
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
                                            id="recommended"
                                        />
                                        <label className="form-check-label" htmlFor="recommended"> Make it publish?</label>
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
                {/* formend */}

            </div>
        </div>
    )
}

export default Addteam

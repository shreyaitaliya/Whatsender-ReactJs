import React from 'react'

function Addsubscription() {
    return (
        <div>
            <div className="container mt-4">
                <nav>
                    <div className='d-flex justify-content-between align-items-center justify-content-center'>
                        <div className='col-4 fs-6' style={{ color: '#5e72e4' }}>
                            <div>
                                <i class="fa-solid fa-house"></i> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Create plan</a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Admin</a> -
                                <a href="#" className='mx-1' style={{ textDecoration: 'none' }}>Plan</a> -
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
                                    <a href="/subscription">Back</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav >
            </div>

            {/* formstart */}
            <div className="container mt-5">
                <div className="d-flex">
                    <div className="col-4" style={{ fontSize: '14px' }}>
                        <h6>Plan</h6>
                        <p>Create subscription plan for charging from the customer</p>
                    </div>

                    <div className="col-8">
                        <div className="card border-0" style={{ backgroundColor: 'white', padding: '15px', fontSize: '14px' }}>
                            <form>
                                <div className='my-4'>
                                    <label className="d-block text-sm mb-1">
                                        Plan Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                    />
                                </div>
                                <div className='my-4'>
                                    <label className="d-block text-sm mb-1">
                                        Select Duration
                                    </label>
                                    <select name="duration" className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}>
                                        <option value="Monthly">Monthly</option>
                                        <option value="Yearly">Yearly</option>
                                    </select>
                                </div>
                                <div className='my-4'>
                                    <label className="d-block text-sm mb-1">
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                    />
                                </div>
                                <div className='my-4'>
                                    <label className="d-block text-sm mb-1">
                                        Select Label Color
                                    </label>
                                    <select name="duration" className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}>
                                        <option value="Monthly">Pink Color</option>
                                        <option value="Yearly">Sky Color</option>
                                        <option value="Yearly">Yellow Color</option>
                                    </select>
                                </div>
                                <div className='my-4'>
                                    <label className="d-block text-sm mb-1">
                                        Monthly Messages Limit
                                    </label>
                                    <input
                                        type="number"
                                        className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                    />
                                </div>
                                <div className='my-4'>
                                    <label className="d-block text-sm mb-1">
                                        Contacts Limit
                                    </label>
                                    <input
                                        type="number"
                                        className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                    />
                                </div>
                                <div className='my-4'>
                                    <label className="d-block text-sm mb-1">
                                        Device Limit
                                    </label>
                                    <input
                                        type="number"
                                        className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                    />
                                </div>
                                <div className='my-4'>
                                    <label className="d-block text-sm mb-1">
                                        Template Limit
                                    </label>
                                    <input
                                        type="number"
                                        className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                    />
                                </div>
                                <div className='my-4'>
                                    <label className="d-block text-sm mb-1">
                                        App Limit
                                    </label>
                                    <input
                                        type="number"
                                        className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}
                                    />
                                </div>
                                <div className='my-4'>
                                    <label className="d-block text-sm mb-1">
                                        Chatbot
                                    </label>
                                    <select name="chatbot" className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}>
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </div>
                                <div className='my-4'>
                                    <label className="d-block text-sm mb-1">
                                        Bulk Message
                                    </label>
                                    <select name="bulkmessage" className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}>
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </div>
                                <div className='my-4'>
                                    <label className="d-block text-sm mb-1">
                                        Schedule Message
                                    </label>
                                    <select name="schedulemessage" className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}>
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </div>
                                <div className='my-4'>
                                    <label className="d-block text-sm mb-1">
                                        Chat List Access
                                    </label>
                                    <select name="chatlistaccess" className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}>
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </div>
                                <div className='my-4'>
                                    <label className="d-block text-sm mb-1">
                                        Group List Access
                                    </label>
                                    <select name="grouplistaccess" className="w-full p-2 border-0 rounded-md" style={{ backgroundColor: '#FAFAFA', width: '100%' }}>
                                        <option value="Enabled">Enabled</option>
                                        <option value="Disabled">Disabled</option>
                                    </select>
                                </div>
                                <div className="form-check form-switch my-4">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="featured"
                                    />
                                    <label className="form-check-label" htmlFor="featured">
                                        Featured in home page
                                    </label>
                                </div>
                                <div className="form-check form-switch my-4">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="recommended"
                                    />
                                    <label className="form-check-label" htmlFor="recommended">
                                        Is recommended?
                                    </label>
                                </div>
                                <div className="form-check form-switch my-4">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="trial"
                                    />
                                    <label className="form-check-label" htmlFor="trial">
                                        Accept Trial?
                                    </label>
                                </div>
                                <div className="form-check form-switch my-4">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="activateplan"
                                    />
                                    <label className="form-check-label" htmlFor="activateplan">
                                        Activate This Plan?
                                    </label>
                                </div>

                                <button
                                    type="button"
                                    className="btn btn-lg btn-sm p-1 px-2 mx-1"
                                    style={{ backgroundColor: "rgba(55, 125, 255, 0.1)", color: "#5e72e4" }}
                                >
                                    <a href="/subscription">Create</a>
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            {/* formend */}

        </div>
    )
}

export default Addsubscription

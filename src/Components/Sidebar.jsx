import React, { useState } from 'react';

const Sidebar = () => {
    const [openMenus, setOpenMenus] = useState({
        email: false,
        uiElements: false,
        forms: false,
        rules: false,
        charts: false,
        tables: false,
        icons: false,
        maps: false
    });

    const toggleMenu = (menu) => {
        setOpenMenus(prev => ({
            ...prev,
            [menu]: !prev[menu]
        }));
    };

    return (
        <div className="sidebar text-light p-3" style={{ height: '100vh', backgroundColor: '#e9ecef' }}>
            <div className="mb-4 p-3">
                <img src="/images/logo.png" alt="quizzop logo" className="img-fluid w-50" />
            </div>

            <nav className="nav flex-column">
                <div className="mb-3">
                    <span className="text-secondary small">MAIN</span>
                </div>

                <a href="/" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i className="bi bi-house-door me-2"></i>
                    Dashboard
                </a>

                <a href="/order" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-solid fa-cubes me-2"></i>
                    Orders
                </a>

                <div className="nav-item">
                    <a
                        href="/subscription"
                        className="nav-link d-flex align-items-center justify-content-between" style={{ color: '#32325D' }}
                    >
                        <div>
                            <i class="fa-regular fa-money-bill-1 me-2"></i>
                            Subscription
                        </div>
                    </a>
                </div>

                <a href="#" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-solid fa-users me-2"></i>
                    Customers
                </a>

                <a href="#" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-solid fa-landmark me-2"></i>
                    Payment Gateways
                </a>

                <a href="#" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-solid fa-calendar-days me-2"></i>
                    Cron Jobs
                </a>

                <a href="#" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-solid fa-headset me-2"></i>
                    Help & Supports
                </a>

                <div className="mb-3 mt-4">
                    <span className="text-secondary small">USER Logs</span>
                </div>

                <a href="/device" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-solid fa-desktop me-2"></i>
                    Devices
                </a>

                <a href="/app" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-solid fa-boxes-stacked me-2"></i>
                    Apps
                </a>

                <a href="/contact" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-solid fa-address-book me-2"></i>
                    Contacts
                </a>

                <a href="/template" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-solid fa-file me-2"></i>
                    Templates
                </a>

                <a href="/schedual" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-solid fa-calendar me-2"></i>
                    Scheduals
                </a>

                <a href="/message" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-regular fa-comments me-2"></i>
                    Messages
                </a>

                <a href="/notification" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-regular fa-bell me-2"></i>
                    Notification
                </a>

                <div className="mb-3 mt-4">
                    <span className="text-secondary small">APPERANCE</span>
                </div>

                <div className="nav-item">
                    <a
                        href="#"
                        className="nav-link d-flex align-items-center justify-content-between" style={{ color: '#32325D' }}
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu('charts');
                        }}
                    >
                        <div>
                            {/* <i className="bi bi-graph-up me-2"></i> */}
                            <i class="fa-solid fa-envelope-open-text me-2"></i>
                            Blogs
                        </div>
                        <i className={`bi bi-chevron-${openMenus.charts ? 'down' : 'right'} ms-2`}></i>
                    </a>
                    <div className={`ms-3 ${openMenus.charts ? 'show' : 'd-none'}`}>
                        <a href="/blog" className="nav-link text-secondary">Blogs</a>
                        <a href="/category" className="nav-link text-secondary">Category</a>
                        <a href="/tag" className="nav-link text-secondary">Tags</a>
                    </div>
                </div>

                <a href="/faq" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-regular fa-circle-question me-2"></i>
                    Faq
                </a>

                <a href="/feature" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-solid fa-dice me-2"></i>
                    Features
                </a>

                <a href="/testimonial" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-regular fa-comment me-2"></i>
                    Testimonial
                </a>

                <a href="/team" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-solid fa-users me-2"></i>
                    Team
                </a>

                <a href="#" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-solid fa-circle-question me-2"></i>
                    About Us
                </a>

                <a href="/partner" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-solid fa-meteor me-2"></i>
                    patners
                </a>

                <a href="/language" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-solid fa-language me-2"></i>
                    Language
                </a>

                <a href="#" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-solid fa-bars me-2"></i>
                    Menu
                </a>

                <a href="#" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-regular fa-floppy-disk me-2"></i>
                    Custom Pages
                </a>

                <a href="#" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i className="bi bi-graph-up me-2"></i>
                    Seo Setting
                </a>

                <div className="mb-3 mt-4">
                    <span className="text-secondary small">SITE SETTING</span>
                </div>

                <a href="#" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-solid fa-wand-magic-sparkles me-2"></i>
                    Page Settings
                </a>

                <div className="nav-item">
                    <a
                        href="#"
                        className="nav-link d-flex align-items-center justify-content-between" style={{ color: '#32325D' }}
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu('charts');
                        }}
                    >
                        <div>
                            <i class="fa-solid fa-shield me-2"></i>
                            Admin And Role
                        </div>
                        <i className={`bi bi-chevron-${openMenus.charts ? 'down' : 'right'} ms-2`}></i>
                    </a>
                    <div className={`ms-3 ${openMenus.charts ? 'show' : 'd-none'}`}>
                        <a href="/setting" className="nav-link text-secondary">Admin</a>
                        <a href="/setting" className="nav-link text-secondary">Role</a>
                    </div>
                </div>

                <div className="nav-item">
                    <a
                        href="#"
                        className="nav-link d-flex align-items-center justify-content-between" style={{ color: '#32325D' }}
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu('charts');
                        }}
                    >
                        <div>
                            <i class="fa-solid fa-gear me-2"></i>
                            Developer Setting
                        </div>
                        <i className={`bi bi-chevron-${openMenus.charts ? 'down' : 'right'} ms-2`}></i>
                    </a>
                    <div className={`ms-3 ${openMenus.charts ? 'show' : 'd-none'}`}>
                        <a href="/setting" className="nav-link text-secondary">App Setting</a>
                        <a href="/setting" className="nav-link text-secondary">Storage Setting</a>
                        <a href="/setting" className="nav-link text-secondary">Modulas Setting</a>
                    </div>
                </div>

                <div className="mb-3 mt-4">
                    <span className="text-secondary small">My SETTING</span>
                </div>

                <a href="#" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-regular fa-id-card me-2"></i>
                    Profile Settings
                </a>

                <a href="#" className="nav-link d-flex align-items-center" style={{ color: '#32325D' }}>
                    <i class="fa-solid fa-power-off me-2"></i>
                    Logout
                </a>

            </nav>
        </div>
    );
};

export default Sidebar;
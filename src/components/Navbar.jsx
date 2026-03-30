import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 py-4 px-4 md:px-8">


            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                        <img src="images/user.png" alt="user" />
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-gray-600 font-medium">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </div>
                <a className="text-2xl md:text-3xl font-bold text-[#8b3dff] cursor-pointer">DigiTools</a>
            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1 text-gray-600 font-medium text-base">
                    <li><a className="hover:text-[#8b3dff] bg-transparent">Products</a></li>
                    <li><a className="hover:text-[#8b3dff] bg-transparent">Features</a></li>
                    <li><a className="hover:text-[#8b3dff] bg-transparent">Pricing</a></li>
                    <li><a className="hover:text-[#8b3dff] bg-transparent">Testimonials</a></li>
                    <li><a className="hover:text-[#8b3dff] bg-transparent">FAQ</a></li>
                </ul>
            </div>


            <div className="navbar-end flex items-center gap-4 md:gap-6">


                <div className="indicator cursor-pointer mt-1">
                    <img src="images/products/shopping-cart.png" alt="" />
                    <span className="badge badge-sm indicator-item bg-[#8b3dff] text-white border-none">0</span>
                </div>


                <a className="hidden md:flex font-medium text-gray-700 hover:text-[#8b3dff] cursor-pointer">Login</a>


                <a className="btn bg-[#8b3dff] text-white hover:bg-[#7221f0] border-none rounded-full px-6 min-h-0 h-10 md:h-12 shadow-md">
                    Get Started
                </a>
            </div>

        </div >
    );
};

export default Navbar;
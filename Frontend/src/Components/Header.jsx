import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 border border-b-1">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">


          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto gap-10`} id="mobile-menu-2">
            <Link to="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-pink-600">
                <p className=' font-neue' style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>Dribble</p>
              </span>
            </Link>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-3 lg:mt-0 ">
              <li>
                <Link
                  to="#"
                  className="block text-slate-500 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                  aria-current="page"
                >
                  Inspiration
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block  text-slate-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Find Work
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pr-4 pl-3 text-slate-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Learn Design
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pr-4 pl-3 text-slate-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Go Pro
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block py-2 pr-4 pl-3 text-slate-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Hire Designers
                </Link>
              </li>
              {/* <li>
                <Link
                  to="#"
                  className="block py-2 pr-4 pl-3 text-slate-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>

          {/* search bar div started */}
          <div className="flex items-center gap-2">
            {/* search bar  */}
            <div class="relative">
              <input type="text" class="border border-gray-300 rounded-md px-2 py-1 w-32" placeholder="Search..." />
              <span class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z"></path>
                </svg>
              </span>
            </div>
            {/* search bar ends  */}

            {/* cart icon started  */}

            <div className="relative inline-block">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <g id="Shopping_Cart">
                  <path d="M17.437,19.934c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Zm-11.217,-4.266l-0.945,-10.9c-0.03,-0.391 -0.356,-0.693 -0.749,-0.693l-0.966,-0c-0.276,-0 -0.5,-0.224 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5l0.966,-0c0.916,-0 1.676,0.704 1.746,1.617l0.139,1.818l13.03,-0c0.885,-0 1.577,0.76 1.494,1.638l-0.668,7.52c-0.121,1.285 -1.199,2.267 -2.489,2.267l-9.069,0c-1.29,0 -2.367,-0.981 -2.489,-2.267Zm0.274,-8.158l0.722,8.066c0.073,0.77 0.719,1.359 1.493,1.359l9.069,0c0.774,0 1.42,-0.589 1.493,-1.359l0.668,-7.518c0.028,-0.294 -0.203,-0.548 -0.498,-0.548l-12.947,-0Zm4.454,12.424c-0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c-0,-0.552 0.448,-1 1,-1c0.552,0 1,0.448 1,1Z"></path>
                </g>
              </svg>
              {/* <p className="absolute bottom-0 right-0 bg-slate-600 text-white rounded-full p-1  flex justify-center items-center "><span>x</span></p> */}
            </div>
            {/* cart icon ends  */}


            {/* image logo started */}
            <div className='bg-slate-300  w-8 h-8 rounded-full flex justify-center  items-center'>
              <img className='w-child h-child object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHcaPJwcTviSUGQftSBOp7uGs9YKr9XdQpmgezNPgomr9-weig77TlzfwweRTNDZY0EPg&usqp=CAU" alt="profile pic" />
            </div>

            {/* image logo ends */}

            <button
              className="text-gray-800 bg-pink-500 hover:bg-pink-300 focus:ring-4 focus:ring-gray-300 font-semibold rounded-lg text-md px-4 lg:px-4 py-2 lg:py-1 mr-2 focus:outline-none"
            >
              Log in
            </button>

            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isMobileMenuOpen ? '' : 'hidden'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

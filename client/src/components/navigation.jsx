import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { MdPlaylistRemove } from "react-icons/md";
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';






function navigation() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className=' rounded-full'>
     <header>
            <nav className="bg-white/20 border-gray-200 px-4 lg:px-6 py-4 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">ShareUp</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                   <Link to="/l"><button className="hidden md:block  mr-4 py-2 px-4 text-gray-800 font-medium duration-150 border border-indigo-800 hover:bg-gray-50 active:bg-gray-100 rounded-lg">
                       Login Here
                    </button></Link> 
                    <Link to="/r">  <button className="text-white bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-primary-800">Get started</button></Link> 
                        <button onClick={toggleMobileMenu} type="button" className="inline-flex items-center p-2 ml-auto text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span className="sr-only">Open main menu</span>
                            <TiThMenu  className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : ''}`} />
                            <MdPlaylistRemove  className={`w-6 h-6 ${isMobileMenuOpen ? '' : 'hidden'}`} />
                        </button>
                    </div>
                    <div className={`justify-between items-center rounded-2xl w-full lg:flex lg:w-auto lg:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
                        <ul className="flex flex-col font-medium  lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link to='/' className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 hover:underline lg:p-0 dark:text-white" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to='/' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent hover:underline lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</Link>
                            </li>
                            <li>
                                <Link to='/' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent hover:underline lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</Link>
                            </li>
                            <li>
                                <Link to='/' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent hover:underline lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</Link>
                            </li>
                            <li>
                                <Link to='/' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent hover:underline lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</Link>
                            </li>
                            <li>
                                <Link to='/c' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent hover:underline lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                            </li>
                            <li>
                                <Link to="/l">
                                <button className="md:hidden block pl-3 pr-4 py-2 px-4 text-gray-800 font-medium duration-150 border border-indigo-800 hover:bg-gray-50 active:bg-gray-100 rounded-full">
                                    Login Here
                                </button>
                                </Link>
                            </li>
                            
                    
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
      
    </div>
  )
}

export default navigation

// aria-controls="mobile-menu-2" aria-expanded={isMobileMenuOpen}
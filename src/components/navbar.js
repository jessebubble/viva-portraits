import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <nav className='bg-slate-900 border-b'>
            <div className="flex items-center justify-between p-3 md:p-5">
                <Link to='/' className='flex '>
                    <h1 className='tracking-tighter antialiased text-xl md:text-2xl font-medium text-slate-100'>
                        <span className='text-fuchsia-600'>VIVA</span> PORTRAITS
                    </h1>
                </Link>
                <div className="hidden md:block">
                <div className='flex space-x-2 md:space-x-3 lg:space-x-4 text-lg md:text-xl text-white pr-2 tracking-tighter antialiased'>
                    <Link to='/pricing' 
                        className='hover:text-rose-400'
                        aria-current='page'>Pricing
                    </Link>
                    <Link to='/contact' 
                        className=' hover:text-rose-400'
                        aria-current='page'>Contact
                    </Link>
                    <Link to='/community' 
                        className=' hover:text-rose-400'
                        aria-current='page'>Community
                    </Link>
                </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="bg-slate-700 border border-white inline-flex items-center justify-center p-2 rounded-md text-white hover:text-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                    <svg
                        className="block h-4 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                    <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"                     
                      />  
                    </svg>
                    ) : (
                    <svg
                    className="block h-4 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                    )}
                </button>
                </div>

                <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                    <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="/pricing" className="hover:bg-slate-700 text-slate-100 block px-3 py-2 rounded-md text-md font-medium">
                        Pricing
                        </a>
                        <a href="/contact" className="text-slate-100 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-md font-medium">
                        Contact
                        </a>
                        <a href="/community" className="text-slate-100 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-md font-medium">
                        Community
                        </a>
                    </div>
                    </div>
                )}
                </Transition>
            </div>
        </nav>
        </>
    );
}



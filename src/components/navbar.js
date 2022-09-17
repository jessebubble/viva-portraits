import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <div className="bg-sky-600">
            <div className="max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex w-0 flex-1 items-center">
                        <span className="flex rounded-lg bg-sky-800 p-2">
                        <svg 
                            className="h-6 w-6 text-white" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            aria-hidden="true">
                        <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                        </svg>
                        </span>
                        <p className="ml-3 truncate font-medium text-white">
                        <span className="md:hidden">VIVA Portraits opens 10/2022</span>
                        <span className="hidden md:inline">Big news! VIVA Portraits opens 10/2022. We're excited to be part of the San Antonio Community.</span>
                        </p>
                    </div>
                    <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                        <a href="/pricing" className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-sky-600 shadow-sm hover:bg-indigo-50">Learn more</a>
                    </div>
                    <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                        <button type="button" className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                        <span className="sr-only">Dismiss</span>
                        <svg 
                            className="h-6 w-6 text-white" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            aria-hidden="true">
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <nav className='bg-slate-900 border-b'>
            <div className="flex items-center justify-between p-6 md:p-8">
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



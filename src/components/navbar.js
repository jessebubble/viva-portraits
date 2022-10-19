import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../vivaportraits.svg'
import { Menu, Transition } from "@headlessui/react";

export default function Nav() {
    return (
        <>
        <nav className='bg-slate-900 md:pb-2 lg:-mb-3'>
            <div className="flex flex-col lg:flex-row items-center justify-around gap-4 md:gap-0 p-3 md:p-5">
                <Link to='/' className=''>
                    <h1 className='-mb-10 md:-mb-6 '>
                        <Logo className='w-80 md:w-96 lg:w-40 h-full'/>  
                    </h1>
                </Link>
                <div className="hidden md:block">
                    <div className='space-x-2 md:space-x-3 lg:space-x-4 text-lg md:text-2xl lg:text-xl text-white pr-2 tracking-tighter antialiased'>
                        <Link to='/pricing' 
                            className='hover:text-rose-400'
                            aria-current='page'>Pricing
                        </Link>
                        <Link to='/community' 
                            className=' hover:text-rose-400'
                            aria-current='page'>Community
                        </Link>
                        <Link to='/contact' 
                            className=' hover:text-rose-400'
                            aria-current='page'>Contact
                        </Link>
                    </div>
                </div>
                <div className="-mr-2 flex items-center md:hidden">
                    <Menu>
                        <Menu.Button 
                            type="button" 
                            className="inline-flex items-center justify-center rounded-md border border-white bg-transparent p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-8 w-8 text-white hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" fillRule="evenodd" clipRule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />  
                            </svg>
                        </Menu.Button>
                        <Transition
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                        >
                        <Menu.Items className="md:hidden inline-flex flex-col items-start p-6 gap-1" id="mobile-menu">
                            <Menu.Item className="hover:bg-gray-300 text-white block rounded-md text-md font-medium">
                                {({ active }) => (
                                    <a href="/pricing" className={`${active && 'hover:bg-yellow-200'}`}>Pricing</a>
                                )}
                            </Menu.Item>
                            <Menu.Item className="hover:bg-gray-300 text-white block rounded-md text-md font-medium">
                                {({ active }) => (
                                    <a href="/community" className={`${active && 'hover:bg-yellow-200'}`}>Community</a>
                                )}
                            </Menu.Item>
                            <Menu.Item className="hover:bg-gray-300 text-white block rounded-md text-md font-medium">
                                {({ active }) => (
                                    <a href="/contact" className={`${active && 'hover:bg-yellow-200'}`}>Contact</a>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </nav>
        </>
    );
}



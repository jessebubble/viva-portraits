import { Link } from 'react-router-dom';
import { ImInstagram, ImFacebook2, ImTwitter, ImYoutube, ImLinkedin } from "react-icons/im";
import { IconContext } from 'react-icons';

export default function Portraits() {
    return (
        <>
        <nav className='bg-gray-900 border-gray-200 px-2 sm:px-4 py-2.5'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <Link to='/' className='flex items-center'>
                    <img src='./icons8.png' alt='collage icon' className='pr-1 h-8 sm:h-9' />
                    <span className='self-center text-2xl xl:text-4xl font-semibold whitespace-nowrap text-white'>
                        VIVA Portraits
                    </span>
                </Link>
                <button 
                data-collapse-toggle='navbar-default' 
                type='button'
                className='inline-flex items-center p-2 pl-3 pr-3 text-lg text-white rounded-md md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 hover:bg-gradient-to-t from-stone-600 via-stone-400 to-stone-600'
                aria-controls='navbar-default'
                aria-expanded='false'>
                    <span className='sr-only'>Open main menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    aria-hidden='true'
                    viewBox="0 0 20 20" 
                    fill="currentColor">
                    <path fillRule="evenodd" 
                        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" 
                        clipRule="evenodd" 
                        />
                    </svg>
                </button>
                <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
                <ul className='flex flex-col p-4 pt-4 bg-gray-900 rounded-lg border border-gray-700 
                                md:flex-row md:space-x-8 md:text-lg md:font-medium md:border-0 '>
                    <Link to='/' 
                        className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0'
                        aria-current='page'>Home
                    </Link>
                    <Link to='/portraits' 
                        className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0'
                        aria-current='page'>Portraits
                    </Link>
                    <Link to='/pricing' 
                        className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0'
                        aria-current='page'>Pricing
                    </Link>
                    <Link to='/contact' 
                        className='block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0'
                        aria-current='page'>Contact
                    </Link>
                </ul>
                </div>
            </div>
        </nav>

        <main>
        <div className='container mx-auto px-4 py-16'>
            <div className='flex flex-wrap justify-center'>
            <div className='w-full md:w-1/2 p-4'>
                <h1 className='text-3xl font-bold text-center'>
                VIVA Portraits
                </h1>
                <p className='text-center text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec euismod, nisl eget consectetur sagittis,
                nisl nunc ultricies nisi, eu aliquet nisl nisl eget nisi.
                Donec euismod, nisl eget consectetur sagittis,
                nisl nunc ultricies nisi, eu aliquet nisl nisl eget nisi.
                Donec euismod, nisl eget consectetur sagittis,
                nisl nunc ultricies nisi, eu aliquet nisl nisl eget nisi.
                Donec euismod, nisl eget consectetur sagittis,
                </p>
            </div>
            </div>
        </div>
        </main>

        <footer className='bg-gray-900 border-gray-200 px-2 sm:px-4 py-2.5'>
        <div className='sm:flex sm:items-center sm:justify-between'>
            <Link to='/' className='flex items-center pb-6 xl:pb-7 xl:pt-1 sm:pb-0'>
            <img src='./icons8.png' alt='collage icon' className='pr-1 h-8' />
            <span className='text-2xl xl:text-4xl font-semibold whitespace-nowrap text-white self-center'>
                VIVA Portraits
            </span>
            </Link>
            <ul className='flex flex-wrap items-center justify-center pb-6 xl:pb-7 xl:pt-1 text-xl xl:text-2xl text-gray-500 sm:pb-0'>
            <Link to='/' className='pr-4 md:pr-6 hover:underline'>Home</Link>
            <Link to='/portraits' className='pr-4 md:pr-6 hover:underline'>Portraits</Link>
            <Link to='/pricing' className='pr-4 md:pr-6 hover:underline'>Pricing</Link>
            <Link to='/contact' className='pr-4 md:pr-6 hover:underline'>Contact</Link>
            </ul>
        </div>
        <hr className='py-1 lg:py-2 border-gray-700 sm:mx-auto ' />
        <span className='block text-gray-500 text-center sm:text-left'>
            © 2022 VIVA Portraits
        </span>
        <div className='flex justify-evenly xl:justify-start pt-4 xl:pt-8 space-x-4'>
            <IconContext.Provider 
                value={{ className: 'text-rose-400 hover:text-yellow-300 h-6 w-8' }}>
                    <a href='https://www.linkedin.com/company/vivawebdesign/'>
                        <ImLinkedin />
                    </a>
                    <a href='https://www.instagram.com/vivawebdesign_/'>
                        <ImInstagram />
                    </a>
                    <a href='https://www.instagram.com/vivawebdesign_/'>
                        <ImFacebook2 />
                    </a>
                    <a href='https://www.instagram.com/vivawebdesign_/'>
                        <ImTwitter />
                    </a>
                    <a href='https://www.instagram.com/vivawebdesign_/'>
                        <ImYoutube />
                    </a>
            </IconContext.Provider>
        </div> 
        </footer>
        </>
    )
}

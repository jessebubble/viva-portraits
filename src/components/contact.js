import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
    <nav className='border-gray-200 px-2 sm:px-4 py-2.5 sticky top-0 bg-gray-900'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <Link to='/' className='flex items-center'>
          <img src='./icons8.png' alt='collage icon' className='pr-1 h-8 sm:h-9' />
            <span className='self-center tracking-tight text-2xl xl:text-4xl font-semibold whitespace-nowrap text-white'>
              VIVA Portraits
            </span>
        </Link>
        <div className='w-full md:block md:w-auto' id='navbar-default'>
          <ul className='flex flex-row justify-center p-4 pt-4 md:space-x-8 md:text-lg md:font-medium md:border-0 '>
            <Link to='/portraits' 
                  className='block py-2 pr-4 pl-3 text-white md:p-0 hover:text-rose-400'
                  aria-current='page'>Portraits
            </Link>
            <Link to='/pricing' 
                  className='block py-2 pr-4 pl-3 text-white md:p-0 hover:text-rose-400'
                  aria-current='page'>Pricing
            </Link>
            <Link to='/contact' 
                  className='block py-2 pr-4 pl-3 text-white md:p-0 hover:text-rose-400'
                  aria-current='page'>Contact
            </Link>
          </ul>
        </div>
      </div>
    </nav>

    <main className="flex flex-col items-top">
      <div className='px-4 py-1 xl:py-2 bg-gray-900'>
        <h2 className='text-3xl pt-1 xl:pt-3 text-center tracking-tight font-light text-white md:text-6xl'>
          <span className='text-fuchsia-500'>VIVA</span> Portraits
        </h2>
        <p className='text-lg pt-1 xl:pt-2 text-center tracking-tight text-white pb-1 xl:pb-2'>
          More than just a picture
        </p>
      </div>
    </main>
    <main className='bg-gradient-to-t from-white via-fuchsia-300 to-fuchsia-500'>
      <div className='flex flex-col xl:flex-row w-full items-center justify-center pt-8 pb-8 sm:pb-6'>
          <div className='inline-grid grid-col items-center '> 
            <img src='../bianca-berg-unsplash.png' alt='portrait' className='xl:h-96 xl:rounded-lg hover:rotate-6' />
          </div>
          <div className='inline-grid grid-col'> 
          <div className='pt-3 xl:pl-48'>
            <h2 className='text-center text-4xl font-light tracking-tight md:text-6xl pb-4 xl:pb-8'>
              Ready to <span className='text-fuchsia-500 xl:text-white font-medium'>VIVA</span>
            </h2>
          <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-gray-400 text-xl md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500'>
            Give us a call
          </div>
          </div>
          <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-gray-400 bg-transparent text-xl md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500 '>
            Send us an email 
          </div>
          </div>
          <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-gray-400 bg-transparent text-xl md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500 '>
            Schedule a remote meetup 
          </div>
          </div>
          <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-gray-400 bg-transparent text-xl md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500 '>
            The future is transparency 
          </div>
          </div>
          </div>
        </div>
      </div>
    </main>
    <main className="flex flex-col items-top">
      <div className="bg-gray-900 px-4 py-10 xl:py-11">
        <h2 className='items-center text-center text-4xl font-light tracking-tight md:text-6xl md:pl-1 lg:pb-4'>
            <span className="block text-teal-300 ">Your Portrait Brought to Life</span>
        </h2>
        <div className='pt-8 pb-8 flex justify-around'>
            <div className='pb-3 p-2 items-center text-center shadow-md lg:shadow-lg shadow-indigo-300 border-2 border-white px-5 md:px-7 bg-black text-2xl md:text-4xl font-lighter lg:p-3
                            transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white hover:border-black'>
                <Link to="/contact" className='text-rose-400 hover:text-gray-900'>
                  Contact Us
                </Link>
            </div>
        </div>
      </div>
    </main>

    <footer className='bg-gray-900 border-gray-200 px-2 sm:px-4 py-2.5'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <Link to='/' className='flex items-center'>
          <img src='./icons8.png' alt='collage icon' className='pr-1 h-8 sm:h-9' />
            <span className='self-center text-2xl xl:text-4xl font-semibold whitespace-nowrap text-white'>
              VIVA Portraits
            </span>
        </Link>
        <div className='w-full md:block md:w-auto' id='navbar-default'>
          <ul className='flex flex-row justify-center p-4 pt-4 text-gray-500
                          md:space-x-8 md:text-lg md:font-medium md:border-0 '>
            <Link to='/portraits' className='block py-2 pr-4 pl-3 md:p-0 hover:underline hover:text-rose-400'>Portraits</Link>
            <Link to='/pricing' className='block py-2 pr-4 pl-3 md:p-0 hover:underline hover:text-rose-400'>Pricing</Link>
            <Link to='/contact' className='block py-2 pr-4 pl-3 md:p-0 hover:underline hover:text-rose-400'>Contact</Link>
          </ul>
        </div>
    </div>  
    </footer>
    </>
  );
}
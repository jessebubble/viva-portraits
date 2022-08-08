import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
    <nav className='border-gray-200 px-2 sm:px-4 py-2.5 sticky top-0 bg-black'>
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

    <main className='bg-gradient-to-r from-black via-white to-black'>
      <div className='max-w-2xl lg:max-w-7xl mx-auto py-6 xl:py-9 px-2 sm:px-6 lg:px-8 xl:px-64 '>
        <div className="pb-5 xl:pb-10 ">
            <h1 className="text-4xl md:text-5xl xl:text-7xl text-center tracking-tight font-light text-black ">
                <span className='text-rose-500'>VIVA </span>Portraits
            </h1>
            <p className="text-lg xl:text-xl text-center font-light tracking-tight text-black">
              More Than Just A Picture
            </p>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-6 xl:gapx-8'>
          <div className='w-full rounded-lg overflow-hidden bg-sky-400'>
            <img src='../bianca-berg-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover hover:rotate-6'
              />
          </div>
          <div className='w-full rounded-lg overflow-hidden bg-lime-400'>
            <img src='../rene-muller-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover hover:-rotate-6' 
              />
          </div>
          <div className='w-full rounded-lg overflow-hidden bg-yellow-400'>
            <img src='../vahid-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover hover:rotate-6' 
              />
          </div>
          <div className='w-full rounded-lg overflow-hidden bg-rose-400'>
            <img src='../alex-sheldon-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover hover:-rotate-6' 
              />
          </div>
          <div className='w-full rounded-lg overflow-hidden bg-teal-400'>
            <img src='../zoe-gayah-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover hover:-rotate-6' 
              />
          </div>
          <div className='w-full rounded-lg overflow-hidden bg-fuchsia-400'>
            <img src='../insung-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover hover:-rotate-6' 
              />
          </div>
          <div className='w-full rounded-lg overflow-hidden bg-blue-400'>
            <img src='../yulia-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover hover:rotate-6' 
              />
          </div>
          <div className='w-full rounded-lg overflow-hidden bg-emerald-400'>
            <img src='../millicent-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover hover:-rotate-6' 
              />
          </div>
          <div className='w-full rounded-lg overflow-hidden bg-rose-400'>
            <img src='../clarissa-watson-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover  hover:rotate-6'
              />
          </div>
          <div className='w-full rounded-lg overflow-hidden bg-sky-400'>
            <img src='../humphrey-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover hover:-rotate-6' 
              />
          </div>
          <div className='w-full rounded-lg overflow-hidden bg-lime-400'>
            <img src='../ashas-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover hover:rotate-6' 
              />
          </div>
          <div className='w-full rounded-lg overflow-hidden bg-amber-400'>
            <img src='../zachary-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover hover:-rotate-6' 
              />
          </div>
        </div>
      </div>
    </main>
    <main className="flex flex-col items-top">
      <div className="bg-black px-4 py-10 xl:py-11">
        <h2 className='items-center text-center text-4xl font-light tracking-tight md:text-6xl md:pl-1 lg:pb-4'>
            <span className="block text-teal-300 ">More Than Just A Memory</span>
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

    <footer className='bg-black border-gray-200 px-2 sm:px-4 py-2.5'>
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
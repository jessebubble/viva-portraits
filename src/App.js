import { Link } from 'react-router-dom';

export default function App() {
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
        <div className='w-full md:block md:w-auto' id='navbar-default'>
          <ul className='flex flex-row p-4 pt-4 bg-gray-900 
                          md:space-x-8 md:text-lg md:font-medium md:border-0 '>
            <Link to='/' 
                  className='block py-2 pr-4 pl-3 text-white md:p-0 hover:text-rose-400'
                  aria-current='page'>Home
            </Link>
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

    <main className='bg-gray-900'>
      <div className='max-w-2xl lg:max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-6 xl:gapx-8'>
          <div className='w-full rounded-lg overflow-hidden aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 bg-sky-400'>
            <img src='../bianca-berg-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover hover:rotate-6'
              />
          </div>
          <div className='w-full rounded-lg overflow-hidden aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 bg-lime-400'>
            <img src='../rene-muller-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover hover:-rotate-6' 
              />
          </div>
          <div className='w-full rounded-lg overflow-hidden aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 bg-yellow-400'>
            <img src='../vahid-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover hover:rotate-6' 
              />
          </div>
          <div className='w-full rounded-lg overflow-hidden aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 bg-rose-400'>
            <img src='../alex-sheldon-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover hover:-rotate-6' 
              />
          </div>
          <div className='w-full rounded-lg overflow-hidden aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 bg-purple-400'>
            <img src='../houcine-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover hover:rotate-6' 
              />
          </div>
          <div className='w-full rounded-lg overflow-hidden aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 bg-cyan-400'>
            <img src='../alex-sheldon2-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover hover:-rotate-6' 
              />
          </div>
          <div className='w-full rounded-lg overflow-hidden aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 bg-emerald-400'>
            <img src='../eddie-lackmann-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover hover:rotate-6' 
              />
          </div>
          <div className='w-full rounded-lg overflow-hidden aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 bg-orange-400'>
            <img src='../mishael-zahed-unsplash.png' alt='headshot' 
                className='w-full h-full object-center object-cover hover:-rotate-6' 
              />
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
          <ul className='flex flex-row p-4 pt-4 text-gray-500
                          md:space-x-8 md:text-lg md:font-medium md:border-0 '>
            <Link to='/' className='block py-2 pr-4 pl-3 md:p-0 hover:underline hover:text-rose-400'>Home</Link>
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
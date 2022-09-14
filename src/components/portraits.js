import Footer from './footer';
import Nav from './navbar';

export default function App() {
  return (
    <>
    <Nav />

    <main className="flex flex-col items-top">
      <div className='px-4 py-1 xl:py-2 bg-gray-900'>
        <h2 className='text-3xl pt-1 xl:pt-3 text-center tracking-tight font-light text-white md:text-6xl'>
          <span className='text-rose-500'>VIVA</span> Portraits
        </h2>
        <p className='text-lg pt-1 xl:pt-2 text-center tracking-tight text-white pb-1 xl:pb-2'>
          More than just a picture
        </p>
      </div>
    </main>
    <main className='bg-gradient-to-r from-sky-600 via-white to-sky-600'>
      <div className='flex flex-col xl:flex-row w-full items-center justify-center pt-6 pb-6 px-10'>
          <div className='inline-grid grid-cols-2 items-center '>  
            <img src='../brian-lawson-unsplash.png' alt='portrait' className='xl:h-80 hover:rotate-6' />
            <img src='../alex-sheldon2-unsplash.png' alt='portrait' className='xl:h-80 hover:-rotate-6' />
            <img src='../jessica-felicio-unsplash.png' alt='portrait' className='xl:h-80 hover:rotate-6' />
            <img src='../gez-xavier-unsplash.png' alt='portrait' className='xl:h-80 hover:rotate-6' />
          </div>
          <div className='inline-grid grid-col'> 
          <div className='pt-4 pb-4 lg:px-32'>
            <h2 className='text-center text-3xl md:text-4xl xl:text-5xl font-light tracking-tight pb-4 xl:pb-6'>
              Portraits with a <span className='text-rose-500 '>PURPOSE</span>
            </h2>
          <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-current text-xl md:text-2xl xl-text-3xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500'>
            More than just a <span className='text-rose-500'>memory</span>
          </div>
          </div>
          <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-current bg-transparent text-xl md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500 '>
            More than just a <span className='text-rose-500'>picture</span>
          </div>
          </div>
          <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-current bg-transparent text-xl md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500 '>
            More than just a <span className='text-rose-500'>pet</span>
          </div>
          </div>
          <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-current bg-transparent text-xl md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
          <div className='text-gray-900 hover:text-rose-500 '>
            More than just a <span className='text-rose-500'>moment</span>
          </div>
          </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
    </>
  );
}
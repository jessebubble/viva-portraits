import Nav from './navbar';
import Footer from './footer';

export default function App() {
  return (
    <>
    <Nav />
  

    <main className="flex flex-col items-top">
      <div className='px-4 py-1 xl:py-2 bg-gray-900'>
        <h2 className='text-3xl pt-1 xl:pt-3 text-center tracking-tight font-light text-white md:text-6xl'>
          <span className='text-fuchsia-500'>VIVA</span> Contact
        </h2>
        <p className='text-lg pt-1 xl:pt-2 text-center tracking-tight text-white pb-1 xl:pb-2'>
          More than just a picture
        </p>
      </div>
    </main>
    <main className='bg-gradient-to-r from-fuchsia-500 via-white to-fuchsia-500'>
      <div className='flex flex-col xl:flex-row items-center justify-center pt-2 pb-4 px-16 xl:px-80'>
        <div className=''> 
          <img src='../caroline-unsplash.png' alt='portrait' className='xl:w-9/12 xl:rounded-lg hover:rotate-6' />
        </div>
        <div className='w-full'> 
          <div className=''>
            <h2 className='text-center text-3xl md:text-4xl xl:text-5xl font-light tracking-tight pb-4 xl:pb-5'>
              Ready to <span className='text-fuchsia-500 xl:text-white font-medium'>VIVA</span>
            </h2>
            <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-current text-xl md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
            <div className='text-gray-900 hover:text-rose-500'>
              Give us a call
            </div>
            </div>
            <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-current bg-transparent text-xl md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
            <div className='text-gray-900 hover:text-rose-500 '>
              Send us an email 
            </div>
            </div>
            <div className='pb-3 xl:pb-6 p-2 text-center shadow-sm shadow-current bg-transparent text-xl md:text-2xl font-lighter lg:p-5
                      transform hover:translate-y-4 transition duration-300 ease-in-out'>
            <div className='text-gray-900 hover:text-rose-500 '>
              Schedule a remote meetup 
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
import Nav from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
    <Nav />

    <main className="bg-slate-900">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full p-8 md:p-10 lg:p-16">
        <div className="">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-white">
            More Than Just A <span className="block text-cyan-500">Memory</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-white max-w-xl text-lg md:text-xl">
            We're a team of local creatives who are passionate about capturing your moments and bringing them to life.
            Join us for our next events. 
            <span className='text-teal-500'> Studio Days</span> | <span className='text-cyan-500'>City Days</span> 
          </p>
          <div className="mt-5 sm:mt-8 flex items-center justify-start">
            <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-white bg-transparent text-xl md:text-2xl font-light hover:bg-white hover:border-black'>
              <Link to="/pricing" className='text-white hover:text-gray-900'>
                Reserve Your Session 
              </Link>
            </div>
          </div>
        </div>
        <div className=''>
          <img 
            src='./dog2-unsplash.png'
            alt='VIVA Studio Days'
            className='w-64 md:w-80 opacity-80'
          />
        </div>
      </div>
    </main>

    <main className="bg-slate-100">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly p-8 md:p-10 lg:p-16">
        <div className="w-full flex justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-gray-900">
            <span className="">Ready to VIVA?</span>
            <span className="block text-indigo-600">Reserve your next session.</span>
          </h1>
        </div>
        <div className='mt-10 w-full'>
          <div className='flex flex-col-reverse items-center gap-4 md:gap-8'>
            <form 
              className='flex flex-col gap-4 bg-indigo-50 border-2 border-indigo-600 rounded-xl p-4 md:p-8 lg:p-16' 
              action='#' 
              method='POST' >
              <div> 
                <input 
                  name='firstname' 
                  id='firstname' 
                  placeholder='First and Last Name'
                  className='bg-transparent placeholder-slate-400 text-white border-b-2 border-indigo-600 text-lg p-2.5' 
                  required   
                />
              </div>
              <div>
                <input 
                  type='email' 
                  name='email' 
                  id='email' 
                  placeholder='Your Email'
                  className='bg-transparent placeholder-slate-400 text-white border-b-2 border-indigo-600 text-lg p-2.5' 
                  required />
              </div>
              <div>
                <select 
                  name='event' 
                  id='event' 
                  placeholder='Select an Event'
                  className='bg-transparent placeholder-slate-400 text-slate-400 border-b-2 border-indigo-600 text-lg p-2.5' 
                  required >
                  <option>Studio Days</option>
                  <option>City Days</option>
                  <option>Small Business</option>
                </select>
              </div>
              <button  
                className='tracking-tight antialiased p-2 items-center text-center border border-indigo-600 bg-transparent text-2xl md:text-xl font-light text-indigo-600 hover:bg-white'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>

    <main className="bg-slate-200">
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full p-8 md:p-10 lg:p-16">
        <div className=''>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-white">
            <span className="block text-gray-900">Digital Pro Lab</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-gray-900 max-w-xl text-lg md:text-xl">
            We love our local community and we recommend <span className='text-cyan-600 font-medium'>Digital Pro Lab</span> for all of your printing options.
          </p>
          <div className="mt-5 sm:mt-8 flex items-center justify-center lg:justify-start ">
            <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-gray-900 bg-transparent text-xl md:text-2xl font-light hover:bg-white'>
              <Link to="/pricing" className='text-gray-900 '>
                Reserve Your Spot 
              </Link>
            </div>
          </div>
        </div>
        <div className="">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-gray-900">
            <span className="block">Camera Exchange</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-gray-900 max-w-xl text-lg md:text-xl">
            Once a month we take over the studio at <span className='text-cyan-600 font-medium'>Camera Exchange</span> and offer a full service studio experience. 
            Did we mention, $20 per person! 
          </p>
          <div className="mt-5 sm:mt-8 flex items-center justify-center lg:justify-start">
            <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-gray-900 bg-transparent text-xl md:text-2xl font-light hover:bg-white'>
              <Link to="/pricing" className='text-gray-900'>
                Reserve Your Spot 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  
    
    <Footer />
    </>
  );
}
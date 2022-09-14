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
            More Than Just A <span className="block text-rose-500">Moment</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-white max-w-xl text-lg md:text-xl">
            We're a team of local creatives who are passionate about capturing your moments and bringing them to life.
            Join us for our next events. 
            <span className='text-teal-500'> Studio Days</span> | <span className='text-cyan-500'>City Days</span> 
          </p>
          <div className="mt-5 sm:mt-8 flex items-center justify-center lg:justify-start">
            <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-white bg-transparent text-xl md:text-2xl font-light
                              transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white hover:border-black'>
              <Link to="/pricing" className='text-white hover:text-gray-900'>
                Reserve Your Spot 
              </Link>
            </div>
          </div>
        </div>
        <div className=''>
          <img 
            src='./studio-unsplash.png'
            alt='VIVA Studio Days'
            className='w-64 md:w-96 lg:w-128 opacity-80'
          />
        </div>
      </div>
    </main>

    <main className="bg-slate-100">
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full p-8 md:p-10 lg:p-16">
        <div className=''>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-gray-900">
            <span className="text-teal-500">VIVA</span>
            <span className="block">Studio Days</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-gray-900 max-w-xl text-lg md:text-xl">
            Once a month we take over the studio at <span className='text-teal-500'>Camera Exchange</span> and offer a full service studio experience. 
            Did we mention, $20 per person! 
          </p>
          <div className="mt-5 sm:mt-8 flex items-center justify-center lg:justify-start">
            <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-gray-900 bg-transparent text-xl md:text-2xl font-light
                              transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white'>
              <Link to="/pricing" className='text-gray-900'>
                Reserve Your Spot 
              </Link>
            </div>
          </div>
        </div>
        <div className="">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-gray-900">
            <span className="text-teal-500">VIVA</span>
            <span className="block">Studio Days</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-gray-900 max-w-xl text-lg md:text-xl">
            Once a month we take over the studio at <span className='text-teal-500'>Camera Exchange</span> and offer a full service studio experience. 
            Did we mention, $20 per person! 
          </p>
          <div className="mt-5 sm:mt-8 flex items-center justify-center lg:justify-start">
            <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-gray-900 bg-transparent text-xl md:text-2xl font-light
                              transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white'>
              <Link to="/pricing" className='text-gray-900'>
                Reserve Your Spot 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
    <main className="bg-slate-300">
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full p-8 md:p-10 lg:p-16">
        <div className=''>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-gray-900">
            <span className="text-cyan-500">VIVA</span>
            <span className="block">City Days</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-gray-900 max-w-xl text-lg md:text-xl">
            Once a month we explore the city by taking over a spot for City Days. 
            Join us for the next City Days.
          </p>
          <div className="mt-5 sm:mt-8 flex items-center justify-center lg:justify-start">
            <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-gray-900 bg-transparent text-xl md:text-2xl font-light
                              transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white'>
              <Link to="/pricing" className='text-gray-900'>
                Reserve Your Spot 
              </Link>
            </div>
          </div>
        </div>
        <div className="">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-gray-900">
            <span className="text-cyan-500">VIVA</span>
            <span className="block">City Days</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-gray-900 max-w-xl text-lg md:text-xl">
            Once a month we explore the city by taking over a spot for City Days. 
            Join us for the next City Days.
          </p>
          <div className="mt-5 sm:mt-8 flex items-center justify-center lg:justify-start">
            <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-gray-900 bg-transparent text-xl md:text-2xl font-light
                              transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white'>
              <Link to="/pricing" className='text-gray-900'>
                Reserve Your Spot 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
    <main className="bg-slate-100">
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full p-8 md:p-10 lg:p-16">
        <div className=''>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-gray-900">
            <span className="text-emerald-500">VIVA</span>
            <span className="block">Small Business</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-gray-900 max-w-xl text-lg md:text-xl">
            Corporate Portraits, Headshots, Team Events. We're ready to create content for your website, social medial and more.
          </p>
          <div className="mt-5 sm:mt-8 flex items-center justify-center lg:justify-start">
            <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border bg-transparent text-xl md:text-2xl font-light
                              transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white border-black'>
              <Link to="/pricing" className='text-gray-900'>
                Reserve Your Spot 
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-gray-900">
            <span className="text-emerald-500">VIVA</span>
            <span className="block">Small Business</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-gray-900 max-w-xl text-lg md:text-xl">
            Corporate Portraits, Headshots, Team Events. We're ready to create content for your website, social medial and more.
          </p>
          <div className="mt-5 sm:mt-8 flex items-center justify-center lg:justify-start">
            <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border bg-transparent text-xl md:text-2xl font-light
                              transform hover:translate-y-4 transition duration-300 ease-in-out hover:bg-white border-black'>
              <Link to="/pricing" className='text-gray-900'>
                Reserve Your Spot 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>

    <div className="bg-slate-300">
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full p-8 md:p-10 lg:p-16">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-gray-900">
          <span className="block">Ready to VIVA?</span>
          <span className="block text-sky-600">Reserve your next session.</span>
        </h1>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 lg:w-1/4">
        <form 
              className='space-y-6 pt-4' 
              action='#' 
              method='POST' >
              <div> 
                <input 
                  name='firstname' 
                  id='firstname' 
                  placeholder='First and Last Name'
                  className='w-full bg-transparent placeholder-slate-400 text-white border-b-2 border-sky-600 text-lg p-2.5' 
                  required   
                />
              </div>
              <div>
                <input 
                  type='email' 
                  name='email' 
                  id='email' 
                  placeholder='Your Email'
                  className='w-full bg-transparent placeholder-slate-400 text-white border-b-2 border-sky-600 text-lg p-2.5' 
                  required />
              </div>
              <div>
                <select 
                  name='event' 
                  id='event' 
                  placeholder='Select an Event'
                  className='w-full bg-transparent placeholder-slate-400 text-slate-400 border-b-2 border-sky-600 text-lg p-2.5' 
                  required >
                  <option>Studio Days</option>
                  <option>City Days</option>
                  <option>Small Business</option>
                </select>
              </div>
              <button  
                className='tracking-tight subpixel-antialiased p-1 items-center text-center border border-sky-600 bg-transparent text-2xl md:text-xl font-light
                transform hover:translate-y-4 transition duration-300 ease-in-out text-sky-600 hover:bg-white'>
                Submit
              </button>
            </form>
        </div>
      </div>
    </div>

    <main className='bg-slate-200'>
      <div className='flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-4 p-4 md:p-6 lg:p-8 items-center justify-evenly'>
        <div className='lg:w-3/12 rounded-lg overflow-hidden bg-amber-400 border-2 border-slate-700'>
          <h4 className='pb-4 text-gray-900 text-2xl tracking-tight font-bold p-6 md:p-7 xl:p-10'>
            <span className='text-teal-600'>VIVA</span> Studio Days
          </h4>
          <div className='flex items-baseline text-white px-6 md:px-7 xl:px-10'>
            <span className='text-3xl font-semibold'>$</span>
            <span className='text-5xl font-extrabold tracking-tight subpixel-antialiased'>20</span>
            <span className='text-xl font-normal text-gray-700 subpixel-antialiased pl-1'>/per person</span>
          </div>
          <ul className='py-6 space-y-4 list-inside justify-center p-6 md:p-7 xl:p-10'>
            <li className='flex space-x-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <span className='text-gray-700 font-light tracking-tight subpixel-antialiased'>
                Pets are people too
              </span>
            </li>
            <li className='flex space-x-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <span className='text-gray-700 font-light tracking-tight subpixel-antialiased'>
                15 Minute Sessions
              </span>
            </li>
            <li className='flex space-x-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <span className='text-gray-700 font-light tracking-tight subpixel-antialiased'>
              One Digital Portrait Per Session
              </span>
            </li>
            <li className='flex space-x-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <span className='text-gray-700 font-light tracking-tight subpixel-antialiased'>
              Monthly Themed Studio Sessions
              </span>
            </li>
            <li className='flex space-x-3 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <span className='text-gray-700 font-light tracking-tight subpixel-antialiased'>
                Your Session, Your Way
              </span>
            </li>
            <li className='flex space-x-3'>
            </li>
            <button type='button' className='subpixel-antialiased bg-teal-600 hover:bg-teal-700 text-white text-lg text-center font-medium py-2 px-4 rounded-lg w-7/12'>
              About Studio Days
            </button>
          </ul>
        </div>
        <div className='lg:w-3/12 rounded-lg overflow-hidden bg-amber-400 border-2 border-slate-700'>
          <h4 className='pb-4 text-gray-900 text-2xl tracking-tight font-bold p-6 md:p-7 xl:p-10'>
            <span className='text-indigo-600'>VIVA</span> City Days
          </h4>
          <div className='flex items-baseline text-white px-6 md:px-7 xl:px-10'>
            <span className='text-3xl font-semibold'>$</span>
            <span className='text-5xl font-extrabold tracking-tight subpixel-antialiased'>30</span>
            <span className='text-xl font-normal text-gray-700 subpixel-antialiased pl-1'>/per person</span>
          </div>
          <ul className='py-6 space-y-4 list-inside justify-center p-6 md:p-7 xl:p-10'>
            <li className='flex space-x-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <span className='text-gray-700 font-light tracking-tight subpixel-antialiased'>
                Pets are people too
              </span>
            </li>
            <li className='flex space-x-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <span className='text-gray-700 font-light tracking-tight subpixel-antialiased'>
                20 Minute Sessions
              </span>
            </li>
            <li className='flex space-x-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <span className='text-gray-700 font-light tracking-tight subpixel-antialiased'>
              Two Digital Portraits Per Session
              </span>
            </li>
            <li className='flex space-x-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <span className='text-gray-700 font-light tracking-tight subpixel-antialiased'>
              Monthly themed City Sessions
              </span>
            </li>
            <li className='flex space-x-3 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <span className='text-gray-700 font-light tracking-tight subpixel-antialiased'>
                Your Session, Your Way
              </span>
            </li>
            <li className='flex space-x-3'>
            </li>
            <button type='button' className='subpixel-antialiased bg-indigo-600 hover:bg-indigo-700 text-white text-lg text-center font-medium py-2 px-4 rounded-lg w-7/12'>
              About City Days
            </button>
          </ul>
        </div>
        <div className='lg:w-3/12 rounded-lg overflow-hidden bg-amber-400 border-2 border-slate-700'>
          <h4 className='pb-4 text-gray-900 text-2xl tracking-tight font-bold p-6 md:p-7 xl:p-10'>
          <span className='text-cyan-600'>VIVA</span> Small Business
          </h4>
          <div className='flex items-baseline text-white px-6 md:px-7 xl:px-10'>
            <span className='text-3xl font-semibold'>$</span>
            <span className='text-5xl font-extrabold tracking-tight subpixel-antialiased'>200</span>
            <span className='text-xl font-normal text-gray-700 subpixel-antialiased pl-1'>/per session</span>
          </div>
          <ul className='py-6 space-y-4 list-inside justify-center p-6 md:p-7 xl:p-10'>
            <li className='flex space-x-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <span className='text-gray-700 font-light tracking-tight subpixel-antialiased'>
                Create Content for your platform
              </span>
            </li>
            <li className='flex space-x-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <span className='text-gray-700 font-light tracking-tight subpixel-antialiased'>
                Headshots for your team
              </span>
            </li>
            <li className='flex space-x-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <span className='text-gray-700 font-light tracking-tight subpixel-antialiased'>
                Capture Team Events
              </span>
            </li>
            <li className='flex space-x-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <span className='text-gray-700 font-light tracking-tight subpixel-antialiased'>
              Pets are people too
              </span>
            </li>
            <li className='flex space-x-3 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <span className='text-gray-700 font-light tracking-tight subpixel-antialiased'>
                Your Session, Your Business, Your Way
              </span>
            </li>
            <li className='flex space-x-3'>
            </li>
            <button type='button' className='subpixel-antialiased bg-cyan-600 hover:bg-cyan-700 text-white text-lg text-center font-medium py-2 px-4 rounded-lg w-7/12'>
              Schedule a Session
            </button>
          </ul>
        </div>
      </div>
    </main>


      
    <Footer />
    </>
  );
}
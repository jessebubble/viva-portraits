import Nav from './components/navbar';
import Footer from './components/footer';
import { Link } from 'react-router-dom';
import './index.css';

export default function App() {
  return (
    <>
    <Nav />

    <main className="bg-slate-900">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full p-8 md:p-10 lg:p-16">
        <div className="">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-white">
            More Than Just A <span className="block text-fuchsia-500">Picture</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-white max-w-xl text-lg md:text-xl">
            We're a team of local creatives who are passionate about capturing your moments and bringing them to life 
          </p>
          <div className="mt-5 sm:mt-8 flex items-center justify-start">
            <div className='tracking-tight antialiased p-2 items-center text-center border border-white bg-transparent text-xl md:text-2xl font-light hover:bg-white'>
              <Link to="/community" className='text-white hover:text-gray-900 pl-2 pr-2'>
                Learn More 
              </Link>
            </div>
          </div>
        </div>
        <div className=''>
          <img 
            src='./studio2-unsplash.png'
            alt='VIVA Studio Days'
            className='w-64 md:w-80 opacity-80'
          />
        </div>
      </div>
    </main>

    <main className='bg-slate-900 bg-heroPattern p-6 md:p-10 md:pt-10 md:pb-10'>
      <div className='flex flex-row gap-4 items-center justify-evenly'>
        <div className='bg-lime-500 rounded-2xl'>
          <div className=''>
            <Link to='/pricing' className='hover:underline '>
              <img 
                src='../rene-muller-unsplash.png' 
                alt='headshot' 
                className='hover:rotate-6 lg:w-72 transform transition duration-500 ease-in-out'
              />
            </Link>
          </div>
        </div>
        <div className='rounded-2xl bg-yellow-500'>
          <div className=''>
            <Link to='/pricing' className='hover:underline '>
              <img 
                src='../texas-unsplash.png' 
                alt='headshot' 
                className='hover:rotate-6 lg:w-72 transform transition duration-500 ease-in-out'
              />           
            </Link>
          </div>
        </div>
        <div className='rounded-2xl bg-sky-500'>
          <div className=''>
            <Link to='/pricing' className='hover:underline '>
              <img 
                src='../jessica-felicio-unsplash.png' 
                alt='headshot' 
                className='hover:rotate-6 lg:w-72 transform transition duration-500 ease-in-out'
              />  
            </Link>
          </div>
        </div>
        <div className='rounded-2xl bg-rose-500'>
          <div className=''>
            <Link to='/pricing' className='hover:underline '>
              <img 
                src='../dog-unsplash.png' 
                alt='headshot' 
                className='hover:rotate-6 lg:w-72 transform transition duration-500 ease-in-out'
              /> 
            </Link>
          </div>
        </div>
      </div>
    </main>

    <main className='bg-slate-200 p-6 md:p-8 lg:p-16'>
      <div className='flex flex-col items-center justify-center'>
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 antialiased">
            More Than Just A <span className='text-indigo-600'>Moment</span>
          </h2>
          <p className="mt-1 max-w-2xl text-xl tracking-tight antialiased text-gray-900">
            Join us for a day of fun and creativity.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex flex-col items-center md:grid md:grid-cols-2 gap-6 md:gap-10">
            <div className=''>
              <div className=''>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Studio Days</p>
              </div>
              <div className="mt-1 ml-16 text-base tracking-tight antialiased text-gray-500">
                Once a month we take over the studio at <span className='text-indigo-600 font-medium'>Camera Exchange</span> and offer a full service studio experience. 
                Did we mention, $20 per person! 
              </div>
            </div>
            <div className=''>
              <div className=''>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                  City Days
                </p>
              </div>
              <div className="mt-1 ml-16 text-base tracking-tight antialiased text-gray-500">
                Once a month we explore the city and take over a spot for City Days. 
                Indoor | Outdoor, join us for the next City Days.
              </div>
            </div>
            <div className=''>
              <div className=''>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Small Business</p>
              </div>
              <div className="mt-1 ml-16 text-base tracking-tight antialiased text-gray-500">
                Corporate Portraits, Headshots, Team Events. We're ready to create content for your website, social medial and more. 
              </div>
            </div>            
            <div className=''>
              <div className=''>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Print</p>
              </div>
              <div className="mt-2 ml-16 text-base tracking-tight antialiased text-gray-500">
                We love our local community and we recommend <span className='text-indigo-600 font-medium'>Digital Pro Lab</span> for all of your printing options.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <main className='bg-slate-100'>
      <div className='flex flex-col md:flex-row md:flex-wrap gap-4 p-6 md:p-8 lg:p-16 items-center justify-evenly'>
        <div className='rounded-3xl bg-amber-400 border-2 border-slate-700'>
          <div>
          <h4 className='text-gray-900 text-2xl tracking-tight antialiased font-bold p-4 md:p-6 lg:p-8'>
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
              Monthly Themed Sessions
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
            <button type='button' className='antialiased bg-teal-600 hover:bg-teal-700 text-white text-lg text-center font-medium p-2 '>
              About Studio Days
            </button>
          </ul>
          </div>
        </div>
        <div className='rounded-3xl bg-amber-400 border-2 border-slate-700'>
          <h4 className='text-gray-900 text-2xl tracking-tight antialiased font-bold p-4 md:p-6 lg:p-8'>
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
              Monthly themed Sessions
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
            <button type='button' className='antialiased bg-indigo-600 hover:bg-indigo-700 text-white text-lg text-center font-medium p-2'>
              About City Days
            </button>
          </ul>
        </div>
        <div className='rounded-3xl bg-amber-400 border-2 border-slate-700'>
          <h4 className='pb-4 text-gray-900 text-2xl tracking-tight font-bold p-4 md:p-6 lg:p-8'>
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
                Your Business, Your Way
              </span>
            </li>
            <li className='flex space-x-3'>
            </li>
            <button type='button' className='antialiased bg-cyan-600 hover:bg-cyan-700 text-white text-lg text-center font-medium p-2'>
              Schedule a Session
            </button>
          </ul>
        </div>
      </div>
    </main>

    <main className="bg-slate-200">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly p-8 md:p-10 lg:p-16">
        <div className="w-full flex justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-gray-900">
            <span className="">Ready to VIVA?</span>
            <span className="block text-fuchsia-600">Reserve your next session.</span>
          </h1>
        </div>
        <div className='mt-10 w-full'>
          <div className='flex flex-col-reverse items-center gap-4 md:gap-8'>
            <form 
              className='flex flex-col gap-4 bg-transparent border-2 border-fuchsia-600 rounded-xl p-4 md:p-8 lg:p-16' 
              action='#' 
              method='POST' >
              <div> 
                <input 
                  name='firstname' 
                  id='firstname' 
                  placeholder='First and Last Name'
                  className='bg-transparent placeholder-slate-400 text-gray-900 border-b-2 border-fuchsia-600 text-lg p-2.5' 
                  required   
                />
              </div>
              <div>
                <input 
                  type='email' 
                  name='email' 
                  id='email' 
                  placeholder='Your Email'
                  className='bg-transparent placeholder-slate-400 text-gray-900 border-b-2 border-fuchsia-600 text-lg p-2.5' 
                  required />
              </div>
              <div>
                <select 
                  name='event' 
                  id='event' 
                  placeholder='Select an Event'
                  className='bg-transparent placeholder-slate-400 text-slate-400 border-b-2 border-fuchsia-600 text-lg p-2.5' 
                  required >
                  <option>Studio Days</option>
                  <option>City Days</option>
                  <option>Small Business</option>
                </select>
              </div>
              <button  
                className='tracking-tight antialiased p-2 items-center text-center border border-fuchsia-600 bg-transparent text-2xl md:text-xl font-light text-fuchsia-600 hover:bg-white'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>

    <Footer />
    </>
  );
}
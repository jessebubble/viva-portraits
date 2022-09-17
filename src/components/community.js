import Footer from './footer';
import Nav from './navbar';
import { Link } from 'react-router-dom';

export default function Community() {
  return (
    <>
    <Nav />
    <main className="bg-slate-100">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full p-8 md:p-10 lg:p-16">
        <div className="">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-gray-900">
            More Than Just A<span className="block text-sky-600">Community</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-gray-900 max-w-xl text-lg md:text-xl">
            We're a team of local creatives who are passionate about capturing your moments and bringing them to life 
          </p>
          <div className="mt-5 sm:mt-8 flex items-center justify-center lg:justify-start">
            <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-gray-900 bg-transparent text-xl md:text-2xl font-light hover:bg-whitek'>
              <Link to="/community" className='text-gray-900'>
                Learn More 
              </Link>
            </div>
          </div>
        </div>
        <div className=''>
          <img 
            src='./logo_transparent.png'
            alt='VIVA Studio Days'
            className='w-64 md:w-80 opacity-80'
          />
        </div>
      </div>
    </main>

    <main className="bg-slate-200">
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full p-8 md:p-10 lg:p-16">
        <div className=''>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-white">
            <span className="block text-gray-900">Camera Exchange</span>
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
    <main className="bg-slate-100">
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full p-8 md:p-10 lg:p-16">
        <div className=''>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-white">
            <span className="block text-gray-900">Digital Pro Lab</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-gray-900 max-w-xl text-lg md:text-xl">
            We love our local community and we recommend <span className='text-cyan-600 font-medium'>Digital Pro Lab</span> for all of your printing options.
          </p>
          <div className="mt-5 sm:mt-8 flex items-center justify-center lg:justify-start">
            <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-gray-900 bg-transparent text-xl md:text-2xl font-light hover:bg-white'>
              <Link to="/pricing" className='text-gray-900'>
                Reserve Your Spot 
              </Link>
            </div>
          </div>
        </div>
        <div className="">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-gray-900">
            <span className="block">Digital Pro Lab</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-gray-900 max-w-xl text-lg md:text-xl">
            We love our local community and we recommend <span className='text-cyan-600 font-medium'>Digital Pro Lab</span> for all of your printing options.
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
    <main className="bg-slate-200">
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full p-8 md:p-10 lg:p-16">
        <div className=''>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-white">
            <span className="block text-gray-900">VIVA Web Design</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-gray-900 max-w-xl text-lg md:text-xl">
            We love our local community and we recommend <span className='text-cyan-600 font-medium'>Digital Pro Lab</span> for all of your printing options.
          </p>
          <div className="mt-5 sm:mt-8 flex items-center justify-center lg:justify-start">
            <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-gray-900 bg-transparent text-xl md:text-2xl font-light hover:bg-white'>
              <Link to="/pricing" className='text-gray-900'>
                Reserve Your Spot 
              </Link>
            </div>
          </div>
        </div>
        <div className="">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-gray-900">
            <span className="block">VIVA Web Design</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-gray-900 max-w-xl text-lg md:text-xl">
            We love our local community and we recommend <span className='text-cyan-600 font-medium'>Digital Pro Lab</span> for all of your printing options.
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
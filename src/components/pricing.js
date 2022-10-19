import Nav from './navbar';
import Footer from './footer';
import Price from './pricecards';
import Form from './form';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <>
    <Nav />
    <Price />

    <main className="bg-slate-900 lg:pt-6 lg:pb-6 lg:-mb-20">
      <div className="flex flex-col lg:flex-row items-center justify-center p-8 md:p-10 lg:p-16">
        <div className="">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-white">
            More Than Just A <span className="block text-rose-500">Moment</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-white max-w-xl text-lg md:text-xl">
            We're a team of local creatives who are passionate about capturing your moments and bringing them to life.
            Join us for our next events. 
            <span className='text-teal-500'> Studio Days</span> | <span className='text-cyan-500'>City Days</span> 
          </p>
          <div className="mt-5 sm:mt-8 flex items-center justify-start">
            <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-white bg-transparent rounded text-xl md:text-2xl font-light hover:bg-slate-200 hover:border-black'>
              <Link to="/contact" className='text-white hover:text-gray-900'>
                Reserve Your Session 
              </Link>
            </div>
          </div>
        </div>
        <div className=''>
          <img 
            src='./studio-unsplash.png'
            alt='VIVA Studio Days'
            className='w-64 md:w-80 opacity-80'
          />
        </div>
      </div>
    </main>

    <Form />
    <Footer />
    </>
  );
}
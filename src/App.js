import Nav from './components/navbar';
import Footer from './components/footer';
import Price from './components/pricecards';
import Form from './components/form';
import { Link } from 'react-router-dom';
import './index.css';

export default function App() {
  return (
    <>
    <Nav />

    <main className="bg-slate-900 lg:pt-6 lg:pb-6">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full p-8 md:p-10 lg:p-16">
        <div className="">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-white">
            More Than Just A <span className="block text-teal-500">Picture</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-white max-w-xl text-lg md:text-xl">
            We're a team of local creatives who are passionate about capturing your moments and bringing them to life 
          </p>
          <div className="mt-5 sm:mt-8 flex items-center justify-start">
            <div className='tracking-tight antialiased p-2 items-center text-center border border-white bg-transparent rounded text-xl md:text-2xl font-light hover:bg-cyan-400'>
              <Link to="/pricing" className='text-white pl-2 pr-2'>
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

    <main className="relative bg-white py-16">
      <div className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block" aria-hidden="true"></div>
      <div className="mx-auto max-w-7xl bg-indigo-600 lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
            <div className="absolute inset-x-0 h-1/2 bg-white lg:hidden" aria-hidden="true"></div>
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="aspect-w-6 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <img 
                  className="rounded-3xl object-cover object-center shadow-2xl" 
                  src="./balloon.jpg" 
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="relative bg-amber-400 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
            <div className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
              <svg className="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                <defs>
                  <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-teal-600" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
              <svg className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                <defs>
                  <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-teal-600" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
              <h2 className="text-3xl font-bold tracking-tight text-white" id="join-heading">
                <span className='text-teal-600'>VIVA</span> Community
              </h2>
              <p className="text-lg text-white lg:w-3/4">
                Our monthly themed events open the door for us to explore the community. Join us at our next monthly themed session.
              </p>
              <a href="/community" className="block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-teal-600 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto">Explore the community</a>
            </div>
          </div>
        </div>
      </div>
    </main>

    <main className="bg-white">
      {/* <!-- Header --> */}
      <div className="relative bg-slate-800 pb-32">
        <div className="absolute inset-0">
          <img 
            className="h-full w-full object-cover" 
            src="./lib.jpg" 
            alt=""
          />
          <div className="absolute inset-0 bg-fuchsia-600 mix-blend-multiply" aria-hidden="true"></div>
        </div>
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">VIVA Portraits</h1>
              <p className="mt-6 max-w-3xl text-xl text-gray-300">
                Join us at our next monthly themed portrait session
              </p>
          </div>
        </div>
        {/* <!-- Overlapping cards --> */}
        <section className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
          <h2 className="sr-only" id="contact-heading">Learn more</h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            <div className="flex flex-col rounded-2xl bg-white shadow-xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-purple-700 p-5 shadow-lg">
                  {/* <!-- Heroicon name: outline/phone --> */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Studio Days</h3>
                <p className="mt-4 text-base text-gray-500">
                  Monthly Themed events inside the portrait studio at Camera Exchange.Join us at the next Studio Day.
                </p>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                <a href="/pricing" className="text-base font-medium text-gray-700 hover:text-indigo-400">Learn more<span aria-hidden="true"> &rarr;</span></a>
              </div>
            </div>
            <div className="flex flex-col rounded-2xl bg-white shadow-xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-purple-700 p-5 shadow-lg">
                  {/* <!-- Heroicon name: outline/lifebuoy --> */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">City Days</h3>
                <p className="mt-4 text-base text-gray-500">
                  Monthly themed events that explore the beautiful city of San Antonio. Join us at the next City Day.
                </p>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                <a href="/pricing" className="text-base font-medium text-gray-700 hover:text-indigo-400">Learn more<span aria-hidden="true"> &rarr;</span></a>
              </div>
            </div>
            <div className="flex flex-col rounded-2xl bg-white shadow-xl">
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-purple-700 p-5 shadow-lg">
                  {/* <!-- Heroicon name: outline/newspaper --> */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Small Business</h3>
                <p className="mt-4 text-base text-gray-500">
                  From team portraits to creating photo and video content for your website and social platforms. 
                </p>
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                <a href="/pricing" className="text-base font-medium text-purple-700 hover:text-indigo-400">Learn More<span aria-hidden="true"> &rarr;</span></a>
              </div>
            </div>
          </div>
        </section>
    </main>

    <Price />
    <Form />
    <Footer />
    </>
  );
}
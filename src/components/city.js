import Footer from './footer';
import Nav from './navbar';
import Form from './form';

export default function City() {
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
            Join us for our next <span className='text-cyan-500'> City Days</span> event exploring the alamo city.
          </p>
          <div className="mt-5 sm:mt-8 flex items-center justify-start">
            <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-white bg-transparent rounded text-xl md:text-2xl font-light hover:bg-white hover:border-black'>
              <a href to="/contact" className='text-white hover:text-gray-900'>
                Reserve Your Session 
              </a>
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

    

    <main className="relative bg-gray-800 lg:mb-1">
      <div className="h-56 bg-lime-400 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img 
          className="h-full w-full object-cover" 
          src="./rene-muller-unsplash.png" 
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-lg font-semibold text-gray-300"> San Antonio's photography store</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Camera Exchange</p>
          <p className="mt-3 text-lg text-gray-300">
            The Camera Exchange is San Antonio's photography store. They're a local, family-owned business specializing in photography for over 45 years.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a href="https://camerax.com/" className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                Visit Camera Exchange
                {/* <!-- Heroicon name: mini/arrow-top-right-on-square --> */}
                <svg className="-mr-1 ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
                  <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <main className="relative bg-gray-800 lg:mb-1">
      <div className="h-56 bg-fuchsia-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img 
          className="h-full w-full object-cover" 
          src="./balloon.jpg" 
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-lg font-semibold text-gray-300">Where photo takers become print makers </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Digital Pro Lab</p>
          <p className="mt-3 text-lg text-gray-300">
            Digital Pro Lab has been in business since 1993, providing quality printing and photo services for a vast community of photo takers and their clients.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a href="https://www.digitalprolab.com/" className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                Visit Digital Pro Lab
                {/* <!-- Heroicon name: mini/arrow-top-right-on-square --> */}
                <svg className="-mr-1 ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
                  <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>

    <main className="relative bg-gray-800 lg:mb-1">
      <div className="h-56 bg-rose-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img 
          className="h-full w-full object-cover" 
          src="./passion-unsplash.jpg" 
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-lg font-semibold text-gray-300">Independent doesn't mean alone </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">VIVA Web Design</p>
          <p className="mt-3 text-lg text-gray-300">
            We're a team of independent creatives, designers and developers who are passionate about helping our community continue to grow.
            <span className='block text-rose-600'>Hablamos español.</span>
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a href="https://www.vivawebdesign.dev/" className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                Visit VIVA Web Design
                {/* <!-- Heroicon name: mini/arrow-top-right-on-square --> */}
                <svg className="-mr-1 ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
                  <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Form />
    <Footer />
    </>
  );
}
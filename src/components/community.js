import Footer from './footer';
import Nav from './navbar';
import Form from './form';

export default function Community() {
  return (
    <>
    <Nav />

    <main className="relative bg-white py-16">
      <div className="absolute inset-x-0 top-0 hidden h-1/2 bg-slate-900 lg:block" aria-hidden="true"></div>
      <div className="mx-auto max-w-7xl bg-indigo-600 lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
            <div className="absolute inset-x-0 h-1/2 bg-white -mt-1 md:mt-0 lg:hidden" aria-hidden="true"></div>
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="aspect-w-6 aspect-h-6 sm:aspect-w-2 sm:aspect-h-2 lg:aspect-h-1 lg:aspect-w-1">
                <img 
                  className="rounded-3xl object-cover object-center shadow-xl md:shadow-2xl" 
                  src="./dog-unsplash.png" 
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
                    <rect x="0" y="0" width="4" height="4" className="text-indigo-500" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
              <svg className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                <defs>
                  <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-indigo-500" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
              <h2 className="text-3xl font-bold tracking-tight text-white" id="join-heading">
                <span className='text-indigo-600'>VIVA</span> Community
              </h2>
              <p className="text-lg text-white lg:w-4/6">
                We're a team of local creatives who are passionate about capturing your moments and bringing them to life.
              </p>
              <a href="/community" className="block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-indigo-700 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto">Explore the community</a>
            </div>
          </div>
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
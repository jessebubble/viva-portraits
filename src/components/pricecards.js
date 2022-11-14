export default function Price() {
    return (
        <>
        <main className="bg-slate-900">
            <div className="pt-12 sm:pt-16">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl space-y-2 lg:max-w-none">
                        <h2 className="text-xl font-semibold leading-6 text-gray-300">Pricing</h2>
                        <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            More Than Just A Memory
                        </p>
                        <p className="text-xl text-gray-300">
                            Join us at our next monthly event.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8 bg-gray-50 pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
                <div className="relative">
                    <div className="absolute inset-0 h-3/4 bg-gray-900"></div>
                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-md space-y-4 lg:grid lg:max-w-5xl lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                <div className="bg-white px-6 py-8 sm:p-10 sm:pb-6">
                                    <div>
                                        <h3 className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-base font-semibold text-indigo-600" id="tier-standard">Studio Days</h3>
                                    </div>
                                    <div className="mt-4 flex items-baseline text-6xl font-bold tracking-tight">
                                        $20
                                        <span className="ml-1 text-2xl font-medium tracking-normal text-gray-500">/per person</span>
                                    </div>
                                    <p className="mt-5 text-lg text-gray-500">Monthly Themed events inside the portrait studio at Camera Exchange.</p>
                                </div>
                                <div className="flex flex-1 flex-col justify-between space-y-6 bg-gray-50 px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
                                    <div role="list" className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0">
                                                {/* <!-- Heroicon name: outline/check --> */}
                                                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-base text-gray-700">Pets are welcomed!</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0">
                                                {/* <!-- Heroicon name: outline/check --> */}
                                                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-base text-gray-700">15 minute sessions </p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0">
                                                {/* <!-- Heroicon name: outline/check --> */}
                                                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-base text-gray-700">Two digital portraits per session</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0">
                                                {/* <!-- Heroicon name: outline/check --> */}
                                                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-base text-gray-700">Monthly themed portraits</p>
                                        </li>
                                    </div>
                                    <div className="rounded-md shadow">
                                        <a href="/contact" className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900" aria-describedby="tier-standard">Get started</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                <div className="bg-white px-6 py-8 sm:p-10 sm:pb-6">
                                    <div>
                                        <h3 className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-base font-semibold text-indigo-600" id="tier-standard">City Days</h3>
                                    </div>
                                    <div className="mt-4 flex items-baseline text-6xl font-bold tracking-tight">
                                        $30
                                        <span className="ml-1 text-2xl font-medium tracking-normal text-gray-500">/per person</span>
                                    </div>
                                    <p className="mt-5 text-lg text-gray-500">
                                        Monthly themed events that explore the beautiful city of San Antonio.
                                    </p>
                                </div>
                                <div className="flex flex-1 flex-col justify-between space-y-6 bg-gray-50 px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
                                    <div role="list" className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0">
                                                {/* <!-- Heroicon name: outline/check --> */}
                                                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-base text-gray-700">Pets are people too</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0">
                                                {/* <!-- Heroicon name: outline/check --> */}
                                                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-base text-gray-700">20 minute sessions</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0">
                                                {/* <!-- Heroicon name: outline/check --> */}
                                                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-base text-gray-700">Two digital portraits per session</p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0">
                                                {/* <!-- Heroicon name: outline/check --> */}
                                                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-base text-gray-700">Indoor and outdoor settings</p>
                                        </li>
                                    </div>
                                    <div className="rounded-md shadow">
                                        <a href="/contact" className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900" aria-describedby="tier-standard">Get started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:mt-5 lg:px-8">
                    <div className="mx-auto max-w-md lg:max-w-5xl">
                        <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                            <div className="flex-1">
                                <div>
                                    <h3 className="inline-flex rounded-full bg-white px-4 py-1 text-base font-semibold text-gray-800">Community</h3>
                                </div>
                                <div className="mt-4 text-lg text-gray-600">
                                    We love our community and when it comes to bringing our high quality digital portraits to life no one does it better than the creative team at <span className="font-semibold text-gray-900">Digital Pro Lab</span>.  
                                </div>
                            </div>
                            <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                                <a href="/community" className="flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <main className="bg-gray-100">
            <div className="pt-12 sm:pt-16 lg:pt-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            <span className='text-indigo-500'>VIVA</span> Small Business</h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Let our team of local creatives help bring your ideas to life.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
                <div className="relative">
                    <div className="absolute inset-0 h-1/2 bg-gray-100"></div>
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
                            <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">More Than Just A Picture</h3>
                                <p className="mt-6 text-base text-gray-500">
                                    From team portraits to creating photo and video content for your website and social platforms. 
                                    We have the team and the tools to help you bring your ideas to life.
                                </p>
                                <div className="mt-8">
                                    <div className="flex items-center">
                                        <h4 className="flex-shrink-0 bg-white pr-4 text-base font-semibold text-gray-500">What's included</h4>
                                        <div className="flex-1 border-t-2 border-gray-200"></div>
                                    </div>
                                    <div role="list" className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0">
                                        <li className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0">
                                                {/* <!-- Heroicon name: mini/check-circle --> */}
                                                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-sm text-gray-700">Company Portraits</p>
                                        </li>
                                        <li className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0">
                                                {/* <!-- Heroicon name: mini/check-circle --> */}
                                                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-sm text-gray-700">Content Creation</p>
                                        </li>
                                        <li className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0">
                                                {/* <!-- Heroicon name: mini/check-circle --> */}
                                                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-sm text-gray-700">Team Events</p>
                                        </li>
                                        <li className="flex items-start lg:col-span-1">
                                            <div className="flex-shrink-0">
                                                {/* <!-- Heroicon name: mini/check-circle --> */}
                                                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                            <p className="ml-3 text-sm text-gray-700">Video Sessions</p>
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                                <p className="text-lg font-medium leading-6 text-gray-900">Your Business, Your Way</p>
                                <div className="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900">
                                    <span>$349</span>
                                    <span className="ml-3 text-xl font-medium tracking-normal text-gray-500">USD</span>
                                </div>                     
                                <div className="mt-6">
                                    <div className="rounded-md shadow">
                                        <a href="/contact" className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-5 py-3 text-base font-medium text-white hover:bg-gray-900">Get Started</a>
                                    </div>
                                </div>                         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hxrxpdb', 'template_p9czz9g', form.current, 'Vg9DbywednMl26hQU')
            .then((result) => {
                    console.log(result.text);
                },(error) => {
                    console.log(error.text);
                });
                e.target.reset();
    };

    return (
        <main className="bg-gray-100">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="relative bg-white shadow-xl">
                    <h2 className="sr-only">Contact us</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        {/* <!-- Contact information --> */}
                        <div className="relative overflow-hidden bg-slate-500 py-10 px-6 sm:px-10 xl:p-12">
                            <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
                                <svg className="absolute inset-0 h-full w-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1" />
                                    <defs>
                                        <linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#fff"></stop>
                                        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden" aria-hidden="true">
                                <svg className="absolute inset-0 h-full w-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1" />
                                    <defs>
                                        <linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#fff"></stop>
                                        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block" aria-hidden="true">
                                <svg className="absolute inset-0 h-full w-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1" />
                                    <defs>
                                        <linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#fff"></stop>
                                        <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-white">
                                Contact us
                            </h3>
                            <p className="mt-6 max-w-3xl text-base text-indigo-50">
                                Questions about Studio Days, City Days and Small Business sessions? Send us a message and our team will get back to you as soon as possible.
                            </p>
                            <div className=''>
                                <img 
                                    src='./vplogo.png'
                                    alt='VIVA Studio Days'
                                    className='lg:w-72'
                                />
                            </div>
                        </div>
                        {/* <!-- Contact form --> */}
                        <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                            <h3 className="text-lg font-medium text-gray-900">
                                Send us a message
                            </h3>
                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                action="#" 
                                method="POST" 
                                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-900">First name</label>
                                    <div className="mt-1">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            id="name" 
                                            autoComplete="name" 
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-900">Last name</label>
                                    <div className="mt-1">
                                        <input 
                                            type="text" 
                                            name="name" id="name" 
                                            autoComplete="name" 
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                                        <div className="mt-1">
                                            <input 
                                                id="email" 
                                                name="email" 
                                                type="email" 
                                                autoComplete="email" 
                                                className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                        </div>
                                </div>
                                <div>
                                    <div className="flex justify-between">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900">Phone</label>
                                        <span id="phone-optional" className="text-sm text-gray-500">Optional</span>
                                    </div>
                                    <div className="mt-1">
                                        <input 
                                            type="text" 
                                            name="phone" 
                                            id="phone" 
                                            autoComplete="tel" 
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" 
                                            aria-describedby="phone-optional"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-900">Subject</label>
                                    <div className="mt-1">
                                        <input 
                                            type="text" 
                                            name="subject" 
                                            id="subject" 
                                            className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-900">Message</label>
                                        <span id="message-max" className="text-sm text-gray-500">Max. 500 characters</span>
                                    </div>
                                    <div className="mt-1">
                                        <textarea id="message" name="message" rows="4" className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" aria-describedby="message-max"></textarea>
                                    </div>
                                </div>
                                <div className="sm:col-span-2 sm:flex sm:justify-end">
                                    <button type="submit" className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-slate-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}
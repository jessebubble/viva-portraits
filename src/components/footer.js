import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <>
        <footer className='bg-slate-900'> 
          <div className='flex flex-row flex-wrap gap-8 md:gap-0 items-center justify-start md:justify-evenly p-8 md:p-5 '>
           {/*  <div>
              <Link to='/'>
              <img src='./logo_transparent.png' alt='logo' className='h-52'/>
              </Link>
            </div> */}
            <div className='flex flex-col'>
              <h2 className='pb-2 md:pb-3 text-md md:text-lg font-medium text-indigo-600 uppercase tracking-tight antialiased'>
                VIVA Portraits
              </h2>
              <ul className='text-white tracking-tight antialiased'>
                <li className='pb-2 md:pb-3'>
                  <Link to='/community' className='hover:underline'>Community</Link>
                </li>
                <li className='pb-2 md:pb-3'>
                  <Link to='/contact' className='hover:underline'>Contact Us</Link>
                </li>
                <li className='pb-2 md:pb-3'>
                  <Link to='/pricing' className='hover:underline'>Pricing</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='pb-2 md:pb-3 text-md font-medium text-indigo-600 uppercase tracking-tight antialiased'>
                Community
              </h2>
              <ul className='text-white tracking-tight antialiased'>
                <li className='pb-2 md:pb-3'>
                  <Link to='/' className='hover:underline'>Camera Exchange</Link>
                </li>
                <li className='pb-2 md:pb-3'>
                  <Link to='/' className='hover:underline'>Digital PRO Lab</Link>
                </li>
                <li className='pb-2 md:pb-3'>
                  <Link to='/' className='hover:underline'>VIVA Web Design</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='pb-2 md:pb-3 text-md font-medium text-indigo-600 uppercase tracking-tight antialiased'>
              Follow Us
              </h2>
              <ul className='text-white tracking-tight antialiased'>
                <li className='pb-2 md:pb-3'>
                  <Link to='/' className='hover:underline'>Facebook</Link>
                </li>
                <li className='pb-2 md:pb-3'>
                  <Link to='/' className='hover:underline'>Instagram</Link>
                </li>
                <li className='pb-2 md:pb-3'>
                  <Link to='/' className='hover:underline'>Twitter</Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <div className='bg-slate-900 border-t border-slate-100 p-4'>
          <div className='flex items-center justify-between'>
            <span className='text-sm tracking-tighter text-slate-600'>
              © 2022 vivawebdesign.dev
            </span>
            <div className='flex space-x-2'>
              <IconContext.Provider 
                value={{ className: 'text-slate-600 hover:text-rose-400 h-6 w-8' }}>
                <Link to='/' className='hover:underline'>
                  < FiInstagram/>
                </Link>
                <Link to='/' className='hover:underline'>
                  < FiFacebook/>
                </Link>
                <Link to='/' className='hover:underline'>
                  < FiTwitter/>
                </Link>
              </IconContext.Provider>
            </div>
          </div>
        </div>
        </>
    );
}



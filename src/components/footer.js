import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <>
        <footer className='bg-slate-300'> 
          <div className='flex flex-wrap items-center justify-evenly p-4'>
            <div>
              <Link to='/'>
              <img src='./logo_transparent.png' alt='logo' className='h-52'/>
              </Link>
            </div>
            <div className=''>
              <h2 className='pb-2 lg:pb-4 text-md font-medium text-indigo-600 uppercase tracking-tight antialiased'>
                VIVA Portraits
              </h2>
              <ul className='text-slate-600 tracking-tight antialiased'>
                <li className='pb-2 lg:pb-4'>
                  <Link to='/about' className='hover:underline'>About</Link>
                </li>
                <li className='pb-2 lg:pb-4'>
                  <Link to='/pricing' className='hover:underline'>Pricing</Link>
                </li>
                <li className='pb-2 lg:pb-4'>
                  <Link to='/contact' className='hover:underline'>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='pb-2 lg:pb-4 text-md font-medium text-indigo-600 uppercase tracking-tight antialiased'>
                Community
              </h2>
              <ul className='text-slate-600 tracking-tight antialiased'>
                <li className='pb-2 lg:pb-4'>
                  <Link to='/' className='hover:underline'>Digital PRO Lab</Link>
                </li>
                <li className='pb-2 lg:pb-4'>
                  <Link to='/' className='hover:underline'>Camera Exchange</Link>
                </li>
                <li className='pb-2 lg:pb-4'>
                  <Link to='/' className='hover:underline'>VIVA Web Design</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='pb-2 lg:pb-4 text-md font-medium text-indigo-600 uppercase tracking-tight antialiased'>
              Follow Us
              </h2>
              <ul className='text-slate-600 tracking-tight antialiased'>
                <li className='pb-2 lg:pb-4'>
                  <Link to='/' className='hover:underline'>Instagram</Link>
                </li>
                <li className='pb-2 lg:pb-4'>
                  <Link to='/' className='hover:underline'>Facebook</Link>
                </li>
                <li className='pb-2 lg:pb-4'>
                  <Link to='/' className='hover:underline'>Twitter</Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <div className='bg-slate-300 border-t border-slate-100 pl-4 pr-4 pt-2 pb-2'>
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



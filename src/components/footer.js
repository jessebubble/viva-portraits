import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../vivaportraits.svg'

export default function Footer() {
  let year = new Date().getFullYear();

    return (
        <>
        <footer className='bg-slate-900'> 
          <div className='flex flex-row flex-wrap gap-8 md:gap-0 items-center justify-center md:justify-evenly p-8 md:p-5 '>
            <div className='-mb-10 -mt-10 md:-mb-0 md:mt-0'>
              <Logo className='w-80 md:w-96 lg:w-40 h-full'/>  
            </div>
            <div className='flex flex-col'>
              <h2 className='pb-2 md:pb-3 text-md md:text-lg font-medium text-slate-500 uppercase tracking-tight antialiased'>
                VIVA Portraits
              </h2>
              <ul className='text-white tracking-tight antialiased'>
                <li className='pb-2 md:pb-3'>
                  <Link to='/community' className='hover:underline'>Studio Days</Link>
                </li>
                <li className='pb-2 md:pb-3'>
                  <Link to='/contact' className='hover:underline'>City Days</Link>
                </li>
                <li className='pb-2 md:pb-3'>
                  <Link to='/pricing' className='hover:underline'>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='pb-2 md:pb-3 text-md font-medium text-slate-500 uppercase tracking-tight antialiased'>
                Community
              </h2>
              <ul className='text-white tracking-tight antialiased'>
                <li className='pb-2 md:pb-3'>
                  <Link to='https://camerax.com/' className='hover:underline'>Camera Exchange</Link>
                </li>
                <li className='pb-2 md:pb-3'>
                  <Link to='https://www.digitalprolab.com/' className='hover:underline'>Digital PRO Lab</Link>
                </li>
                <li className='pb-2 md:pb-3'>
                  <Link to='https://www.vivawebdesign.dev/' className='hover:underline'>VIVA Web Design</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h2 className='pb-2 md:pb-3 text-md font-medium text-slate-500 uppercase tracking-tight antialiased'>
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
        <div className='bg-slate-900 border-t border-slate-100 pb-3 pt-3 p-10'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <span className='text-sm tracking-tighter text-slate-500 mb-2'>
              © {year} Viva Portraits | website built by viva web design
            </span>
            <div className='flex space-x-2'>
              <IconContext.Provider 
                value={{ className: 'text-slate-500 hover:text-indigo-500 h-6 w-6' }}>
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



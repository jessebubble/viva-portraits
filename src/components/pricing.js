import Nav from './navbar';
import Footer from './footer';
import { Player } from '@lottiefiles/react-lottie-player';

export default function App() {
  return (
    <>
    <Nav />
  
    <main className='bg-slate-900'>
      <div className='pt-1 pb-1 flex flex-row items-center justify-evenly'>
        <div className='lg:w-1/12'>
          <Player
            src='https://assets8.lottiefiles.com/packages/lf20_seidgi4z.json'
            className=''
            background='transparent'
            loop={true}
            autoplay={true} >
          </Player>
        </div>
        <div className='lg:w-1/12'>
          <Player
            src='https://assets8.lottiefiles.com/packages/lf20_seidgi4z.json'
            className=''
            background='transparent'
            loop={true}
            autoplay={true} >
          </Player>
        </div>
        <div className='lg:w-1/12'>
          <Player
            src='https://assets8.lottiefiles.com/packages/lf20_seidgi4z.json'
            className=''
            background='transparent'
            loop={true}
            autoplay={true} >
          </Player>
        </div>
      </div>
    </main>
    
    <Footer />
    </>
  );
}
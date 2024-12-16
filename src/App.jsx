import React from 'react'
import Header from './components/Header'
import { Img, Main } from './assets/assets'

const App = () => {
  return (
    <div className='w-full h-screen relative'>
      <Header />
      <video autoPlay loop src={Main} className='w-full h-full object-cover' />
      <div className='w-1/3 flex flex-col items-center gap-[40px] h-[65%] absolute text-white bottom-0 left-10 '>
        <h1 className='text-4xl font-semibold leading-[1.4] text-center'>
          12 days of magical deals! <br />
          Day 11: 20% off House <br />
          Quidditch jumpers
        </h1>
        <button className='py-3 px-8 rounded-md   bg-[#AE0003] hover:bg-[#fe3c40] transition-colors duration-500 '>Read More</button>
      </div>
      <div className='w-2/4 h-[70%] absolute bottom-0 right-20 '>
        <img src={Img} alt="logo" className='w-full h-full' />
      </div>
    </div>
  )
}

export default App
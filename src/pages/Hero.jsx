import React from 'react'
import Imagecourse11 from '../assets/images/Rectangle 13.png'
export const Hero = () => {
  return (
    <div>
         <div className="w-[1440px] h-[1024px] relative">
    
    <div className="w-[1440px] h-[1024px] left-0 top-0  bg-gradient-to-r from-stone-500 to-stone-900 relative">
    <img className="w-[1440px] h-[1024px] left-0 top-0 absolute" src={Imagecourse11}alt="raj" />
    </div>
    <div className="w-[375px] h-7 left-[80px] top-[39px] absolute justify-start items-start gap-20 inline-flex">
        <div className="text-white text-2xl font-medium font-['Ubuntu'] capitalize">Home</div>
        <div className="text-white text-2xl font-medium font-['Ubuntu'] capitalize">About</div>
        <div className="text-white text-2xl font-medium font-['Ubuntu'] capitalize">Course</div>
    </div>
    <div className="left-[709px] top-[37px] absolute text-white text-[28px] font-bold font-['Ubuntu'] capitalize">Smart Academy</div>
    <div className="w-[206px] h-[55px] px-8 py-4 left-[1164px] top-[26px] absolute bg-pink-500 rounded-[100px] justify-center items-center inline-flex">
        <div className="text-center text-white text-xl font-medium font-['Ubuntu'] capitalize">Explore Course</div>
    </div>
    <div className="w-[990px] h-[415px] left-[70px] top-[281px] absolute flex-col justify-start items-start gap-16 inline-flex">
        <div className="flex-col justify-center items-start gap-6 flex">
            <div className="w-[990px] text-white text-8xl font-bold font-['Ubuntu']">Achieve your future<br/>With Smart Academy</div>
            <div className="w-[770px] text-white text-xl font-normal font-['Mulish']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique sem ut lacinia pellentesque. Donec in nulla faucibus, tincidunt velit vel, ultricies dolor.</div>
        </div>
        <div className="px-8 py-4 bg-pink-500 rounded-[100px] justify-center items-center inline-flex">
            <div className="text-center text-white text-xl font-normal font-['Mulish']">Explore Course</div>
        </div>
    </div>
</div>
    </div>
  )
}
export default Hero

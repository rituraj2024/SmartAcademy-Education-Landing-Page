import React from 'react'
import CTAButton from '../component/HomePage/Button'
//import Aboutimage from '../assets/images/Aboutimage.png'
import Aboutboysimage from '../assets/images/Rectangle 10.png'
export const About = () => {
  return (
    <div className="w-[1300px] h-[648px] top-[150px] relative  " >
         <div className="w-[1300px] h-[648px]top-[200px]  mx-auto flex flex-row relative">
    <div>
      <div className="w-[421px] h-[648px] left-[385px] top-0 absolute
       bg-pink-500 rounded-tl-[210.50px] rounded-tr-[210.50px] rounded-bl-[50px] rounded-br-[50px]">
    <img className="w-[357px] h-[548px] left-[20px] top-[100px] absolute rounded-tl-[210.50px] 
    rounded-tr-[210.50px] rounded-bl-[50px] rounded-br-[50px]" src={Aboutboysimage} alt="raj"/>
    </div>
      </div>
    <div>
        <div className="w-[310px] h-[353px] left-0 top-[92px] absolute flex-col justify-center items-start gap-14 inline-flex">
                <div className="w-[310px] text-sky-600 text-[64px] font-medium font-['Ubuntu']">Welcome to Smart Academy</div>
                <div className="w-[310px] text-neutral-700 text-xl font-normal font-['Mulish']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor</div>
          </div>
        
            <div>
              <CTAButton/>
            </div>
        </div>
      
      <div>
      <div className="w-[420px] h-[140px] left-[880px] top-[172px] absolute flex-col justify-start items-start gap-6 inline-flex">
        <div className="text-center text-sky-600 text-4xl font-medium font-['Ubuntu'] capitalize">our mission</div>
        <div className="w-[409px] text-neutral-700 text-xl font-normal font-['Mulish']">Lorem ipsum dolor sit amet, consectetur elit. Etiam condimentum leo sed nisi vehicula, fringilla ante tincidunt. Sed sit amet </div>
    </div>
      <div className="w-[420px] h-[99px] left-[880px] top-[392px] flex flex-row absolute justify-between items-start ">
              <div className="w-[110px] h-[99px] flex-col justify-between items-start flex">
                  <div className="self-stretch text-center text-sky-600 text-4xl font-medium font-['Ubuntu'] capitalize">10+</div>
                  <div className="self-stretch text-center text-neutral-700 text-xl font-normal font-['Mulish']">Years Experience</div>
              </div>
              <div className="w-[110px] h-[99px] flex-col justify-between items-start flex ">
                  <div className="self-stretch text-center text-sky-600 text-4xl font-medium font-['Ubuntu'] capitalize">29+</div>
                  <div className="self-stretch text-center text-neutral-700 text-xl font-normal font-['Mulish']">Total Course</div>
              </div>
              <div className="w-[110px] h-[99px] flex-col justify-between items-start flex">
                  <div className="self-stretch text-center text-sky-600 text-4xl font-medium font-['Ubuntu'] capitalize">50K+</div>
                  <div className="self-stretch text-center text-neutral-700 text-xl font-normal font-['Mulish']">Student Active</div>
              </div>
          </div>
      </div>
    </div>
       
    </div>
  )
}
export default About
import React from 'react'
import teachingicon from '../../assets/images/Icon.svg'
import CTAButton from "../component/HomePage/Button"
export const Servicecard = () => {
  return (
    

    <div  className='flex flex-row items-center   mx-auto space-between-evenly'>
        <div className='flex flex-col justify-center items-center w-[282.14px] h-[391.39px] bg-white rounded-[25px]'>
        
        <div className='flex relative top-[-30px]'>
        <img src={teachingicon} alt="raj"/>
        </div>
        <div className=" 
         text-neutral-700 text-2xl font-medium font-['Ubuntu'] ">Teachers<br/>Prefesional</div>
        <div className="w-[193.97px] h-[74.93px] left-[43.99px] top-[270.35px]
          absolute text-center text-neutral-700 text-xl font-normal font-['Mulish']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
     </div>

     <div className='flex flex-col justify-center items-center w-[282.14px] h-[391.39px] bg-white rounded-[25px]'>
        
        <div className='flex relative top-[-30px]'>
        <img src={teachingicon} alt="raj"/>
        </div>
        <div className=" 
         text-neutral-700 text-2xl font-medium font-['Ubuntu']">Teachers<br/>Prefesional</div>
        <div className="w-[193.97px] h-[74.93px] left-[43.99px] top-[270.35px]
          absolute text-center text-neutral-700 text-xl font-normal font-['Mulish']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
     </div>

     
    </div>
    
  )
}

export default Servicecard

import React from 'react'

export const Calltoaction = () => {
  return (
    <div>
           <div className="w-[1440px] h-[696px] top-[600px] relative">
    <div className="w-[1440px] h-[696px] left-0 top-0 absolute bg-pink-500" />
    <div className="w-[1029px] h-[349px] left-[198px] top-[172px] absolute">
        {/* <div className="" /> */}
        <div className="w-[1029px] left-0 top-0 absolute text-center text-white text-[64px] font-medium font-['Ubuntu']">Ignite Your Child's Potential Take the Leap with an Online Course</div>
        <input type="email" class="email-box w-[648px] h-[85px] left-[65px] top-[264px] absolute bg-white rounded-[100px]  text-neutral-700 text-xl font-medium font-['Mulish'] text-center" placeholder="Enter your email" />
         {/* <div className="w-[217px] left-[133px] top-[294px] absolute text-neutral-700 text-xl font-medium font-['Mulish']">
        <input type="email" class="email-box" placeholder="Enter your email" /></div> */}
        <div className="w-[203px] h-[85px] left-[769px] top-[264px] absolute">
            <div className="w-[203px] h-[85px] left-0 top-0 absolute bg-sky-600 rounded-[100px]" />
            <div className="w-[133px] left-[35px] top-[29px] absolute text-center text-white text-2xl font-medium font-['Ubuntu']">Subscribe</div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Calltoaction
import React from 'react'
import { BsBehance,BsInstagram,BsFacebook,BsDribbble } from "react-icons/bs"

export const Contactus = () => {
  return (
    <div>
            <div className="w-[1440px] h-[598px] top-[500px] relative">
    <div className="w-[1440px] h-[598px] left-0 top-0 absolute bg-sky-600" />
    <div className="w-[1301px] h-[279px] left-[69px] top-[160px] absolute">
        <div className="w-[149px] h-[269px] left-[685px] top-[10px] absolute">
            <div className="w-[149px] left-0 top-0 absolute text-white text-[28px] font-medium font-['Ubuntu'] capitalize">Quick Links</div>
            <div className="w-[65px] left-0 top-[88px] absolute text-white text-xl font-medium font-['Mulish'] capitalize">Course</div>
            <div className="w-[108px] left-0 top-[140px] absolute text-white text-xl font-medium font-['Mulish'] capitalize">Our Service</div>
            <div className="w-[103px] left-0 top-[192px] absolute text-white text-xl font-medium font-['Mulish'] capitalize">Contact us</div>
            <div className="w-[43px] left-0 top-[244px] absolute text-white text-xl font-medium font-['Mulish'] capitalize">Blog</div> 
            

    
        </div>
        <div className="w-[202px] h-[269px] left-[1099px] top-[10px] absolute">
            <div className="w-[124px] left-[6px] top-[88px] absolute text-white text-xl font-medium font-['Mulish'] capitalize">Music Course</div>
            <div className="w-[196px] left-[6px] top-[140px] absolute text-white text-xl font-medium font-['Mulish'] capitalize">Art and Craft Course</div>
            <div className="w-[141px] left-[6px] top-[192px] absolute text-white text-xl font-medium font-['Mulish'] capitalize">Aerobic Course</div>
            <div className="w-[141px] left-[6px] top-[244px] absolute text-white text-xl font-medium font-['Mulish'] capitalize">Science Course</div>
            <div className="w-[91px] left-0 top-0 absolute text-white text-[28px] font-medium font-['Ubuntu'] capitalize">Course</div>
        </div>
        <div className="w-[420px] h-[279px] left-0 top-0 absolute">
            <div className="w-[327px] h-[51px] left-0 top-0 absolute text-white text-[40px] font-bold font-['Ubuntu'] capitalize">Smart Academy</div>
            <div className="w-[419px] left-[1px] top-[107px] absolute text-white text-xl font-normal font-['Mulish']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor vel lacus laoreet tristique. Nunc bibendum justo</div>
            <div className="w-[280px] h-10 left-[1px] top-[239px] absolute">
            <div className="w-10 h-10 left-0 top-0 absolute">
                    <div className="w-10 h-10 left-0 top-0 absolute bg-amber-950 bg-opacity-0" />
                    <BsBehance/>
                </div>
                <div className="w-10 h-10 left-[80px] top-0 absolute">
                    <div className="w-10 h-10 left-0 top-0 absolute bg-amber-950 bg-opacity-0" />
                   <BsDribbble/>
                </div>
                <div className="w-10 h-10 left-[160px] top-0 absolute">
                    <div className="w-10 h-10 left-0 top-0 absolute bg-amber-950 bg-opacity-0" />
                    <BsFacebook/>
                </div>
                <div className="w-10 h-10 left-[240px] top-0 absolute">
                    <div className="w-10 h-10 left-0 top-0 absolute  bg-opacity-0" />
                    <BsInstagram  style={{ color: 'white' }}/>
                </div>
                
               
                
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Contactus

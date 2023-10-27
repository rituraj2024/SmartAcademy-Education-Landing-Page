import React from 'react'
import Imagecourse from '../assets/images/Rectangle 20.png'
import Imagecourse1 from '../assets/images/Rectangle 20 (1).png'
import Imagecourse2 from '../assets/images/Rectangle 20 (2).png'
import Imagecourse3 from '../assets/images/Rectangle 20 (3).png'
import Imagecourse4 from '../assets/images/Rectangle 20 (4).png'
import Imagecourse5 from '../assets/images/Rectangle 20 (5).png'
import Imagecourse6 from '../assets/images/Rectangle 20 (6).png'
import Imagecourse7 from '../assets/images/Rectangle 20 (7).png'

export const Courses = () => {
  return (
    <div className='right-[10px]'>
    <div>
         <div class="w-[1300px] h-[997px]  relative top-[230px]">
     <div class="w-[955px] left-[172px] top-0 absolute text-center text-sky-600 text-[64px] font-medium font-['Ubuntu']">Our Featured Course <br/>at Smart Academy</div>
     <div class="w-[283px] h-[340px] left-0 top-[261px] absolute">
         <img class="w-[282.52px] h-[272.50px] left-0 top-0 absolute rounded-[25px]" src={Imagecourse} alt="raj" />
         <div class="w-[277px] left-[6px] top-[312px] absolute text-sky-600 text-2xl font-medium font-['Ubuntu']">Kids Science Course</div>
     </div>
     <div class="w-[283px] h-[340px] left-0 top-[657px] absolute">
         <img class="w-[282.52px] h-[272.50px] left-0 top-0 absolute rounded-[25px]" src={Imagecourse1} alt="raj" />
         <div class="w-[277px] left-[6px] top-[312px] absolute text-sky-600 text-2xl font-medium font-['Ubuntu']">Kids Aerobic Course</div>
     </div>
     <div class="w-[282.52px] h-[340px] left-[339px] top-[261px] absolute">
         <img class="w-[282.52px] h-[272.50px] left-0 top-0 absolute rounded-[25px]" src={Imagecourse2} alt="raj"/>
         <div class="w-[277px] left-[0.48px] top-[312px] absolute text-sky-600 text-2xl font-medium font-['Ubuntu']">Kids Chef Course</div>
     </div>
     <div class="w-[282.52px] h-[340px] left-[339px] top-[657px] absolute">
         <img class="w-[282.52px] h-[272.50px] left-0 top-0 absolute rounded-[25px]" src={Imagecourse3} alt="raj" />
         <div class="w-[277px] left-[0.48px] top-[312px] absolute text-sky-600 text-2xl font-medium font-['Ubuntu']">Kids Languages Course</div>
     </div>
     <div class="w-[283px] h-[340px] left-[678px] top-[261px] absolute">
         <img class="w-[282.52px] h-[272.50px] left-0 top-0 absolute rounded-[25px]" src={Imagecourse4} alt="raj"/>
         <div class="w-[277px] left-[6px] top-[312px] absolute text-sky-600 text-2xl font-medium font-['Ubuntu']">Kids Music Course</div>
     </div>
     <div class="w-[283px] h-[340px] left-[678px] top-[657px] absolute">
         <img class="w-[282.52px] h-[272.50px] left-0 top-0 absolute rounded-[25px]" src={Imagecourse5} alt="raj"/>
         <div class="w-[277px] left-[6px] top-[312px] absolute text-sky-600 text-2xl font-medium font-['Ubuntu']">Kids Craft & Art Course</div>
     </div>
     <div class="w-[283px] h-[340px] left-[1017px] top-[261px] absolute">
         <img class="w-[282.52px] h-[272.50px] left-0 top-0 absolute rounded-[25px]" src={Imagecourse6} alt="raj"/>
         <div class="w-[277px] left-[6px] top-[312px] absolute text-sky-600 text-2xl font-medium font-['Ubuntu']">Kids Swimming Course</div>
     </div>
     <div class="w-[283px] h-[340px] left-[1017px] top-[657px] absolute">
         <img class="w-[282.52px] h-[272.50px] left-0 top-0 absolute rounded-[25px]" src={Imagecourse7} alt="raj" />
         <div class="w-[277px] left-[6px] top-[312px] absolute text-sky-600 text-2xl font-medium font-['Ubuntu']">Kids Go Green Course</div>
     </div>
 </div>
     </div>
    </div>
  )
}

export default Courses

import React from 'react'
import "../App.css";
import Imagecourse8 from '../assets/images/Rectangle 32.png'
import Imagecourse9 from '../assets/images/Rectangle 32 (1).png'
import Imagecourse10 from '../assets/images/Rectangle 32 (2).png'
//import CTAButton from '../component/HomePage/Button'
//import CTAButton from "../component/HomePage/Button"
export const Articlesandinsight = () => {
  return (
    <div className="articlemedia">
        <div class="w-[1300px] h-[809px] top-[500px] articlemedia flex flex-row relative">
    <div class="w-[653px] left-[323px] top-0 absolute text-center text-sky-600 text-[64px] font-medium font-['Ubuntu']">Articles And Insight</div>
    <div class="w-[396px] h-[622px] left-[904px] top-[187px] absolute flex flex-row">
        <div class="w-[396px] h-[433px] left-0 top-[189px] absolute bg-white rounded-[25px]"></div>
        <div> <img class="w-[395.80px] h-[244.79px] left-0 top-0 absolute rounded-[25px]" src={Imagecourse8} alt="raj"/>
        </div>
        <div class="w-[261px] left-[68px] top-[405px] absolute text-center text-neutral-700 text-xl font-normal font-['Mulish']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </div>
        <div class="w-52 h-[63px] left-[94px] top-[514px] absolute">
            <div class="w-52 h-[63px] left-[208px] top-[20px] absolute origin-top-left rotate-180 bg-pink-500 rounded-[100px]"></div>
            <div class="w-[138px] left-[35px] top-[-30px] absolute text-center text-white text-2xl font-medium font-['Ubuntu'] capitalize"> Read More </div>
           
        </div>
    </div>
    <div class="w-[396px] h-[622px] left-[452px] top-[187px] absolute">
        <div class="w-[396px] h-[433px] left-0 top-[189px] absolute bg-white rounded-[25px]"></div>
        <img class="w-[395.80px] h-[244.79px] left-0 top-0 absolute rounded-[25px]" src={Imagecourse9} alt="raj" />
        <div class="w-[261px] left-[67px] top-[405px] absolute text-center text-neutral-700 text-xl font-normal font-['Mulish']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </div>
        <div class="w-52 h-[63px] left-[94px] top-[514px] absolute">
            <div class="w-52 h-[63px] left-[208px]  top-[20px] absolute origin-top-left rotate-180 bg-pink-500 rounded-[100px]" ></div>
            <div class="w-[138px] left-[35px]  top-[-30px] absolute text-center text-white text-2xl font-medium font-['Ubuntu'] capitalize">Read More</div>
        </div>
    </div>
    <div class="w-[1231px] h-[622px] left-0 top-[187px] absolute">
        <div class="w-[396px] h-[433px] left-0 top-[189px] absolute bg-white rounded-[25px]"></div>
        <img class="w-[395.80px] h-[244.79px] left-0 top-0 absolute rounded-[25px]" src={Imagecourse10} alt="raj" />
        <div class="w-[257px] left-[974px] top-[283px] absolute text-center text-sky-600 text-2xl font-medium font-['Ubuntu']">Engage and Inspire The Power of Online Courses for Kids</div>
        <div class="w-64 left-[522px] top-[283px] absolute text-center text-sky-600 text-2xl font-medium font-['Ubuntu']">Unlock Your Child's Potential with Online Courses for Kids</div>
        <div class="w-[242px] left-[77px] top-[283px] absolute text-center text-sky-600 text-2xl font-medium font-['Ubuntu']">The Benefits <br/>of Enrolling Kids <br/>in Online Courses</div>
        <div class="w-[261px] left-[67px] top-[405px] absolute text-center text-neutral-700 text-xl font-normal font-['Mulish']">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </div>
        <div class="w-52 h-[63px] left-[94px] top-[514px] absolute">
            <div class="w-52 h-[63px] left-[208px]  top-[20px] absolute origin-top-left rotate-180 bg-pink-500 rounded-[100px]" ></div>
            <div class="w-[138px] left-[35px] top-[-30px] absolute text-center text-white text-2xl font-medium font-['Ubuntu'] capitalize">Read More</div>
        </div>
    </div>
</div>
    </div>
  )
}
export default Articlesandinsight
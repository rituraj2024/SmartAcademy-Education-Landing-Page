import React from 'react'
import About from './About'
import Services from './Services'
import Courses from './Courses'
import Articlesandinsight from './Articlesandinsight'
import Calltoaction  from './Calltoaction'
import  Hero  from './Hero'
import  Testonomials  from './Testonomials'
import Contactus from './Contactus'
export const Home = () => {
  return (
<div className='bg-[#F4F4F4] absolute  flex flex-col w-100% max-w-maxContent 
      text-white item-center ' >
    <Hero/> 

    <div className='bg-[#F4F4F4] relative top-[200px]   w-100% max-w-maxContent 
      text-white item-center ' ></div>
   <About />

   <div className='w-100% max-w-maxContent top-[160.75px] relative'>
    <Services/>
    <Courses/>
    <Testonomials/>
    <Articlesandinsight/>
    <Calltoaction/>
    <Contactus/>
    

   </div>



   
</div>
        
        
    
  )
}


export default Home
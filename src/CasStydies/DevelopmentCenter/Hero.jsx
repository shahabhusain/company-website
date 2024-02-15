import React from 'react'
import logo from '../DevelopmentCenter/Assets/image 1.png'
import side from '../DevelopmentCenter/Assets/Frame 1000009910.png'
import { ScrollRestoration } from 'react-router-dom'
const Hero = () => {
  return (
    <div className=' md:pt-7 pt-7 mx-4 md:mx-24'>
      <ScrollRestoration />
        <div className='  md:flex block justify-between '>
        <div className=' flex flex-col gap-8 justify-center'>
            <img className=' w-[92px] h-[93px]' src={logo} alt="" />
            <div>
            <button className=' border-[1px] py-2 hover:bg-[#0D7592] hover:text-white duration-300 transition-all ease-in-out border-[#EF6A1F] rounded-[5px] md:text-[35px] sm:text-[25px] text-[17px] font-[600] text-[#0D7592] px-8'>Case Study</button>
            </div>
            <div>
            <h1 className=' text-[#0D7592] md:text-[45px] sm:text-[35px] text-[25px] font-[600] whitespace-nowrap '>Development Center</h1>
            <h2 className=' md:text-[45px] sm:text-[35px] text-[25px] font-[600]'>Mobile App</h2>
            </div>
            <p className=' text-[#272727] md:text-[20px] text-[14px] font-[400]'>Introducing "Development Centre" – Your Gateway to Personalized Learning for Your Child!</p>
        </div>
          <img className=' md:max-w-[555px] md:pt-0 pt-10' src={side} alt="" />
    </div>
    </div>
  )
}

export default Hero
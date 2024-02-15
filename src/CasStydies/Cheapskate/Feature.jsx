import React from 'react'
import main1 from '../Cheapskate/Assets/Group22.png'
const Feature = () => {
  return (
    <div className=' md:mx-44 mx-4 pt-32 '>
     <div>
        <h1 className=' text-[#5EACF9] md:text-[33px] text-[22px] font-bold text-center'>Features</h1>
        <p className=' text-[#606060] md:text-[17px] text-[14px] font-normal text-center'>Presented here is an exhaustive overview of the sophisticated features encapsulated within our application, meticulously crafted to elevate user experience and meet the diverse needs of our discerning user base.</p>
        <img className=' w-[777px] object-contain mx-auto mt-6' src={main1} alt="" />
     </div>
     
    </div>
  )
}

export default Feature
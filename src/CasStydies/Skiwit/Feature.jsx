import React from 'react'
import main1 from '../../CasStydies/Skiwit/Assets/OBJECTS.png'
const Feature = () => {
  return (
    <div className=' md:mx-24 mx-4 '>
     <div>
        <h1 className=' text-[#000000] md:text-[43px] text-[22px] font-bold text-center'>Features</h1>
        <p className=' text-[#606060] md:text-[22px] text-[14px] font-normal text-center'>Presented here is an exhaustive overview of the sophisticated features encapsulated within our application, meticulously crafted to elevate user experience and meet the diverse needs of our discerning user base.</p>
        <img className=' w-[977px] object-contain mx-auto mt-6' src={main1} alt="" />
     </div>
     
    </div>
  )
}

export default Feature
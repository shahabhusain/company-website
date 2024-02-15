import React from 'react'
import side from '../Omni/Assets/OBJECTS.png'
const Feature = () => {
  return (
    <div className=' md:mx-24 mx-4 pt-20 '>
        <div>
            <h1 className=' md:text-[37px] sm:text-[37px] text-[27px] font-bold'>Features</h1>
            <p className=' md:text-[17px] text-[14px] font-[400] text-[#606060]'>Presented here is an exhaustive overview of the sophisticated features encapsulated within our application, meticulously crafted to elevate user experience and meet the diverse needs of our discerning user base.</p>
        </div>
        <img className=' mx-auto pt-10 md:max-w-[700px]' src={side} alt="" />
    </div>
  )
}

export default Feature
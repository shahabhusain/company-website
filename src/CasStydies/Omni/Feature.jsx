import React from 'react'
import side from '../Omni/Assets/OBJECTS.png'
const Feature = () => {
  return (
    <div className=' md:mx-24 mx-4 '>
        <div className='mx-24'>
            <h1 className=' md:text-[37px] sm:text-[37px] text-[27px] font-bold'>Features</h1>
            <p className=' md:text-[17px] text-[14px] font-[400] text-[#606060] '>Presented here is an exhaustive overview of the sophisticated features encapsulated within our application, meticulously crafted to elevate user experience and meet the diverse needs of our discerning user base.</p>
        </div>
        <img className=' mx-auto md:max-w-[600px] mt-4' src={side} alt="" />
    </div>
  )
}

export default Feature
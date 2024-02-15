import React from 'react'
import side from '../../CasStydies/Skiwit/Assets/Group 339.png'
const Booking = () => {
  return (
    <div className=' md:mx-44 mx-4 pt-32'>
       <div className="md:flex block justify-between">
       <div className=' md:w-[50%] w-[70%] mx-auto'>
            <img src={side} alt="" />
        </div>
       <div className=' md:w-[45%] md:pt-0 pt-8'>
       <h1 className='text-[#EDBD57] md:text-[33px] text-[22px] font-bold'>Community <span className=' text-black'>Snowtalk</span></h1>
       <p className=' text-[#757575] md:text-[17px] text-[13px] font-normal'>Immerse yourself in a vibrant skiing community! Our app's community section lets you engage with fellow skiers and coaches. Admins can share insightful videos, sparking discussions that transcend borders. Join live streams for real-time interaction, making every skiing experience a shared adventure.
       </p>
       </div>
       </div>
    </div>
  )
}

export default Booking
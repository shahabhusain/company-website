import React from 'react'
import side from '../../CasStydies/LocalCaregiver/Assets/Group 7771 (1).png'
const Followers = () => {
  return (
    <div className=' md:flex block pt-24 gap-12 justify-between md:mx-24 mx-4'>
       

        <div>
            <img className=' pt-7 md:pt-0' src={side} alt="" />
        </div>

        <div className=' md:w-[70%] pt-24'>
            <h1 className=' md:text-[41px]  text-[27px] font-bold text-[#0D7592] leading-[3rem]'>Verified/Background Checked Caregivers</h1>
            <p className=' md:text-[17px] text-[10px] font-normal text-[#606060] mt-5'>Access Caregivers who are thoroughly verified and background checked in National Criminal Database and Sex Offender Registry</p>
        </div>
    </div>
  )
}

export default Followers
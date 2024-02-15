import React from 'react'
import main from '../../CasStydies/LocalCaregiver/Assets/Frame 1000009908.png'
const Flexible = () => {
  return (
    <div className=' mx-auto flex mt-32 flex-col items-center justify-center'>
        <h1 className=' text-[40px] font-semibold text-[#0D7592] text-center'>Flexible Schedule</h1>
        <p className=' text-[#606060] mt-2 text-[14px] font-normal text-center'>Customize Your Hours: Flexibility Designed Around You</p>
        <img className=' w-[855px] mt-16' src={main} alt="" />
    </div>
  )
}

export default Flexible
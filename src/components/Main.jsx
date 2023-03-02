import {  KeyboardArrowDown,MoreHoriz,KeyboardArrowRight
} from '@mui/icons-material'
import React from 'react'
import AreaCharts from './Area'
import Cards from './Cards'
import profile from '../assets/7.jpg'

export default function Main() {
  return (
    <div className='w-[80vw] h-screen bg-primary'>
      <div className='w-full py-8 h-full bg-secondary  rounded-l-[55px]'>
        <div className='px-12 justify-between w-full flex items-center'>
          <div className='flex flex-col'>
            <div className='pb-1 font-semibold'>
              Welcome back Isabella!
            </div>
            <div >Check out today's Weather information</div>
          </div>
          <div className='flex items-center '>
            <MoreHoriz />
            <img className=' object-cover rounded-full h-10 w-11 flex items-center justify-center rounded-2xl mx-6'  src={profile} alt="" />
           
          </div>
          
        </div>
        <div className='mt-6'>
          <div className='bg-white rounded-[40px] mx-auto h-[30vh] w-[94%]'>
            <div className='px-8 py-4 flex items-center justify-between'><div>Upcoming hours</div>
            <div className='bg-secondary cursor-pointer py-1 px-3 rounded-md '>Rain Precipitation<KeyboardArrowDown/> </div>
            <div className='bg-secondary cursor-pointer py-1 px-3 rounded-md'>Next days<KeyboardArrowRight/></div>
            </div> 
            <AreaCharts /></div>
        </div>
        <div>
          <div className='mt-6 w-[93%] mx-auto font-semibold'>More details of today's weather</div>
          <Cards/>
        </div>
      </div>
    </div>
  )
}

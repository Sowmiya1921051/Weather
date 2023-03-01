import { AccountBox, MoreHoriz } from '@mui/icons-material'
import React from 'react'
import AreaCharts from './Area'
import Cards from './Cards'

export default function Main() {
  return (
    <div className='w-[80vw] h-screen bg-primary'>
      <div className='w-full py-8 h-full bg-secondary  rounded-l-[55px]'>
        <div className='px-12 justify-between w-full flex items-center'>
          <div className='flex flex-col'>
            <div className='pb-1 font-semibold'>
              Welcome back Isabella!
            </div>
            <div>Check out today's Weather information</div>
          </div>
          <div className='flex items-center'>
            <MoreHoriz />
            <AccountBox sx={{ color: "orange" ,fontSize:35,ml:2}}/>
          </div>
          
        </div>
        <div className='mt-6'>
          <div className='bg-white rounded-[40px] mx-auto h-[30vh] w-[94%]'>
            <div className='px-8 py-4 flex items-center justify-between'><div>Upcoming hours</div>
            <div className='bg-secondary cursor-pointer py-1 px-3 rounded-md'>Next days</div>
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

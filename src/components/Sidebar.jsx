import { AddBox,ArrowLeft,Navigation,ArrowRight,MoreHoriz,ToggleOff,WbTwilight,  WbSunnyOutlined } from '@mui/icons-material'
import buildings from "../assets/building.png"

function Sidebar() {
  return (
    <div className='xl:w-[25%] w-[30%] relative h-screen bg-primary text-white '>
      <div className='px-6  py-8 flex justify-between items-center'>
        <AddBox sx={{fontSize:25}} />
        <MoreHoriz  sx={{fontSize:35}} />
        <span className='text-xs'>°C<span className='cursor-pointer px-1'><ToggleOff sx={{fontSize:40}} /></span>°F</span>
      </div>
      <div>
        <div className='px-6 my-2 flex items-center justify-between'> 
          <span className='flex items-center font-medium' ><span className=' rotate-45 pr-1'><Navigation sx={{fontSize:15}} /></span>New York, USA</span>
          <span className='flex items-center text-sm'><WbTwilight/><span>07:19</span></span>
        </div>
        <div className='px-6 my-2 flex items-center justify-between'> 
          <span className='text-sm' >Today 28 Sept</span>
          <span className='flex items-center text-sm'><WbTwilight/><span>19:32</span></span>
        </div>
        <div className='px-6 z-50 flex items-center justify-between mt-6'>
          <span><ArrowLeft /></span>
          <span className='font-semibold text-[80px]'>27°</span>
          <span><ArrowRight/></span>
        </div>
        <div className='pr-12 flex items-center justify-evenly '>
         <div><WbSunnyOutlined/><span className='px-1'>Sunny</span></div>
        </div>
      </div>
      <div className='' >
        <img  height={100} src={buildings} alt='sun-rise' />
      </div>
    </div>
  )
}

export default Sidebar
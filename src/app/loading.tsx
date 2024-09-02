import Image from "next/image"
import loader from '@/assets/V5.gif'
const Loading = () => {
  return (
  
       <div className='h-[80vh] flex justify-center items-center'>
       
         <Image className='md:w-[100px] md:h-[100px] w-[64px] h-[64px]' src={loader} alt="loader"/>
       </div>
    
  )
}

export default Loading
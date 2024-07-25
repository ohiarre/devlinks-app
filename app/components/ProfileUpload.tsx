import Image from 'next/image'
import React from 'react'

type Props = {}

function ProfileUpload({}: Props) {
  return (
    <div className='md:flex md:justify-center items-center bg-[#FAFAFA] text-[#737373] w-[295px] md:w-[641px] p-5 pl-3 rounded-xl space-y-5 md:space-x-5'>
         <h2 className='text-[16px] md:w-[245px]'>Profile Picture</h2>
         <div className='flex flex-col justify-center items-center w-[193px] h-[200px] bg-[#EFEBFF] px-5 py-10 rounded-xl'>
          
            <Image
              src="/ph_image.svg"
              width={40}
              height={40}
              alt="image icon"
              className='ml-3'
            />
            <h2 className='text-purple-600 font-bold'>+ Upload Image</h2>
           
         </div>
            <p className='text-xs md:w-[260px]'>Image must be below 1024x1024px. Use PNG or JPG format.</p>
    </div>
  )
}

export default ProfileUpload
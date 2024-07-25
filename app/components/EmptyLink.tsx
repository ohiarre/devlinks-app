import Image from 'next/image'
import React from 'react'

type Props = {}

function EmptyLink({}: Props) {
  return (
    <div>
        <div className='flex flex-col justify-center items-center mx-auto rounded-lg space-y-5 w-[295px] md:w-[641px] p-20 bg-[#FAFAFA] text-center'>
        <Image
            src="/Group 273.svg"
            width={124.77}
            height={80}
            alt="logo"
            className='md:w-[200px] md:h-[160px]'
        />
        <h1 className='font-bold text-xl md:text-2xl text-[#333333]'>Let’s get you started</h1>
        <p className='font-normal text-base text-[#737373] break-words'>
            Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!
        </p>
    </div>
    </div>
  )
}

export default EmptyLink
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import EmptyLink from './EmptyLink'
import AddedLink from './AddedLink'
import NavBar from './NavBar'
import PreviewSkeleton from './PreviewSkeleton'

type Props = {}

function LinkNav({}: Props) {
  return (
    <div className='my-3'>
    <NavBar />
    <div className='lg:flex lg:justify-between lg:items-start py-3 space-y-5'>
    <div className='hidden lg:block lg:w-[550px] py-5'>
      <PreviewSkeleton />
    </div>
    <div className='mx-auto p-[24px] w-[343px] md:w-[681px] lg-[808px] bg-white rounded-lg'>
      <div className=' space-y-5 '>
    <div className='space-y-3  py-3'>
        <h1 className='font-bold text-xl md:text-2xl lg:text-3xl text-[#333333]'>Customize your links</h1>
        <p className='font-normal text-base text-[#737373] break-words'>
            Add/edit/remove links below and then share all your profiles with the world!
        </p>
    </div>
    <div className='mt-3'>
        <Button className='bg-white w-[263px] md:w-[641px] h-12 px-6 py-2 rounded-lg text-[#633CFF] border-[1px] border-[#633CFF] text-base font-semibold leading-6'>
            + Add new link
        </Button>
    </div>

    <EmptyLink />
    {/* <AddedLink /> */}
    </div>
    <hr className='border-b-[1px] border-b-[#D9D9D9]'></hr>
    <div className='my-3'>
        <Button className='text-white w-[263px] md:w-[100px] md:float-right h-12 px-6 py-2 rounded-lg border-[1px] bg-[#633CFF] text-base font-semibold leading-6 opacity-30'>
            Save
        </Button>
    </div>
    </div>
</div>
</div>
  )
}

export default LinkNav
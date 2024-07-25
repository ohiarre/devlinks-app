import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Preview({}: Props) {
  return (
    <div className='space-y-5 md:relative'>
        <div className='md:bg-[#633CFF] md:h-[300px] rounded-b-3xl'>
        <nav className='flex justify-between items-center mx-auto md:w-[800px] lg:w-[1000px] p-3 md:bg-white rounded-2xl z-30'>
            <Link href='/link'>
            <Button className=' w-[160px] h-[46px] px-6 py-2 rounded-lg border-[1px] text-[#633CFF]  bg-white border-[#633CFF] text-base font-semibold leading-6'>
            Back to Editor
        </Button>
            </Link>
        <Button className='text-white w-[160px] h-[46px] px-6 py-2 rounded-lg border-[1px] bg-[#633CFF] text-base font-semibold leading-6'>
        Share Link
        </Button>
        </nav>
        </div>

        <div className='mx-auto space-y-10  p-20 w-[400px] h-[600px] rounded-xl bg-white md:absolute md:top-36 md:left-1/2 md:transform md:-translate-x-1/2'>
        <div className='flex flex-col justify-start items-center'>
        <Image
                    src="/Ellipse 3.svg"
                    width={104}
                    height={104}
                    alt="Profile Image"
                  />
                  <h1 className='text-[32px] font-bold text-[#333333] leading-[48px]'>Ben Wright</h1>
                  <p className='text-[16px] font-bold text-[#737373]'>ben@example.com</p>
        </div>          
        <div className='flex flex-col justify-between items-center py-5 mb-3 space-y-3'>
        <Button className='text-white w-[263px] h-12 px-6 py-2 rounded-lg border-[1px] bg-[#333333] text-base font-semibold leading-6'>
            GitHub
        </Button>

        <Button className='text-white w-[263px] h-12 px-6 py-2 rounded-lg border-[1px] bg-[#EE3939] text-base font-semibold leading-6'>
            YouTube
        </Button>

        <Button className='text-white w-[263px] h-12 px-6 py-2 rounded-lg border-[1px] bg-[#2D68FF] text-base font-semibold leading-6'>
            LinkedIn
        </Button>
        </div>
        </div>
    </div>
  )
}

export default Preview
   
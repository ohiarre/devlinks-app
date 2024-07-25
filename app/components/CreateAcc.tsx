import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function CreateAcc({}: Props) {
  return (
    <div>
      <div className='hidden md:flex justify-center items-center p-5 pb-10'>
      <div className="flex justify-center items-center">
      <Image
          src="/solar_link-circle-bold.svg"
          width={40}
          height={40}
          alt="logo"
        />
        <Image
          src="/devlinks.svg"
          width={120}
          height={24}
          alt="logo text"
        />
    </div>
    </div>
    <div className="w-[375px] md:w-[476px] h-[812px] mx-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8 md:gap-16 bg-white">
      <nav className='md:hidden flex items-center gap-2'>
        <Image
          src="/solar_link-circle-bold.svg"
          width={40}
          height={40}
          alt="logo"
        />
        <Image
          src="/devlinks.svg"
          width={120}
          height={24}
          alt="logo text"
        />
      </nav>
      <form className='flex flex-col'>
        <div className='pb-[40px] space-y-3'>
          <h1 className='font-bold text-xl md:text-2xl text-[#333333]'>Create account</h1>
          <p className='font-normal text-base text-[#737373] break-words'>Let’s get you started sharing your links!</p>
        </div>
  
        <div className='pb-[24px]'>
          <label className='font-normal text-xs md:text-sm text-[#333333]'>Email address</label>
          <div className='flex items-center w-[311px] md:w-[396px] h-12 border border-[#D9D9D9] rounded-md'>
            <Image
              src="/ph_envelope-simple-fill.svg"
              width={16}
              height={16}
              alt="message icon"
              className='ml-3'
            />
            <input className="w-full h-10 pl-3 outline-none" type="email"
              placeholder="e.g. alex@email.com" />
          </div>
        </div>
  
        <div className='pb-[24px]'>
          <label className='font-normal text-xs md:text-sm text-[#333333]'>Create password</label>
          <div className='flex items-center w-[311px] md:w-[396px] h-12 border border-[#D9D9D9] rounded-md'>
            <Image
              src="/ph_lock-key-fill.svg"
              width={16}
              height={16}
              alt="lock icon"
              className='ml-3'
            />
            <input className="w-full h-10 pl-3 outline-none" type="password"
              placeholder="At least .8 characters" />
          </div>
        </div>

        <div className='pb-[24px]'>
          <label className='font-normal text-xs md:text-sm text-[#333333]'>Confirm password</label>
          <div className='flex items-center w-[311px] md:w-[396px] h-12 border border-[#D9D9D9] rounded-md'>
            <Image
              src="/ph_lock-key-fill.svg"
              width={16}
              height={16}
              alt="lock icon"
              className='ml-3'
            />
            <input className="w-full h-10 pl-3 outline-none" type="password"
              placeholder="At least .8 characters" />
          </div>
        </div>
        <div className='pb-[24px] text-[#737373] font-normal text-[12px]'>
            <p>Password must contain at least 8 characters</p>
        </div>

        <div className='pb-[24px]'>
        <Button className='bg-[#633CFF] w-[311px] md:w-[396px] h-12 px-6 py-2 rounded-lg text-white text-base font-semibold leading-6'>
          Create new account
        </Button>
        </div>
        
        <div className=" text-center">
          <h2 className="text-gray-500 text-base font-normal leading-6">Already have an account?<br/></h2>
          <Link href="/" className="text-purple-700 text-base font-normal leading-6">Login</Link>
        </div>
      </form>
    </div>
    </div>
  )
}

export default CreateAcc
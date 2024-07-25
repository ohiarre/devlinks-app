import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import EmptyLink from './EmptyLink'
import AddedLink from './AddedLink'
import ProfileDetails from './ProfileDetails'
import ProfileUpload from './ProfileUpload'
import NavBar from './NavBar'

type Props = {}

function Profile({}: Props) {
  return (
    <div>
        <NavBar />
    <div className='mx-auto p-[24px] w-[343px] md:w-[681px] bg-white rounded-lg my-2'>
      <div className=' border-b-[1px] border-b-[#D9D9D9] space-y-5 '>
    <div className='space-y-5'>
        <h1 className='font-bold text-xl md:text-2xl lg:text-3xl text-[#333333]'>Profile Details</h1>
        <p className='font-normal text-base text-[#737373] break-words'>
        Add your details to create a personal touch to your profile.
        </p>
    </div>
    <ProfileUpload />
    <ProfileDetails />

    </div>
    <div className='my-5'>
        <Button className='text-white w-[263px] md:w-[100px] md:float-right h-12 px-6 py-2 rounded-lg border-[1px] bg-[#633CFF] text-base font-semibold leading-6'>
            Save
        </Button>
    </div>


</div>
</div>
  )
}

export default Profile
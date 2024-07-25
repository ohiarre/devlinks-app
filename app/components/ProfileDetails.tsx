import React from 'react'

type Props = {}

function ProfileDetails({}: Props) {
  return (
    <div>
         <div className='w-[295px] md:w-[641px] bg-[#FAFAFA] text-[#737373] p-4 rounded-xl mb-3'>
  <form className='space-y-2'>
    <div className='md:flex md:justify-between items-center'>
      <label className='font-normal text-xs md:text-sm'>First name</label>
      <div className='flex items-center w-[255px] md:w-[396px] h-[48px] bg-white  border border-[#D9D9D9] rounded-md'>
      <input className="w-full h-10 pl-3 outline-none" type="text"
          placeholder="Ben" />
      </div>
    </div>

    <div className='md:flex md:justify-between items-center'>
      <label className='font-normal text-xs md:text-sm'>Last name</label>
      <div className='flex items-center w-[255px] md:w-[396px] h-[48px] bg-white border border-[#D9D9D9] rounded-md'>
        
        <input className="w-full h-10 pl-3 outline-none" type="text"
          placeholder="Wright" />
      </div>
    </div>

    <div className='md:flex md:justify-between items-center'>
      <label className='font-normal text-xs md:text-sm'>Email</label>
      <div className='flex items-center w-[255px] md:w-[396px] h-[48px] bg-white border border-[#D9D9D9] rounded-md'>
        
        <input className="w-full h-10 pl-3 outline-none" type="email"
          placeholder="ben@example.com" />
      </div>
    </div>

  </form>
</div>
    </div>
  )
}

export default ProfileDetails
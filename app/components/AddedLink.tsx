import Image from 'next/image'
import React from 'react'

type Props = {}

function AddedLink({}: Props) {
  return (
    <div className='w-[295px]  md:w-[641px]  bg-[#FAFAFA] px-4 py-5 rounded-xl'>
  <form className='text-[#737373]'>
    <div>
      <div className='flex justify-between items-center'>
        <div className='flex justify-center items-center space-x-2 text-[16px]'>
          <div className='space-y-1'>
            <Image
              src="/Rectangle 18.svg"
              width={12}
              height={1}
              alt="icon"
              className=''
            />
            <Image
              src="/Rectangle 19.svg"
              width={12}
              height={1}
              alt="icon"
              className=''
            />
          </div>
          <h2 className='font-bold'>Link #1</h2>
        </div> 
        <p>Remove</p>
      </div>
    </div>
    
    <div className='text-[#333333]'>
      <label className='font-normal text-[12px]'>Platform</label>
      <div className='flex items-center  w-[255px] md:w-[396px] h-[48px] bg-white  border border-[#D9D9D9] rounded-md'>
        <Image
          src="/teenyicons_github-solid.svg"
          width={16}
          height={16}
          alt="dropdown icon"
          className='ml-3'
        />
        <select className="w-full h-10 pl-3 text-[16px] font-normal outline-none">
          <option value="option1">GitHub</option>
          <option value="option2">Option 1</option>
          <option value="option3">Option 2</option>
          <option value="option4">Option 3</option>
        </select>
      </div>
    </div>

    <div className=''>
      <label className='font-normal text-xs md:text-sm text-[#333333]'>Link</label>
      <div className='flex items-center w-[255px] md:w-[396px]  h-[48px]  bg-white border border-[#D9D9D9] rounded-md'>
        <Image
          src="/ph_link-bold.svg"
          width={16}
          height={16}
          alt="link icon"
          className='ml-3'
        />
        <input className="w-full h-10 pl-3 outline-none" type="text"
          placeholder="e.g. https://example.com" />
      </div>
    </div>

  </form>
</div>

  )
}

export default AddedLink
import Image from 'next/image'
import React from 'react'

type Props = {}

function PreviewSkeleton({}: Props) {
  return (
    <div className='flex justify-center items-center w-[560px] bg-white mx-5 p-5'>
          <Image
          src="/preview-section.svg"
          width={307}
          height={521}
          alt="link icon"
          className='ml-3'
        />
    </div>
  )
}

export default PreviewSkeleton
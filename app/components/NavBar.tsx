import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function NavBar({}: Props) {
  return (
          <nav className="bg-white rounded-b-xl mx-auto w-[375px] md:w-[768px] h-[50px] flex justify-between items-center gap-2 px-[24px] py-[26px] mt-1 text-[#737373] font-semibold">
    
            <div className="flex items-center gap-2 ">
              <Link href="/">
                <div className="flex items-center space-x-1">
                  <Image
                    src="/solar_link-circle-bold.svg"
                    width={32}
                    height={32}
                    alt="logo"
                  />
                  <Image
                    src="/devlinks.svg"
                    width={120}
                    height={24}
                    alt="logo text"
                    className="hidden md:block"
                  />
                </div>
              </Link>
            </div>
    
            <div className="flex items-center gap-5">
              <Link href="/link">
                <div className="flex items-center space-x-1 hover:text-purple-700 active:bg-[#EFEBFF] active:rounded-lg p-2">
                  <Image
                    src="/ph_link-bold.svg"
                    width={20}
                    height={20}
                    alt="links"
                  />
                  <h2 className="hidden md:block">Links</h2>
                </div>
              </Link>
    
              <Link href="/profile">
                <div className="flex items-center space-x-1 hover:text-purple-700 active:bg-[#EFEBFF] active:rounded-lg p-2">
                  <Image
                    src="/ph_user-circle-bold.svg"
                    width={20}
                    height={20}
                    alt="profile"
                  />
                  <h2 className="hidden md:block">Profile Details</h2>
                </div>
              </Link>
            </div>
    
            <div className="flex items-center gap-2 border-[1px] border-purple-700 rounded-md p-[11px]">
              <Link href="/preview">
                <div className="flex items-center space-x-1">
                  <Image
                    src="/ph_eye-bold.svg"
                    width={20}
                    height={20}
                    alt="preview"
                    className='md:hidden block'
                  />
                  <h2 className="hidden md:block text-purple-700">Preview</h2>
                </div>
              </Link>
            </div>
        {/* </div> */}
          </nav>
  )
}

export default NavBar
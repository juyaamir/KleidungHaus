import React from 'react'
import Link from 'next/link'

import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegHeart, FaRegUser } from "react-icons/fa";

const DeskNavbar = () => {
  return (
    <div className=' bg-[#222121] text-white px-4'>
      <nav className='flex md:text-xl max-w-[1200px] mx-auto'>
        <Link href='/' className='px-4 py-2 border-r-[#858282] border-r-[1px]'>
          KleidundHaus
        </Link>
        <Link href='/damen' className='px-4 py-2 border-r-[#858282] border-r-[1px] '>Damen</Link>
        <Link href='/herren' className='px-4 py-2 border-r-[#858282] border-r-[1px]'>Herren</Link>
        <Link href='/kinder' className='px-4 py-2 border-r-[#858282] border-r-[1px]'>Kinder</Link>
        <div className='grow px-4 py-2' >Search...</div>
        <Link href='/saved-list' className='px-4 py-2 flex justify-center items-center'>
        <FaRegHeart size='26px' /></Link>
        <Link href='/cart' className='px-4 py-2 flex justify-center items-center'>
        <IoBagHandleOutline size='26px' height='20px' /></Link>
        <div className='px-4 py-2 hover:cursor-pointer flex justify-center items-center'>
          <FaRegUser size='26px'/></div>
      </nav>
    </div>
  )
}

export default DeskNavbar
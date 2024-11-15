import React from 'react'
import Link from 'next/link'
import Search from './search';
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegHeart, FaRegUser } from "react-icons/fa";

const DeskNavbar = () => {
  return (
    <div className=' bg-[#222121] text-white px-4'>
      <nav className='flex flex-wrap md:text-xl max-w-[1200px] mx-auto'>
        <Link href='/' className='px-4 py-2 border-r-[#3f3c3c] border-r-[1px] hover:text-[#dfdcdc]'>
          KleidundHaus
        </Link>
        <Link href='/damen' 
        className='px-4 py-2 border-r-[#3f3c3c] border-r-[1px] hover:bg-[#3f3c3c] '>
          Damen</Link>
        <Link href='/herren' 
        className='px-4 py-2 border-r-[#3f3c3c] border-r-[1px] hover:bg-[#3f3c3c]'>Herren</Link>
        <Link href='/kinder' 
        className='px-4 py-2 border-r-[#3f3c3c] border-r-[1px] hover:bg-[#3f3c3c]'>Kinder</Link>
        <div className='grow px-4 py-2 ' >
          <Search />
        </div>
        <Link href='/saved-list' className='px-4 py-2 flex justify-center items-center hover:text-[#dfdcdc]'>
        <FaRegHeart size='24px' /></Link>
        <Link href='/cart' className='px-4 py-2 flex justify-center items-center hover:text-[#dfdcdc] '>
        <IoBagHandleOutline size='26px' height='20px' /></Link>
        <div className='px-4 py-2 hover:cursor-pointer flex justify-center items-center hover:text-[#dfdcdc]'>
          <FaRegUser size='26px'/></div>
      </nav>
    </div>
  )
}

export default DeskNavbar
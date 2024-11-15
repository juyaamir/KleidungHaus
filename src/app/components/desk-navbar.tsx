import React from 'react'
import Link from 'next/link'
const DeskNavbar = () => {
  return (
    <div className=' bg-[#222121] text-white px-4'>
      <nav className='flex gap-4 md:text-xl max-w-[1200px] mx-auto'>
        <Link href='/' className='p-2'>
          KleidundHaus
        </Link>
        <Link href='/damen' className='p-2 '>Damen</Link>
        <Link href='/herren' className='p-2'>Herren</Link>
        <Link href='/kinder' className='p-2'>Kinder</Link>
        <div className='grow p-2' >Search...</div>
        <Link href='/saved-list' className='p-2'>Favorite</Link>
        <Link href='/cart' className='p-2'>Cart</Link>
        <div className='p-2 hover:cursor-pointer'>User</div>
      </nav>
    </div>
  )
}

export default DeskNavbar
import Link from "next/link"
import { footerLinks } from "../contents/footerData"
const Footer = () => {
  return (
    <footer className="border-t border-t-gray-800 p-4 w-full bg-[#222121] text-white">
      <div className='flex flex-wrap justify-around items-center border-b border-b-gray-300 p-1 max-w-[1200px] mx-auto'>  
            <div className='flex gap-4 flex-wrap'> 
            <p className='flex items-center justify-center font-bold text-white'>Follow Us</p>
            {
              footerLinks.map((item) => (
                <Link key={item.path} href = {item.path} target='_blank' rel='noreferrer' className='hover:scale-125 duration-500 transition-transform  '>
                  <img src={item.source} alt={item.alt} className='h-10 w-10' />
                </Link>
              ))
            }
          </div>
        </div>
        <p className='text-sm md:text-lg text-center p-1'>&copy; 2024 | Designed & Coded with ❤️ by <Link  href='https://juyaamir.github.io/portfolio/' target='_blank' >Amir Muhammad Juya</Link></p>
    </footer>
  )
}

export default Footer
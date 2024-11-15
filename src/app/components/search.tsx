import Link from "next/link";
import { IoSearch } from "react-icons/io5";
const Search = () => {
  return (
    <div className='rounded-full flex justify-center items-center bg-white
    focus:border-green-500'>
        <input type="search" 
        className='grow rounded-full px-4 text-black focus:outline-none'
        />
        <Link href='/search' className="">
            <IoSearch size='30px' className='text-black bg-white px-1 font-semibold hover:text-green-600' 
            style={{borderTopRightRadius:'50%', borderBottomRightRadius: '50%'}} />
        </Link>

    </div>
  )
}

export default Search
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className=" max-w-[1440] flex">
      <div className="relative ">
        <Image
          src="/landingPage/herowoman.jpg"
          alt="woman hero image"
          height={400}
          width={720}
          className="h-full"
        />
        <Link 
        href='/damen'
        className="flex justify-center items-center absolute bottom-20 -right-20 h-10 w-40 z-10 sm:top-1/2 sm:right-10 bg-white hover:bg-black hover:text-white hover:scale-105 transition-transform duration-500 rounded-md "
        >Damen Shoppen</Link>
      </div>


      <div className="relative">
        <Image
          src="/landingPage/heroman.jpg"
          alt="man hero image"
          height={400}
          width={720}
        />
        <Link 
        href='/herren'
        className="flex justify-center items-center absolute bottom-5 -left-20 h-10 w-40 z-10 sm:top-1/2 sm:left-10 bg-white hover:bg-black hover:text-white hover:scale-105 transition-transform duration-500 rounded-md "
        >Herren Shoppen</Link>
      </div>
      
    </div>
  );
}

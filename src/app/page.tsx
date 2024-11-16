import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { heroNavData } from "./contents/heroNavData";
import { HeroNavData } from "@/navData";
export default function Home() {
  return (
    <div className=" flex flex-col gap-8">
      <div className=" w-full flex">
        <div className="relative ">
        <Image
          src="/landingPage/herowoman.jpg"
          alt="woman hero image"
          height={400}
          width={950}
          className="h-full"
        />
        <Link 
        href='/damen'
        className="flex justify-center items-center absolute bottom-20 -right-20 h-10 w-40 md:font-bold md:h-14 md:w-44 z-10 sm:top-1/2 sm:right-10 bg-white hover:bg-black hover:text-white hover:scale-105 transition-transform duration-500 rounded-md "
        >Damen Shoppen</Link>
      </div>


      <div className="relative">
        <Image
          src="/landingPage/heroman.jpg"
          alt="man hero image"
          height={400}
          width={950}
        />
        <Link 
        href='/herren'
        className="flex justify-center items-center absolute bottom-5 -left-20 h-10 w-40 md:font-bold md:h-14 md:w-44 z-10 sm:top-1/2 sm:left-10 bg-white hover:bg-black hover:text-white hover:scale-105 transition-transform duration-500 rounded-md "
        >Herren Shoppen</Link>
      </div>
      
    </div>
    <div className="max-w-[1280px] mx-auto mb-8 flex justify-center lg:justify-between gap-6 flex-wrap px-4 sm:px-0">
      {
        heroNavData.map((item:HeroNavData) => (
          <Link
          className=" flex flex-col gap-4 hover:scale-105 transition-transform duration-700"
          href={item.href} key={item.alt}>
            <Image src={item.src} alt={item.alt} height={300} width={600}  className="rounded-lg" />
            <p className="flex justify-center  items-center font-semibold gap-2">
              {item.label} <FaArrowRightLong />
            </p>
          </Link>
        ))
      }
    </div>
    </div>
  );
}

import DeskNavbar from "./desk-navbar"
import Banner from "./banner"
const Header = () => {
  return (
    <header className="border w-full bg-[#635d5d]">
      <Banner />
      <DeskNavbar />
    </header>
  )
}

export default Header
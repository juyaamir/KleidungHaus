import DeskNavbar from "./desk-navbar"
import Banner from "./banner"
const Header = () => {
  return (
    <header className="border w-full bg-[#635d5d] border-b">
      <Banner />
      <DeskNavbar />
    </header>
  )
}

export default Header
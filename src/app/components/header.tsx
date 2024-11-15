import DeskNavbar from "./desk-navbar"
import Banner from "./banner"
const Header = () => {
  return (
    <header className="border w-full bg-[#302e2e]">
      <Banner />
      <DeskNavbar />
    </header>
  )
}

export default Header
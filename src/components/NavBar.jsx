import logo from "assets/svg/logo.svg"
import hamburger from "assets/svg/menu-hamburger.svg"
import close from "assets/svg/close-rounded.svg"
import { useState } from "react"
import { Link } from "react-router-dom"
import { NAV_LINKS } from "utils/constants"
import Button from "./Button"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => setIsOpen(state => !state)

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-1/2 flex flex-col gap-10 py-28 px-4 shadow-lg bg-white">
          <div className="flex flex-col gap-10 ">
            {NAV_LINKS.map(({ label, path }) => (
              <a
                key={path}
                href={path}
                className="text-neptune-primary-blue py-3 px-2"
                onClick={toggleNav}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
      <div className="flex fixed top-0 bg-white mx-auto justify-between w-full items-center max-w-7xl self-center px-4 bg-transparent">
        <div className="flex justify-center items-center w-14 bg-transparent">
          <img src={logo} alt="" className="w-full" />
        </div>
        <div className="hidden lg:flex items-center gap-10 ">
          {NAV_LINKS.map(({ label, path }) => (
            <a
              key={path}
              href={path}
              className="text-neptune-primary-blue py-3 px-2"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="flex lg:hidden justify-center items-center w-10">
          <img
            src={isOpen ? close : hamburger}
            alt=""
            onClick={toggleNav}
            className="w-full"
          />
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/login">
            <p className="font-bold text-neptune-primary-blue p-3">Log in</p>
          </Link>
          <Button value="Get started" />
        </div>
      </div>
    </>
  )
}

export default NavBar

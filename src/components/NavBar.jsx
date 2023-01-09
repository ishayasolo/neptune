import logo from "assets/svg/logo.svg"
import { Link } from "react-router-dom"
import { NAV_LINKS } from "utils/constants"

const NavBar = () => {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex justify-center items-center w-14">
        <img src={logo} alt="" className="w-full" />
      </div>
      <div className="flex items-center gap-10 ">
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
      <div className="flex items-center gap-6">
        <Link to="/login">
          <p className="font-bold text-neptune-primary-blue p-3">Log in</p>
        </Link>
        <Link to="/get-started">
          <button className="font-bold text-white px-5 py-3 rounded-lg bg-neptune-primary-blue">
            Get started
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
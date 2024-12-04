import { useContext } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { themeContext } from "../../Context/ThemeProvider";
import './nav.css';

const Navbar = () => {
  const { theme, setTheme } = useContext(themeContext);
  
  const handleChangeTheme = () => {
   
    document.documentElement.classList.toggle('dark');
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <div className="container mx-auto mt-2">
        <div className="navbar bg-base-100 items-center">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content rounded-box z-[999] mt-3 w-52 p-2 shadow bg-base-100"
              >
                <div
                  className="w-fit h-fit cursor-pointer active:scale-90"
                  onClick={handleChangeTheme}
                >
                  {theme === "light" ? (
                    <h1 className="w-10 text-2xl">
                      <MdDarkMode />
                    </h1>
                  ) : (
                    <h1 className="text-2xl w-10">
                      <MdOutlineLightMode />
                    </h1>
                  )}
                </div>
                <NavLink to="/home" className="text-black dark:text-white">
                  Home
                </NavLink>
                <NavLink to="/allcampaign" className="text-black dark:text-white">
                  All Campaign
                </NavLink>
                <NavLink to="/addCampaign" className="text-black dark:text-white">
                  Add New Campaign
                </NavLink>
                <NavLink to="/mydonations" className="text-black dark:text-white">
                  My Donations
                </NavLink>
              </ul>
            </div>
            <div className="flex gap-1 items-center">
              <img
                className="w-8 md:w-12"
                src="https://i.ibb.co/N6LmGPq/Untitled-1.png"
                alt=""
              />
              <h2 className="text-xl md:text-3xl font-bold text-info">
                RISE<span className="font-normal">hub</span>
              </h2>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-center hidden lg:flex mr-6">
              <ul className="menu menu-horizontal px-1 gap-5 items-center" id="navLinks">
                <div
                  className="w-fit h-fit cursor-pointer text-black dark:text-white active:scale-90"
                  onClick={handleChangeTheme}
                >
                  {theme === "light" ? (
                    <h1 className="w-10 text-2xl">
                      <MdDarkMode />
                    </h1>
                  ) : (
                    <h1 className="text-2xl w-10">
                      <MdOutlineLightMode />
                    </h1>
                  )}
                </div>
                <NavLink to="/home" className="text-black dark:text-white">
                  Home
                </NavLink>
                <NavLink to="/allcampaign" className="text-black dark:text-white">
                  All Campaign
                </NavLink>
                <NavLink to="/addCampaign" className="text-black dark:text-white">
                  Add New Campaign
                </NavLink>
                <NavLink to="/mydonations" className="text-black dark:text-white">
                  My Donations
                </NavLink>
              </ul>
            </div>
            <Link to={'/login'} className="btn btn-sm md:btn-md rounded-lg bg-info text-white hover:text-black dark:hover:text-white">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

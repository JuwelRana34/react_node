import { Link, NavLink, useLocation, useNavigate } from "react-router";
// import logo from "../assets/mechanic.gif";
import { useContext, useEffect, useState } from "react";
import UserContext from "../Context/AuthContext";
import { Button, toast } from "keep-react";
import { SwitchComponent } from "./ToogleSwtich";
import { motion } from "framer-motion";
function Navbar() {
  const { pathname } = useLocation();
  const { user, LogOut, setUser, setIsloading } = useContext(UserContext);

  const navigate = useNavigate();
  const handleLogout = () => {
    LogOut()
      .then(() => {
        setIsloading(false)
        setUser(null);
        navigate("/");
        toast.warning("Logged Out Successfully");
      })
      .catch((err) => {
        setIsloading(false)
        toast.error(`${err.message}`);
      });
  };

  useEffect(() => {
    const DynamicTitle = {
      "/": "Home | Home repair",
      "/loginPage": "Login | Home repair",
      "/signup": "signup | Home repair",
      "/services": "services | Home repair",
      "/service-To-Do": "Service_To_Do | Home repair",
      "/manage-service": "Manage_service | Home repair",
      "/add-service": "Add_service | Home repair",
      "/booked-services": "booked-services | Home repair",
    };
    document.title = DynamicTitle[pathname] || "Home repair";
  }, [pathname]);

  const [isDropdownVisible, setIsDropdownVisible] = useState("");

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };
  const handleNavigation = (value) => {
    setIsDropdownVisible(false);
    navigate(value);
  };

  const navitems = (
    <>
      <NavLink to={"/"}>
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to={"/login"}>
        <li>
          <a>login</a>
        </li>
      </NavLink>
      <NavLink to={"/registration"}>
        <li>
          <a>registration</a>
        </li>
      </NavLink>

      {user && (
        <div className="relative group">
          <button
            onClick={toggleDropdown}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-metal-700 focus:outline-none"
          >
            Dashboard
          </button>
          {isDropdownVisible && (
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className=" dark:bg-metal-700 absolute z-50 left-0 mt-2 w-48 bg-white  shadow-md rounded-lg "
            >
              <li
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleNavigation("/add-service")}
              >
                <NavLink to={"/add-service"}>Add Service</NavLink>
              </li>
              <li
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleNavigation("/manage-service")}
              >
                <NavLink to={"/manage-service"}>Manage Service</NavLink>
              </li>
              <li
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleNavigation("/booked-services")}
              >
                <NavLink to={"/booked-services"}>Booked Services</NavLink>
              </li>
              <li
                className="px-4 py-2 cursor-pointer"
                onClick={() => handleNavigation("/service-To-Do")}
              >
                <NavLink to={"/service-To-Do"}>Service To-Do</NavLink>
              </li>
            </motion.ul>
          )}
        </div>
      )}

      <SwitchComponent />
    </>
  );

  return (
    <div className="navbar container mx-auto py-4 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn p-2 btn-ghost lg:hidden"
          >
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
            className="menu font-semibold menu-sm dropdown-content space-y-2 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navitems}
          </ul>
        </div>
        <Link to={"/"} className="flex items-center">
          <img
            src={"logo"}
            className=" dark:rounded-lg w-12 md:w-16"
            alt="Home_repair"
          />

          <Link
            to={"/"}
            className="btn text-green-500 text-xl btn-ghost p-2 dark:text-metal-300 md:text-3xl font-bold font-berkshire"
          >
            Home repair
          </Link>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu flex items-center space-x-4 font-semibold menu-horizontal px-1">
          {navitems}
        </ul>
      </div>
      <div className="navbar-end ">
        {user ? (
          <>
            <div className="flex items-center space-x-2">
              <img
                className=" rounded-full h-12  shadow-lg w-12"
                src={user.photoURL}
                alt=""
              />
              <Button onClick={handleLogout} className="bg-rose-500  ">
                LogOut
              </Button>
            </div>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <Button className="bg-green-500">Login </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
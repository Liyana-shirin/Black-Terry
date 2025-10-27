import React, { useState, useRef, useEffect } from "react";
import { CiUser } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";
import { GoHeart } from "react-icons/go";
import { MdOutlineSearch } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-gray-500";

  // Pages where the special navbar should show
  const specialPages = ["/profile", "/order"];
  const isSpecialPage = specialPages.includes(location.pathname);

  const handleProfile = () => {
    navigate("/profile");
    setOpen(false);
  };

  const handleLogout = () => {
    // Optional: clear user auth here
    navigate("/login");
    setOpen(false);
  };

  return (
   <header className="w-full">
    <div className="w-full h-5 bg-white"></div>

    
      <div className="flex items-center justify-between bg-[#D4CABC] px-6 sm:px-10 py-4">
        {/* Left arrow */}
        <MdKeyboardArrowLeft className="text-gray-700 text-2xl cursor-pointer hover:text-black transition" />
        <p className="text-sm sm:text-base text-gray-800 font-semibold tracking-widest text-center">
          BLACK TERRY
        </p>
        <MdKeyboardArrowRight className="text-gray-700 text-2xl cursor-pointer hover:text-black transition" />
      </div>

    <div className="bg-white shadow-md transition">
      {isSpecialPage ? (
        <nav className="flex flex-wrap items-center justify-between px-4 sm:px-8 lg:px-20 py-4">
          <ul className="flex items-center gap-6">
            <li>
              <Link to="/shop" className={linkClass("/shop")}>
                Back to Shop
              </Link>
            </li>
            <li>
              <Link to="/order" className={linkClass("/order")}>
                Order
              </Link>
            </li>
          </ul>

          {/* User Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-200 transition"
            >
              <CiUser className="w-6 h-6 text-gray-700" />
              <HiChevronDown
                className={`w-5 h-5 text-gray-700 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                  onClick={handleProfile}
                >
                  Profile
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>
      ) : (
        // Default Navbar for all other pages
        <nav className="flex flex-wrap items-center justify-between px-4 sm:px-8 lg:px-20 py-4">
          {/* Left Links */}
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
            <li>
              <Link to="/shop" className={linkClass("/shop")}>
                NEW
              </Link>
            </li>
            <li>
              <Link to="/cart" className={linkClass("/cart")}>
                SHOP
              </Link>
            </li>
            <li>
              <Link to="/about" className={linkClass("/about")}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/contact" className={linkClass("/contact")}>
                CONTACT
              </Link>
            </li>
          </ul>

          {/* Center Logo */}
          <h1 className="font-bold px-15 text-2xl sm:text-3xl lg:text-4xl mx-auto md:mx-0 text-gray-900">
            BLACK-TERRY
          </h1>

          {/* Right Icons */}
                  <ul className="flex flex-row items-center justify-center gap-3 sm:gap-5 text-lg sm:text-xl text-gray-800">
            <li>
              <Link to="/" className="hover:text-gray-500 transition">
                <MdOutlineSearch />
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-gray-500 transition">
                <GoHeart />
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-gray-500 transition">
                <CiUser />
              </Link>
            </li>
            <li>
              <Link to="/emptycart" className="hover:text-gray-500 transition">
                <HiOutlineShoppingBag />
              </Link>
            </li>
          </ul>

        </nav>
      )}
      </div>
    </header>
  );
}

export default Header;

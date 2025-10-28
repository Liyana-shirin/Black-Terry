import React, { useState, useRef, useEffect } from "react";
import { CiUser } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";
import { GoHeart } from "react-icons/go";
import { MdOutlineSearch } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false); // Dropdown
  const [menuOpen, setMenuOpen] = useState(false); // Mobile nav
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
      ? "text-red-700 font-semibold"
      : "text-gray-700 hover:text-gray-500 transition";

  const specialPages = ["/profile", "/order"];
  const isSpecialPage = specialPages.includes(location.pathname);

  const handleProfile = () => {
    navigate("/profile");
    setOpen(false);
  };

  const handleLogout = () => {
    navigate("/login");
    setOpen(false);
  };

  return (
    <header className="w-full">
      {/* Top Small Header Bar */}
      <div className="flex items-center justify-between bg-[#D4CABC] px-6 sm:px-10 py-4">
        <MdKeyboardArrowLeft className="text-gray-700 text-2xl cursor-pointer hover:text-black transition" />
        <p className="text-sm sm:text-base text-gray-800 font-semibold tracking-widest text-center">
          BLACK TERRY
        </p>
        <MdKeyboardArrowRight className="text-gray-700 text-2xl cursor-pointer hover:text-black transition" />
      </div>

      <div className="bg-white shadow-md transition">
        {isSpecialPage ? (
          // Special Navbar (Profile, Order)
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
          // Default Navbar
          <nav className="relative flex items-center justify-between px-4 sm:px-8 lg:px-20 py-4">
            {/* Left: Hamburger + Nav Links */}
            <div className="flex items-center gap-6">
              {/* Hamburger for Mobile */}
              <button
                className="md:hidden text-2xl text-gray-800 hover:text-gray-600 transition"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
              </button>

              {/* Desktop Nav Links */}
              <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
                <li>
                  <Link to="/" className={linkClass("/")}>
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
            </div>

            {/* Center Logo */}
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900">
              BLACK-TERRY
            </h1>

            {/* Right Icons */}
            <ul className="flex items-center justify-center gap-3 sm:gap-5 text-lg sm:text-xl text-gray-800">
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

            {/* Mobile Menu (Slide Down) */}
            {menuOpen && (
              <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden z-50">
                <ul className="flex flex-col gap-3 p-4 text-gray-800 font-medium">
                  <li>
                    <Link
                      to="/"
                      onClick={() => setMenuOpen(false)}
                      className={linkClass("/")}
                    >
                      NEW
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cart"
                      onClick={() => setMenuOpen(false)}
                      className={linkClass("/cart")}
                    >
                      SHOP
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      onClick={() => setMenuOpen(false)}
                      className={linkClass("/about")}
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      onClick={() => setMenuOpen(false)}
                      className={linkClass("/contact")}
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;

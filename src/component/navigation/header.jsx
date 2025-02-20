import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Cart from "../../pages/orders/cart";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const totalQuantity = useSelector(
    (state) => state.authentication.totalQuantity
  );

  const options = [
    { label: "DRESSES" },
    {
      type: "group",
      name: "Clothing",
      items: [
        {
          value: "Designer Wear",
          label: "Designer Wear",
          className: "myOptionClassName",
        },
        { value: "Ethenic Wear", label: "Ethenic Wear" },
        { value: "Night Wear", label: "Night Wear" },
        { value: "Western Wear", label: "Western Wear" },
      ],
    },
    {
      type: "group",
      name: "Winter Wear",
      items: [
        { value: "Shrugs", label: "Shrugs" },
        { value: "Sweat Shirt", label: "Sweat Shirt" },
        { value: "Beach Clothing", label: "Beach Clothing" },
      ],
    },
    {
      type: "group",
      name: "Sports Wear",
      items: [
        { value: "T-shirts", label: "T-shirts" },
        { value: "Shorts", label: "Shorts" },
        { value: "Jackets", label: "Jackets" },
        { value: "Skirts", label: "Skirts" },
      ],
    },
    {
      type: "group",
      name: "SWIMWEAR",
      items: [
        { value: "Swimsuits", label: "Swimsuits" },
        { value: "Bikinis", label: "Bikinis" },
        { value: "Thermals", label: "Beach Clothing" },
        { value: "Outerwear", label: "Outerwear" },
      ],
    },
  ];
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option) => {
    setSelected(option.value);
    console.log("selected:", option.value);
  };

  return (
    <nav className="px-6 sm:px-20 md:px-24 lg:px-24 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <div className="text-white">Logo</div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="w-5/12 hidden sm:hidden lg:block">
          <form className="relative">
            <input
              type="text"
              placeholder="Search categories"
              className="text-white rounded-md bg-transparent border border-white w-full p-3"
            />
            <div className="absolute right-2 top-[10%]">
              <button className="p-3">
                <FaSearch className="text-white" />
              </button>
            </div>
          </form>
        </div>
        <div
          className={`w-full md:block md:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 items-center">
            <li>
              <Link
                to={"/"}
                className="block py-2 px-3 text-xs text-blue-700 rounded-sm md:p-0"
                aria-current="page"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="block py-2 px-3 text-xs rounded-sm md:border-0 hover:text-blue-700 md:p-0"
              >
                <Dropdown
                  options={options}
                  onChange={handleSelect}
                  value={selected}
                  placeholder="Select an option"
                />
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="block py-2 px-3 text-xs text-white rounded-sm md:border-0 hover:text-blue-700 md:p-0"
              >
                BABY & KIDS
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="block py-2 px-3 text-xs text-white rounded-sm md:border-0 hover:text-blue-700 md:p-0"
              >
                PRICING
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="block py-2 px-3 text-xs text-white rounded-sm md:border-0 hover:text-blue-700 md:p-0"
              >
                GAMES & SPORT
              </Link>
            </li>
            <li>
              <div
                className="p-3 cursor-pointer relative"
                onClick={() => setShowCart(!showCart)}
              >
                <FaShoppingCart className="text-white" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {totalQuantity}
                  </span>
                )}
              </div>
            </li>
          </ul>
        </div>
        {showCart && <Cart />}
      </div>
    </nav>
  );
};

export default Header;

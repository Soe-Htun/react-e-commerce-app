import React from "react";
import ShoppingLogo from "../../assets/shopping_logo.png";
import { IoMdSearch as SearchIcon } from "react-icons/io";
import { FaCartShopping as ShoppingIcon } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { MenuItem } from "../../../types/navbar"
import { FaCaretDown as DropdownIcon } from "react-icons/fa";

const IoMdSearch = SearchIcon as React.FC<React.SVGProps<SVGSVGElement>>;
const FaCartShopping = ShoppingIcon as React.FC<React.SVGProps<SVGSVGElement>>;
const FaCaretDown = DropdownIcon as React.FC<React.SVGProps<SVGSVGElement>>;

const Menu: MenuItem[] = [
  {
    id: 1,
    name: "Home",
    // link: '/#'
  },
  {
    id: 2,
    name: "Top Rated",
    // link: '/#services'
  },
  {
    id: 3,
    name: "Kids Wear",
    // link: '/#'
  },
  {
    id: 4,
    name: "Mens Wear",
    // link: '/#'
  },
  {
    id: 5,
    name: "Electronics",
    // link: '/#'
  }
]

const DropdownLinks: MenuItem[] = [
  {
    id: 1,
    name: 'Trending Products',
    // link: "/#"
  },
  {
    id: 2,
    name: 'Best Rated',
    // link: "/#"
  },
  {
    id: 3,
    name: 'Top Rated',
    // link: "/#"
  }
]

type NavbarProps = {
  handleOrderPopup: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <button
              className="font-bold text-2xl sm:text3xl flex gap-2 items-center"
            >
              <img src={ShoppingLogo} alt="shopping_icon" />
              <h3>Shopsy</h3>
            </button>
          </div>
          {/* search bar and order button */}
          <div className="flex justify-between items-center gap-3">
            <div className="group relative items-center hidden sm:block ">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-3 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800 pr-8"
              />
              <IoMdSearch className="absolute right-3 text-gray-500 group-hover:text-primary top-1/2 -translate-y-1/2" />
            </div>
            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="btn-primary flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Dark Mode Switch */}
            <div>
                <DarkMode />
            </div>

          </div>
        </div>
      </div>

      {/* lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          { Menu.map((item) => (
            <li key={item.id}>
              <button
                className="inline-block px-4 hover:text-primary duration-200"
              > { item.name } </button>
            </li>
          ))}

          <li className="group relative cursor-pointer">
            <button className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transitiona-all duration-200 group-hover:rotate-180" />
              </span>
            </button>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                { DropdownLinks.map((item) => (
                  <li key={item.id}>
                    <button
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    > { item.name } </button>
                  </li>
                )) }
              </ul>
            </div>

          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

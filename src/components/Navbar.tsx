// components
import SigninButton from "./Atoms/SigninButton";
import SignupButton from "./Atoms/SignupButton";
// media: icons, imgs etc
import logo from "./../assets/img/logotipo.png";
import { SearchBar } from "./Atoms/SearchBar";
import { FaEllipsisVertical } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  // toggle function
  const toggleNavbar = () => {
    // -- elements gotten with selectors
    const navbarButton = document.querySelector(".navbar-burger");
    const navbarMenu = document.querySelector(".navbar-menu");
    // - null checking after the selectors
    if (navbarButton && navbarMenu) {
      navbarButton.classList.toggle("hidden");
      navbarMenu.classList.toggle("hidden");
    }
  };
  
  return (
    <div>
      {/* --- desktop navbar */}
      <nav className="bg-trasnparent relative flex items-center justify-between px-4 py-4">
        <a className="text-3xl font-bold leading-none" href="/">
          <img style={{ height: "32px" }} src={logo} alt="" />
        </a>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center p-3 text-blue-600"
            onClick={toggleNavbar}
          >
            <Bars3Icon className="h-6 w-6" /> {/* hamburger menu icon */}
          </button>
        </div>
        <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform lg:mx-auto lg:flex lg:w-auto lg:items-center lg:space-x-6">
          <li>
            <a
              className="text-sm  font-bold text-red-600 hover:text-red-700"
              href="/"
            >
              Inicio
            </a>
          </li>
          <li className="text-gray-300">
            <FaEllipsisVertical className=" text-sm" />
          </li>
          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-500"
              href="/about"
            >
              Sobre Nosotros
            </a>
          </li>
          <li className="text-gray-300">
            <FaEllipsisVertical className=" text-sm" />
          </li>
          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-500"
              href="/recommended"
            >
              Recomendaciones
            </a>
          </li>
          <li className="text-gray-300">
            <FaEllipsisVertical className=" text-sm" />
          </li>
          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-500"
              href="/store"
            >
              Productos
            </a>
          </li>
          <li className="text-gray-300">
            <FaEllipsisVertical className=" text-sm" />
          </li>
          <li>
            <a
              className="text-sm text-gray-400 hover:text-gray-500"
              href="/blog"
            >
              Blog
            </a>
          </li>
        </ul>

        {/* authentication buttons */}
        <div className="hidden lg:inline-block ">
          <div className="flex gap-2">
            <SearchBar />
            <SigninButton />
            <SignupButton />
          </div>
        </div>
      </nav>

      {/* --- responsive navbar container */}
      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-900 opacity-25"></div>
        {/* actual navbar element */}
        <nav className="fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-gray-800 px-6 py-6">
          {/* visible items */}
          <div className="mb-8 flex items-center">
            <a className="mr-auto text-3xl font-bold leading-none" href="/">
              <img style={{ height: "24px" }} src={logo} alt="" />
            </a>
            <button onClick={toggleNavbar} className="navbar-close">
              <MdClose className=" text-3xl text-slate-500" />
            </button>
          </div>
          {/* hidden items */}
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-gray-700 hover:text-blue-600"
                  href="/"
                >
                  Inicio
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-gray-700 hover:text-blue-600"
                  href="/about"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-gray-700 hover:text-blue-600"
                  href="/recommended"
                >
                  Recomendaciones
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-gray-700 hover:text-blue-600"
                  href="/store"
                >
                  Productos
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-gray-700 hover:text-blue-600"
                  href="/blog"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/* also hidden (authentication buttons) */}
          <div className="mt-auto">
            <div className="flex flex-col gap-3 pt-6">
              <SigninButton />
              <SignupButton />
            </div>
            <p className="my-4 text-center text-xs text-gray-400">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}

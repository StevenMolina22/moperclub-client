// MobileNav.tsx
import Logo from "../../Common/CompanyLogo";
import NavLinks from "./Navlinks";
import { MdClose } from "react-icons/md";
import SignupButton from "../../Common/Buttons/SignupButton";
import SigninButton from "../../Common/Buttons/SigninButton";

interface MobileNavProps {
  isNavbarOpen: boolean;
  toggleNavbar: () => void;
}

const MobileNav = ({ isNavbarOpen, toggleNavbar }: MobileNavProps) => {
  return (
    <div
      className={`navbar-menu relative z-50 ${isNavbarOpen ? "block" : "hidden"}`}
    >
      <div className="navbar-backdrop fixed inset-0 bg-gray-900 opacity-25"></div>
      <nav className="fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-gray-800 px-6 py-6">
        <div className="mb-8 flex items-center">
          <Logo />
          <button onClick={toggleNavbar} className="navbar-close">
            <MdClose className="text-3xl text-slate-500" />
          </button>
        </div>
        <div>
          <NavLinks />
        </div>
        <div className="mt-auto">
          <div className="flex flex-col gap-3 pt-6">
            {/* Auth Buttons */}
            <div className="flex gap-2">
              <SigninButton />
              <SignupButton />
            </div>
          </div>
          <p className="my-4 text-center text-xs text-gray-400">
            <span>Copyright © 2021</span>
          </p>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;

// DesktopNav.tsx
import Logo from "../../Common/CompanyLogo";
import NavLinks from "./Navlinks";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { SearchBar } from "../../Utilities/SearchBar";
import SigninButton from "../../Common/Buttons/SigninButton";
import SignupButton from "../../Common/Buttons/SignupButton";
interface DesktopNavProps {
  toggleNavbar: () => void;
}

const DesktopNav = ({ toggleNavbar }: DesktopNavProps) => {
  return (
    <nav className="relative flex items-center justify-between bg-transparent px-4 py-4">
      <Logo />
      <div className="lg:hidden">
        <button
          className="navbar-burger flex items-center p-3 text-blue-600"
          onClick={toggleNavbar}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
      <NavLinks />
      <div className="hidden lg:inline-block">
        <div className="flex gap-2">
          <SearchBar />
          <div className="flex gap-2">
            <SigninButton />
            <SignupButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;

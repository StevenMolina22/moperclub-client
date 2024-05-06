// Navbar.tsx
import DesktopNav from './DesktopNavbar';
import MobileNav from './MobileNavbar';
import { useToggleNavbar } from '../../Utilities/NavbarUtilities';

const Navbar = () => {
  const { toggleNavbar, isNavbarOpen } = useToggleNavbar();

  return (
    <div>
      <DesktopNav toggleNavbar={toggleNavbar} />
      <MobileNav isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
    </div>
  );
};

export default Navbar;
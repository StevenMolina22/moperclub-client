import EmailForm from "../../Features/EmailFormContact";
import MenuItems from "./FooterMenuItems";
import { menuData } from "../../Utilities/FooterMenuData";
import { socialIconsData } from "../../Utilities/FooterMenuData";
import SocialIcons from "./FooterSocialIcons";

export default function Footer() {
  return (
    // Footer Wrapper
    <footer className="bg-white p-4 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                Moperclub
              </span>
            </a>
            {/* ---------- FORM SECTION (Email Form) --------- */}
            <EmailForm />
          </div>
          <MenuItems menuData={menuData} />
        </div>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />

      {/* ------- COPYRIGHT SECTION & SOCIAL ICONS ------- */}
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Moperclub™
          </a>
          . All Rights Reserved.
        </span>

        {/* ----- ICONS -----  */}
        <SocialIcons socialIconsData={socialIconsData} />
      </div>
    </footer>
  );
}

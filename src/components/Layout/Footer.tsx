import { useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

export default function Footer(): JSX.Element {
  // from input state declaration 
  const [formInput, setFormInput] = useState<string>("");

  // handles form submission
  const handleForm = () => {
    // Alert the form value
    alert(formInput + " the submit was a success");
  };

  // --- returned footer component
  return (
    // footer wrapper 
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Moperclub
              </span>
            </a>
            {/* email form */}
            <div className="flex items-center mt-3 gap-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent default form submission
                  handleForm(); // Call handleForm on form submission
                }}
              >
                <input
                  placeholder="Email"
                  value={formInput}
                  onChange={(e) => setFormInput(e.target.value)} // Update formInput state on input change
                  type="email"
                  className="p-2 pl-3 rounded-lg"
                />
              </form>
              <button
                onClick={handleForm}
                className="dark:text-white p-2 px-4 border rounded-lg"
              >
                {" "}
                Enviar{" "}
              </button>
            </div>
          </div>
          {/* info menu */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Moperclub
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Moperclub™
            </a>
            . All Rights Reserved.
          </span>
          {/* icons  */}
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebookF />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaDiscord />
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaTwitter />

              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaGithub />
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <TbWorldWww />

              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { sendPostRequest } from "../../api/postReq.api";

// TypeScript types declaration:
interface SignupFormProps {
  isPopupOpened: boolean;
  closePopUp: () => void;
}

// Define the expected response type
interface SignupResponse {
  token?: string; // token is optional because it may not exist in the case of failure
}

const SignupForm: React.FC<SignupFormProps> = ({
  isPopupOpened,
  closePopUp,
}) => {
  // Manage state for form handling
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Handle password visibility
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  function signUpHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Handle response, alert user of success or failure
    sendPostRequest<SignupResponse>("/users/register/", {
      email: email,
      username: username,
      password: password,
    })
      .then((response) => {
        const data = response.data;
        console.log(data);
        if (data.token) {
          alert("Sign up successful");
          setUsername("");
          setPassword("");
          setEmail("");
          setShowPassword(false);
          closePopUp();
        } else {
          alert("Sign up failed. Please try again later");
          setPassword("");
          setShowPassword(false);
        }
      })
      .catch((error) => {
        alert("An error occurred. Please try again later");
        console.error("Error:", error);
      });
  }

  // Handle modal behavior (close pop up if clicked outside it)
  const handleClosePopUp = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "ModelContainer") {
      setUsername("");
      setPassword("");
      setEmail("");
      setShowPassword(false);
      closePopUp();
    }
  };
  
  if (isPopupOpened !== true) return null;

  return (
    <div
      id="ModelContainer"
      onClick={handleClosePopUp}
      className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm"
    >
      <div className="w-full rounded-3xl bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Crea tu cuenta
          </h1>

          {/* ----- FORM SECTION ----- */}
          <form
            className="space-y-4 md:space-y-6"
            action="#"
            onSubmit={signUpHandler}
          >
            {/* --- USERNAME */}
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                value={username}
                id="username"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Your Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* --- EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Tu email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                id="email"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="name@company.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/*  --- PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Contraseña
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                id="password"
                placeholder={showPassword ? "password" : "••••••••"}
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={handleTogglePasswordVisibility}
                className="my-2 dark:text-white"
              >
                {showPassword ? "Hide" : "Show"} Password
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Recuerdame
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="dark:text-primary-500 text-sm font-medium text-red-500 hover:underline"
              >
                Olvidaste tu contraseña?
              </a>
            </div>

            {/* --- SUBMIT BUTTON */}
            <button
              type="submit"
              className="hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-gray-200 focus:outline-none focus:ring-4"
            >
              Registrate
            </button>

            {/* Already have an account */}
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Ya tienes una cuenta?{" "}
              <a
                href="#"
                className="text-primary-600 font-medium hover:underline dark:text-red-500"
              >
                Inicia sesion
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;

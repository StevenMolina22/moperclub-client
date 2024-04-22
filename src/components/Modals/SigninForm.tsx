import { handleSignIn } from "../../api/signIn.api.ts";
import { useState } from "react";

// type declaration
interface SignupFormProps {
  openPopUp: boolean;
  closePopUp: () => void;
}

const SinginForm = ({ openPopUp, closePopUp }: SignupFormProps) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [error, setError] = useState<string | null>(null);

  function alertSignIn() {
    handleSignIn("http://localhost:8000/users/login/", {
      // email: email,
      username: username, 
      password: password,
    }).then((data) => {
      console.log(data);
      if (data.token) {
        alert("Login successful");
      } else {
        alert("Login failed. Please try again.");
      }
    }).catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    });
  }
  const handlelosePopUp = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "ModelContainer") {
      closePopUp();
    }
  };

  if (openPopUp !== true) return null;

  return (
    <div
      id="ModelContainer"
      onClick={handlelosePopUp}
      className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm"
    >
      <div className=" w-full rounded-3xl bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Inicia sesion en tu cuenta
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            {/* <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Tu email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-red-500 bg-red-500 p-2.5 text-gray-900 focus:border-red-500 focus:ring-red-500 sm:text-sm dark:border-gray-600  dark:bg-gray-700 dark:placeholder-gray-400"
                placeholder="name@gmail.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                // required=""
              />
            </div> */}
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Tu username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-red-500 bg-red-500 p-2.5 text-gray-900 focus:border-red-500 focus:ring-red-500 sm:text-sm dark:border-gray-600  dark:bg-gray-700 dark:placeholder-gray-400"
                placeholder="name@gmail.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                // required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Tu contraseña
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                // required=""
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                    // required=""
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
            <button
              type="submit"
              onClick={alertSignIn}
              className="focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-gray-100 hover:bg-red-700 focus:outline-none focus:ring-4"
            >
              Inicia sesion
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              No tienes una cuenta todavia?{" "}
              <a
                href="#"
                className="font-medium text-red-500 hover:underline dark:text-red-500"
              >
                Registrate
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SinginForm;

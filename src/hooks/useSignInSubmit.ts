// useSignInSubmit.ts
import { sendPostRequest } from "../api/postReq.api";

type UseSignInSubmitProps = {
  closePopUp: () => void;
}

const useSignInSubmit = ({ closePopUp }: UseSignInSubmitProps) => {
  const handleSubmit = async (username: string, password: string) => {
    try {
      const data = await sendPostRequest("/users/login/", {
        username,
        password,
      });

      if (data.token) {
        alert("Login successful");
        closePopUp();
      } else {
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  };

  return handleSubmit;
};

export default useSignInSubmit;
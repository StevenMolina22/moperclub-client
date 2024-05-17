// useSignInSubmit.ts
import { sendPostRequest, Response } from "../api/postReq.api";

type UseSignInSubmitProps = {
  closePopUp: () => void;
};

type LoginResponse = {
  token?: string;
};

const useSignInSubmit = ({ closePopUp }: UseSignInSubmitProps) => {
  const handleSubmit = async (username: string, password: string) => {
    try {
      const response: Response<LoginResponse> = await sendPostRequest<LoginResponse>("/users/login/", {
        username,
        password,
      });
      
      const { data } = response;
      
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

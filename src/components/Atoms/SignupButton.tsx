import { useState } from "react";
import SignupForm from "./SignupForm";

const SignupButton = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const HandleRemovePopUp = () => setOpenPopup(false);

  return (
    <div className="lg:inline-block">
      <div>
        <button
          onClick={() => setOpenPopup(true)}
          className="lg:inline-block py-2 px-6 bg-red-500 hover:bg-red-600 text-sm text-white font-bold rounded-xl transition duration-200"
        >
          Sign Up
        </button>
      </div>
      {/* openpopup is boolean and handle remove popup is a function */}
      <SignupForm openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
    </div>
  );
};

export default SignupButton;

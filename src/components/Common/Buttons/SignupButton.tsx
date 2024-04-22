import { useState } from "react";
import SignupForm from "../../Modals/SignupForm";

const SignupButton = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const HandleRemovePopUp = () => setOpenPopup(false);

  return (
    <div className="lg:inline-block">
      <div>
        <button
          onClick={() => setOpenPopup(true)}
          className="rounded-xl bg-red-500 px-6 py-2 text-sm font-bold text-white transition duration-200 hover:bg-red-600 lg:inline-block"
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

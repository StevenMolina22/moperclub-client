import { useState } from "react";
import SignupForm from "../../Modals/SignupFormModal";

const SignupButton = () => {
  const [isPopupVisible, setOpenPopup] = useState(false);

  const closePopup = () => setOpenPopup(false);

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
      <SignupForm
        isPopupOpened={isPopupVisible}
        closePopUp={closePopup}
      />
    </div>
  );
};

export default SignupButton;

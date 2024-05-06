import { useState } from "react";
import SignupForm from "../../Modals/SignupFormModal";
import ButtonBasic from "./ButtonBasic";

const SignupButton = () => {
  const [isPopupVisible, setOpenPopup] = useState(false);

  const closePopup = () => setOpenPopup(false);

  return (
    <div className="lg:inline-block">
      <ButtonBasic
        variant="primary"
        onClick={() => setOpenPopup(true)}
        text="Sign Up"
      />
      {/* openpopup is boolean and handle remove popup is a function */}
      <SignupForm isPopupOpened={isPopupVisible} closePopUp={closePopup} />
    </div>
  );
};

export default SignupButton;

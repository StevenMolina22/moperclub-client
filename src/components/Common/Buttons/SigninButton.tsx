import { useState } from "react";
import SigninForm from "../../Modals/SigninFormModal";
import ButtonBasic from "./ButtonBasic";

const SigninButton = () => {
  // Handle popup visibility and closing
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const closePopUp = () => setIsPopupVisible(false);

  return (
    <div className="lg:inline-block">
      <ButtonBasic
        variant="secondary"
        onClick={() => setIsPopupVisible(true)}
        text="Sign In"
      />
      {/* openpopup is boolean and handle remove popup is a function */}
      <SigninForm isPopupOpened={isPopupVisible} closePopUp={closePopUp} />
    </div>
  );
};

export default SigninButton;

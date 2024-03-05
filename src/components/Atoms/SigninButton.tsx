import { useState } from "react";
import SigninForm from "./SigninForm";

const SigninButton = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const HandleRemovePopUp = () => setOpenPopup(false);

  return (
    <div className="lg:inline-block">
      <div>
        <button
          onClick={() => setOpenPopup(true)}
          className="lg:inline-block lg:ml-auto py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
        >
          Sign In
        </button>
      </div>
      {/* openpopup is boolean and handle remove popup is a function */}
      <SigninForm openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
    </div>
  );
};

export default SigninButton;

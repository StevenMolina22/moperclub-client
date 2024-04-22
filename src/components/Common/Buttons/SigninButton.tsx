import { useState } from "react";
import SigninForm from "../../Modals/SigninForm";

const SigninButton = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const HandleRemovePopUp = () => setOpenPopup(false);

  return (
    <div className="lg:inline-block">
      <div>
        <button
          onClick={() => setOpenPopup(true)}
          className="rounded-xl bg-gray-50 px-6 py-2 text-sm font-bold text-gray-900 transition duration-200  hover:bg-gray-100 lg:ml-auto lg:inline-block"
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

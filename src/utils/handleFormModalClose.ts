const handleModalClose = (
  closePopUp: () => void,
  setUsername: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  setUsername("");
  setPassword("");
  setShowPassword(false);
  closePopUp();
};

export default handleModalClose;

import { useState } from "react";
// type declaration for data info objects
interface MoreButtonProps {
  id: number;
  title: string;
  description: string;
  address: string;
}

const MoreButton = ({ id, title, description, address }: MoreButtonProps) => {
  // - dropdown visibility state
  const [showDropdown, setShowDropdown] = useState(false);

  // - dropdown toggler 
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    // -- returned dropdown component
    <div
      key={id}
      className="flex flex-col items-start gap-2 justify-self-center p-2 "
    >
      {/* show/hide button */}
      <button onClick={toggleDropdown} className="rounded2 text-blue-400">
        Ver mas
      </button>
      {/* shows dropdown if dropdown visibility is*/}
      {showDropdown && ( 
        // dropdown info data
        <ul
          style={{ backgroundColor: "#000000aa" }}
          className="w-100 rounded-md p-2 text-gray-100"
        >
          <li className=" text-lg font-bold">{title}</li>
          <li>{description}</li>
          <li>{address}</li>
          <li>
            <a
              href="/recommended"
              className=" text-blue-400 underline hover:no-underline"
            >
              Conoce Mas
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MoreButton;

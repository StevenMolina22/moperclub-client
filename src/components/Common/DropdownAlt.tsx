// type declaration
interface DropDownAltInterface {
  id: string; // id expected to be string because its a selector and not a pk
}

export function DropdownAlt( {id}: DropDownAltInterface ) {
  const dropdownAlt = () => {
    const dropDownAlt = document.querySelector(`#${id}`);
    if (dropDownAlt instanceof HTMLInputElement) {
      dropDownAlt.classList.toggle("hidden");
    }
  };
  return (
    <div
      key={id}
      className="mt-3 flex flex-col items-center gap-2 justify-self-center p-2"
    >
      <div>
        <button
          onClick={dropdownAlt}
          className="rounded-md border border-solid p-2 text-blue-400"
        >
          {" "}
          dropdownAlt{" "}
        </button>

        <ul id={id} className="w-100 hidden rounded-md border border-solid p-2">
          <li className="= hover:text-blue-400">Item 1</li>
          <li className="hover:text-blue-400">Item 2</li>
          <li className="hover:text-blue-400">Item 3</li>
        </ul>
      </div>
    </div>
  );
}

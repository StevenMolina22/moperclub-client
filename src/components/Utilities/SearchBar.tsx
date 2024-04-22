import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function SearchBar() {
  // function
  const handleSearch = () => {
    // -- getting element and its input
    const searchInput = document.getElementById("searchBarInput");
    // null type check
    if (searchInput instanceof HTMLInputElement) {
      const searchValue = searchInput.value;
      console.log(searchValue);
    }
  };
  const showSearch = () => {
    const searchInput = document.getElementById("searchBarInput");
    // null type check
    if (searchInput instanceof HTMLElement) {
      searchInput.classList.toggle("hidden");
    }};
  // return value
  return (
    <div className="flex items-center gap-2">
      <input
        onInput={handleSearch}
        id="searchBarInput"
        className="hidden rounded-2xl p-2 text-gray-900 text-sm"
        type="text"
        placeholder="Search.."
      />
      <button onClick={showSearch} id="searchButton">
        <MagnifyingGlassIcon className=" w-6 h-6 text-white" />
      </button>
      {/* <div>The thing you searched:</div>
      <div id="searchContent"></div> */}
    </div>
  );
}

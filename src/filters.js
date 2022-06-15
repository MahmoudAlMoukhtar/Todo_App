// Set up filters default object
let filters = {
  searchText: "",
  Toggle: false,
};

// getFilters
// Arguments: none
// Return value: filters object
const getFilters = () => filters;
// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none
const setFilters = ({ searchText, Toggle }) => {
  if (typeof searchText === "string") {
    filters.searchText = searchText;
  }

  if (typeof Toggle === "boolean") {
    filters.Toggle = Toggle;
  }
};
// Make sure to set up the exports

export { getFilters, setFilters };

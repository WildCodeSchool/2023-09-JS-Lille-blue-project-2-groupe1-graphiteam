import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filter, setFilter] = useState("");

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
FilterProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

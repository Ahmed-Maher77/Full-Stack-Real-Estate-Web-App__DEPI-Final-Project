import { createContext, useContext, useState } from "react";


const SearchBarContext = createContext();

const SearchBarProvider = ({ children }) => {
	const [filter, setFilter] = useState("");

	return (
		<SearchBarContext.Provider value={{ filter, setFilter }}>
			{children}
		</SearchBarContext.Provider>
	);
};
export default SearchBarProvider;


export const useSearchBar = () => useContext(SearchBarContext);

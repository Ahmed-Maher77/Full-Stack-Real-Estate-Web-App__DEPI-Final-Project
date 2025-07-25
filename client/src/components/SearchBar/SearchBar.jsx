import React, { useEffect, useRef, useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearchBar } from "../../utils/context/SearchBarContext";

const SearchBar = () => {
	const { filter, setFilter } = useSearchBar();
  const [errorMsg, setErrorMsg] = useState("");
	const inputRef = useRef(null);
	const { pathname, state } = useLocation();
	const navigate = useNavigate();

	const handleSearch = (e) => {
    setErrorMsg("");
		setFilter(e.target.value);
		if (pathname !== "/properties" && e.target.value.trim() !== "") {
			navigate("/properties", { state: { comingFrom: "homeSearch" } });
		}
	};

  const handleSearchClick = (e) => {
    e.preventDefault();
    if(filter.trim() === ""){
      setErrorMsg("Please enter a valid search term");
      return;
    }
    navigate("/properties", { state: { comingFrom: "homeSearch" } });
  }

  useEffect(()=>{
    if(pathname === "/properties" && state?.comingFrom === "homeSearch"){
      inputRef.current.focus();
    }
  },[pathname])

	return (
    <div style={{display: "flex", flexDirection: "column", gap: "5px", minWidth: "340px"}}>
		<div className="flexCenter search-bar" style={{display: "flex", flexWrap: "nowrap", gap: "10px", padding: "10px"}}>
			<HiLocationMarker color="var(--blue)" size={25} />
			<input
				style={{
					flexBasis: "100%",
				}}
				placeholder="Search by title/city/country..."
				type="text"
				value={filter}
				onChange={handleSearch}
				ref={inputRef}
			/>
			<button className="button" onClick={handleSearchClick}>Search</button>
		</div>
			{errorMsg && <p style={{color: "red", fontSize: "14px"}}>{errorMsg}</p>}
    </div>
	);
};

export default SearchBar;

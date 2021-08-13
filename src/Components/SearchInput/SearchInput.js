import React from "react";
import "./SearchInput.css";

const SearchInput = ({ setInput }) => {
    return (
        <input
            placeholder="Search for a country..."
            className="search-input"
            type="text"
            onChange={(e) => setInput(e.target.value)}
        />
    );
};

export default SearchInput;

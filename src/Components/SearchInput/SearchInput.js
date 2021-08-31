import React from "react";
import { Input } from "./style";

const SearchInput = ({ setInput }) => {
    return (
        <Input
            placeholder="Search for a country..."
            className="search-input"
            type="text"
            onChange={(e) => setInput(e.target.value)}
        />
    );
};

export default SearchInput;

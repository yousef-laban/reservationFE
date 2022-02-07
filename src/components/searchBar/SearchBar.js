import React from "react";
// Styling
import { SearchBarStyled, FlexStyle } from "../../styles";

const SearchBar = (props) => {
  return (
    <FlexStyle style={{ margin: "20px" }}>
      <SearchBarStyled
        placeholder="Search stores by name or locations"
        onChange={(event) => props.setQuery(event.target.value)}
      />
    </FlexStyle>
  );
};

export default SearchBar;

import React from "react";
import { useState } from "react";
import { Container } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { InputBase } from "@mui/material";

const Search = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <Container>
        {isActive ? (
          <SearchIcon onClick={() => setIsActive(false)} />
        ) : (
          <InputBase
            style={{ background: "white", borderRadius: "8px" }}
            id="input-with-icon-adornment"
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon onClick={() => setIsActive(true)} />
              </InputAdornment>
            }
          />
        )}
        {/* <SearchIcon />
        <SearchInput /> */}
      </Container>
    </>
  );
};

export default Search;

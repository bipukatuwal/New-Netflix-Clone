import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import Search from "../Search/index";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const IconContainer = styled.div`
  & > *:not(:last-child) {
    padding-right: 16px;
  }
`;

const CustomizedAppBar = styled(AppBar)`
  color: white;
  position: sticky;
  top: 0px;
  box-shadow: none;
`;

const CustomizedImage = styled.img`
  max-height: 29px;
`;
const CustomizedTypography = styled(Typography)`
  font-size: 14px;
  color: white;
  margin-left: 22px;
  text-decoration: none;
  margin-top: 15px;
  font-weight: bold;
`;
const CustomizedToolbar = styled(Toolbar)``;

const CustomizedBox = styled(Box)``;

export default function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <CustomizedAppBar
        className={colorChange ? "navbar colorChange" : "navbar"}
        position="sticky"
        color="transparent"
      >
        <CustomizedToolbar>
          <div style={{ flexGrow: 1, display: "flex" }}>
            <CustomizedImage src="/images/netflixlogo.png" />
            <CustomizedBox>
              <CustomizedTypography component={Link} to="/home">
                Home
              </CustomizedTypography>
              <CustomizedTypography component={Link} to="/series">
                Series
              </CustomizedTypography>
              <CustomizedTypography component={Link} to="/films">
                Films
              </CustomizedTypography>
              <CustomizedTypography component={Link} to="/latest">
                Latest
              </CustomizedTypography>
              <CustomizedTypography component={Link} to="/mylist">
                My List
              </CustomizedTypography>
            </CustomizedBox>
          </div>
          <IconContainer style={{ display: "flex" }}>
            <Search />
            <NotificationsIcon />
            <AccountCircleIcon />
          </IconContainer>
        </CustomizedToolbar>
      </CustomizedAppBar>
    </>
  );
}

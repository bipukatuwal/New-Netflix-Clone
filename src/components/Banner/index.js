import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const CustomizedDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  height: 500px;
`;
const CustomizedDivTwo = styled.div`
  display: flex;
  margin-top: 4%;
  margin-left: 10%;
`;

const CustomizedBottomOne = styled(Button)`
  background-color: white;
  color: black;
  margin-right: 12px;
  height: 50px;
  width: 21%;
  font-weight: bold;
`;
const CustomizedBottomTwo = styled(Button)`
  background-color: gray;
  height: 50px;
  width: 30%;
  font-weight: bold;
`;

const CustomGrid = styled(Grid)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const CustomizedBottomThree = styled(Button)`
  width: 15%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 30px;
  font-weight: bold;
  border-left: 3px solid white;
  border-radius: none;
  color: white;
  font-size: 16px;
`;

const BoxCustom = styled(Box)`
  margin-left: 10%;
`;
const ButtonCustom = styled(Button)`
  color: red;
  border: 1px solid;
  font-weight: bold;
  font-size: 15px;
`;

const TypographyCustom = styled(Typography)`
  position: relative;
  color: white;
  margin-top: 2%;
  margin-left: 10%;
  font-family: inherit;
  font-weight: bold;
`;

const Banner = ({ name, description, image }) => {
  console.log(image);
  return (
    <>
      <CustomizedDiv style={{ backgroundImage: `url(${image})` }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              style={{
                position: "relative",
                color: "white",
                marginTop: "23%",
                marginLeft: "10%",
                fontSize: "3rem",
                fontWeight: "bold",
              }}
            >
              {name}
            </Typography>
            <BoxCustom>
              <ButtonCustom variant="outlined"> Action </ButtonCustom>
              <ButtonCustom variant="outlined"> Crime </ButtonCustom>
              <ButtonCustom variant="outlined"> Drama </ButtonCustom>
            </BoxCustom>
            <TypographyCustom>{description}</TypographyCustom>
            <CustomizedDivTwo>
              <CustomizedBottomOne variant="contained">
                <PlayArrowIcon />
                Play
              </CustomizedBottomOne>
              <CustomizedBottomTwo variant="contained">
                <InfoIcon />
                More Info
              </CustomizedBottomTwo>
            </CustomizedDivTwo>
          </Grid>
          <CustomGrid item xs={6}>
            <CustomizedBottomThree>18+</CustomizedBottomThree>
          </CustomGrid>
        </Grid>
      </CustomizedDiv>
    </>
  );
};

export default Banner;

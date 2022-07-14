import React from "react";
import Banner from "../Banner";
import NetflixShow from "../NetflixShow";
import { BannerContentOne } from "../BannerContent/BannerContent";
import AvengerVideo from "../Video/bannerVideo.mp4";
import styled from "@emotion/styled";

const VideoCustom = styled.video`
  width: 100%;
  object-fit: fill;
  top: 0;
  padding: none;
  position: absolute;
`;

const Home = () => {
  return (
    <>
      <div>
        <VideoCustom loop={true} autoPlay={true} muted={true}>
          <source src={AvengerVideo} type="video/mp4" />
        </VideoCustom>
        <Banner
          name={BannerContentOne.name}
          description={BannerContentOne.description}
        />
        <NetflixShow />
      </div>
    </>
  );
};

export default Home;

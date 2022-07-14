import React from "react";
import Banner from "../Banner";
import NetflixShow from "../NetflixShow";
import { BannerContentTwo } from "../BannerContent/BannerContent";
import mh from "../Video/mh.mp4";
import styled from "@emotion/styled";

const VideoCustom = styled.video`
  width: 100%;
  object-fit: fill;
  top: 0;
  padding: none;
  position: absolute;
`;

const Series = () => {
  return (
    <div>
      <VideoCustom loop={true} autoPlay={true}>
        <source src={mh} type="video/mp4" />
      </VideoCustom>
      <Banner
        name={BannerContentTwo.name}
        description={BannerContentTwo.description}
      />
      <NetflixShow />
    </div>
  );
};

export default Series;

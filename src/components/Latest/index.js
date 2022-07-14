import React from "react";
import Banner from "../Banner";
import NetflixShow from "../NetflixShow";
import { BannerContentTwo } from "../BannerContent/BannerContent";

const Latest = () => {
  return (
    <div>
      <Banner
        name={BannerContentTwo.name}
        description={BannerContentTwo.description}
        image={BannerContentTwo.image}
      />
      <NetflixShow />
    </div>
  );
};

export default Latest;

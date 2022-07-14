import React from "react";
import Banner from "../Banner";
import NetflixShow from "../NetflixShow";
import { BannerContentOne } from "../BannerContent/BannerContent";

const Films = () => {
  return (
    <div>
      <Banner
        name={BannerContentOne.name}
        description={BannerContentOne.description}
        image={BannerContentOne.image}
      />
      <NetflixShow />
    </div>
  );
};

export default Films;

import React from "react";
// import Row from "../Row";
import api from "../../api/api";
import CardNetflix from "../Card";

const NetflixShow = () => {
  return (
    <div>
      <CardNetflix title="Popular on Netflix" fetchUrl={api.fetchPopular} />
      <CardNetflix title="Trending now" fetchUrl={api.fetchTrending} />
      <CardNetflix title="Upcoming on Netflix" fetchUrl={api.fetchUpcoming} />
      <CardNetflix title="Top Rated Movies" fetchUrl={api.fetchTopRated} />
    </div>
  );
};

export default NetflixShow;

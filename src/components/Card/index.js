import React from "react";
import useSWR from "swr";
import styled from "@emotion/styled";
import Carousel from "react-elastic-carousel";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CustomizedImage = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 500px;
  margin-right: 10px;
  &:hover {
    transform: scale(1.08);
  }
`;

const baseUrl = "https://image.tmdb.org/t/p/original";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CardNetflix = ({ fetchUrl, title, isLargeRow }) => {
  const { data, error } = useSWR(fetchUrl, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const fetchData = data.results;
  console.log("a", fetchData);

  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 8 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <>
      <div style={{ background: "black" }}>
        <Typography
          style={{
            color: "white",
            fontSize: "2rem",
            fontFamily: "Helvetica",
            marginLeft: "5%",
            fontWeight: "bold",
            position: "relative",
          }}
        >
          {title}{" "}
        </Typography>

        <Carousel breakPoints={breakPoints}>
          {fetchData.map((currVal) => {
            return (
              <Card key={currVal.id}>
                <CardActionArea>
                  <CardMedia />
                  <CustomizedImage
                    src={`${baseUrl}${currVal.poster_path}`}
                    alt={currVal.name}
                  />
                </CardActionArea>
              </Card>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default CardNetflix;

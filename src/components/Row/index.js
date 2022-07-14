import React from "react";
import useSWR from "swr";
import styled from "@emotion/styled";

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

const Row = ({ fetchUrl, title, isLargeRow }) => {
  const { data, error } = useSWR(fetchUrl, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const fetchData = data.results;
  console.log("a", fetchData);

  return (
    <>
      {" "}
      <div
        style={{
          background: "black",
          color: "red",
        }}
      >
        <h2>{title}</h2>
        <div style={{ display: "flex" }}>
          {fetchData.map((currVal) => (
            <div>
              <CustomizedImage
                key={currVal.id}
                src={`${baseUrl}${currVal.poster_path}`}
                alt={currVal.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;

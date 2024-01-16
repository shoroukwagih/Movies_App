import React from "react";
import { useSelector } from "react-redux";
import WatchMovieCard from "../components/WatchMovieCard";
import exampleImage from "../images/empty.png";



export default function WatchList() {
  const watchList = useSelector((state) => state.counter.watchList);

  return (
    <>
      {watchList.length == 0 ? (
        <>
          <h1 className="center">WatchList</h1>
          <div className="d-flex align-items-center justify-content-center">
            <img src={exampleImage} />
          </div>
        </>
      ) : (
        <>
          <h1 className="center">WatchListAll</h1>
          <div className="d-flex flex-wrap align-items-center g-3">
            {watchList.map((movieID) => {
              return (
                <div key={movieID} className="col-2" style={{ margin: "10" }}>
                  <WatchMovieCard movieID={movieID} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

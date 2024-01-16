import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter, increaseCounter } from "../store/slices/counter";

export default function MovieCard({ movieItem }) {
  const navigate = useNavigate();
  const posterPath = "https://image.tmdb.org/t/p/w500/" + movieItem.poster_path;

  const dispatch = useDispatch();
  const watchList = useSelector((state) => state.counter.watchList);

  return (
    <>
      <div
        className="d-flex flex-column"
        style={{
          borderRadius: "10px",
          margin: "10px",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            alignSelf: "self-end",
            zIndex: 1,
          }}
        >
          {watchList.indexOf(movieItem.id) === -1 ? (
            <FaRegHeart
              style={{ color: "white", fontSize: "40px" }}
              onClick={() => {
                dispatch(increaseCounter(movieItem.id));
              }}
            />
          ) : (
            <FaHeart
              style={{ color: "red", fontSize: "40px" }}
              onClick={() => {
                dispatch(decreaseCounter(movieItem.id));
              }}
            />
          )}
        </div>

        <img
          alt=""
          src={posterPath}
          style={{
            width: "100%",
            height: "300px",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        />

        <div
          className="d-flex flex-column bg-secondary"
          style={{
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            alignItems: "center",
            justifyContent: "center",
            padding: "3px",
          }}
        >
          <p
            style={{
              height: "40px",
              color: "white",
              textAlign: "center",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            {movieItem.title}
          </p>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => navigate(`/movie-details/${movieItem.id}`)}
          >
            More
          </button>
        </div>
      </div>
    </>
  );
}

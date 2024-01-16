import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter, increaseCounter } from "../store/slices/counter";
import { axiosInstanceListMovie } from "../apis/config";
import { API_KEY } from "../apis/API_KEY";
import LanguageContext from "../context/language";

export default function WatchMovieCard({ movieID }) {
  const [movie, setMovie] = useState({});
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    axiosInstanceListMovie
      .get(`/${movieID}?api_key=${API_KEY}&language=${language}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  const posterPath = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;

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
          {watchList.indexOf(movie.id) === -1 ? (
            <FaRegHeart
              style={{ color: "white", fontSize: "40px" }}
              onClick={() => {
                dispatch(increaseCounter(movie.id));
              }}
            />
          ) : (
            <FaHeart
              style={{ color: "red", fontSize: "40px" }}
              onClick={() => {
                dispatch(decreaseCounter(movie.id));
              }}
            />
          )}
        </div>

        <img
          alt="Poster Image"
          src={posterPath}
          style={{
            width: "100%",
            height: "300px",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        />

        <div
          className="d-flex flex-column bg-secondary "
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
            {movie.title}
          </p>

          <button
            type="button"
            class="btn btn-danger"
            onClick={() => navigate(`/movie-details/${movie.id}`)}
          >
            More
          </button>
        </div>
      </div>
    </>
  );
}

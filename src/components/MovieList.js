import React, { useState, useEffect } from "react";
import axiosInstance from "./axiosInstance";
import { useNavigate } from "react-router-dom";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("/movie/popular")
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <>
      <div className="container text-center my-5">
        <h3 className="fs-2 p-3 fw-bold text-primary">Popular Movies</h3>
      </div>

      <div className="container mb-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {movies?.map((movie) => (
            <div key={movie.id} className="col">
              <div className="card h-100 shadow">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="card-img-top rounded"
                  alt={movie.title}
                />
                <div className="card-body">
                  <h5 className="card-title fs-5 mb-2 text-dark">{movie.title}</h5>
                  <button
                    className="bg-primary fs-5 text-light"
                    style={{ borderRadius: "8px", cursor: "pointer" }}
                    onClick={() => navigate(`/moviedetails/${movie.id}`)}
                  >
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

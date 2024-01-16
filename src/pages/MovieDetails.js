import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../apis/API_KEY";
import { axiosInstanceListMovie } from "../apis/config";
import LanguageContext from "../context/language";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { language } = useContext(LanguageContext);
  const params = useParams();
  // useEffect(() => {
  //   axiosInstanceListMovie
  //     .get(`/${params.id}?api_key=${API_KEY}&language=${language}`)
  //     .then((res) => setMovieDetails(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    fetchDataBasedOnLanguage(language);
  }, [language]);

  const fetchDataBasedOnLanguage = (lang) => {
    axiosInstanceListMovie
      .get(`/${params.id}?api_key=${API_KEY}&language=${language}`)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  };

  const posterPath =
    "https://image.tmdb.org/t/p/w500/" + movieDetails.poster_path;

  const getDirectionStyle = () => {
    // Set the text direction based on the selected language
    return language === "ar" ? { direction: "rtl" } : { direction: "ltr" };
  };
  return (
    <div style={getDirectionStyle()}>
      <div className="d-flex flex-column">
        <div className="d-flex p-3">
          <div className="col-3">
            <img
              src={posterPath}
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="col-9 " style={{ marginLeft: "20px" }}>
            <h2>{movieDetails.title}</h2>
            <span style={{ fontSize: "12px" }}>
              {movieDetails.release_date}
            </span>
            <hr />
            <p>{movieDetails.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

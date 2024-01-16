import { useContext, useEffect, useState } from "react";
import { axiosInstanceListMovie } from "../apis/config";
import { API_KEY } from "../apis/API_KEY";
import MovieCard from "../components/MovieCard";
import PaginatedList from "../components/PaginatedList";
import LanguageContext from "../context/language";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    fetchDataBasedOnLanguage(language);
  }, [language]);

  const fetchDataBasedOnLanguage = (lang) => {
    axiosInstanceListMovie
      .get(`popular?api_key=${API_KEY}&language=${lang}`)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };

  const pagination = (page) => {
    axiosInstanceListMovie
      .get(`popular?api_key=${API_KEY}&page=${page}&language=${language}`)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };
  const getDirectionStyle = () => {
    return language === "ar" ? { direction: "rtl" } : { direction: "ltr" };
  };
  return (
    <>
      <div style={getDirectionStyle()}>
        <h1 className="center">MovieList</h1>
        <div className="d-flex flex-wrap align-items-center g-3">
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="col-2" style={{ margin: "10" }}>
                <MovieCard movieItem={movie} />
              </div>
            );
          })}
        </div>
        <div className="d-flex align-items-center justify-content-center ">
          <PaginatedList paginationFun={(page) => pagination(page)} />
        </div>
      </div>
    </>
  );
}

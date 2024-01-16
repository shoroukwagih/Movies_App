import React, { useState, useEffect } from "react";
import axiosInstance from "./axiosInstance";
import { useParams } from "react-router-dom";

export default function Moviedetails() {
    const [movieDetails, setMovieDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axiosInstance
            .get(`/movie/${id}`)
            .then((res) => setMovieDetails(res.data))
            .catch((err) => console.log(err));
    },
        [id]);


    return (
        <>
            <div>
                <div className="container text-center my-5">
                    <h3 className="fs-1 p-3 fw-bold">{movieDetails.title}</h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            {/* Display movie poster */}
                            <img
                                src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
                                className="img-fluid rounded"
                                alt={movieDetails.title}
                            />
                        </div>
                        <div className="col-md-8">
                            {/* Display movie details in a card */}
                            <div className="card">
                                <div className="card-body p-3">
                                    <h5 className="card-title fs-1 fw-bold text-primary">{movieDetails.title}</h5>
                                    <p className="card-text lh-1 fs-4">{movieDetails.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
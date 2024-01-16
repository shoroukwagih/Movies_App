import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const MovieList = React.lazy(() => import("../pages/MovieList"));
const MovieDetails = React.lazy(() => import("../pages/MovieDetails"));
const WatchList = React.lazy(() => import("../pages/WatchList"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Forms = React.lazy(() => import("../pages/Forms"));

export default function Router() {
  return (
    <Suspense fallback={<h5>Loading ...</h5>}>
      <Routes>
        <Route path="" element={<MovieList />} />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
        <Route path="/watch-list" element={<WatchList />} />
        <Route path="/register" element={<Forms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

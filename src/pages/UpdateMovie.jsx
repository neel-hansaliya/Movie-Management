import React from "react";
import { useParams } from "react-router-dom";
import MovieForm from "../component/MovieCard";

const UpdateMovie = () => {
    const { id } = useParams();
    return (
        <div className="container mt-5">
            <h1>Update Movie</h1>
            <MovieForm movieId={id} />
        </div>
    );
};

export default UpdateMovie;

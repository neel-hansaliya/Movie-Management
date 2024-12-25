import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteMovie } from "../redux/movieSlice";

const MovieTable = () => {
    const movies = useSelector((state) => state.movies.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Table striped bordered hover className="mt-3">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movie, index) => (
                    <tr key={movie.id}>
                        <td>{index + 1}</td>
                        <td>{movie.title}</td>
                        <td>{movie.genre}</td>
                        <td>{movie.releaseDate}</td>
                        <td>
                            <Button
                                variant="warning"
                                onClick={() => navigate(`/update-movie/${movie.id}`)}
                            >
                                Update
                            </Button>{" "}
                            <Button
                                variant="danger"
                                onClick={() => dispatch(deleteMovie(movie.id))}
                            >
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default MovieTable;

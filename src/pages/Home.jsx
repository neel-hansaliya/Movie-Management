import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../component/MovieCard';
import { Container, Row } from 'react-bootstrap';

const Home = () => {
    const movies = useSelector((state) => state.movies);

    return (
        <Container className="mt-3">
            <Row>
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    <p>No movies available. Click on "Add Movie" to get started!</p>
                )}
            </Row>
        </Container>
    );
};

export default Home;

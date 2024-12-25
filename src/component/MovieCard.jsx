import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

    return (
        <Col md={4} className="mb-4">
            <Card>
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.description}</Card.Text>
                    <Button
                        variant="primary"
                        onClick={() => navigate(`/edit/${movie.id}`)}
                    >
                        Update
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MovieCard;

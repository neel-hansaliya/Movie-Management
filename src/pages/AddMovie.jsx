import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/movieSlice';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const AddMovie = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description) {
            dispatch(addMovie({ id: Date.now(), title, description }));
            navigate('/');
        }
    };

    return (
        <Container className="mt-4">
            <h2>Add Movie</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter movie title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter movie description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button type="submit" variant="success">Submit</Button>
            </Form>
        </Container>
    );
};

export default AddMovie;

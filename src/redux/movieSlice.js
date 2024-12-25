import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movies',
    initialState: [],
    reducers: {
        addMovie: (state, action) => {
            state.push(action.payload);
        },
        updateMovie: (state, action) => {
            const index = state.findIndex((movie) => movie.id === action.payload.id);
            if (index >= 0) state[index] = action.payload;
        },
    },
});

export const { addMovie, updateMovie } = movieSlice.actions;
export default movieSlice.reducer;

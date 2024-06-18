import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchReviews =
    createAsyncThunk('reviews/fetchReviews',
        async () => {
        const response = await fetch('http://localhost:8000/reviews');
        return response.json();
});

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviews: [],
        status: 'empty',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.reviews = action.payload;
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectReviews = (store) => store.reviewsReducer.reviews;

export default reviewsSlice.reducer;
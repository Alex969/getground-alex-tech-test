import { createSlice } from "@reduxjs/toolkit";
import { BookState } from "../../components/BookList/types";
import { fetchBooks } from "../../services/api";

// Define a type for the slice state
const initialState: BookState = {
    books: [],
    loading: false,
    error: null,
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchBooks.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchBooks.fulfilled, (state, action) => {
          state.books = action.payload;
          state.loading = false;
          state.error = null;
        })
        .addCase(fetchBooks.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });

export default booksSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "../../services/api";

export interface BookState {
    books: BookType[];
    loading: boolean;
    error: any;
};

export interface BookType {
    book_author: string[];
    book_publication_city: string;
    book_publication_country: string;
    book_publication_year: string;
    book_pages: number;
    book_title: string;
    id: number;
};

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
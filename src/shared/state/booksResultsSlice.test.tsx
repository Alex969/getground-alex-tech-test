import { configureStore } from '@reduxjs/toolkit';
import booksSlice from "./booksResultsSlice";
import { fetchBooks } from '../../services/api';

describe('booksSlice', () => {
    let store: any;
    const requestId = 'id';
    const requestArg = { page: 1, itemsPerPage: 20, filters: [] };
    const mockBooks = [
        {
            book_author: ["John Doe"],
            book_publication_city: "London",
            book_publication_country: "UK",
            book_publication_year: "1600",
            book_pages: 23,
            book_title: "Lorem",
            id: 10
        },
        {
            book_author: ["Jane Doe"],
            book_publication_city: "Paris",
            book_publication_country: "France",
            book_publication_year: "1650",
            book_pages: 230,
            book_title: "Ipsum",
            id: 35   
        },
      ]; 

    beforeEach(() => {
        store = configureStore({ reducer: { books: booksSlice } });
    });

    it('should handle initial state', () => {
        const initialState = {
            books: [],
            loading: false,
            error: null,
        };
        expect(store.getState().books).toEqual(initialState);
    });

    it('should handle fetchBooks.pending action', () => {
        store.dispatch(fetchBooks.pending(requestId, requestArg ));
        const expectedState = {
            books: [],
            loading: true,
            error: null,
        };
        expect(store.getState().books).toEqual(expectedState);
    });

    it('should handle fetchBooks.fulfilled action', () => {
        store.dispatch(fetchBooks.fulfilled(mockBooks, requestId, requestArg));
        const expectedState = {
            books: mockBooks,
            loading: false,
            error: null,
        };
        expect(store.getState().books).toEqual(expectedState);
    });

    it('should handle fetchBooks.rejected action', () => {
        const mockError = 'Error fetching books';
        store.dispatch(fetchBooks.rejected(new Error(mockError), requestId, requestArg));
        const expectedState = {
            books: [],
            loading: false,
            error: mockError,
        };
        expect(store.getState().books).toEqual(expectedState);
    });
});

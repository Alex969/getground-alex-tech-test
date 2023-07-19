import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import BooksResults from "./booksResults";
import { fetchBooks as fetchBooksMock } from "../../services/api";
import booksSlice from "../../shared/state/booksResultsSlice";
import * as mockReduxHooks from "../../shared/state/hooks";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../services/api");

const mockFetchBooks = fetchBooksMock as any as jest.Mock;

const mockBookList = [
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

let mockDispatch: any;

describe("BooksResults", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockDispatch = jest.fn();
    jest.spyOn(mockReduxHooks, 'useAppDispatch').mockReturnValue(mockDispatch);
  });

  it("renders a loading message on the page", () => {
    mockFetchBooks.mockReturnValue(() => new Promise(() => {}));

    const loadingState = {
      books: {
        books: [],
        loading: true,
        error: null,
      },
    };
    
    const store = configureStore({
      reducer: {
        books: booksSlice,
      },
      preloadedState: loadingState,
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <BooksResults />
        </MemoryRouter>
      </Provider>
    );

    const loadingElement = screen.getByText("Getting your books ready...");
    expect(loadingElement).toBeVisible();
  });

  it("renders an error message on the page", () => {
    mockFetchBooks.mockReturnValue(() => new Promise(() => {}));

    const errorState = {
      books: {
        books: [],
        loading: false,
        error: 'Oops, something went wrong !',
      },
    };
    
    const store = configureStore({
      reducer: {
        books: booksSlice,
      },
      preloadedState: errorState,
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <BooksResults />
        </MemoryRouter>
      </Provider>
    );

    const errorElement = screen.getByText("Oops, something went wrong !");
    expect(errorElement).toBeVisible();
  });

  it("dispatches fetchBooks action on mount", () => {
    
    const successState = {
      books: {
        books: mockBookList,
        loading: false,
        error: null,
      },
    };
    
    const store = configureStore({
      reducer: {
        books: booksSlice,
      },
      preloadedState: successState,
    });
    
    render(
      <Provider store={store}>
        <MemoryRouter>
          <BooksResults />
        </MemoryRouter>      
      </Provider>
    );

    expect(mockDispatch).toHaveBeenCalledWith(
      mockFetchBooks({ page: 1, itemsPerPage: 20, filters: [] })
    );
  });
});

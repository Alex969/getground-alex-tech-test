import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import BookList from './bookList';
import * as mockReduxHooks from "../../shared/state/hooks";
import configureStore from 'redux-mock-store';

const mockStore = configureStore()

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

const initialStateMock = {
    books: [],
    loading: false,
    error: null, 
}

describe('BookList', () => {
    it('should render book list when there are books', () => {
        jest.spyOn(mockReduxHooks, 'useAppSelector').mockReturnValueOnce(mockBookList);
        const store = mockStore(initialStateMock);

        render(
            <Provider store={store}>
                <BookList />
            </Provider>
        );
            
        expect(screen.getByText(mockBookList[0].book_title)).toBeVisible();
        expect(screen.getByText(mockBookList[1].book_title)).toBeVisible();
    });

    it('should NOT render book list when there are no books', () => {
        jest.spyOn(mockReduxHooks, 'useAppSelector').mockReturnValueOnce([]);
        const store = mockStore(initialStateMock);

        render(
            <Provider store={store}>
                <BookList />
            </Provider>
        );

        expect(screen.getByText('Sorry an error has occured')).toBeVisible();
    });
});
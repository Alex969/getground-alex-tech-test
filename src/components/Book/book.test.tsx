import { render, screen } from '@testing-library/react';
import Book from './book';
import { BookType } from './types';

const mockBook: BookType = {
    book_author: ["John Doe"],
    book_publication_city: "London",
    book_publication_country: "UK",
    book_publication_year: "1600",
    book_pages: 23,
    book_title: "Lorem",
    id: 10
};  
  
describe('book', () => {
    it('should render a book with the appropriate details', () => {
        render(<Book book={mockBook} />)
        expect(screen.getByText(`${mockBook.book_title}`)).toBeVisible();
        expect(screen.getByText(`Author: ${mockBook.book_author}`)).toBeVisible();
        expect(screen.getByText(`Publication Year: ${mockBook.book_publication_year}`)).toBeVisible();
        expect(screen.getByText(`Publication City: ${mockBook.book_publication_city}`)).toBeVisible();
        expect(screen.getByText(`Publication Country: ${mockBook.book_publication_country}`)).toBeVisible();
        expect(screen.getByText(`Pages: ${mockBook.book_pages}`)).toBeVisible();
    });
});
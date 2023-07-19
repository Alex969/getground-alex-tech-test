export interface BookType {
    book_author: string[];
    book_publication_city: string;
    book_publication_country: string;
    book_publication_year: string;
    book_pages: number;
    book_title: string;
    id: number;
};

export interface BookProps {
    book: BookType;
};
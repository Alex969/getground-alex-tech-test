import { BookType } from "../Book/types";

export interface BookState {
    books: BookType[];
    loading: boolean;
    error: any;
};
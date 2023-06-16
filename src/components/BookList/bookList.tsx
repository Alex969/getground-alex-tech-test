import {  useAppSelector } from '../../shared/state/hooks';
import { List, Divider, ListItem } from '@mui/material';
import { BookState } from './types';
import Book from '../Book/book';
import { Fragment } from 'react';

const BookList = () => {
  const books = useAppSelector((state: { books: BookState }) => state.books.books);

  if (!books || books?.length < 1) {
    return <p>Sorry an error has occured</p>;
  }

  return (
    <List>
      {books.map((book) => (
        <Fragment key={book.id}>
        <ListItem>
          <Book book={book} />
        </ListItem>
        <Divider light />
        </Fragment>
      ))}
    </List>
  );
};

export default BookList;

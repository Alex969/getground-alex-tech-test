import { Component } from "react";
import { Card, CardContent, Typography } from '@mui/material';
import { BookProps } from "./types";

export default class Book extends Component<BookProps> {
  render() {
    const { book } = this.props;
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="h3">
            {book.book_title}
          </Typography>
          <Typography variant="body1">
            Author: {book.book_author.join(", ")}
          </Typography>
          <Typography variant="body1">
            Publication Year: {book.book_publication_year}
          </Typography>
          <Typography variant="body1">
            Publication City: {book.book_publication_city}
          </Typography>
          <Typography variant="body1">
            Publication Country: {book.book_publication_country}
          </Typography>
          <Typography variant="body1">
            Pages: {book.book_pages}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

import { Alert, ButtonGroup } from "@mui/material";
import BookList from "../BookList";
import NavButton from "../NavButton";
import SearchField from "../SearchField";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchBooks } from "../../services/api";
import { useAppDispatch, useAppSelector } from "../../shared/state/hooks";
import { BookState } from "../BookList/types";

const BooksResults = () => {
    const { page } = useParams<{ page: string }>();
    const showHomeButton = (page as string > '0');
    const showPrevButton = (page as string > '1');
    const loading = useAppSelector((state: { books: BookState }) => state.books.loading);
    const error = useAppSelector((state: { books: BookState }) => state.books.error);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchBooks({ page: parseInt(page || '1', 10), itemsPerPage: 20, filters: [] }));
      }, [dispatch, page]);
    
      if (loading) {
        return <p>Getting your books ready...</p>;
      }
    
      if (error) {
        return (
          <Alert severity="error">
              Oops, something went wrong !  
          </Alert>
        );
      }
    
    return(
        <>
        <SearchField />
        <BookList />
        <ButtonGroup color="secondary" aria-label="medium secondary button group">
            {showPrevButton ? <NavButton navigate={navigate} newPage={parseInt(page || '2') - 1} filters={[]} children={"Prev"} /> : null}
            {showHomeButton ? <NavButton navigate={navigate} newPage={''} filters={[]} children={"Home"} /> : null}
            <NavButton navigate={navigate} newPage={parseInt(page || '0') + 1} filters={[]} children={"Next"} />
        </ButtonGroup>
        </>
    );
};

export default BooksResults;
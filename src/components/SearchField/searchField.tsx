import { useState } from "react";
import { useAppDispatch } from "../../shared/state/hooks";
import { fetchBooks } from "../../services/api";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";


const SearchField = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useAppDispatch();
    const { page } = useParams<{ page: string }>();

    const handleSearchFilter = () => {
        const filters = searchQuery
            ? [{ type: 'all', values: [searchQuery] }]
            : [];

        dispatch(fetchBooks({ page: parseInt(page || '', 10), itemsPerPage: 20, filters }));
        };


    return (
        <>
        <TextField
            label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleSearchFilter();
                }

            } } />
        <Button onClick={handleSearchFilter}>Submit</Button></>
    );
};

export default SearchField;
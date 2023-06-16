import axios from "axios";
import { FetchBooksParams } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (
        { page = 1, itemsPerPage = 20, filters = [] }: FetchBooksParams
    ) => {
    try {
      const response = await axios.post('http://nyx.vima.ekt.gr:3000/api/books', {
        page,
        itemsPerPage,
        filters,
      });  
      const { books } = response.data;

      return books;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
);

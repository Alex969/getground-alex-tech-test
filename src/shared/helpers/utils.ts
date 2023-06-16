import { NavigateFunction } from "react-router-dom";

export const handlePageChange = (navigate: NavigateFunction, newPage: number | string, filters: { type: string; values: string[] }[]) => {
    navigate(`/books/${newPage}`, {
      state: { filters },
    });
 };
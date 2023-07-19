import { NavigateFunction } from "react-router-dom";

export interface NavButtonProps {
    navigate: NavigateFunction;
    newPage: number | string, 
    filters: { type: string; values: string[] }[],
    children: string
};
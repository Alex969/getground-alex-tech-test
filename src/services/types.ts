export interface FetchBooksParams {
    page: number | string | undefined, 
    itemsPerPage: number, 
    filters: { type: string; values: string[] }[]
}
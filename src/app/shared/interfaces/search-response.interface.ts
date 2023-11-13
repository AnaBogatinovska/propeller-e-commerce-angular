import { SearchResult } from "./search-result.interface"

export interface SearchResponse {
    items: SearchResult
    totalItems: number
}
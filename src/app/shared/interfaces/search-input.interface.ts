import { SearchResultSortParameter } from "./search-result-sort-parameter.interface"

export interface SearchInput {
    term?: string
    collectionId?: string
    collectionSlug?: string
    groupByProduct?: boolean
    take?: number
    skip?: number
    sort?: SearchResultSortParameter
}
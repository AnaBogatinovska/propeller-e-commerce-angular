import { SortOrder } from "app/shared/types/app.types";

export interface ProductSortParameter {
    id?: SortOrder,
    createdAt?: SortOrder,
    updatedAt?: SortOrder,
    name?: SortOrder,
    slug?: SortOrder,
    description?: SortOrder,
}
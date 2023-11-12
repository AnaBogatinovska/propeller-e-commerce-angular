import { SortOrder } from "app/shared/types/app.types";

export interface ProductFilterParameter {
    id?: SortOrder,
    createdAt?: SortOrder,
    updatedAt?: SortOrder,
    lanugageCode?: SortOrder,
    name?: SortOrder,
    slug?: SortOrder,
    description?: SortOrder,
}
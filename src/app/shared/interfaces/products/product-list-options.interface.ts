import { LogicalOperator } from "app/shared/types/app.types";

export interface ProductListOptions {
    skip?: number;
    take?: number;
    sort?: number;
    filter?: number;
    filterOperator?: LogicalOperator;
}
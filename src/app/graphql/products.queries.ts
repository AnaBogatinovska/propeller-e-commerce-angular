import { gql } from "apollo-angular";
import { ProductListResultFragment } from "./products.fragments";

const GET_PRODUCT_LIST = gql`
  query GetProductLists($opts: ProductListOptions) {
    products(options: $opts){
      ...ProductListResult
    }
  }
  ${ProductListResultFragment}
`

export { GET_PRODUCT_LIST };
import { gql } from "apollo-angular";
import { PRODUCT_LIST_RESULT_FRAGMENT } from "./products.fragments";

const GET_PRODUCT_LIST = gql`
  query GetProductLists($opts: ProductListOptions) {
    products(options: $opts){
      ...ProductListResult
    }
  }
  ${PRODUCT_LIST_RESULT_FRAGMENT}
`

export { GET_PRODUCT_LIST };
import { gql } from "apollo-angular";
import { PRODUCT_FRAGMENT, PRODUCT_LIST_RESULT_FRAGMENT } from "./products.fragments";

const GET_PRODUCT_LIST = gql`
  query GetProductLists($opts: ProductListOptions) {
    products(options: $opts){
      ...ProductListResult
    }
  }
  ${PRODUCT_LIST_RESULT_FRAGMENT}
`

const GET_PRODUCT_BY_ID = gql`
  query GetProductById($id: ID!) {
    product(id: $id) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
`

export { GET_PRODUCT_LIST, GET_PRODUCT_BY_ID };
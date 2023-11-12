import { gql } from "apollo-angular";

const PRODUCT_LIST_RESULT_FRAGMENT = gql`
fragment ProductListResult on ProductList {
    items {
        name
       variants {
        name
       }
        featuredAsset {
            name
            width
            height
            source
            preview
            tags {
                value
            }
        }
    }
    totalItems
}
`

export { PRODUCT_LIST_RESULT_FRAGMENT };
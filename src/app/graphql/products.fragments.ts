import { gql } from "apollo-angular";

const ProductListResultFragment = gql`
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

export { ProductListResultFragment };
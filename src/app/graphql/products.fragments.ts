import { gql } from "apollo-angular";

const PRODUCT_LIST_RESULT_FRAGMENT = gql`
fragment ProductListResult on ProductList {
    items {
        id
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
const PRODUCT_FRAGMENT = gql`
fragment Product on Product {
    id
    name
    description
    slug
    variants {
    id
    name
    assets{
        source
    }
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
    assets {
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
`

export { PRODUCT_LIST_RESULT_FRAGMENT, PRODUCT_FRAGMENT };
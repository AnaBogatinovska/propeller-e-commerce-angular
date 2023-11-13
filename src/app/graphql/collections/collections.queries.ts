import { gql } from "apollo-angular";

const GET_COLLECTIONS = gql`
query LoadCollections($opts: CollectionListOptions) {
    collections(options: $opts) {
      items {
        id
        name
        children {
            id
            name
        }
      }
      totalItems
    }
  }
`

const SEARCH = gql`
query search($opts: SearchInput!) {
    search(input: $opts) {
      totalItems
      items {
                 price {
            ...on SinglePrice {
              value
            }
          }
          currencyCode
          productName
          productId
          productVariantName
          productVariantId
          productAsset {
            preview
          }
        }
    }
  }
`

export { GET_COLLECTIONS, SEARCH };
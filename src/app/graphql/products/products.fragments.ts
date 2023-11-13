import { gql } from "apollo-angular";

const PRODUCT_LIST_RESULT_FRAGMENT = gql`
fragment ProductListResult on ProductList {
    items {
        id
        name
       variants {
        name
        price
        currencyCode
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
        sku
        price
        priceWithTax
        currencyCode
        assets {
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

const ADD_ITEM_TO_ORDER_RESULT_FRAGMENT = gql`
fragment AddItemToOrderResult on UpdateOrderItemsResult {
    ... on Order {
        id
        type
        active
        total
        totalWithTax
        totalQuantity
        subTotal
        subTotalWithTax
        shipping
        shippingWithTax
    
        billingAddress {
            fullName
            country
            phoneNumber
        }
        taxSummary {
            description
            taxRate
            taxBase
            taxTotal
        }
    }
    ... on OrderModificationError {
      message
      errorCode
    }
    ... on OrderLimitError {
      message
      errorCode
    }
    ... on NegativeQuantityError {
      message
      errorCode
    }
    ... on InsufficientStockError {
      message
      errorCode
      quantityAvailable
    }
  }
`

const ACTIVE_ORDER_FRAGMENT = gql`
fragment ActiveOrder on Order {
    id
    type
    active
    total
    totalWithTax
    totalQuantity
    subTotal
    subTotalWithTax
    shipping
    shippingWithTax
    lines {
        id
    }
    shippingAddress {
        fullName
        country
        phoneNumber
    }
}
`

export { 
    PRODUCT_LIST_RESULT_FRAGMENT,
    PRODUCT_FRAGMENT,
    ADD_ITEM_TO_ORDER_RESULT_FRAGMENT,
    ACTIVE_ORDER_FRAGMENT,
};
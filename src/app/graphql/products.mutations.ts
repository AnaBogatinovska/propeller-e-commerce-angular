import { gql } from "apollo-angular";
import { ADD_ITEM_TO_ORDER_RESULT_FRAGMENT } from "./products.fragments";


const ADD_ITEM_TO_ORDER = gql`
    mutation addItemToOrder($productVariantId: ID!, $quantity: Int!) {
        addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
        ...addItemToOrderResult
        }
    }
    ${ADD_ITEM_TO_ORDER_RESULT_FRAGMENT}
`

export { ADD_ITEM_TO_ORDER };
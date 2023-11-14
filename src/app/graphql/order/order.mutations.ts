import { gql } from "apollo-angular";
import { ADD_ITEM_TO_ORDER_RESULT_FRAGMENT } from "../products/products.fragments";


const ADJUST_ORDER_LINE = gql`
    mutation adjustOrderLine($orderLineId: ID!, $quantity: Int!) {
        adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
        ...AddItemToOrderResult
        }
    }
    ${ADD_ITEM_TO_ORDER_RESULT_FRAGMENT}
`
 
const REMOVE_ORDER_LINE = gql`
    mutation adjustOrderLine($orderLineId: ID!) {
        removeOrderLine(orderLineId: $orderLineId) {
        ...AddItemToOrderResult
        }
    }
    ${ADD_ITEM_TO_ORDER_RESULT_FRAGMENT}
`

export { ADJUST_ORDER_LINE, REMOVE_ORDER_LINE };
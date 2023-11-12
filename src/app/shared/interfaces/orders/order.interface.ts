import { OrderType } from "app/shared/types/app.types"
import { OrderAddress } from "./order-address.interface"

export interface Order {
    id: string
    createdAt: Date
    updatedAt: Date
    type: OrderType
    orderPlacedAt: Date
    code: string
    state: string
    active: boolean
    customer: {}
    shippingAddress: OrderAddress
    billingAddress: OrderAddress
    lines: []
    surcharges: []
    discounts: []
    couponCodes: []
    promotions: []
    payments: []
    fulfillments: []
    totalQuantity: number;
    subTotal: string
    subTotalWithTax: string
    currencyCode: string;
    shippingLines: [],
    shipping: string
    shippingWithTax: string
    total: string
    totalWithTax: string
    taxSummary: []
    customFields: JSON
}
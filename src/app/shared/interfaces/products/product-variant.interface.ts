import { Asset } from "../assets/asset.interface"
import { Product } from "./product.interface"

export interface ProductVariant {
    id: string
    product: Product;
    productId: string
    createdAt: Date
    updatedAt: Date
    languageCode: string
    sku: string
    name: string
    featuredAsset: Asset
    assets: Asset[]
    price: string
    // currencyCode: CurrencyCode!
    // priceWithTax: Money!
    // stockLevel: String!
    // taxRateApplied: TaxRate!
    // taxCategory: TaxCategory!
    // options: [ProductOption!]!
    // facetValues: [FacetValue!]!
    // translations: [ProductVariantTranslation!]!
    // customFields: JSON
}
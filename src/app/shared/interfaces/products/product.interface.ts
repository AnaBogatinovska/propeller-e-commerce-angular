import { Asset } from "../assets/asset.interface"
import { ProductVariant } from "./product-variant.interface"

export interface Product {
    id: string
    createdAt: Date
    updatedAt: Date
    languageCode: string
    name: string
    slug: string
    description: string
    featuredAsset: Asset
    assets: Asset[]
    variants: ProductVariant[]
    // optionGroups: [ProductOptionGroup!]!
    // facetValues: [FacetValue!]!
    // translations: [ProductTranslation!]!
    // collections: [Collection!]!
    // customFields: JSON
}
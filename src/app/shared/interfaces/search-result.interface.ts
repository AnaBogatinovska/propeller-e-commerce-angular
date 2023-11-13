import { Asset } from "./assets/asset.interface"

export interface SearchResult {
    sku: string
    slug: string
    productId: string
    productName: string
    productAsset: Asset
    productVariantId: string
    productVariantName: string
    productVariantAsset: Asset
    price: {
        value: number
    }
    priceWithTax: {
        value: number
    }
    currencyCode: string
    description: string
    facetIds: string
    facetValueIds: string
    collectionIds: string
    score: number
}
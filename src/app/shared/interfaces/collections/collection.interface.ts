import { Asset } from "../assets/asset.interface"

export interface Collection {
    id: string
    createdAt: Date
    updatedAt: Date
    languageCode: string
    name: string
    slug: string
    position: number
    description: string
    featuredAsset: Asset
    assets: Asset[]
    parent: Collection
    parentId: string
    children: Collection[]
}
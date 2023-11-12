import { AssetType } from "app/shared/types/app.types"
import { Tag } from "../tag.interface"
import { Coordinate } from "../coordinate.interface"

export interface Asset {
id: string
createdAt: Date
updatedAt: Date
name: string
type: AssetType
fileSize: number
mimeType: string
width: number
height: number
source: string
preview: string
focalPoint: Coordinate
tags: Tag[]
customFields: JSON

}
import { SchemaDefinitionProperty } from "mongoose"

export type SchemaOf<T> = {
    [K in keyof T]: SchemaDefinitionProperty<T[K]>
}
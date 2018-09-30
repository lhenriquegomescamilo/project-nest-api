import {Document} from "mongoose";

export interface ProductModel extends Document {
    readonly tag: string;
    readonly title: string;
    readonly price: number;
}
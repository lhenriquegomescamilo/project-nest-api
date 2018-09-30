import * as mongoose from "mongoose";
import {Connection} from "mongoose";

export const ProductSchema = new mongoose.Schema({
    tag: String,
    title: String,
    price: Number,
});

export const productsProvider = [{
    provide: 'Product',
    useFactory: (connection: Connection) => connection.model('Product', ProductSchema),
    inject: ['DbConnection']
}];


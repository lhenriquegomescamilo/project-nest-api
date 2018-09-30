import {Injectable, Inject} from '@nestjs/common';
import {ProductModel} from "../models/ProductModel";
import {Model} from "mongoose";

@Injectable()
export class ProductsService {
    constructor(
        @Inject('Product')
        private readonly productModel: Model<ProductModel>
    ) {
    }

    async create(product: ProductModel): Promise<ProductModel> {
        const create = new this.productModel(product);
        return await create.save();
    }

    async findAll(): Promise<ProductModel[]> {
        return await this.productModel.find().exec();
    }
}

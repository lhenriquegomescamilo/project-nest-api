import {Body, Controller, Get, Post} from '@nestjs/common';
import {ProductModel} from "../models/ProductModel";
import {ProductsService} from "../services/products.service";

@Controller('v1/products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {
    }

    @Post()
    async create(@Body() productModel: ProductModel) {
        return this.productService.create(productModel);
    }

    @Get()
    async get(): Promise<ProductModel[]> {
        return this.productService.findAll();
    }
}

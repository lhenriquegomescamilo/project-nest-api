import {Module} from '@nestjs/common';
import {ProductsController} from './controllers/products.controller';
import {ProductsService} from './services/products.service';
import {productsProvider} from "./schemas/product.schema";
import {DatabaseModule} from "../database/database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [ProductsController],
    providers: [
        ProductsService,
        ...productsProvider
    ]
})
export class ProductsModule {
}

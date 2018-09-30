import {Module} from '@nestjs/common';
import {ProductsModule} from './products/products.module';
import {databaseProviders} from "./database/app.databaseprovider";

@Module({
    imports: [
        ProductsModule
    ]
})
export class AppModule {
}

import {Module} from "@nestjs/common";
import {databaseProviders} from "./app.databaseprovider";

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders]
})
export class DatabaseModule {

}
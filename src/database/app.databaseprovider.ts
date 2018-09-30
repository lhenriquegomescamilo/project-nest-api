import * as mongoose from "mongoose";

export const databaseProviders = [
    {
        provide: 'DbConnection',
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect('mongodb://lcamilo:lhgc12345678@ds119523.mlab.com:19523/project-nest-api'),
    },
];
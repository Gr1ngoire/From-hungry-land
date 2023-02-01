import {config} from 'dotenv';
import {DbClient} from "@/common/types/types";

config();

const {
    PORT,
    DATABASE_TYPE,
    DATABASE_PORT,
    DATABASE_HOST,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DATABASE_NAME,
} = process.env;

const ENV = {
    APP: {
        SERVER_PORT: Number(PORT),
    },
    DB: {
        TYPE: DATABASE_TYPE as DbClient,
        PORT: Number(DATABASE_PORT),
        HOST: DATABASE_HOST,
        USERNAME: DATABASE_USERNAME,
        PASSWORD: DATABASE_PASSWORD,
        NAME: DATABASE_NAME,
    }
}

export { ENV };
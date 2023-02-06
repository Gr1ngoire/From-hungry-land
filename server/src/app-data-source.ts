import { DataSource } from "typeorm"
import {config} from 'dotenv';

config();

const DB_CLIENT = 'postgres';

const {
    DATABASE_PORT,
    DATABASE_HOST,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DATABASE_NAME,
} = process.env;

console.log(DATABASE_PASSWORD)

const dataSource = new DataSource({
    type: DB_CLIENT,
    host: DATABASE_HOST,
    port: Number(DATABASE_PORT),
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    entities: ["./src/db/entities/*.ts"],
    migrations: ["./src/db/migrations/*.ts"],
    logging: true,
})

dataSource.initialize()
    .then(() => {
        console.log('Connected to db')
    })
    .catch((err) => {
    console.log(err);
})

export { dataSource }
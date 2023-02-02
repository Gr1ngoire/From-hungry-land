import { DataSource } from "typeorm"
import {ENV} from "./common/enums/enums";

const dataSource = new DataSource({
    type: ENV.DB.TYPE,
    host: ENV.DB.HOST,
    port: ENV.DB.PORT,
    username: ENV.DB.USERNAME,
    password: ENV.DB.PASSWORD,
    database: ENV.DB.NAME,
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
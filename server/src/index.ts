import express from 'express'
import bodyParser from 'body-parser';
import {dataSource} from './app-data-source'
import {ENV} from "@/common/enums/enums";

dataSource.initialize()
    .then(() => {
        console.log('Connected to db')
    })
    .catch((err) => {
    console.log(err);
})

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.listen(ENV.APP.SERVER_PORT);
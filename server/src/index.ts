import express from 'express'
import bodyParser from 'body-parser';
import {dataSource} from './app-data-source'
import {ApiRoutes, ENV} from "@/common/enums/enums";
import {apiRouter} from "@/routes/routes";

dataSource.initialize()
    .then(() => {
        console.log('Connected to db')
    })
    .catch((err) => {
    console.log(err);
})

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(ApiRoutes.API, apiRouter)
app.get("/test", (req, res) => {
    res.send('AAAAAAAAAAA')
})

app.listen(ENV.APP.SERVER_PORT, () => {
    console.log(`Listening port ${ENV.APP.SERVER_PORT}`)
});
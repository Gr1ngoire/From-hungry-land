import express from 'express'
import bodyParser from 'body-parser';
import {ApiRoutes, ENV} from "@/common/enums/enums";
import {apiRouter} from "@/routes/routes";


const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(ApiRoutes.API, apiRouter)

app.listen(ENV.APP.SERVER_PORT, () => {
    console.log(`Listening port ${ENV.APP.SERVER_PORT}`)
});

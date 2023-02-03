import express from 'express'
import {ApiRoutes, ENV} from "@/common/enums/enums";
import {apiRouter} from "@/routes/routes";


const app = express();

app.use(express.json())
app.use(ApiRoutes.API, apiRouter)

app.listen(ENV.APP.SERVER_PORT, () => {
    console.log(`Listening port ${ENV.APP.SERVER_PORT}`)
});

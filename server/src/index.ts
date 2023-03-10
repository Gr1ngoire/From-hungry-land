import express from 'express'
import {ApiRoutes, ENV} from "@/common/enums/enums";
import {apiRouter} from "@/routes/routes";
import {pageNotFoundValidationMiddleware} from "@/middlewares/middlewares";
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json())
app.use(ApiRoutes.API, apiRouter)
app.use(pageNotFoundValidationMiddleware)


app.listen(ENV.APP.SERVER_PORT, () => {
    console.log(`Listening port ${ENV.APP.SERVER_PORT}`)
});


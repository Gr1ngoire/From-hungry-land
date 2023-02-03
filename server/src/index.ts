import express from 'express'
import {ApiRoutes, ENV} from "@/common/enums/enums";
import {apiRouter} from "@/routes/routes";
import {recipeRouter} from "@/routes/recipe/recipe.routes";



const app = express();

app.use(express.json())
app.use(ApiRoutes.API, apiRouter)
app.use("/recipes", recipeRouter)

app.listen(ENV.APP.SERVER_PORT, () => {
    console.log(`Listening port ${ENV.APP.SERVER_PORT}`)
});


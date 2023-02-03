import express from 'express'
import bodyParser from 'body-parser';
import {dataSource} from './app-data-source'
import {ENV} from "@/common/enums/enums";
import {recipeRouter} from "@/routes/recipe/recipe.routes";

// import {apiRouter} from "@/routers/routers";



const app = express();

app.use(bodyParser.urlencoded({extended: true}))

// app.use("/api", apiRouter);
app.use("/recipes", recipeRouter)

app.listen(ENV.APP.SERVER_PORT);


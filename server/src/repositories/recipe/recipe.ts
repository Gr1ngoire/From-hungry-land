import { dataSource } from "@/app-data-source";
import { Recipe} from "@/db/entities/recipe.entity";


export const recipeRepo = dataSource.getRepository(Recipe)
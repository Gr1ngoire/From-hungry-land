import {productRepository, productTagRepository, userRepository, recipeRepository} from "@/repositories/repositories";

import { ProductService } from "./product/product.service";
import { ProductTagService } from "./productTag/productTag.service";
import { RecipeService } from "./recipe/recipe.service";
import {UserService} from "@/services/user/user.service";
import {JwtService} from "@/services/jwt/jwt.service";
import {BcryptService} from "@/services/bcrypt/bcrypt.service";
import {AuthService} from "@/services/auth/auth.service";



const bcryptService = new BcryptService();
const jwtService = new JwtService();
const recipeService = new RecipeService(recipeRepository);
const productService = new ProductService(productRepository);
const productTagService = new ProductTagService(productTagRepository);
const userService = new UserService(userRepository);
const authService = new AuthService(userService, jwtService, bcryptService);

export {
    BcryptService,
    JwtService,
    ProductService,
    ProductTagService,
    RecipeService,
    UserService,
    authService,
    bcryptService,
    jwtService,
    productService,
    productTagService,
    recipeService,
    userService,
}
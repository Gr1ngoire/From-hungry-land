import {ProductService} from "./product/product.service";
import {ProductTagService} from "./productTag/productTag.service";
import {UserService} from "@/services/user/user.service";

import {productRepository, productTagRepository, userRepository} from "@/repositories/repositories";
import {JwtService} from "@/services/jwt/jwt.service";
import {BcryptService} from "@/services/bcrypt/bcrypt.service";
import {AuthService} from "@/services/auth/auth.service";

const bcryptService = new BcryptService();
const jwtService = new JwtService();
const productService = new ProductService(productRepository);
const productTagService = new ProductTagService(productTagRepository);
const userService = new UserService(userRepository);
const authService = new AuthService(userService, jwtService, bcryptService);

export {
    BcryptService,
    JwtService,
    ProductService,
    ProductTagService,
    UserService,
    authService,
    bcryptService,
    jwtService,
    productService,
    productTagService,
    userService,
}
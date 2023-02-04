
import { ProductController } from "./product/product.controller";
import { ProductTagController } from "./productTag/productTag.controller";
import { AuthController } from './auth/auth.controller'

import {authService, productService, productTagService} from '@/services/services'

export const productController = new ProductController(productService);
export const productTagController = new ProductTagController(productTagService);
export const authController = new AuthController(authService);

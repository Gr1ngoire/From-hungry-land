import { ProductController } from "./product/product.controller";
import { ProductTagController } from "./productTag/productTag.controller";

import { productService } from "../services/services";
import { productTagService } from "../services/services";

export const productController = new ProductController(productService);
export const productTagController = new ProductTagController(productTagService);

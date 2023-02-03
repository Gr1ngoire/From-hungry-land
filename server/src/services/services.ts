import { ProductService } from "./product/product.service";
import { ProductTagService } from "./productTag/productTag.service";

import { productRepository } from "@/repositories/repositories";
import { productTagRepository } from "@/repositories/repositories";

export {
    ProductService,
    ProductTagService,
}

export const productService = new ProductService(productRepository);
export const productTagService = new ProductTagService(productTagRepository);

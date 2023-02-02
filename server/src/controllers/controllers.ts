
import { ProductController } from "./product/product.controller";
import { ProductTagController } from "./productTag/productTag.controller";

import { ProductService } from "../services/services";
import { ProductTagService } from "../services/services";

import { ProductRepository } from "../repositories/repositories";
import { ProductTagRepository } from "../repositories/repositories";

import { Product } from "@/db/entities/product.entity";
import { ProductTag } from "@/db/entities/productTag.entity";

import { dataSource } from "@/app-data-source";



const productController = new ProductController(
  new ProductService(new ProductRepository(dataSource.getRepository(Product)))
);
export { productController };

const productTagController = new ProductTagController(
  new ProductTagService(new ProductTagRepository(dataSource.getRepository(ProductTag)))
);
export { productTagController };

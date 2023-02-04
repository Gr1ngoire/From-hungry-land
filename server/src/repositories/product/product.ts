import { dataSource } from "@/app-data-source";
import { Product } from "@/db/entities/product.entity";



export const productRepo = dataSource.getRepository(Product)

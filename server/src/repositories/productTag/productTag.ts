import { dataSource } from "@/app-data-source";
import { ProductTag } from "@/db/entities/productTag.entity";



export const productTagRepo = dataSource.getRepository(ProductTag)

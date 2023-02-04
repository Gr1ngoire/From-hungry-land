import { Request, Response, NextFunction} from "express";
import {Product} from "@/db/entities/product.entity";
import {ProductService} from "@/services/services";

export class ProductController {
  private readonly productService:ProductService

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  public getAll = async (req: Request, res: Response, next:NextFunction) => {
    try{
      res.json(await this.productService.getAll())
    }catch (e){
      next(e)
    }
  }

  public getByProductTagId =  async (req: Request<{id}>, res: Response<Product[]>, next:NextFunction) => {
    try {
      const products = await this.productService.getByProductTagId(
          parseInt(req.params.id)
      );
      res.json(products);
    }catch (e){
      next(e)
    }

  }
}

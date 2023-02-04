import { productService } from "@/services/services";
import { Request, Response, NextFunction} from "express";
import {Product} from "@/db/entities/product.entity";

export class ProductController {

  public getAll = async (req: Request, res: Response, next:NextFunction) => {
    try{
      res.json(await productService.getAll())
    }catch (e){
      next(e)
    }
  }

  public async getByProductTagId(req: Request<{id}>, res: Response<Product[]>, next:NextFunction) {
    try {
      const products = await productService.getByProductTagId(
          parseInt(req.params.id)
      );
      res.json(products);
    }catch (e){
      next(e)
    }

  }
}

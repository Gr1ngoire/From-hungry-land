import { productTagService } from "@/services/services";
import { Request, Response } from "express-serve-static-core";
import {NextFunction} from "express";
import {ProductTag} from "@/db/entities/productTag.entity";

export class ProductTagController {

  public getAll = async (req: Request, res: Response<ProductTag[]>, next: NextFunction) => {
    try{
      res.json(await productTagService.getAll());
    }catch (e){
      next()
    }
  }
}

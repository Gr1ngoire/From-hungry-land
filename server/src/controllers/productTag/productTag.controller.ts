import { Request, Response } from "express-serve-static-core";
import {NextFunction} from "express";
import {ProductTag} from "@/db/entities/productTag.entity";
import {ProductTagService} from "@/services/services";

export class ProductTagController {
  private readonly productTagService: ProductTagService

  constructor(productTagService: ProductTagService) {
    this.productTagService = productTagService;
  }

  public getAll = async (req: Request, res: Response<ProductTag[]>, next: NextFunction) => {
    try{
      res.json(await this.productTagService.getAll());
    }catch (e){
      next()
    }
  }
}

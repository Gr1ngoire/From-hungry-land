import { Request, Response, NextFunction} from "express";
import {Product} from "@/db/entities/product.entity";
import {ProductService, authService} from "@/services/services";
import {ProductQueryOptionType} from "shared/common/types/types";

export class ProductController {
  private readonly productService:ProductService

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  public getAll = async (req: Request, res: Response, next:NextFunction) => {
    const {take, skip, name, filters, all} = req.query
    if(all){
      try {
      res.json(await this.productService.getAll({
        take: 10,
        skip: 0,
        name: name as string,
      }))
      return
    } catch (e) {
      next(e)
    }
  }

    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1]
    const {id} = await authService.getCurrentUser(token)
    try{
      res.json(await this.productService.getAll(
          {
            take: parseInt(take as string),
            skip: parseInt(skip as string),
            name: name as string,
            filters: filters as string,
            userId: id
          } as ProductQueryOptionType
      ))
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

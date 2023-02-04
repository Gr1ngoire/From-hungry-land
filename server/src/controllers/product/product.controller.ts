import { productService } from "@/services/services";
import { Request, Response } from "express-serve-static-core";

export class ProductController {

  public getAll = async (req: Request, res: Response) => {
    const products = await productService.getAll();
    res.json(products);
  }

  public async getByProductTagId(req: Request, res: Response) {
    const products = await productService.getByProductTagId(
      parseInt(req.params.id)
    );
    res.json(products);
  }
}

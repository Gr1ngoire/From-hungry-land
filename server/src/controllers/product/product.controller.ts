import { ProductService } from "../../services/services";
import { Request, Response } from "express-serve-static-core";

export class ProductController {
  constructor(private productService: ProductService) {
    this.productService = productService;
  }

  public getAll = async (req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.json(products);
  }

  public async getByProductTagId(req: Request, res: Response) {
    const products = await this.productService.getByProductTagId(
      parseInt(req.params.id)
    );
    res.json(products);
  }
}

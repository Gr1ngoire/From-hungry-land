
import { ProductTagService } from "../../services/services";
import { Request, Response } from "express-serve-static-core";

export class ProductTagController {
  constructor(private productTagService: ProductTagService) {
    this.productTagService = productTagService;
  }

  public getAll = async (req: Request, res: Response) => {
    const productTags = await this.productTagService.getAll();
    res.json(productTags);
  }
}

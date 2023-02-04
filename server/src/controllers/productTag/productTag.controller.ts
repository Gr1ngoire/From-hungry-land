import { productTagService } from "@/services/services";
import { Request, Response } from "express-serve-static-core";

export class ProductTagController {

  public getAll = async (req: Request, res: Response) => {
    const productTags = await productTagService.getAll();
    res.json(productTags);
  }
}

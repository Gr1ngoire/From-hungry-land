import {} from "typeorm";
import {IsFQDN, IsInt, IsNotEmpty, Min} from "class-validator";

export class ProductDto{

    @IsInt()
    @Min(0)
    id:number;

    @IsInt()
    @Min(0)
    tag_id:number;

    @IsFQDN()
    @IsNotEmpty()
    imgUrl:string
}
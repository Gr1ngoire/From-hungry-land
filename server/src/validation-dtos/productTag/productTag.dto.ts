import {IsInt, IsNotEmpty, IsString} from "class-validator";

export class ProductTagDto{
    @IsInt()
    id:number

    @IsString()
    @IsNotEmpty()
    name:string

}
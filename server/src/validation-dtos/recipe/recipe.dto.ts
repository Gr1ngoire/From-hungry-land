import {IsEnum, IsFQDN, IsInt, IsNotEmpty, IsString, Min} from "class-validator";
import {RecipeDifficulty} from "@/common/enums/enums";
export class RecipeDto{
    @IsInt()
    @Min(0)
    id:number;

    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    instruction:string;

    @IsFQDN()
    @IsNotEmpty()
    imgUrl:string;

    @IsEnum(RecipeDifficulty)
    difficult: RecipeDifficulty;

}


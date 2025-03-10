import { IsNotEmpty, IsString } from "class-validator";

export class CreateCtramLinkDto {
    @IsString()
    @IsNotEmpty()
    link: string;
    
    @IsString()
    @IsNotEmpty()
    nombre_formato: string;
}

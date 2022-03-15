import { IsString, IsNotEmpty } from 'class-validator';

export class LoginDTO {
    @IsString()
    @IsNotEmpty()
    nombre_usuario: string;
    @IsString()
    @IsNotEmpty()
    password: string;
}
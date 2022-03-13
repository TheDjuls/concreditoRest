import { IsInt, IsString, IsNotEmpty, Length, IsOptional } from 'class-validator';

export class ProspectosDTO {
    @IsInt()
    @IsOptional()
    id: number;
    @IsString()
    @Length(1, 191)
    @IsNotEmpty()
    nombre: string;
    @IsString()
    @Length(1, 191)
    @IsNotEmpty()
    ap_paterno: string;
    @IsString()
    @Length(1, 191)
    @IsOptional()
    ap_materno: string;
    @IsString()
    @Length(0, 191)
    @IsNotEmpty()
    calle: string;
    @IsString()
    @Length(1, 191)
    @IsNotEmpty()
    numero: string;
    @IsString()
    @Length(3, 191)
    @IsNotEmpty()
    colonia: string;
    @IsString()
    @Length(1, 10)
    @IsNotEmpty()
    codigo_postal: string;
    @IsString()
    @Length(6, 10)
    @IsNotEmpty()
    telefono: string;
    @IsString()
    @Length(13)
    @IsNotEmpty()
    rfc: string;
}

export class ArchivoDTO {
    @IsString()
    @IsNotEmpty()
    nombre_documento: string;
    @IsString()
    @IsNotEmpty()
    url: string;
    @IsInt()
    @IsNotEmpty()
    prospectoId: number
}

export class EvaluarProspectoDTO {
    @IsNotEmpty()
    @IsInt()
    estatusProspectoId : number;
    @IsString()
    @IsOptional()
    observaciones:string;
    @IsNotEmpty()
    @IsInt()
    id:number;
}
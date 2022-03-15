export interface Prospectos {
    id: number;
    nombre: string;
    ap_paterno: string;
    ap_materno?: string;
    calle: string;
    numero: string;
    colonia: string;
    codigo_postal: string;
    telefono: string;
    rfc: string;
    usuarioCapturoId: number
}

export interface Archivos {
    nombre_documento: string;
    url: string;
    prospectoId: number
}

export interface EvaluarProspecto {
    estatusProspectoId : number;
    observaciones:string;
    id:number;
}

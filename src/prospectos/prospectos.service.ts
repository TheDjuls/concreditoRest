import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
    Prospecto
} from '@prisma/client';
import { Prospectos, Archivos, EvaluarProspecto } from 'src/interfaces/prospectos.interface';

@Injectable()
export class ProspectosService {

    constructor(private prisma: PrismaService) { }

    async getAllProspectos(): Promise<Prospecto[] | null> {
        let prospectos = await this.prisma.prospecto.findMany({
            include: {
                documentos: true,
            }
        });
        return prospectos;
    }

    async getProspecto(idProspecto: number): Promise<Prospecto | null> {
        let prospectos = await this.prisma.prospecto.findUnique({
            include: {
                documentos: true,
            },
            where: {
                id: Number(idProspecto)
            }
        });
        return prospectos;
    }

    async createProspecto(prospecto: Prospectos): Promise<Prospecto | null> {
        let prospectos = await this.prisma.prospecto.create({
            data: {
                nombre: prospecto.nombre,
                ap_paterno: prospecto.ap_paterno,
                ap_materno: prospecto.ap_materno,
                calle: prospecto.calle,
                numero: prospecto.numero,
                colonia: prospecto.colonia,
                codigo_postal: prospecto.codigo_postal,
                telefono: prospecto.telefono,
                rfc: prospecto.rfc,
                estatusProspectoId: 0
            }
        })
        return prospectos
    }

    async evaluarProspecto(evaluarProspecto: EvaluarProspecto): Promise<Prospecto | null> {
        let prospectos = await this.prisma.prospecto.update({
            data: {
                estatusProspectoId: evaluarProspecto.estatusProspectoId,
                observaciones: evaluarProspecto.observaciones
            },
            where:{
                id:evaluarProspecto.id
            }
        })
        return prospectos
    }

    async createArchivo(archivos: Archivos): Promise<Archivos | null> {
        let archivo = await this.prisma.documentos.create({
            data: {
                nombre_documento: archivos.nombre_documento,
                url: archivos.url,
                prospectoId: archivos.prospectoId
            }
        })
        return archivo
    }
}

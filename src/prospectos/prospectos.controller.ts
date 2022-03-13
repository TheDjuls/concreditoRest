import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProspectosService } from './prospectos.service';
import { ProspectosDTO,ArchivoDTO, EvaluarProspectoDTO } from 'src/dto/prospectos.dto';

@Controller('prospectos')
export class ProspectosController {

    constructor(private prospectoService: ProspectosService) { }

    @Get()
    async findAll(): Promise<any[]> {
        let prospectos = await this.prospectoService.getAllProspectos()
        return prospectos;
    }

    @Get(":id")
    async findOne(@Param() params): Promise<any> {
        let prospectos = await this.prospectoService.getProspecto(params.id)
        return prospectos;
    }

    @Post()
    async create(@Body() prospectosDTO: ProspectosDTO): Promise<any> {
        let prospectos = await this.prospectoService.createProspecto(prospectosDTO)
        return prospectos;
    }

    @Put()
    async updateEstatus(@Body() evaluarProspectoDTO: EvaluarProspectoDTO): Promise<any> {
        let prospectos = await this.prospectoService.evaluarProspecto(evaluarProspectoDTO)
        return prospectos;
    }

    @Post("archivo")
    async createArchivo(@Body() archivoDTO: ArchivoDTO): Promise<any> {
        let archivo = await this.prospectoService.createArchivo(archivoDTO)
        return archivo;
    }
}

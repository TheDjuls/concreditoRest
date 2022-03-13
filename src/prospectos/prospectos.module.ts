import { Module } from '@nestjs/common';
import { ProspectosController } from './prospectos.controller';
import { ProspectosService } from './prospectos.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ProspectosController],
  providers: [ProspectosService,PrismaService]
})
export class ProspectosModule {}

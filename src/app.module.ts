import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProspectosModule } from './prospectos/prospectos.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [ProspectosModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}

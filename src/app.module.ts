import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProspectosModule } from './prospectos/prospectos.module';

@Module({
  imports: [ProspectosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

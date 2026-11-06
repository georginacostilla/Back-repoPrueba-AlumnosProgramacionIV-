import { Module } from '@nestjs/common';
import { TesisService } from './tesis.service.js';
import { TesisController } from './tesis.controller.js';

@Module({
  controllers: [TesisController],
  providers: [TesisService],
})
export class TesisModule {}

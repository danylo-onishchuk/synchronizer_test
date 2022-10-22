import { Module } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { HttpModule } from '@nestjs/axios';
import { FetchTaskService } from 'src/commonServices/fetchTask/fetchTask.servise';
import { CurrencyController } from './currency.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Currency } from './models/currency.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Currency]),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [CurrencyService],
  controllers: [CurrencyController],
})
export class CurrencyModule {}

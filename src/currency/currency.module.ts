import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyService } from './currency.service';
import { Currency } from './models/currency.entity';
import { HttpModule } from '@nestjs/axios';
import { FetchTaskService } from 'src/fetchTask/fetchTask.servise';

@Module({
  imports: [
    TypeOrmModule.forFeature([Currency]),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  providers: [CurrencyService, FetchTaskService],
})
export class CurrencyModule {}

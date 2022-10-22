import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';
import { CurrencyService } from 'src/modules/currency/currency.service';

const oneMinuteInterval = 60000;

@Injectable()
export class FetchTaskService {
  constructor(
    private readonly httpService: HttpService,
    private readonly currencyService: CurrencyService,
  ) {}  

  @Interval(oneMinuteInterval)
  async handleInterval() {
    const { data } = await this.httpService.axiosRef.get(
      `${process.env.PRICE_INFO_API}${process.env.CURRENCY_NAME}`, 
    );

    const currency = {
      title: process.env.CURRENCY_NAME,
      price: Number(data.price),
    };

    await this.currencyService.create(currency);
  }
}

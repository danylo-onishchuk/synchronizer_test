import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class FetchTaskService {
  constructor(private readonly httpService: HttpService) {}

  @Interval(1000)
  async handleInterval() {
    const { data } = await this.httpService.axiosRef.get(
      `${process.env.PRICE_INFO_API}${process.env.CURRENCY_NAME}`, 
    );

    const currency = {
      title: 'BTCUSDT',
      price: Number(data.price),
    };

    console.log(currency);
  }
}

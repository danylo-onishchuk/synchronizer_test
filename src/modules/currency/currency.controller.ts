import { Controller, Get } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { Currency } from './models/currency.entity';

@Controller('currency')
export class CurrencyController {
  constructor(
    private readonly currencyService: CurrencyService,
  ) {}

  @Get()
  async findAll(): Promise<Currency[]> {
    return this.currencyService.findAll();
  }
}

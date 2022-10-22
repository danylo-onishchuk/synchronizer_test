import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { Currency } from './models/currency.entity';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectRepository(Currency)
    private currencyRepository: Repository<Currency>,
  ) {}

  async findAll(): Promise<Currency[]> {
    return this.currencyRepository.find();
  }

  async findOne(id: number): Promise<Currency> {
    return this.currencyRepository.findOneBy({ id });
  }

  async create(currency: CreateCurrencyDto): Promise<Currency> {
    return this.currencyRepository.save(currency);
  }
}

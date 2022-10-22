import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { CurrencyModule } from './modules/currency/currency.module';
import { Currency } from './modules/currency/models/currency.entity';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';
import { Token } from './modules/currency/models/token.entity';
import { AuthService } from './commonServices/auth/auth.servise';

@Module({
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Currency, Token],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Token]),
    ScheduleModule.forRoot(),
    CurrencyModule,
  ],
})
export class AppModule {}

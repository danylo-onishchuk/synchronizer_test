import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'lucky.db.elephantsql.com',
      port: 5432,
      username: 'rcugtgzb',
      password: '5YYmcMBtB9MeO9vrfluznWgSlRk_k5DQ',
      database: 'rcugtgzb',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}

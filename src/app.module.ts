import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MutantModule } from './mutant/mutant.module';
import { StatsModule } from './stats/stats.module';

const db_options = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'hackathon',
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true,
    }),
    MutantModule,
    StatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

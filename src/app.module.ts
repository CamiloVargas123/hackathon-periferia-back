import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MutantModule } from './mutant/mutant.module';
import { StatsModule } from './stats/stats.module';

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

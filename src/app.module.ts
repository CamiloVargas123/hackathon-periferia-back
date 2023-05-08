import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MutantModule } from './mutant/mutant.module';
import { StatsModule } from './stats/stats.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql9.freesqldatabase.com',
      port: 3306,
      username: 'sql9616790',
      password: '5P2yHkrkmc',
      database: 'sql9616790',
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

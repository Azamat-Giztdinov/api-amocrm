import { Module } from '@nestjs/common';
import { LeadsModule } from './leads/leads.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    LeadsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
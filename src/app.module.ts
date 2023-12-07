import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [MenuModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}

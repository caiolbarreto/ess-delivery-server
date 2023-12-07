import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMenuItemController } from './controllers/create-menu-item.controller';
import { MenuService } from './services/menu.service';

@Module({
  controllers: [CreateMenuItemController],
  providers: [MenuService, PrismaService],
  exports: [MenuService],
})
export class MenuModule {}

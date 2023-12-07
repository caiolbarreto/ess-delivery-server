import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { MenuService } from '../services/menu.service';
import { CreateMenuItemSchema } from '../dto/create-menu-item';

@Controller('menu')
export class CreateMenuItemController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() menu: CreateMenuItemSchema) {
    await this.menuService.create({
      title: menu.title,
      description: menu.description,
      price: menu.price,
      quantity: menu.quantity,
      category: menu.category,
    });
  }
}

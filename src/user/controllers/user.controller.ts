import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserDTO } from '../user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  index() {
    return this.userService.index();
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<UserDTO> {
    return await this.userService.show(Number(id));
  }

  @Post()
  async store(@Body() user: UserDTO): Promise<UserDTO> {
    return await this.userService.store(user);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() user: UserDTO,
  ): Promise<UserDTO> {
    return await this.userService.update(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.userService.delete(id);
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/user.controller';
import { UserEntity } from './user.entity';
import { UserService } from './services/user.service';
import UserRepository from './user.repository';
import { UserMapper } from './user.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, UserRepository, UserMapper],
})
export class UserModule {}

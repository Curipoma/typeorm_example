import { Injectable } from '@nestjs/common';
import { UserDTO } from '../user.dto';
import { UserEntity } from '../user.entity';
import { UserMapper } from '../user.mapper';
import UserRepository from '../user.repository';

@Injectable()
export class UserService {
  constructor(private repos: UserRepository, private mapper: UserMapper) {}

  async index(): Promise<UserEntity[]> {
    return await this.repos.index();
  }

  async show(id: number): Promise<UserEntity> {
    return await this.repos.show(id);
  }

  async store(userDTO: UserDTO): Promise<UserDTO> {
    const user: UserEntity = await this.repos.store(userDTO);
    return this.mapper.entityToDto(user);
  }

  async update(id: string, userDTO: UserDTO): Promise<UserDTO> {
    const user: UserDTO = await this.repos.update(id, userDTO);
    return this.mapper.entityToDto(user);
  }

  async delete(id: string): Promise<void> {
    await this.repos.delete(id);
  }
}

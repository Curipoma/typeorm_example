import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UserDTO } from './user.dto';
import { UserEntity } from './user.entity';
import { UserMapper } from './user.mapper';

@Injectable()
export default class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private mapper: UserMapper,
  ) {}

  index(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  show(id: number): Promise<UserEntity> {
    return this.userRepository.findOneBy({ id: id });
  }

  store(userDTO: UserDTO): Promise<UserEntity> {
    const user = this.mapper.dtoToEntity(userDTO);
    return this.userRepository.save(user);
  }

  update(id: string, userDTO: UserDTO): Promise<UserEntity> {
    userDTO.id = Number(id);
    const user = this.mapper.dtoToEntity(userDTO);
    this.userRepository.update(id, user);
    return this.userRepository.findOneBy({ id: Number(id) });
  }

  delete(id: string): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}

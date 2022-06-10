import { UserDTO } from './user.dto';
import { UserEntity } from './user.entity';

export class UserMapper {
  dtoToEntity(userDTO: UserDTO): UserEntity {
    return new UserEntity(
      userDTO.id,
      userDTO.name,
      userDTO.lastName,
      userDTO.age,
      userDTO.state,
    );
  }
  entityToDto(userEntity: UserEntity): UserDTO {
    return new UserDTO(
      userEntity.id,
      userEntity.name,
      userEntity.lastName,
      userEntity.age,
      userEntity.state,
    );
  }
}

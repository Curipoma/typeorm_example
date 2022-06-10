import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  readonly name?: string;

  @Column()
  readonly lastName?: string;

  @Column()
  readonly age?: Date;

  @Column({
    default: true,
    comment: 'especifica si esta disponible el usuario',
  })
  readonly state?: boolean;

  constructor(
    id: number,
    name: string,
    lastName: string,
    age: Date,
    state: boolean,
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.state = state;
  }
}

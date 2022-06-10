export class UserDTO {
  id?: number;
  readonly name?: string;
  readonly lastName?: string;
  readonly age?: Date;
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

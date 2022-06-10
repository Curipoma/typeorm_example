import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('institutes')
export default class Institutes {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column({ unique: true })
  readonly code?: string;

  @Column({ unique: true })
  readonly codeSniese?: string;

  @Column()
  readonly name?: string;

  @Column()
  readonly shortName?: string;

  @Column()
  readonly longName?: string;

  @Column()
  readonly address?: string;

  @Column()
  readonly acronym?: string;

  @Column()
  readonly denomination?: string;

  @Column()
  readonly email?: string;

  @Column()
  readonly telephone?: string;

  @Column()
  readonly tagline?: string;

  @Column()
  readonly web?: string;

  @Column()
  readonly condition?: string;

  constructor(
    id: string,
    code: string,
    codeSniese: string,
    name: string,
    shortName: string,
    longName: string,
    address: string,
    acronym: string,
    denomination: string,
    email: string,
    telephone: string,
    tagline: string,
    Web: string,
    condition: string,
  ) {
    this.id = id;
    this.code = code;
    this.codeSniese = codeSniese;
    this.name = name;
    this.shortName = shortName;
    this.longName = longName;
    this.address = address;
    this.acronym = acronym;
    this.denomination = denomination;
    this.email = email;
    this.telephone = telephone;
    this.tagline = tagline;
    this.web = Web;
    this.condition = condition;
  }
}

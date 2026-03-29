import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Unit {

@PrimaryGeneratedColumn()
id: number

@Column()
unitCode: string

@Column()
unitType: string

@Column()
status: string

}
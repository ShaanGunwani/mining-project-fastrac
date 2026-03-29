import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

@PrimaryGeneratedColumn()
id: number

@Column()
fullname: string

@Column()
email: string

@Column()
phoneNumber: string

@Column()
role: string

@Column()
status: string

}
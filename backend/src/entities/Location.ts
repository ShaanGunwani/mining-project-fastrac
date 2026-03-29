import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Location {

 @PrimaryGeneratedColumn()
 id: number

 @Column()
 locationName: string

 @Column()
 locationCode: string
}
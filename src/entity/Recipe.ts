import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Recipe{
  @PrimaryGeneratedColumn()
  id:number
  @Column()
  imgUrl:string
  @Column()
  title:string
  @Column("text")
  description:string
}
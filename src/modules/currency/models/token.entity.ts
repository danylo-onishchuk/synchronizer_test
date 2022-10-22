import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Token {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  token: string;

  @Column({ default: new Date() })
  @Field({ defaultValue: new Date() })
  created_at: Date;
}

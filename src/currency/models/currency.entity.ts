import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Currency {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  title: string;

  @Column('numeric')
  @Field()
  price: number;

  @Column({ nullable: true })
  @Field({nullable: true})
  description?: string;

  @Column({ default: new Date() })
  @Field({ defaultValue: new Date() })
  created_at: Date;
}

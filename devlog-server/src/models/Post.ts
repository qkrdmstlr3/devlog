// Dependencies
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { List } from './List';

@Entity('post')
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: '100' })
  title!: string;

  @Column({ type: 'text' })
  content!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  // Many To One
  @ManyToOne(() => List, (list) => list.posts, { onDelete: 'CASCADE' })
  list!: List;
}

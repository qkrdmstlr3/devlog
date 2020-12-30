// Dependencies
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { List } from './List';

@Entity('post')
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: '100' })
  title!: string;

  @Column({ type: 'text' })
  content!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  // Many To One
  @Column({ type: 'int' })
  listId!: number;

  @ManyToOne(() => List, (list) => list.posts, { onDelete: 'CASCADE' })
  list!: List;
}

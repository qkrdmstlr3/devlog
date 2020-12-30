// Dependencies
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

// Models
import { Post } from './Post';

@Entity('list')
export class List extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text' })
  title!: string;

  @Column({ type: 'int', name: 'post_count' })
  postCount!: number;

  // One To Many
  @OneToMany(() => Post, (post) => post.list, { onDelete: 'CASCADE' })
  posts!: Post[];
}

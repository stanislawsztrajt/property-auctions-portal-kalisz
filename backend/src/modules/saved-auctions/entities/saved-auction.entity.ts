import { User } from 'modules/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';

@Entity()
export class SavedAuction {
  @PrimaryGeneratedColumn()
  public id!: number;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;

  @ManyToOne(() => User, (user) => user.savedAuctions)
  public user: User
}


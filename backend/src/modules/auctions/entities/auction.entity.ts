import { SavedAuction } from 'modules/saved-auctions/entities/saved-auction.entity';
import { User } from 'modules/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Tarea, Tcategory, Tlocation } from '../types';

@Entity()
export class Auction {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 200, unique: true })
  public title: string;

  @Column({ type: 'varchar', length: 6000 })
  public description: string;

  @Column({ type: 'int', nullable: true })
  public price: number;

  @Column({ type: 'varchar', length: 16, nullable: true })
  public priceType?: string;

  @Column({ type: 'json' })
  public location: Tlocation;

  @Column({ type: 'varchar', length: 12 })
  public phoneNumber: string;

  @Column({ type: 'varchar', length: 50 })
  public type: Tcategory;

  @Column({ type: 'json' })
  public area: Tarea;

  @Column({ type: 'varchar', length: 300, unique: true })
  public slug: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  public investment?: string;

  @Column({ type: 'smallint', nullable: true })
  public rooms?: number;

  @Column({ type: 'smallint', nullable: true })
  public level?: number;

  @Column({ type: 'int', nullable: true })
  public rent?: number;

  @Column({ type: 'varchar', length: 200, nullable: true })
  public additions?: string;

  @Column({ type: 'boolean', default: false, nullable: true })
  public parkingSpace?: boolean;

  @CreateDateColumn({ type: 'timestamp', readonly: true })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;

  @ManyToOne(() => User, (user) => user.auctions)
  public user: User;

  @OneToMany(() => SavedAuction, (savedAuction) => savedAuction.auction)
  public savedAuctions: SavedAuction[];
}

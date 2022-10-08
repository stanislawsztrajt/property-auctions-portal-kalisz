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
import { Tcategory } from '../types';

@Entity()
export class Auction {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 200, unique: true })
  public title: string;

  @Column({ type: 'varchar', length: 6000, unique: true })
  public description: string;

  @Column({ type: 'varchar', length: 16 })
  public price: string;

  @Column({ type: 'varchar', length: 16, nullable: true })
  public priceType?: string;

  @Column({ type: 'varchar', length: 100 })
  public location: string;

  @Column({ type: 'float' })
  public locationLat: number;

  @Column({ type: 'float' })
  public locationLng: number;

  @Column({ type: 'varchar', length: 12 })
  public phoneNumber: string;

  @Column({ type: 'varchar', length: 50 })
  public type: Tcategory;

  @Column({ type: 'varchar', length: 20 })
  public areaSize: string;

  @Column({ type: 'varchar', length: 300, unique: true })
  public slug: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  public investment?: string;

  @Column({ type: 'varchar', length: 12, nullable: true })
  public rooms?: number;

  @Column({ type: 'smallint', nullable: true })
  public level?: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  public rent?: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  public additions?: string;

  @Column({ type: 'boolean', nullable: true })
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

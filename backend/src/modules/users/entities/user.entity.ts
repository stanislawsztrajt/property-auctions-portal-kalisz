import { Auction } from 'modules/auctions/entities/auction.entity';
import { SavedAuction } from 'modules/saved-auctions/entities/saved-auction.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', length: 120, unique: true })
  public username: string;

  @Column({ type: 'varchar', length: 120, unique: true })
  public email: string;

  @Column({ type: 'varchar', length: 2000 })
  public password: string;

  @Column({ type: 'text', array: true })
  public roles: string[];

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;

  @OneToMany(() => Auction, (auction) => auction.user)
  public auctions: Auction[]

  @OneToMany(() => SavedAuction, (savedAuction) => savedAuction.user)
  public savedAuctions: SavedAuction[]
}
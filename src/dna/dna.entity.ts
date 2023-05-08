import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('dna')
export class DnaEntity {
  @PrimaryColumn()
  id: string;
  @Column({ type: 'boolean', nullable: false })
  isHuman: boolean;
}

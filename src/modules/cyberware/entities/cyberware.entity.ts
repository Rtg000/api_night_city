import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Cyberware')
export class Cyberware {

    @PrimaryColumn()
    id: string;

    @Column()
    nombre: string;

    @Column()
    tipo: string;

}
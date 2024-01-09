import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Choomba')
export class Choomba {

    @PrimaryColumn()
    id: string;

    @Column()
    nombre: string;

    @Column()
    edad: string;

    @Column()
    afiliacion: string;

}
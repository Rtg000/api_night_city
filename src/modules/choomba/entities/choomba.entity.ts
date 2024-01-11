import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Choomba')
export class Choomba {

    @PrimaryColumn()
    id: string;

    @Column()
    nombre: string;

    @Column('int',{
        nullable: true
    })
    edad: number;

    @Column()
    afiliacion: string;

}